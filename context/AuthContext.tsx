"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthState =
  | { type: "guest" }
  | { type: "user"; id: string; name: string; email: string }
  | null;

interface AuthContextValue {
  auth: AuthState;
  login: (email: string, password: string) => Promise<string | null>;
  signup: (name: string, email: string, password: string) => Promise<string | null>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Check for existing session cookie via API
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then(({ user }) => {
        if (user) setAuth({ ...user, type: "user" });
        else {
          // Fall back to localStorage guest session
          try {
            const stored = localStorage.getItem("bagrut_guest");
            if (stored) setAuth(JSON.parse(stored));
          } catch {}
        }
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  async function login(email: string, password: string): Promise<string | null> {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) return data.error ?? "שגיאה בכניסה";
    setAuth({ ...data.user, type: "user" });
    return null;
  }

  async function signup(name: string, email: string, password: string): Promise<string | null> {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) return data.error ?? "שגיאה בהרשמה";
    setAuth({ ...data.user, type: "user" });
    return null;
  }

  function loginAsGuest() {
    const guest: AuthState = { type: "guest" };
    setAuth(guest);
    localStorage.setItem("bagrut_guest", JSON.stringify(guest));
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("bagrut_guest");
    setAuth(null);
  }

  if (!ready) return null;

  return (
    <AuthContext.Provider value={{ auth, login, signup, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
