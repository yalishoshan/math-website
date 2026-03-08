import type { Metadata } from "next";
import { Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { AuthProvider } from "@/context/AuthContext";

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-frank-ruhl",
});

export const metadata: Metadata = {
  title: "סיכום בגרות מתמטיקה 5 יח״ל – כיתה י״א",
  description:
    "סיכום מקיף לבגרות במתמטיקה 5 יחידות לימוד לכיתה י״א: בעיות תנועה, סדרות, הסתברות, גאומטריה, טריגונומטריה, פונקציות טריגונומטריות, פונקציות שורש ובעיות קיצון.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${frankRuhl.variable} font-[family-name:var(--font-frank-ruhl)] min-h-screen bg-gray-50`}>
          <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
  );
}
