interface TipsBoxProps {
  tips: string[];
}

export default function TipsBox({ tips }: TipsBoxProps) {
  return (
    <div className="bg-black rounded-xl p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 text-white text-xs font-bold shrink-0">
          טי
        </span>
        <h3 className="font-bold text-white text-xl">טיפים לבחינה</h3>
      </div>
      <ul className="space-y-3">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="text-sm text-white/80 leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
