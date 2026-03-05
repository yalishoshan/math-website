"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { testQuestions } from "@/data/testQuestions";

type Phase = "intro" | "test" | "solutions";

const TOTAL_SECONDS = 3 * 60 * 60;

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
  const [phase, setPhase] = useState<Phase>("intro");
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [timerActive, setTimerActive] = useState(false);
  // key = `${questionId}-${label}`, value = open/closed
  const [openSolutions, setOpenSolutions] = useState<Set<string>>(new Set());

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

  function startTest() {
    setTimeLeft(TOTAL_SECONDS);
    setTimerActive(true);
    setOpenSolutions(new Set());
    setPhase("test");
  }

  function restart() {
    setPhase("intro");
    setTimeLeft(TOTAL_SECONDS);
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
    testQuestions.forEach((q) =>
      q.subquestions.forEach((sub) => all.add(`${q.id}-${sub.label}`))
    );
    setOpenSolutions(all);
  }

  const isLowTime = timeLeft < 10 * 60;

  // ══════════════════════════════════════════════════════════════════════════
  // INTRO
  // ══════════════════════════════════════════════════════════════════════════
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-white flex flex-col" dir="rtl">

        <Navbar />

        {/* Main — vertical layout */}
        <div className="flex-1 flex flex-col">

          {/* Top — big headline with background photo */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-8 md:px-16 py-10 border-b-2 border-black relative overflow-hidden">

            {/* Side photos — clipped to top section */}
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

            {/* Background math photo */}
            <Image
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover opacity-10"
              sizes="100vw"
              priority
            />
            {/* Soft white vignette so edges fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />

            {/* Content sits above photo */}
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

          {/* Bottom — exam structure + button */}
          <div className="flex-1 flex flex-col justify-between items-center px-8 md:px-16 py-10">

            {/* Exam structure */}
            <div className="space-y-3 w-full max-w-2xl">
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

            <div className="w-full max-w-2xl">
              <button
                onClick={startTest}
                className="w-full bg-black text-white font-black text-xl py-6 rounded-2xl hover:bg-slate-800 transition-colors tracking-tight"
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
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // TEST — all 8 questions displayed, student solves on paper
  // ══════════════════════════════════════════════════════════════════════════
  if (phase === "test") {
    return (
      <div className="min-h-screen bg-slate-50" dir="rtl">
        {/* Sticky timer */}
        <div className="sticky top-0 z-50 bg-black border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className={`flex items-center gap-2 font-mono font-bold text-lg ${isLowTime ? "text-red-400" : "text-white"}`}>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {formatTime(timeLeft)}
            </div>
            <span className="text-white/70 text-sm hidden sm:block">ענה/י על 5 שאלות לבחירתך במחברת</span>
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
          {testQuestions.map((q, i) => (
            <div key={q.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                  {i + 1}
                </div>
                <span className="bg-black text-white text-xs font-semibold rounded-full px-3 py-1">
                  {q.topic}
                </span>
              </div>

              {/* Main text */}
              <p className="text-black text-base leading-relaxed whitespace-pre-line mb-6 font-medium">
                {q.text}
              </p>

              {/* Sub-questions */}
              <div className="space-y-4 border-t border-slate-100 pt-5">
                {q.subquestions.map((sub) => (
                  <div key={sub.label} className="flex gap-4">
                    <span className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-black flex items-center justify-center text-xs font-bold text-white">
                      {sub.label}
                    </span>
                    <p className="text-black text-sm leading-relaxed whitespace-pre-line">
                      {sub.text}
                    </p>
                  </div>
                ))}
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
  // SOLUTIONS — reveal per sub-question
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-black text-white rounded-2xl p-8 mb-4 text-center">
          <p className="text-white/60 text-sm mb-2">מבחן הסתיים</p>
          <h2 className="text-3xl md:text-4xl font-black mb-2">מפתח פתרונות</h2>
          <p className="text-white/70 text-sm">לחץ על "הצג פתרון" בכל סעיף לבדיקה עצמית</p>
        </div>

        {/* Reveal all button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={revealAll}
            className="text-sm font-semibold text-black hover:text-slate-700 underline underline-offset-2 transition-colors"
          >
            הצג את כל הפתרונות
          </button>
        </div>

        {/* Questions + solutions */}
        <div className="space-y-8 mb-10">
          {testQuestions.map((q, i) => (
            <div key={q.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Question header */}
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

              {/* Sub-questions */}
              <div className="divide-y divide-slate-100">
                {q.subquestions.map((sub) => {
                  const key = `${q.id}-${sub.label}`;
                  const isOpen = openSolutions.has(key);
                  return (
                    <div key={sub.label} className="px-6 md:px-8 py-5">
                      {/* Sub-question text */}
                      <div className="flex gap-4 mb-3">
                        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-black flex items-center justify-center text-xs font-bold text-white">
                          {sub.label}
                        </span>
                        <p className="text-black text-sm leading-relaxed whitespace-pre-line flex-1">
                          {sub.text}
                        </p>
                      </div>

                      {/* Toggle button */}
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

                      {/* Solution */}
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

        {/* Actions */}
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
