"use client";

import { useState } from "react";
import type { Exercise } from "@/data/topics";

const DIFFICULTY: Record<Exercise["difficulty"], { label: string; bg: string; ring: string }> = {
  "קל":     { label: "קל",     bg: "bg-green-500",  ring: "ring-green-200" },
  "בינוני": { label: "בינוני", bg: "bg-amber-500",  ring: "ring-amber-200" },
  "בגרות":  { label: "בגרות",  bg: "bg-red-600",    ring: "ring-red-200" },
};

interface Props {
  exercise: Exercise;
  index: number;
}

export default function ExerciseCard({ exercise, index }: Props) {
  const [open, setOpen] = useState(false);
  const { label, bg, ring } = DIFFICULTY[exercise.difficulty];

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ring-1 ${open ? ring : "ring-transparent"} transition-all`}
      dir="rtl"
    >
      {/* Question */}
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white font-bold text-xs shrink-0 mt-0.5">
            {index + 1}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${bg}`}>
                {label}
              </span>
            </div>
            <p className="text-black font-medium leading-relaxed text-sm">{exercise.problem}</p>
            {exercise.hint && !open && (
              <p className="mt-2 text-xs text-slate-400 italic">רמז: {exercise.hint}</p>
            )}
          </div>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="mt-3 mr-10 text-xs font-semibold text-black underline underline-offset-2 hover:text-slate-500 transition-colors"
        >
          {open ? "הסתר פתרון ▲" : "הצג פתרון ▼"}
        </button>
      </div>

      {/* Solution — revealed on demand */}
      {open && (
        <>
          <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
            <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">
              פתרון שלב-שלב
            </p>
            <ol className="space-y-2.5">
              {exercise.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs font-semibold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-black text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-5 mb-4 mt-1 bg-black rounded-lg px-4 py-3">
            <span className="text-xs font-bold text-white/60 block mb-1">תשובה:</span>
            <span className="text-white font-semibold text-sm">{exercise.answer}</span>
          </div>
        </>
      )}
    </div>
  );
}
