"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import type { BankQuestion } from "@/data/questionBank";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  questions: BankQuestion[];
}

export default function TestAiGuide({ questions }: Props) {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Unique topics from current test
  const topics = Array.from(new Set(questions.map((q) => q.topic)));

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  if (auth?.type !== "user") return null;

  async function send() {
    if (!input.trim() || loading) return;
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    const userMsg: Message = { role: "user", content: input.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    // Add empty assistant message to stream into
    setMessages([...next, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next,
          topic: selectedTopic || topics[0] || "מתמטיקה כללית",
          testTopics: topics,
        }),
        signal: abortRef.current.signal,
      });

      if (!res.ok || !res.body) {
        setMessages([...next, { role: "assistant", content: "שגיאה בחיבור לAI. נסה שוב." }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: text }]);
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name !== "AbortError") {
        setMessages([...next, { role: "assistant", content: "שגיאה. נסה שוב." }]);
      }
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    abortRef.current?.abort();
    setMessages([]);
    setLoading(false);
  }

  return (
    <>
      {/* Floating toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-black text-white font-bold px-5 py-3 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all text-sm"
          dir="rtl"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
            <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
          </svg>
          מדריך AI
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-0 left-0 z-40 w-full sm:w-[420px] bg-white border-t sm:border border-slate-200 sm:rounded-t-3xl sm:bottom-6 sm:left-6 shadow-2xl flex flex-col"
          style={{ maxHeight: "85vh" }}
          dir="rtl"
        >
          {/* Header */}
          <div className="bg-black px-5 py-4 sm:rounded-t-3xl flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
                  <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">מדריך AI</p>
                <p className="text-white/50 text-xs mt-0.5">רמזים והכוונות — לא פתרונות</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <button onClick={clearChat} className="text-white/40 hover:text-white text-xs transition-colors">
                  נקה
                </button>
              )}
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Topic pills */}
          {topics.length > 1 && (
            <div className="px-4 py-2.5 border-b border-slate-100 flex gap-2 flex-wrap shrink-0">
              <span className="text-xs text-slate-400 self-center ml-1">נושא:</span>
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(selectedTopic === t ? "" : t)}
                  className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all ${
                    selectedTopic === t
                      ? "bg-black text-white border-black"
                      : "bg-white text-black/50 border-slate-200 hover:border-slate-400 hover:text-black"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
            {messages.length === 0 && (
              <div className="text-center py-8 text-slate-400">
                <p className="text-3xl mb-2">💡</p>
                <p className="text-sm font-medium text-black">שאל שאלה על כל נושא במבחן</p>
                <p className="text-xs mt-1">אקנה לך רמזים שיעזרו לך לחשוב</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-black text-white rounded-tr-sm"
                      : "bg-slate-50 border border-slate-100 text-slate-800 rounded-tl-sm font-mono"
                  }`}
                >
                  {msg.content}
                  {msg.role === "assistant" && loading && i === messages.length - 1 && !msg.content && (
                    <span className="flex gap-1 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                  {msg.role === "assistant" && loading && i === messages.length - 1 && msg.content && (
                    <span className="inline-block w-1.5 h-3.5 bg-slate-500 animate-pulse mr-0.5 align-middle" />
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 pb-5 pt-3 border-t border-slate-100 shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="שאל שאלה..."
                className="flex-1 bg-slate-50 border border-slate-200 focus:border-black rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                dir="rtl"
                disabled={loading}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="bg-black text-white font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
