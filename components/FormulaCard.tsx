"use client";

import katex from "katex";
import type { ReactNode } from "react";

interface FormulaCardProps {
  title: string;
  latex: string;
  explanation?: string;
  index: number;
  svgContent?: ReactNode;
}

export default function FormulaCard({
  title,
  latex,
  explanation,
  index,
  svgContent,
}: FormulaCardProps) {
  let rendered = "";
  try {
    rendered = katex.renderToString(latex, {
      displayMode: true,
      throwOnError: false,
      output: "html",
    });
  } catch {
    rendered = `<span>${latex}</span>`;
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs font-bold shrink-0">
          {index + 1}
        </span>
        <h3 className="font-semibold text-black text-base">{title}</h3>
      </div>
      <div className="p-4">
        <div
          className="formula-block bg-slate-50/80 rounded-lg my-1 px-3 py-3 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
        <div className="mt-4 flex justify-center">
          {svgContent ?? (
            <svg
              viewBox="0 0 120 60"
              className="w-full max-w-[180px] h-auto text-slate-700"
            >
              <rect
                x="4"
                y="4"
                width="112"
                height="52"
                rx="10"
                className="fill-transparent"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <line
                x1="12"
                y1="44"
                x2="108"
                y2="44"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M18 40 C 30 28, 45 26, 60 34 S 92 40, 104 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="60" cy="34" r="2.4" fill="currentColor" />
            </svg>
          )}
        </div>
        {explanation && (
          <p className="text-sm text-black mt-3 text-right leading-relaxed">
            {explanation}
          </p>
        )}
      </div>
    </div>
  );
}
