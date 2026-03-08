"use client";

import { useState, FormEvent, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AuthModal({ onClose }: { onClose: () => void }) {
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
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError("");
    const err = login(loginEmail, loginPassword);
    if (err) setLoginError(err);
    else onClose();
  }

  function handleSignup(e: FormEvent) {
    e.preventDefault();
    setSignupError("");
    if (!signupName.trim()) { setSignupError("נא להזין שם"); return; }
    if (!signupEmail.trim()) { setSignupError("נא להזין מייל"); return; }
    if (signupPassword.length < 6) { setSignupError("הסיסמה חייבת להכיל לפחות 6 תווים"); return; }
    const err = signup(signupName.trim(), signupEmail.trim(), signupPassword);
    if (err) setSignupError(err);
    else onClose();
  }

  function handleGuest() { loginAsGuest(); onClose(); }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" dir="rtl">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <button onClick={onClose} className="absolute top-4 left-4 text-black/30 hover:text-black transition-colors text-xl font-bold leading-none">✕</button>

        <div className="flex border-b-2 border-black mb-7">
          <button onClick={() => { setTab("login"); setLoginError(""); }}
            className={`pb-3 px-1 ml-6 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${tab === "login" ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"}`}>
            כניסה
          </button>
          <button onClick={() => { setTab("signup"); setSignupError(""); }}
            className={`pb-3 px-1 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${tab === "signup" ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"}`}>
            הרשמה
          </button>
        </div>

        {tab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black/60">כתובת מייל</label>
              <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="example@email.com" required dir="ltr"
                className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black/60">סיסמה</label>
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••" required dir="ltr"
                className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/30" />
            </div>
            {loginError && <p className="text-red-500 text-xs font-medium">{loginError}</p>}
            <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm">כניסה ←</button>
          </form>
        )}

        {tab === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black/60">שם מלא</label>
              <input type="text" value={signupName} onChange={(e) => setSignupName(e.target.value)} placeholder="ישראל ישראלי" required dir="rtl"
                className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black/60">כתובת מייל</label>
              <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="example@email.com" required dir="ltr"
                className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black/60">סיסמה</label>
              <input type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} placeholder="לפחות 6 תווים" required dir="ltr"
                className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/30" />
            </div>
            {signupError && <p className="text-red-500 text-xs font-medium">{signupError}</p>}
            <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm">הרשמה ←</button>
          </form>
        )}

        <div className="flex items-center gap-4 my-5">
          <div className="flex-1 h-px bg-black/10" />
          <span className="text-xs text-black/30 font-medium">או</span>
          <div className="flex-1 h-px bg-black/10" />
        </div>

        <button onClick={handleGuest} className="w-full border-2 border-black/10 hover:border-black text-black font-bold py-3 rounded-xl transition-colors text-sm">
          המשך כאורח ←
        </button>
        <p className="text-center text-xs text-black/30 mt-4">גישת אורח אינה שומרת התקדמות</p>
      </div>
    </div>
  );
}
