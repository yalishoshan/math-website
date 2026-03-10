"use client";

import { useState } from "react";
import Link from "next/link";
import { topics } from "@/data/topics";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";
import SearchBar from "@/components/SearchBar";

interface NavbarProps {
  activeTopicId?: string;
}

export default function Navbar({ activeTopicId }: NavbarProps) {
  const { auth, logout } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const displayName =
    auth?.type === "user" ? auth.name.split(" ")[0] : auth?.type === "guest" ? "אורח" : null;

  const isGuest = auth?.type === "guest";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <span className="text-white font-bold text-xl" style={{ fontFamily: "serif", fontStyle: "italic" }}>∑</span>
              <span className="font-bold text-white text-sm md:text-base">בגרות מתמטיקה 5 יח״ל</span>
            </Link>

            {/* Desktop search */}
            <SearchBar className="hidden lg:flex w-72 xl:w-96 mx-4" />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
              <Link href="/test" className="text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1.5 bg-black text-white rounded-md hover:bg-white/10 ml-1 border border-white/40">
                התחל מבחן מלא ←
              </Link>
              {topics.map((topic) => (
                <Link key={topic.id} href={`/topic/${topic.id}`}
                  className={`text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`}>
                  <span>{topic.title}</span>
                </Link>
              ))}

              {/* Auth area */}
              <div className="flex items-center gap-2 mr-2 pr-2 border-r border-white/20">
                {displayName ? (
                  <>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isGuest ? "bg-white/10 text-white/60" : "bg-violet-600 text-white"}`}>
                      {displayName}
                    </span>
                    <button onClick={logout} className="text-xs text-white/40 hover:text-white transition-colors underline underline-offset-2">
                      יציאה
                    </button>
                  </>
                ) : (
                  <button onClick={() => setModalOpen(true)}
                    className="text-xs font-semibold px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-md transition-colors whitespace-nowrap">
                    כניסה / הרשמה
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="lg:hidden border-t border-white/10 px-4 py-2">
          <SearchBar className="flex w-full" />
        </div>

        {/* Mobile scroll row */}
        <div className="lg:hidden border-t border-white/20 overflow-x-auto relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10" />
          <div className="flex gap-1 px-4 py-2 items-center">
            <Link href="/test" className="text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1 bg-black text-white rounded-md hover:bg-white/10 border border-white/40">
              מבחן מלא ←
            </Link>
            {topics.map((topic) => (
              <Link key={topic.id} href={`/topic/${topic.id}`}
                className={`text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`}>
                <span>{topic.title}</span>
              </Link>
            ))}

            {/* Mobile auth */}
            {displayName ? (
              <>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap mr-auto ${isGuest ? "bg-white/10 text-white/60" : "bg-violet-600 text-white"}`}>
                  {displayName}
                </span>
                <button onClick={logout} className="text-xs text-white/40 hover:text-white transition-colors whitespace-nowrap underline underline-offset-2">
                  יציאה
                </button>
              </>
            ) : (
              <button onClick={() => setModalOpen(true)}
                className="text-xs font-semibold px-3 py-1 bg-violet-600 hover:bg-violet-500 text-white rounded-md transition-colors whitespace-nowrap mr-auto">
                כניסה
              </button>
            )}
          </div>
        </div>
      </nav>

      {modalOpen && <AuthModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
