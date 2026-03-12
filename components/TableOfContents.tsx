"use client";

interface TocItem {
  id: string;
  label: string;
  count?: number;
}

interface Props {
  items: TocItem[];
  variant?: "dark" | "light";
}

export default function TableOfContents({ items, variant = "dark" }: Props) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (variant === "dark") {
    return (
      <div dir="rtl">
        <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-3">דלג אל</p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-400/40 text-sm font-medium text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
            >
              {item.label}
              {item.count !== undefined && (
                <span className="text-xs opacity-60">({item.count})</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50" dir="rtl">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">תוכן עניינים</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-black hover:text-white hover:border-black transition-all"
          >
            {item.label}
            {item.count !== undefined && (
              <span className="text-xs text-slate-400">({item.count})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
