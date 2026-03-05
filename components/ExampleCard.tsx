interface ExampleCardProps {
  problem: string;
  steps: string[];
  answer: string;
  index: number;
}

export default function ExampleCard({
  problem,
  steps,
  answer,
  index,
}: ExampleCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white font-bold text-xs shrink-0 mt-0.5">
            {index + 1}
          </span>
          <div>
            <p className="text-xs font-semibold text-black uppercase tracking-widest mb-1">
              דוגמה פתורה
            </p>
            <p className="text-black font-medium leading-relaxed text-sm">
              {problem}
            </p>
            <div className="mt-3 flex justify-center">
              <svg
                viewBox="0 0 120 60"
                className="w-full max-w-[180px] h-auto text-slate-700"
              >
                <rect
                  x="6"
                  y="8"
                  width="108"
                  height="44"
                  rx="8"
                  className="fill-transparent"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="18"
                  y1="20"
                  x2="102"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="26" cy="20" r="2.2" fill="currentColor" />
                <circle cx="60" cy="20" r="2.2" fill="currentColor" />
                <circle cx="94" cy="20" r="2.2" fill="currentColor" />
                <polyline
                  points="26,36 46,30 72,38 94,28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="px-5 py-4 bg-slate-50/60">
        <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">
          פתרון שלב-שלב
        </p>
        <ol className="space-y-2.5">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 step-item">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs font-semibold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-black text-sm leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Answer */}
      <div className="mx-5 mb-4 mt-1 bg-black rounded-lg px-4 py-3">
        <span className="text-xs font-bold text-white/60 block mb-1">תשובה:</span>
        <span className="text-white font-semibold text-sm">{answer}</span>
      </div>
    </div>
  );
}
