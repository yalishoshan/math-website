"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthState =
  | { type: "guest" }
  | { type: "user"; name: string; email: string }
  | null;

interface StoredUser {
  name: string;
  email: string;
  password: string;
}

interface AuthContextValue {
  auth: AuthState;
  login: (email: string, password: string) => string | null;
  signup: (name: string, email: string, password: string) => string | null;
  loginAsGuest: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bagrut_session");
      if (stored) setAuth(JSON.parse(stored));
    } catch {}
    setReady(true);
  }, []);

  function persist(state: AuthState) {
    setAuth(state);
    if (state) localStorage.setItem("bagrut_session", JSON.stringify(state));
    else localStorage.removeItem("bagrut_session");
  }

  function getUsers(): StoredUser[] {
    try {
      return JSON.parse(localStorage.getItem("bagrut_users") || "[]");
    } catch {
      return [];
    }
  }

  function login(email: string, password: string): string | null {
    const users = getUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return "המשתמש לא נמצא";
    if (user.password !== password) return "סיסמה שגויה";
    persist({ type: "user", name: user.name, email: user.email });
    return null;
  }

  function signup(name: string, email: string, password: string): string | null {
    const users = getUsers();
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase()))
      return "כתובת המייל כבר רשומה";
    users.push({ name, email, password });
    localStorage.setItem("bagrut_users", JSON.stringify(users));
    persist({ type: "user", name, email });
    return null;
  }

  function loginAsGuest() {
    persist({ type: "guest" });
  }

  function logout() {
    persist(null);
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
