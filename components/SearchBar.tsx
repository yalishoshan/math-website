"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { topics } from "@/data/topics";

interface SearchResult {
  topicId: string;
  topicTitle: string;
  label: string;
  type: "topic" | "formula" | "example" | "tip";
}

const TYPE_BADGE: Record<SearchResult["type"], { text: string; cls: string }> = {
  topic:   { text: "נושא",  cls: "bg-blue-600" },
  formula: { text: "נוסחה", cls: "bg-violet-600" },
  example: { text: "דוגמה", cls: "bg-amber-600" },
  tip:     { text: "טיפ",   cls: "bg-slate-500" },
};

// English → Hebrew keyword aliases
const ALIASES: [string, string][] = [
  ["derivative",    "נגזרת"],
  ["derivatives",   "נגזרת"],
  ["integral",      "אינטגרל"],
  ["integration",   "אינטגרל"],
  ["sine law",      "משפט הסינוסים"],
  ["law of sines",  "משפט הסינוסים"],
  ["cosine law",    "משפט הקוסינוסים"],
  ["law of cosines","משפט הקוסינוסים"],
  ["chain rule",    "כלל שרשרת"],
  ["sine",          "סינוס"],
  ["cosine",        "קוסינוס"],
  ["tangent",       "טנגנס"],
  ["probability",   "הסתברות"],
  ["sequence",      "סדרה"],
  ["sequences",     "סדרות"],
  ["arithmetic",    "חשבונית"],
  ["geometric",     "גאומטרית"],
  ["geometry",      "גאומטריה"],
  ["motion",        "תנועה"],
  ["chase",         "מרדף"],
  ["pursuit",       "מרדף"],
  ["meeting",       "מפגש"],
  ["speed",         "מהירות"],
  ["distance",      "מרחק"],
  ["optimization",  "קיצון"],
  ["maximum",       "מקסימום"],
  ["minimum",       "מינימום"],
  ["limit",         "גבול"],
  ["triangle",      "משולש"],
  ["trigonometry",  "טריגונומטריה"],
  ["root",          "שורש"],
  ["circle",        "עיגול"],
  ["area",          "שטח"],
  ["volume",        "נפח"],
  ["combination",   "קומבינטוריקה"],
  ["pythagorean",   "פיתגורס"],
  ["pythagoras",    "פיתגורס"],
  ["similar",       "דמיון"],
  ["angle",         "זווית"],
  ["conditional",   "מותנית"],
  ["bayes",         "בייס"],
];

function getTerms(query: string): string[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const terms = new Set([q]);
  for (const [eng, heb] of ALIASES) {
    if (eng.includes(q) || q.includes(eng)) {
      terms.add(heb.toLowerCase());
    }
  }
  return [...terms];
}

function runSearch(query: string): SearchResult[] {
  const terms = getTerms(query);
  if (!terms.length) return [];

  const results: SearchResult[] = [];

  for (const topic of topics) {
    let match: SearchResult | null = null;

    // Priority 1: topic metadata
    const topicText = `${topic.title} ${topic.subtitle} ${topic.description}`.toLowerCase();
    if (terms.some(t => topicText.includes(t))) {
      match = { topicId: topic.id, topicTitle: topic.title, label: topic.subtitle, type: "topic" };
    }

    // Priority 2: formula title / explanation
    if (!match) {
      for (const f of topic.formulas) {
        if (terms.some(t => `${f.title} ${f.explanation}`.toLowerCase().includes(t))) {
          match = { topicId: topic.id, topicTitle: topic.title, label: f.title, type: "formula" };
          break;
        }
      }
    }

    // Priority 3: example problem text
    if (!match) {
      for (const e of topic.examples) {
        if (terms.some(t => e.problem.toLowerCase().includes(t))) {
          const label = e.problem.length > 60 ? e.problem.slice(0, 60) + "…" : e.problem;
          match = { topicId: topic.id, topicTitle: topic.title, label, type: "example" };
          break;
        }
      }
    }

    // Priority 4: tips
    if (!match) {
      for (const tip of topic.tips) {
        if (terms.some(t => tip.toLowerCase().includes(t))) {
          const label = tip.length > 60 ? tip.slice(0, 60) + "…" : tip;
          match = { topicId: topic.id, topicTitle: topic.title, label, type: "tip" };
          break;
        }
      }
    }

    if (match) results.push(match);
  }

  return results.slice(0, 6);
}

export default function SearchBar({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const res = runSearch(query);
    setResults(res);
    setOpen(res.length > 0 && query.trim().length >= 1);
    setCursor(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navigate = (r: SearchResult) => {
    router.push(`/topic/${r.topicId}`);
    setQuery("");
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor(c => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor(c => Math.max(c - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (cursor >= 0) navigate(results[cursor]);
      else if (results.length > 0) navigate(results[0]);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={wrapRef} className={`relative ${className}`} dir="rtl">
      <div className="flex items-center gap-1">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => { if (results.length > 0) setOpen(true); }}
          placeholder="חפש: נגזרת, משפט סינוסים, מרדף..."
          className="flex-1 min-w-0 text-xs bg-white/10 text-white placeholder-white/35 border border-white/20 rounded-md px-3 py-1.5 outline-none focus:border-green-400/60 focus:bg-white/15 transition-all"
        />
        <button
          onClick={() => { if (results.length > 0) navigate(results[0]); }}
          className="text-xs font-semibold px-3 py-1.5 bg-green-500 hover:bg-green-400 text-white rounded-md transition-colors whitespace-nowrap shrink-0"
        >
          חפש
        </button>
      </div>

      {open && (
        <div className="absolute top-full mt-1.5 right-0 w-72 bg-zinc-900 border border-white/15 rounded-xl shadow-2xl z-50 overflow-hidden">
          {results.map((r, i) => (
            <button
              key={`${r.topicId}-${r.type}-${i}`}
              onClick={() => navigate(r)}
              className={`w-full text-right px-4 py-3 flex items-start gap-2.5 transition-colors border-b border-white/5 last:border-0 ${
                cursor === i ? "bg-white/10" : "hover:bg-white/8"
              }`}
            >
              <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded text-white mt-0.5 ${TYPE_BADGE[r.type].cls}`}>
                {TYPE_BADGE[r.type].text}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-white text-xs font-semibold">{r.topicTitle}</p>
                <p className="text-white/50 text-[11px] mt-0.5 leading-snug truncate">{r.label}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
