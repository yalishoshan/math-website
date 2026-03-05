import type { Metadata } from "next";
import TestClient from "./TestClient";

export const metadata: Metadata = {
  title: "מבחן מלא – שאלון 581 | בגרות מתמטיקה 5 יח״ל",
  description: "מבחן מלא מסוג שאלון 581 עם ספירה לאחור של 3 שעות",
};

export default function TestPage() {
  return <TestClient />;
}
