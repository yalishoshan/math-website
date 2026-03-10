import type { TestQuestion } from "./testQuestions";
import { testQuestions } from "./testQuestions";

export type ExamCode = "581" | "582";
export type ExamSeason = "קיץ" | "חורף";

export interface BagrutExam {
  id: string;
  code: ExamCode;
  year: number;
  season: ExamSeason;
  questions: TestQuestion[];
}

// ─── Available exams ──────────────────────────────────────────────────────────
export const exams: BagrutExam[] = [
  {
    id: "581-2023-summer",
    code: "581",
    year: 2023,
    season: "קיץ",
    questions: testQuestions,
  },
];

// Years shown as "coming soon" placeholders in the picker
export const plannedExams: Array<{ code: ExamCode; year: number; season: ExamSeason }> = [
  { code: "581", year: 2023, season: "חורף" },
  { code: "581", year: 2022, season: "קיץ" },
  { code: "581", year: 2022, season: "חורף" },
  { code: "581", year: 2021, season: "קיץ" },
  { code: "581", year: 2021, season: "חורף" },
  { code: "582", year: 2023, season: "קיץ" },
  { code: "582", year: 2022, season: "קיץ" },
];

export function getExamLabel(code: ExamCode, year: number, season: ExamSeason) {
  return `שאלון ${code} – ${season} ${hebrewYear(year)}`;
}

function hebrewYear(year: number): string {
  const map: Record<number, string> = {
    2024: "תשפ״ד",
    2023: "תשפ״ג",
    2022: "תשפ״ב",
    2021: "תשפ״א",
    2020: "תש״פ",
    2019: "תשע״ט",
    2018: "תשע״ח",
  };
  return map[year] ?? String(year);
}
