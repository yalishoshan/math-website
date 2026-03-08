"use client";

import { useState, ReactNode, FormEvent } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AuthGate({ children }: { children: ReactNode }) {
  const { auth, login, signup, loginAsGuest } = useAuth();
  const [tab, setTab] = useState<"login" | "signup">("login");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Signup state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  if (auth !== null) return <>{children}</>;

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError("");
    const err = login(loginEmail, loginPassword);
    if (err) setLoginError(err);
  }

  function handleSignup(e: FormEvent) {
    e.preventDefault();
    setSignupError("");
    if (!signupName.trim()) { setSignupError("נא להזין שם"); return; }
    if (!signupEmail.trim()) { setSignupError("נא להזין מייל"); return; }
    if (signupPassword.length < 6) { setSignupError("הסיסמה חייבת להכיל לפחות 6 תווים"); return; }
    const err = signup(signupName.trim(), signupEmail.trim(), signupPassword);
    if (err) setSignupError(err);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row" dir="rtl">

      {/* Left branding panel */}
      <div className="hidden md:flex md:w-1/2 bg-black flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-2xl" style={{ fontFamily: "serif", fontStyle: "italic" }}>∑</span>
          <span className="font-bold text-white text-base">בגרות מתמטיקה 5 יח״ל</span>
        </div>

        <div>
          <div className="w-12 h-px bg-white/30 mb-8" />
          <h1 className="text-white font-black text-5xl xl:text-7xl leading-none tracking-tighter mb-6">
            הכנה<br />לבגרות
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            כל הנוסחאות, הדוגמאות הפתורות והמבחנים המלאים — במקום אחד.
          </p>
        </div>

        <div className="space-y-2 text-white/20 font-mono text-xs">
          <div>sin²x + cos²x = 1</div>
          <div>aₙ = a₁ · qⁿ⁻¹</div>
          <div>S = n/2 · (a₁ + aₙ)</div>
        </div>
      </div>

      {/* Right auth panel */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24">

        {/* Mobile header */}
        <div className="flex items-center gap-2 mb-10 md:hidden">
          <span className="text-black font-bold text-xl" style={{ fontFamily: "serif", fontStyle: "italic" }}>∑</span>
          <span className="font-bold text-black text-sm">בגרות מתמטיקה 5 יח״ל</span>
        </div>

        <div className="w-full max-w-sm mx-auto">

          {/* Tabs */}
          <div className="flex border-b-2 border-black mb-8">
            <button
              onClick={() => { setTab("login"); setLoginError(""); }}
              className={`pb-3 px-1 ml-6 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${
                tab === "login" ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"
              }`}
            >
              כניסה
            </button>
            <button
              onClick={() => { setTab("signup"); setSignupError(""); }}
              className={`pb-3 px-1 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${
                tab === "signup" ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"
              }`}
            >
              הרשמה
            </button>
          </div>

          {/* Login form */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black/60 tracking-wide">כתובת מייל</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  dir="ltr"
                  className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black/60 tracking-wide">סיסמה</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••"
                  required
                  dir="ltr"
                  className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/30"
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-xs font-medium">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors text-sm mt-2"
              >
                כניסה ←
              </button>
            </form>
          )}

          {/* Signup form */}
          {tab === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black/60 tracking-wide">שם מלא</label>
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="ישראל ישראלי"
                  required
                  dir="rtl"
                  className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black/60 tracking-wide">כתובת מייל</label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  dir="ltr"
                  className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black/60 tracking-wide">סיסמה</label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="לפחות 6 תווים"
                  required
                  dir="ltr"
                  className="w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/30"
                />
              </div>
              {signupError && (
                <p className="text-red-500 text-xs font-medium">{signupError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors text-sm mt-2"
              >
                הרשמה ←
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-xs text-black/30 font-medium">או</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          {/* Guest */}
          <button
            onClick={loginAsGuest}
            className="w-full border-2 border-black/10 hover:border-black text-black font-bold py-3.5 rounded-xl transition-colors text-sm"
          >
            המשך כאורח ←
          </button>

          <p className="text-center text-xs text-black/30 mt-6 leading-relaxed">
            גישת אורח אינה שומרת התקדמות
          </p>
        </div>
      </div>
    </div>
  );
}
