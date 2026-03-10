"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import { useAuth } from "@/context/AuthContext";
import { testQuestions } from "@/data/testQuestions";

type Phase = "intro" | "test" | "solutions";

const TIME_OPTIONS = [
  { label: "3 שעות", seconds: 3 * 60 * 60 },
  { label: "2 שעות", seconds: 2 * 60 * 60 },
  { label: "שעה", seconds: 60 * 60 },
  { label: "ללא ספירה", seconds: 0 },
];

function formatTime(s: number): string {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/25 text-white font-black text-sm">
              מ
            </span>
            <span className="font-bold text-white text-sm md:text-base">
              בגרות מתמטיקה 5 יח״ל
            </span>
          </Link>
          <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← חזרה לדף הבית
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function TestClient() {
  const { auth } = useAuth();
  const [showGate, setShowGate] = useState(false);
  const isAuthed = auth?.type === "user";
  const [phase, setPhase] = useState<Phase>("intro");
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [openSolutions, setOpenSolutions] = useState<Set<string>>(new Set());

  // Settings
  const [selectedIds, setSelectedIds] = useState<Set<number>>(
    new Set(testQuestions.map((q) => q.id))
  );
  const [timeLimitSeconds, setTimeLimitSeconds] = useState(3 * 60 * 60);
  const [practiceMode, setPracticeMode] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const filteredQuestions = testQuestions.filter((q) => selectedIds.has(q.id));

  const endTest = useCallback(() => {
    setTimerActive(false);
    setPhase("solutions");
  }, []);

  useEffect(() => {
    if (!timerActive) return;
    const id = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [timerActive]);

  useEffect(() => {
    if (timerActive && timeLeft === 0) endTest();
  }, [timeLeft, timerActive, endTest]);

  useEffect(() => {
    if (isAuthed) { setShowGate(false); return; }
    const timer = setTimeout(() => setShowGate(true), 1000);
    return () => clearTimeout(timer);
  }, [isAuthed]);

  function startTest() {
    setTimeLeft(timeLimitSeconds);
    setTimerActive(timeLimitSeconds > 0);
    setOpenSolutions(new Set());
    setPhase("test");
  }

  function restart() {
    setPhase("intro");
    setTimeLeft(timeLimitSeconds);
    setTimerActive(false);
    setOpenSolutions(new Set());
  }

  function toggleSolution(key: string) {
    setOpenSolutions((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function revealAll() {
    const all = new Set<string>();
    filteredQuestions.forEach((q) =>
      q.subquestions.forEach((sub) => all.add(`${q.id}-${sub.label}`))
    );
    setOpenSolutions(all);
  }

  function toggleQuestion(id: number) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const isLowTime = timeLimitSeconds > 0 && timeLeft < 10 * 60;
  const canStart = selectedIds.size > 0;

  // ══════════════════════════════════════════════════════════════════════════
  // INTRO
  // ══════════════════════════════════════════════════════════════════════════
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-white flex flex-col overflow-hidden" dir="rtl">
        <div className={!isAuthed && showGate ? "pointer-events-none select-none" : ""} style={!isAuthed && showGate ? { filter: "blur(3px)" } : {}}>
        <Navbar />
        <div className="flex-1 flex flex-col">

          {/* Top headline */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-8 md:px-16 py-10 border-b-2 border-black relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-56 xl:w-72 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
                alt=""
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1280px) 288px, 224px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
            </div>
            <div className="absolute inset-y-0 right-0 w-56 xl:w-72 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80"
                alt=""
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1280px) 288px, 224px"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
            </div>
            <Image
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover opacity-10"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />

            <div className="relative flex items-center gap-4 w-full mb-4">
              <div className="flex-1 h-px bg-black/30" />
              <p className="text-black text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
                מבחן פתוח · כיתה י״א
              </p>
              <div className="flex-1 h-px bg-black/30" />
            </div>
            <h1 className="relative leading-none font-black text-black tracking-tighter mb-4">
              <span className="block text-[12vw] leading-none">מבחן מלא</span>
            </h1>
            <p className="relative text-black text-base md:text-xl leading-relaxed">
              פתור במחברת — בדוק את עצמך לאחר הגשה
            </p>
          </div>

          {/* Settings + button */}
          <div className="flex-1 flex flex-col justify-between items-center px-8 md:px-16 py-10">
            <div className="w-full max-w-2xl space-y-8">

              {/* Exam structure */}
              <div className="space-y-3">
                <p className="text-black text-sm md:text-base leading-relaxed">
                  <span className="font-bold">מבנה השאלון ומפתח ההערכה:</span> בשאלון זה שלושה פרקים, ובהם שמונה שאלות.
                </p>
                <div className="space-y-1.5 pr-4 border-r-2 border-black">
                  <p className="text-black text-sm md:text-base"><span className="font-bold">פרק ראשון</span> – אלגברה והסתברות</p>
                  <p className="text-black text-sm md:text-base"><span className="font-bold">פרק שני</span> – גאומטרייה וטריגונומטרייה במישור</p>
                  <p className="text-black text-sm md:text-base leading-relaxed"><span className="font-bold">פרק שלישי</span> – חשבון דיפרנציאלי ואינטגרלי של פולינומים, של פונקציות שורש, של פונקציות רציונליות ושל פונקציות טריגונומטריות</p>
                </div>
                <p className="text-black text-sm md:text-base font-bold">
                  יש לענות על חמש שאלות, לפחות על שאלה אחת מכל פרק – 5×20 = 100 נקודות.
                </p>
              </div>

              {/* Settings panel */}
              <div className="border border-slate-200 rounded-2xl divide-y divide-slate-100">

                {/* Student info */}
                <div className="p-5">
                  <p className="font-bold text-black text-sm mb-3">פרטי הנבחן</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-slate-500 font-medium">שם מלא</label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="ישראל ישראלי"
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                        dir="rtl"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-slate-500 font-medium">כיתה</label>
                      <input
                        type="text"
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        placeholder='י"א 3'
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                        dir="rtl"
                      />
                    </div>
                  </div>
                </div>

                {/* Question selection */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-bold text-black text-sm">בחר שאלות</p>
                    <div className="flex gap-3 text-xs text-black/50">
                      <button
                        onClick={() => setSelectedIds(new Set(testQuestions.map((q) => q.id)))}
                        className="hover:text-black transition-colors underline underline-offset-2"
                      >
                        בחר הכל
                      </button>
                      <button
                        onClick={() => setSelectedIds(new Set())}
                        className="hover:text-black transition-colors underline underline-offset-2"
                      >
                        בטל הכל
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {testQuestions.map((q, i) => {
                      const checked = selectedIds.has(q.id);
                      return (
                        <button
                          key={q.id}
                          onClick={() => toggleQuestion(q.id)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all text-right ${
                            checked
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-slate-300 hover:border-slate-400"
                          }`}
                        >
                          <span className={`shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${checked ? "bg-white text-black" : "bg-slate-100 text-black"}`}>
                            {i + 1}
                          </span>
                          <span className="truncate">{q.topic}</span>
                        </button>
                      );
                    })}
                  </div>
                  {selectedIds.size === 0 && (
                    <p className="text-red-500 text-xs mt-2">יש לבחור לפחות שאלה אחת</p>
                  )}
                </div>

                {/* Time limit */}
                <div className="p-5">
                  <p className="font-bold text-black text-sm mb-3">זמן מבחן</p>
                  <div className="flex flex-wrap gap-2">
                    {TIME_OPTIONS.map((opt) => (
                      <button
                        key={opt.seconds}
                        onClick={() => setTimeLimitSeconds(opt.seconds)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          timeLimitSeconds === opt.seconds
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-slate-300 hover:border-slate-400"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Practice mode */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-black text-sm">מצב תרגול</p>
                      <p className="text-xs text-slate-500 mt-0.5">הצג פתרונות תוך כדי המבחן</p>
                    </div>
                    <button
                      onClick={() => setPracticeMode((p) => !p)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${practiceMode ? "bg-black" : "bg-slate-300"}`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${practiceMode ? "right-1" : "left-1"}`}
                      />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full max-w-2xl mt-8">
              <button
                onClick={startTest}
                disabled={!canStart}
                className="w-full bg-black text-white font-black text-xl py-6 rounded-2xl hover:bg-slate-800 transition-colors tracking-tight disabled:opacity-40 disabled:cursor-not-allowed"
              >
                התחל מבחן ←
              </button>
              <Link href="/" className="mt-4 text-center text-sm text-black hover:underline transition-colors block">
                חזרה לדף הבית
              </Link>
            </div>
          </div>
        </div>
        </div>
        {!isAuthed && showGate && <AuthModal dismissible={false} />}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // TEST
  // ══════════════════════════════════════════════════════════════════════════
  if (phase === "test") {
    return (
      <div className="min-h-screen bg-slate-50" dir="rtl">
        {/* Sticky timer */}
        <div className="sticky top-0 z-50 bg-black border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className={`flex items-center gap-2 font-mono font-bold text-lg ${isLowTime ? "text-red-400" : "text-white"}`}>
              {timeLimitSeconds > 0 ? (
                <>
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {formatTime(timeLeft)}
                </>
              ) : (
                <span className="text-white/60 text-sm font-sans">ללא ספירה</span>
              )}
            </div>
            <span className="text-white/70 text-sm hidden sm:block">
              {studentName && <span className="text-white font-semibold">{studentName}</span>}
              {studentName && " · "}
              {practiceMode ? "מצב תרגול – ניתן לצפות בפתרונות" : "ענה/י על 5 שאלות לבחירתך במחברת"}
            </span>
            <button
              onClick={endTest}
              className="bg-white text-black font-bold text-sm px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              סיים מבחן
            </button>
          </div>
          {isLowTime && (
            <div className="bg-red-600 text-white text-center text-xs py-1 font-semibold">
              פחות מ-10 דקות נותרו!
            </div>
          )}
        </div>

        {/* Questions */}
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
          {filteredQuestions.map((q, i) => (
            <div key={q.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                  {i + 1}
                </div>
                <span className="bg-black text-white text-xs font-semibold rounded-full px-3 py-1">
                  {q.topic}
                </span>
              </div>
              <p className="text-black text-base leading-relaxed whitespace-pre-line mb-6 font-medium">
                {q.text}
              </p>
              <div className="space-y-4 border-t border-slate-100 pt-5">
                {q.subquestions.map((sub) => {
                  const key = `${q.id}-${sub.label}`;
                  const isOpen = openSolutions.has(key);
                  return (
                    <div key={sub.label} className="flex gap-4">
                      <span className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-black flex items-center justify-center text-xs font-bold text-white">
                        {sub.label}
                      </span>
                      <div className="flex-1">
                        <p className="text-black text-sm leading-relaxed whitespace-pre-line">
                          {sub.text}
                        </p>
                        {practiceMode && (
                          <div className="mt-2">
                            <button
                              onClick={() => toggleSolution(key)}
                              className={`text-xs font-bold px-3 py-1 rounded-lg border transition-all ${
                                isOpen
                                  ? "bg-green-50 border-green-300 text-green-700"
                                  : "bg-slate-50 border-slate-300 text-black hover:border-slate-400"
                              }`}
                            >
                              {isOpen ? "▲ הסתר פתרון" : "▼ הצג פתרון"}
                            </button>
                            {isOpen && (
                              <div className="mt-2 bg-green-50 border border-green-200 rounded-xl p-4">
                                <p className="text-green-900 text-sm leading-loose whitespace-pre-line font-mono">
                                  {sub.solution}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="text-center pt-4 pb-8">
            <button
              onClick={endTest}
              className="bg-black text-white font-bold px-10 py-4 rounded-xl hover:bg-slate-800 transition-colors text-base"
            >
              סיים וראה פתרונות ←
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SOLUTIONS
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-black text-white rounded-2xl p-8 mb-4 text-center">
          <p className="text-white/60 text-sm mb-2">מבחן הסתיים</p>
          <h2 className="text-3xl md:text-4xl font-black mb-2">מפתח פתרונות</h2>
          <p className="text-white/70 text-sm">לחץ על "הצג פתרון" בכל סעיף לבדיקה עצמית</p>
        </div>

        <div className="flex justify-end mb-6">
          <button
            onClick={revealAll}
            className="text-sm font-semibold text-black hover:text-slate-700 underline underline-offset-2 transition-colors"
          >
            הצג את כל הפתרונות
          </button>
        </div>

        <div className="space-y-8 mb-10">
          {filteredQuestions.map((q, i) => (
            <div key={q.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    {i + 1}
                  </div>
                  <span className="bg-black text-white text-xs font-semibold rounded-full px-3 py-1">
                    {q.topic}
                  </span>
                </div>
                <p className="text-black text-base leading-relaxed whitespace-pre-line font-medium mb-0">
                  {q.text}
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {q.subquestions.map((sub) => {
                  const key = `${q.id}-${sub.label}`;
                  const isOpen = openSolutions.has(key);
                  return (
                    <div key={sub.label} className="px-6 md:px-8 py-5">
                      <div className="flex gap-4 mb-3">
                        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-black flex items-center justify-center text-xs font-bold text-white">
                          {sub.label}
                        </span>
                        <p className="text-black text-sm leading-relaxed whitespace-pre-line flex-1">
                          {sub.text}
                        </p>
                      </div>
                      <div className="mr-11">
                        <button
                          onClick={() => toggleSolution(key)}
                          className={`text-xs font-bold px-4 py-1.5 rounded-lg border transition-all ${
                            isOpen
                              ? "bg-green-50 border-green-300 text-green-700"
                              : "bg-slate-50 border-slate-300 text-black hover:border-slate-400"
                          }`}
                        >
                          {isOpen ? "▲ הסתר פתרון" : "▼ הצג פתרון"}
                        </button>
                      </div>
                      {isOpen && (
                        <div className="mr-11 mt-3 bg-green-50 border border-green-200 rounded-xl p-4">
                          <p className="text-green-900 text-sm leading-loose whitespace-pre-line font-mono">
                            {sub.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={restart}
            className="bg-black text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800 transition-colors"
          >
            מבחן חדש
          </button>
          <Link
            href="/"
            className="border border-slate-300 text-black font-bold px-8 py-3 rounded-xl hover:border-slate-500 transition-colors"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}
