"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AiTutor({ topic }: { topic: string }) {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  if (auth?.type !== "user") return null;

  async function ask() {
    if (!question.trim() || loading) return;
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, topic }),
        signal: abortRef.current.signal,
      });

      if (!res.ok || !res.body) {
        setAnswer("שגיאה בחיבור לAI. נסה שוב.");
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setAnswer(text);
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name !== "AbortError") setAnswer("שגיאה. נסה שוב.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8" dir="rtl">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-black text-white font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm"
        >
          <span>✦</span>
          שאל את Claude AI
        </button>
      ) : (
        <div className="border border-slate-200 rounded-2xl overflow-hidden">
          <div className="bg-black px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">✦</span>
              <span className="text-white font-bold text-sm">Claude AI — מורה מתמטיקה</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white text-sm transition-colors">✕</button>
          </div>

          <div className="p-5 space-y-4">
            {answer && (
              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-mono border border-slate-100">
                {answer}
                {loading && <span className="inline-block w-1.5 h-4 bg-black/60 animate-pulse mr-1 align-middle" />}
              </div>
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && ask()}
                placeholder="שאל שאלה על הנושא..."
                className="flex-1 border border-slate-200 focus:border-black rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                dir="rtl"
              />
              <button
                onClick={ask}
                disabled={loading || !question.trim()}
                className="bg-black text-white font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? "..." : "שאל ←"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
