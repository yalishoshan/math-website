import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getSession } from "@/lib/session";
import { rateLimit } from "@/lib/rateLimit";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MAX_MSG_LENGTH = 1000;
const MAX_HISTORY = 10; // max conversation turns kept

// Allow topic names matching known topics only — prevents prompt injection
const ALLOWED_TOPICS = new Set([
  "תנועה", "סדרות", "הסתברות", "גאומטריה",
  "טריגונומטריה", "פונקציות טריגונומטריות", "פונקציות שורש", "בעיות קיצון",
  "מתמטיקה כללית",
]);

function sanitizeTopic(raw: unknown): string {
  if (typeof raw !== "string") return "מתמטיקה כללית";
  const trimmed = raw.trim().slice(0, 100);
  return ALLOWED_TOPICS.has(trimmed) ? trimmed : "מתמטיקה כללית";
}

type MsgRole = "user" | "assistant";
interface ChatMsg { role: MsgRole; content: string }

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "יש להתחבר תחילה" }), { status: 401 });
  }

  // Rate limit: 20 AI requests per user per hour
  if (!rateLimit(`ai:${session.id}`, 20, 60 * 60 * 1000)) {
    return new Response(JSON.stringify({ error: "הגעת למגבלת השאלות. נסה שוב בעוד שעה." }), { status: 429 });
  }

  let body: { question?: unknown; topic?: unknown; messages?: unknown; testTopics?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "בקשה לא תקינה" }), { status: 400 });
  }

  // Build conversation messages — support both single-question and multi-turn
  let apiMessages: ChatMsg[];
  if (Array.isArray(body.messages) && body.messages.length > 0) {
    // Multi-turn: sanitize each message
    apiMessages = (body.messages as ChatMsg[])
      .slice(-MAX_HISTORY * 2)
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MSG_LENGTH) }));
    if (apiMessages.length === 0 || apiMessages[apiMessages.length - 1].role !== "user") {
      return new Response(JSON.stringify({ error: "שאלה ריקה" }), { status: 400 });
    }
  } else {
    // Single-question (backward compat)
    const q = body.question;
    if (typeof q !== "string" || !q.trim()) {
      return new Response(JSON.stringify({ error: "שאלה ריקה" }), { status: 400 });
    }
    if (q.length > MAX_MSG_LENGTH) {
      return new Response(JSON.stringify({ error: "השאלה ארוכה מדי" }), { status: 400 });
    }
    apiMessages = [{ role: "user", content: q.trim() }];
  }

  const safeTopic = sanitizeTopic(body.topic);

  // Build test-context line if the caller passed topic list
  let testCtxLine = "";
  if (Array.isArray(body.testTopics) && body.testTopics.length > 0) {
    const safeTopics = (body.testTopics as unknown[])
      .filter((t): t is string => typeof t === "string")
      .map((t) => t.trim().slice(0, 60))
      .slice(0, 10)
      .join("، ");
    testCtxLine = `\nנושאי המבחן הנוכחי: ${safeTopics}.`;
  }

  const systemPrompt = `אתה מדריך מתמטיקה של תלמיד כיתה י"א במהלך מבחן בגרות (שאלון 581, 5 יחידות לימוד).${testCtxLine}
הנושא שנשאל עליו: ${safeTopic}.
תפקידך: לתת רמזים, הכוונות והסברי מושגים — לא פתרונות מלאים. עזור לתלמיד לחשוב ולהגיע לתשובה בעצמו.
ענה בעברית, קצר וברור. כתוב נוסחאות בצורה טקסטואלית פשוטה (לא LaTeX).`;

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    thinking: { type: "adaptive" },
    system: systemPrompt,
    messages: apiMessages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch {
        controller.enqueue(encoder.encode("\n[שגיאה בחיבור ל-AI]"));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
