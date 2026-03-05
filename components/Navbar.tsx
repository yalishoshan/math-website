import Link from "next/link";
import { topics } from "@/data/topics";

interface NavbarProps {
  activeTopicId?: string;
}

export default function Navbar({ activeTopicId }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <span className="text-white font-bold text-xl" style={{ fontFamily: "serif", fontStyle: "italic" }}>
              ∑
            </span>
            <span className="font-bold text-white text-sm md:text-base">
              בגרות מתמטיקה 5 יח״ל
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            <Link
              href="/test"
              className="text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1.5 bg-teal-500 text-white rounded-md hover:bg-teal-400 ml-1"
            >
              מבחן
            </Link>
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topic/${topic.id}`}
                className={`text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${
                  activeTopicId === topic.id
                    ? "text-white font-semibold underline underline-offset-4"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span>{topic.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile topic scroll */}
      <div className="lg:hidden border-t border-white/20 overflow-x-auto">
        <div className="flex gap-1 px-4 py-2">
          <Link
            href="/test"
            className="text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-400"
          >
            מבחן
          </Link>
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topic/${topic.id}`}
              className={`text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${
                activeTopicId === topic.id
                  ? "text-white font-semibold underline underline-offset-4"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>{topic.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
