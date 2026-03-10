"use client";

import { useState, FormEvent, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AuthModal({ onClose, dismissible = true }: { onClose?: () => void; dismissible?: boolean }) {
  const { login, signup, loginAsGuest } = useAuth();
  const [tab, setTab] = useState<"login" | "signup">("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  useEffect(() => {
    if (!dismissible) return;
    function onKey(e: KeyboardEvent) { if (e.key === "Escape" && onClose) onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, dismissible]);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError("");
    const err = login(loginEmail, loginPassword);
    if (err) setLoginError(err);
    else if (onClose) onClose();
  }

  function handleSignup(e: FormEvent) {
    e.preventDefault();
    setSignupError("");
    if (!signupName.trim()) { setSignupError("נא להזין שם"); return; }
    if (!signupEmail.trim()) { setSignupError("נא להזין מייל"); return; }
    if (signupPassword.length < 6) { setSignupError("הסיסמה חייבת להכיל לפחות 6 תווים"); return; }
    const err = signup(signupName.trim(), signupEmail.trim(), signupPassword);
    if (err) setSignupError(err);
    else if (onClose) onClose();
  }

  function handleGuest() { loginAsGuest(); if (onClose) onClose(); }

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" dir="rtl">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-md"
        onClick={dismissible ? onClose : undefined}
      />

      {/* Card */}
      <div className="relative w-full max-w-sm">
        {/* Glow ring */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/20 to-white/5 pointer-events-none" />

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Top accent strip */}
          <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900" />

          <div className="px-8 pt-8 pb-7">

            {/* Header */}
            <div className="mb-7 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-black" style={{ fontFamily: "serif", fontStyle: "italic" }}>∑</span>
                  <span className="text-xs font-bold text-slate-900 tracking-wide">בגרות מתמטיקה 5 יח״ל</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-none">
                  {tab === "login" ? "ברוך הבא" : "הצטרף עכשיו"}
                </h2>
              </div>
              {dismissible && (
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-400 hover:text-slate-700 text-sm font-bold shrink-0"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Tab switcher */}
            <div className="flex bg-slate-100 rounded-xl p-1 mb-6">
              {(["login", "signup"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setLoginError(""); setSignupError(""); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    tab === t
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {t === "login" ? "כניסה" : "הרשמה"}
                </button>
              ))}
            </div>

            {/* Login form */}
            {tab === "login" && (
              <form onSubmit={handleLogin} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5">כתובת מייל</label>
                  <input
                    type="email" value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="you@gmail.com" required dir="ltr"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5">סיסמה</label>
                  <input
                    type="password" value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••" required dir="ltr"
                    className={inputClass}
                  />
                </div>
                {loginError && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    <span className="text-red-400 text-xs">⚠</span>
                    <p className="text-red-500 text-xs font-medium">{loginError}</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-colors text-sm mt-1 tracking-wide"
                >
                  כניסה לחשבון ←
                </button>
              </form>
            )}

            {/* Signup form */}
            {tab === "signup" && (
              <form onSubmit={handleSignup} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5">שם מלא</label>
                  <input
                    type="text" value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    placeholder="ישראל ישראלי" required dir="rtl"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5">כתובת מייל</label>
                  <input
                    type="email" value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="you@gmail.com" required dir="ltr"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5">סיסמה</label>
                  <input
                    type="password" value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="לפחות 6 תווים" required dir="ltr"
                    className={inputClass}
                  />
                </div>
                {signupError && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    <span className="text-red-400 text-xs">⚠</span>
                    <p className="text-red-500 text-xs font-medium">{signupError}</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-colors text-sm mt-1 tracking-wide"
                >
                  יצירת חשבון ←
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-[11px] text-slate-900 font-bold">או</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Guest */}
            <button
              onClick={handleGuest}
              className="w-full border border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-slate-900 font-semibold py-2.5 rounded-xl transition-all text-sm"
            >
              המשך כאורח
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
