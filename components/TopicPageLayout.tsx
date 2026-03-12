import Link from "next/link";
import Navbar from "@/components/Navbar";
import FormulaCard from "@/components/FormulaCard";
import ExerciseCard from "@/components/ExerciseCard";
import TipsBox from "@/components/TipsBox";
import AiTutor from "@/components/AiTutor";
import TableOfContents from "@/components/TableOfContents";
import type { ReactNode } from "react";

/* ─── Types ─────────────────────────────────────────────── */

export interface FormulaItem {
  title: string;
  latex: string;
  explanation: string;
  svgContent?: ReactNode;
}

export interface MainTableRow {
  cells: string[];   // first cell is always rendered bold
  stripe: boolean;
}

export interface SideTableRow {
  cells: string[];   // [col1, col2, col3]
}

export interface StepItem {
  title: string;
  body: string;
}

export interface ExerciseItem {
  difficulty: "קל" | "בינוני" | "בגרות";
  problem: string;
  hint?: string;
  steps: string[];
  answer: string;
}

export interface TopicPageLayoutProps {
  /* hero */
  topicId: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  statsChips: string[];
  breadcrumbLabel: string;

  /* section 1 – formula cards */
  formulas: FormulaItem[];
  formulasSectionTitle?: string;
  formulasSectionSubtitle?: string;

  /* section 2 – main reference table */
  mainTableSectionTitle: string;
  mainTableSectionSubtitle: string;
  mainTableHeaders: string[];
  mainTableRows: MainTableRow[];

  /* section 3 – two side tables + highlight bar */
  sideTablesSectionTitle: string;
  sideTablesSectionSubtitle: string;
  leftTableTitle: string;
  leftTableHeaders: string[];   // 3 values
  leftTableRows: SideTableRow[];
  rightTableTitle: string;
  rightTableHeaders: string[];  // 3 values
  rightTableRows: SideTableRow[];
  highlightTitle: string;
  highlightBody: React.ReactNode;

  /* section 4 – step cards */
  stepsSectionTitle?: string;
  stepsSectionSubtitle?: string;
  steps: StepItem[];

  /* section 4.5 – exercises (optional) */
  exercises?: ExerciseItem[];

  /* section 5 – tips */
  tips: string[];

  /* navigation */
  prevTopic: { id: string; icon: string; title: string } | null;
  nextTopic: { id: string; icon: string; title: string } | null;
}

/* ─── Component ─────────────────────────────────────────── */

export default function TopicPageLayout({
  topicId,
  icon,
  title,
  subtitle,
  description,
  statsChips,
  breadcrumbLabel,
  formulas,
  formulasSectionTitle = "נוסחות מפתח",
  formulasSectionSubtitle = "הנוסחאות החיוניות לנושא",
  mainTableSectionTitle,
  mainTableSectionSubtitle,
  mainTableHeaders,
  mainTableRows,
  sideTablesSectionTitle,
  sideTablesSectionSubtitle,
  leftTableTitle,
  leftTableHeaders,
  leftTableRows,
  rightTableTitle,
  rightTableHeaders,
  rightTableRows,
  highlightTitle,
  highlightBody,
  stepsSectionTitle = "שלבי פתרון תקניים",
  stepsSectionSubtitle = "עקבו אחרי הסדר הזה בכל שאלה",
  steps,
  exercises,
  tips,
  prevTopic,
  nextTopic,
}: TopicPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId={topicId} />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">
              בית
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{breadcrumbLabel}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1">
                שאלון 581
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                {title}
              </h1>
              <p className="text-base text-white/70 font-medium">{subtitle}</p>
            </div>
          </div>
          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            {statsChips.map((chip) => (
              <span
                key={chip}
                className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Table of Contents */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <TableOfContents
              items={[
                { id: "formulas", label: formulasSectionTitle },
                { id: "main-table", label: mainTableSectionTitle },
                { id: "side-tables", label: sideTablesSectionTitle },
                { id: "steps", label: stepsSectionTitle },
                ...(exercises ? [{ id: "exercises", label: "תרגול מדורג", count: exercises.length }] : []),
                { id: "tips", label: "טיפים" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── 1. נוסחות מפתח ── */}
        <section id="formulas">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">{formulasSectionTitle}</h2>
              <p className="text-sm text-slate-500">{formulasSectionSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formulas.map((f, i) => (
              <FormulaCard
                key={i}
                title={f.title}
                latex={f.latex}
                explanation={f.explanation}
                index={i}
                svgContent={f.svgContent}
              />
            ))}
          </div>
        </section>

        {/* ── 2. טבלת ייחוס ראשית ── */}
        <section id="main-table">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">{mainTableSectionTitle}</h2>
              <p className="text-sm text-slate-500">{mainTableSectionSubtitle}</p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  {mainTableHeaders.map((h) => (
                    <th key={h} className="px-4 py-3 text-right font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mainTableRows.map((row, i) => (
                  <tr key={i} className={row.stripe ? "bg-slate-50" : "bg-white"}>
                    {row.cells.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 font-mono ${
                          j === 0
                            ? "font-bold text-black"
                            : "text-slate-700"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 3. שתי טבלאות צדדיות + בר הדגשה ── */}
        <section id="side-tables">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">{sideTablesSectionTitle}</h2>
              <p className="text-sm text-slate-500">{sideTablesSectionSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* טבלה שמאלית */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm" dir="rtl">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th
                      className="px-4 py-2.5 text-right font-semibold"
                      colSpan={3}
                    >
                      {leftTableTitle}
                    </th>
                  </tr>
                  <tr className="bg-slate-700 text-white/80 text-xs">
                    {leftTableHeaders.map((h) => (
                      <th key={h} className="px-4 py-2 text-right">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leftTableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-2.5 font-bold text-black">
                        {row.cells[0]}
                      </td>
                      <td className="px-4 py-2.5 font-mono font-semibold text-black">
                        {row.cells[1]}
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 text-xs">
                        {row.cells[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* טבלה ימנית */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm" dir="rtl">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th
                      className="px-4 py-2.5 text-right font-semibold"
                      colSpan={3}
                    >
                      {rightTableTitle}
                    </th>
                  </tr>
                  <tr className="bg-slate-700 text-white/80 text-xs">
                    {rightTableHeaders.map((h) => (
                      <th key={h} className="px-4 py-2 text-right">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rightTableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-2.5 font-bold text-black">
                        {row.cells[0]}
                      </td>
                      <td className="px-4 py-2.5 font-mono font-semibold text-black">
                        {row.cells[1]}
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 text-xs">
                        {row.cells[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* highlight bar */}
          <div
            className="mt-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4 flex items-center gap-4"
            dir="rtl"
          >
            <span className="text-2xl font-black text-black shrink-0">!</span>
            <div>
              <p className="font-bold text-black text-sm">{highlightTitle}</p>
              <div className="text-sm text-slate-700 mt-1 leading-relaxed">
                {highlightBody}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. שלבי פתרון ── */}
        <section id="steps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">{stepsSectionTitle}</h2>
              <p className="text-sm text-slate-500">{stepsSectionSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all"
                dir="rtl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-black text-sm">{step.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pr-10">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4.5. תרגול מדורג (optional) ── */}
        {exercises && exercises.length > 0 && (
          <section id="exercises">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-black shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-black">תרגול מדורג</h2>
                <p className="text-sm text-slate-500">קל → בינוני → בגרות — נסה לפתור לפני שתסתכל</p>
              </div>
            </div>
            <div className="space-y-4">
              {exercises.map((ex, i) => (
                <ExerciseCard key={i} exercise={ex} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* ── 5. טיפים ── */}
        <section id="tips">
          <TipsBox tips={tips} />
          <AiTutor topic={title} />
        </section>

        {/* ── Navigation ── */}
        <nav className="flex justify-between items-center pt-6">
          <div>
            {prevTopic ? (
              <Link
                href={`/topic/${prevTopic.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-slate-800 transition-all text-sm font-medium text-white"
              >
                <span>▶</span>
                <span>
                  <span className="block text-xs text-white/60 mb-0.5">נושא קודם</span>
                  {prevTopic.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black"
              >
                ← חזרה לדף הבית
              </Link>
            )}
          </div>

          <div>
            {nextTopic ? (
              <Link
                href={`/topic/${nextTopic.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-slate-800 transition-all text-sm font-medium text-white"
              >
                <span>
                  <span className="block text-xs text-white/60 mb-0.5">נושא הבא</span>
                  {nextTopic.title}
                </span>
                <span>◀</span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black"
              >
                ← חזרה לדף הבית
              </Link>
            )}
          </div>
        </nav>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-black mt-8" dir="rtl">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "serif", fontStyle: "italic" }}
              >
                ∑
              </span>
              <span className="font-bold text-white text-sm">
                בגרות מתמטיקה 5 יח״ל
              </span>
            </Link>
            <p className="text-white/60 text-sm">כיתה י״א – בהצלחה בבחינה!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
