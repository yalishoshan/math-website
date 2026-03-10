import Link from "next/link";
import Navbar from "@/components/Navbar";
import TipsBox from "@/components/TipsBox";
import FormulaCard from "@/components/FormulaCard";
import AiTutor from "@/components/AiTutor";
import { topics } from "@/data/topics";

export const metadata = {
  title: "פונקציות טריגונומטריות – בגרות מתמטיקה 5 יח״ל",
  description:
    "פונקציות טריגונומטריות בשאלון 581 – תכונות גרפים, נגזרות, אינטגרלים, חקירת פונקציה ושטחים.",
};

/* ─── KaTeX Formula Cards ─────────────────────────────────── */

const keyFormulas = [
  {
    title: "(sin x)′",
    latex: "(\\sin x)' = \\cos x",
    explanation: "נגזרת סינוס",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="8" y1="30" x2="112" y2="30" stroke="currentColor" strokeWidth="0.8" />
        <line x1="8" y1="8" x2="8" y2="54" stroke="currentColor" strokeWidth="0.8" />
        {/* sin(x) curve – one full period */}
        <path d="M8,30 C18,8 28,8 38,30 C48,52 58,52 68,30 C78,8 88,8 98,30 C103,41 108,47 112,50"
          fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* cos(x) = derivative – shifted π/2 left = cos starts at 1 */}
        <path d="M8,10 C13,10 18,20 28,30 C38,40 48,50 58,50 C68,50 78,40 88,30 C98,20 103,14 112,12"
          fill="none" stroke="#3b82f6" strokeWidth="1.4" strokeDasharray="3,2" />
        {/* labels */}
        <text x="70" y="8" fontSize="7" fill="currentColor" fontWeight="bold">sin x</text>
        <text x="70" y="18" fontSize="7" fill="#3b82f6">cos x = (sin x)′</text>
      </svg>
    ),
  },
  {
    title: "(cos x)′",
    latex: "(\\cos x)' = -\\sin x",
    explanation: "נגזרת קוסינוס",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="8" y1="30" x2="112" y2="30" stroke="currentColor" strokeWidth="0.8" />
        <line x1="8" y1="8" x2="8" y2="54" stroke="currentColor" strokeWidth="0.8" />
        {/* cos(x) – starts at top */}
        <path d="M8,10 C13,10 18,20 28,30 C38,40 48,50 58,50 C68,50 78,40 88,30 C98,20 103,14 112,12"
          fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* −sin(x) = derivative of cos – flipped sin */}
        <path d="M8,30 C18,52 28,52 38,30 C48,8 58,8 68,30 C78,52 88,52 98,30 C103,19 108,13 112,10"
          fill="none" stroke="#ef4444" strokeWidth="1.4" strokeDasharray="3,2" />
        {/* labels */}
        <text x="70" y="8" fontSize="7" fill="currentColor" fontWeight="bold">cos x</text>
        <text x="55" y="56" fontSize="7" fill="#ef4444">−sin x = (cos x)′</text>
      </svg>
    ),
  },
  {
    title: "(sin u)′",
    latex: "(\\sin u)' = \\cos u \\cdot u'",
    explanation: "כלל שרשרת – u = u(x)",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* chain rule boxes */}
        {/* outer: sin(·) */}
        <rect x="6" y="20" width="28" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="20" y="30" fontSize="7" fill="currentColor" textAnchor="middle">sin(·)</text>
        {/* inner: u(x) */}
        <rect x="56" y="20" width="26" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="69" y="30" fontSize="7" fill="currentColor" textAnchor="middle">u(x)</text>
        {/* arrow inner → outer */}
        <line x1="56" y1="27" x2="34" y2="27" stroke="currentColor" strokeWidth="1" />
        <polygon points="34,24 34,30 28,27" fill="currentColor" />
        {/* x → inner */}
        <line x1="92" y1="27" x2="82" y2="27" stroke="currentColor" strokeWidth="1" />
        <polygon points="82,24 82,30 76,27" fill="currentColor" />
        <text x="94" y="30" fontSize="7" fill="currentColor">x</text>
        {/* result */}
        <text x="6" y="50" fontSize="6.5" fill="currentColor">[sin u]′ =</text>
        <text x="47" y="50" fontSize="6.5" fill="#3b82f6" fontWeight="bold">cos u</text>
        <text x="65" y="50" fontSize="6.5" fill="currentColor"> · </text>
        <text x="70" y="50" fontSize="6.5" fill="#ef4444" fontWeight="bold">u′</text>
        <text x="6" y="10" fontSize="5.5" fill="currentColor">כלל שרשרת: חיצוני × פנימי</text>
      </svg>
    ),
  },
  {
    title: "(cos u)′",
    latex: "(\\cos u)' = -\\sin u \\cdot u'",
    explanation: "כלל שרשרת – u = u(x)",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* same structure but for cos */}
        <rect x="6" y="20" width="28" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="20" y="30" fontSize="7" fill="currentColor" textAnchor="middle">cos(·)</text>
        <rect x="56" y="20" width="26" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="69" y="30" fontSize="7" fill="currentColor" textAnchor="middle">u(x)</text>
        <line x1="56" y1="27" x2="34" y2="27" stroke="currentColor" strokeWidth="1" />
        <polygon points="34,24 34,30 28,27" fill="currentColor" />
        <line x1="92" y1="27" x2="82" y2="27" stroke="currentColor" strokeWidth="1" />
        <polygon points="82,24 82,30 76,27" fill="currentColor" />
        <text x="94" y="30" fontSize="7" fill="currentColor">x</text>
        {/* result – note the minus */}
        <text x="6" y="50" fontSize="6.5" fill="currentColor">[cos u]′ =</text>
        <text x="47" y="50" fontSize="6.5" fill="#ef4444" fontWeight="bold">−sin u</text>
        <text x="74" y="50" fontSize="6.5" fill="currentColor"> · </text>
        <text x="79" y="50" fontSize="6.5" fill="#3b82f6" fontWeight="bold">u′</text>
        {/* minus sign emphasis */}
        <text x="6" y="10" fontSize="5.5" fill="#ef4444">שים לב לסימן המינוס!</text>
      </svg>
    ),
  },
  {
    title: "∫sin(x)dx",
    latex: "\\int \\sin x\\, dx = -\\cos x + C",
    explanation: "אינטגרל בסיסי של סינוס",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="8" y1="30" x2="112" y2="30" stroke="currentColor" strokeWidth="0.8" />
        <line x1="8" y1="8" x2="8" y2="54" stroke="currentColor" strokeWidth="0.8" />
        {/* sin curve */}
        <path d="M8,30 C18,8 28,8 38,30 C48,52 58,52 68,30 C78,8 88,8 98,30"
          fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* shaded area under first arch (positive) */}
        <path d="M8,30 C18,8 28,8 38,30 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M8,30 C18,8 28,8 38,30" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* shaded area above second arch (negative → absolute value) */}
        <path d="M38,30 C48,52 58,52 68,30 Z" fill="#ef4444" fillOpacity="0.1" />
        {/* labels */}
        <text x="16" y="26" fontSize="6" fill="currentColor">+2</text>
        <text x="46" y="44" fontSize="6" fill="#ef4444">−2</text>
        <text x="60" y="10" fontSize="6.5" fill="currentColor">∫sin x dx = −cos x + C</text>
        <text x="60" y="19" fontSize="5.5" fill="currentColor">∫[0→π] sin x = 2</text>
      </svg>
    ),
  },
  {
    title: "∫cos(x)dx",
    latex: "\\int \\cos x\\, dx = \\sin x + C",
    explanation: "אינטגרל בסיסי של קוסינוס",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="8" y1="30" x2="112" y2="30" stroke="currentColor" strokeWidth="0.8" />
        <line x1="8" y1="8" x2="8" y2="54" stroke="currentColor" strokeWidth="0.8" />
        {/* cos curve – starts at max */}
        <path d="M8,10 C13,10 18,20 28,30 C38,40 48,50 58,50 C68,50 78,40 88,30 C98,20 103,14 112,12"
          fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* shaded positive area from 0 to π/2 */}
        <path d="M8,10 C13,10 18,20 28,30 L28,30 L8,30 Z" fill="currentColor" fillOpacity="0.15" />
        {/* shaded negative area from π/2 to π */}
        <path d="M28,30 C38,40 48,50 58,50 L58,30 L28,30 Z" fill="#ef4444" fillOpacity="0.1" />
        {/* markers */}
        <line x1="28" y1="28" x2="28" y2="32" stroke="currentColor" strokeWidth="0.9" />
        <line x1="58" y1="28" x2="58" y2="32" stroke="currentColor" strokeWidth="0.9" />
        <text x="24" y="38" fontSize="5.5" fill="currentColor">π/2</text>
        <text x="54" y="38" fontSize="5.5" fill="currentColor">π</text>
        <text x="55" y="10" fontSize="6.5" fill="currentColor">∫cos x dx = sin x + C</text>
        <text x="55" y="19" fontSize="5.5" fill="currentColor">∫[0→π/2] cos x = 1</text>
      </svg>
    ),
  },
];

/* ─── Types ─────────────────────────────────────────────── */

interface FEntry { name: string; formula: string; note?: string }

/* ─── Basic Function Properties ─────────────────────────── */

const funcProps = [
  {
    name: "f(x) = sin(x)",
    domain: "ℝ (כל הממשיים)",
    range: "[−1, 1]",
    period: "2π (360°)",
    parity: "אי-זוגית: sin(−x) = −sin(x)",
    zeros: "x = πk",
    max: "x = π/2 + 2πk  →  y = 1",
    min: "x = 3π/2 + 2πk  →  y = −1",
    asymptotes: "אין",
  },
  {
    name: "f(x) = cos(x)",
    domain: "ℝ (כל הממשיים)",
    range: "[−1, 1]",
    period: "2π (360°)",
    parity: "זוגית: cos(−x) = cos(x)",
    zeros: "x = π/2 + πk",
    max: "x = 2πk  →  y = 1",
    min: "x = π + 2πk  →  y = −1",
    asymptotes: "אין",
  },
  {
    name: "f(x) = tan(x)",
    domain: "ℝ, x ≠ π/2 + πk",
    range: "ℝ (כל הממשיים)",
    period: "π (180°)",
    parity: "אי-זוגית: tan(−x) = −tan(x)",
    zeros: "x = πk",
    max: "—",
    min: "—",
    asymptotes: "אנכיות: x = π/2 + πk",
  },
];

/* ─── Shifted Function ───────────────────────────────────── */

const shiftedParams = [
  { param: "A", name: "משרעת",          effect: "גובה הגל. y_max = D + |A|, y_min = D − |A|", note: "A < 0 → הגרף מהופך" },
  { param: "B", name: "תדר",            effect: "מחזור: T = 2π / |B| (בדרגות: 360° / |B|)",  note: "B < 0 → הפוך סימן" },
  { param: "C", name: "הזזה אופקית",    effect: "נקודת התחלה: Bx + C = 0  →  x = −C/B",      note: "C > 0 → שמאלה" },
  { param: "D", name: "הזזה אנכית",     effect: "ציר הסימטריה: y = D",                        note: "" },
];

const shiftedFormulas: FEntry[] = [
  { name: "מחזור",        formula: "T = 2π / |B|" },
  { name: "y מקסימלי",   formula: "y_max = D + |A|" },
  { name: "y מינימלי",   formula: "y_min = D – |A|" },
  { name: "הזזה אופקית", formula: "x_start = –C / B" },
];

/* ─── Domain Rules ───────────────────────────────────────── */

const domainRules = [
  { type: "sin(g(x)) או cos(g(x))", condition: "כל הממשיים – אין הגבלה",           note: "" },
  { type: "tan(g(x))",               condition: "g(x) ≠ π/2 + πk",                 note: "כלומר g(x) ≠ 90° + 180°k" },
  { type: "1 / sin(g(x))",           condition: "sin(g(x)) ≠ 0  ⟹  g(x) ≠ πk",  note: "" },
  { type: "1 / cos(g(x))",           condition: "cos(g(x)) ≠ 0  ⟹  g(x) ≠ π/2 + πk", note: "" },
  { type: "√(sin(x))",               condition: "sin(x) ≥ 0",                       note: "2πk ≤ x ≤ π + 2πk" },
];

/* ─── Derivatives ────────────────────────────────────────── */

const basicDerivatives: FEntry[] = [
  { name: "sin(x)",        formula: "cos(x)" },
  { name: "cos(x)",        formula: "−sin(x)" },
  { name: "tan(x)",        formula: "1 / cos²(x)" },
  { name: "cot(x)",        formula: "−1 / sin²(x)" },
];

const chainDerivatives: FEntry[] = [
  { name: "(sin u(x))′", formula: "cos(u(x)) · u′(x)" },
  { name: "(cos u(x))′", formula: "−sin(u(x)) · u′(x)" },
  { name: "(tan u(x))′", formula: "u′(x) / cos²(u(x))" },
];

const derivativeExamples: FEntry[] = [
  { name: "sin(2x)",               formula: "2cos(2x)" },
  { name: "cos(3x)",               formula: "−3sin(3x)" },
  { name: "sin²(x)",               formula: "2sin(x)·cos(x) = sin(2x)" },
  { name: "cos²(x)",               formula: "−2cos(x)·sin(x) = −sin(2x)" },
  { name: "sin²(x) + cos²(x)",     formula: "0  (קבוע!)" },
  { name: "tan(x)",                formula: "1/cos²(x) = 1 + tan²(x)" },
];

/* ─── Integrals ──────────────────────────────────────────── */

const basicIntegrals: FEntry[] = [
  { name: "∫ sin(x) dx",      formula: "−cos(x) + C" },
  { name: "∫ cos(x) dx",      formula: "sin(x) + C" },
  { name: "∫ 1/cos²(x) dx",  formula: "tan(x) + C" },
  { name: "∫ 1/sin²(x) dx",  formula: "−cot(x) + C" },
];

const compositeIntegrals: FEntry[] = [
  { name: "∫ sin(ax + b) dx",           formula: "−(1/a)·cos(ax + b) + C" },
  { name: "∫ cos(ax + b) dx",           formula: "(1/a)·sin(ax + b) + C" },
  { name: "∫ sin(u(x))·u′(x) dx",      formula: "−cos(u(x)) + C" },
  { name: "∫ cos(u(x))·u′(x) dx",      formula: "sin(u(x)) + C" },
];

const integrationIdentities: FEntry[] = [
  { name: "sin²(x)",          formula: "= (1 − cos(2x)) / 2",  note: "לאינטגרציה של sin²" },
  { name: "cos²(x)",          formula: "= (1 + cos(2x)) / 2",  note: "לאינטגרציה של cos²" },
  { name: "sin(x)·cos(x)",   formula: "= sin(2x) / 2",         note: "לאינטגרציה של מכפלה" },
];

/* ─── Area Formulas ──────────────────────────────────────── */

const areaFormulas: FEntry[] = [
  { name: "מעל ציר x",            formula: "S = ∫[a→b] f(x) dx",               note: "f(x) ≥ 0 בכל הקטע" },
  { name: "מתחת לציר x",          formula: "S = −∫[a→b] f(x) dx = |∫f dx|",    note: "f(x) ≤ 0 – תמיד ערך מוחלט!" },
  { name: "שטח כללי",             formula: "S = ∫[a→b] |f(x)| dx",             note: "חלק לתת-קטעים לפי סימן" },
  { name: "בין שתי פונקציות",     formula: "S = ∫[a→b] |f(x) − g(x)| dx",     note: "או (f−g)dx אם f ≥ g" },
];

const commonIntegralResults = [
  { integral: "∫[0 → π] sin(x) dx",      result: "2" },
  { integral: "∫[0 → π/2] cos(x) dx",   result: "1" },
  { integral: "∫[0 → 2π] sin(x) dx",    result: "0  (שטחים מבטלים זה את זה)" },
];

/* ─── f vs f′ ────────────────────────────────────────────── */

const fVsfPrime = [
  { rule: "f עולה  ⟺  f′ > 0" },
  { rule: "f יורדת  ⟺  f′ < 0" },
  { rule: "f קבועה  ⟺  f′ = 0" },
  { rule: "f במינימום מקומי ⟹ f′ = 0 ומחליפה מ(−) ל(+)" },
  { rule: "f במקסימום מקומי ⟹ f′ = 0 ומחליפה מ(+) ל(−)" },
  { rule: "f′ עולה  ⟺  f″ > 0  (קמורה)" },
  { rule: "f′ יורדת  ⟺  f″ < 0  (קעורה)" },
];

/* ─── Second Derivative Test ─────────────────────────────── */

const secondDerivTest = [
  { condition: "f′(x₀) = 0 ו-f″(x₀) > 0", conclusion: "מינימום מקומי ב-x₀" },
  { condition: "f′(x₀) = 0 ו-f″(x₀) < 0", conclusion: "מקסימום מקומי ב-x₀" },
  { condition: "f′(x₀) = 0 ו-f″(x₀) = 0", conclusion: "אין מסקנה – נדרשת טבלת סימנים" },
];

/* ─── Useful Identities ──────────────────────────────────── */

const usefulIdentities: FEntry[] = [
  { name: "sin²+cos²=1",           formula: "sin²(x) = 1 − cos²(x)",          note: "להחליף sin² בcosinus" },
  { name: "sin(2x)",               formula: "= 2·sin(x)·cos(x)",               note: "לפשט מכפלת sin·cos" },
  { name: "cos(2x) ← sin",        formula: "cos(2x) = 1 − 2·sin²(x)",        note: "להמיר sin² לcosinus" },
  { name: "cos(2x) ← cos",        formula: "cos(2x) = 2·cos²(x) − 1",        note: "להמיר cos² לcosinus" },
  { name: "sin²(x) ←",           formula: "sin²(x) = (1 − cos(2x)) / 2",    note: "לאינטגרציה" },
  { name: "cos²(x) ←",           formula: "cos²(x) = (1 + cos(2x)) / 2",    note: "לאינטגרציה" },
];

/* ─── Investigation Steps ────────────────────────────────── */

const investigationSteps = [
  { n: 1, title: "תחום הגדרה",         body: "מצא היכן הפונקציה מוגדרת. עבור tan: פתור cos(u) ≠ 0. עבור שורש: תנאי אי-שליליות." },
  { n: 2, title: "פריצה (אפסים)",      body: "פתור f(x) = 0. השתמש בזהויות כדי לפרק. sin(u) = 0 ⟹ u = πk" },
  { n: 3, title: "סימן הפונקציה",     body: "בנה טבלת סימנים בין האפסים. קבע היכן f > 0 ו-f < 0" },
  { n: 4, title: "נגזרת ראשונה f′(x)", body: "גזור תוך שימוש בכלל השרשרת. הוצא גורם משותף לפני פתרון." },
  { n: 5, title: "נקודות קיצון",      body: "פתור f′(x) = 0. sin(u) = 0 ⟹ u = πk; cos(u) = 0 ⟹ u = π/2 + πk. בנה טבלת סימנים." },
  { n: 6, title: "עלייה / ירידה",     body: "f′ > 0 ⟹ עולה. f′ < 0 ⟹ יורדת. קבע קיצון (מקסימום / מינימום) מהחלפת הסימן." },
  { n: 7, title: "נגזרת שנייה f″(x)", body: "גזור את f′ פעם נוספת. חלופה: השתמש ב-f″(x₀) לסיווג הקיצון." },
  { n: 8, title: "פיתול וקמירות",     body: "f″(x) = 0 – מועמדים לנקודות פיתול. f″ > 0 ⟹ קמורה; f″ < 0 ⟹ קעורה. בדוק החלפת סימן." },
  { n: 9, title: "אסימפטוטות וגבולות", body: "אנכיות: tan ב-x = π/2 + πk. גבול ידוע: lim(sin x / x) = 1 כש-x → 0." },
];

/* ─── Tips ───────────────────────────────────────────────── */

const tips = [
  "(sin x)′ = cos x, (cos x)′ = −sin x – שימו לב לסימנים! שכחת המינוס בקוסינוס היא הטעות הנפוצה ביותר",
  "כלל שרשרת: תמיד הכפל בנגזרת הפנימית u′(x) – אל תשכח!",
  "לאינטגרציה של sin²(x): החלף תחילה ל-(1 − cos2x)/2, ואז אינטגרל בסיסי",
  "שטח מתחת לציר: ערך אינטגרל יוצא שלילי – תמיד קח ערך מוחלט לחישוב שטח",
  "בחקירת פונקציה: sin(x) = 0 ⟹ x = πk; cos(x) = 0 ⟹ x = π/2 + πk",
  "גבול חשוב: lim(sin x / x) = 1 כאשר x → 0 (ברדיאנים בלבד!)",
];

/* ─── Navigation ─────────────────────────────────────────── */

const idx = topics.findIndex((t) => t.id === "trig-functions");
const prev = idx > 0 ? topics[idx - 1] : null;
const next = idx < topics.length - 1 ? topics[idx + 1] : null;

/* ─── Helper Components ──────────────────────────────────── */

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-7 rounded-full bg-black shrink-0" />
      <div>
        <h2 className="text-xl font-bold text-black">{title}</h2>
        {sub && <p className="text-sm text-black">{sub}</p>}
      </div>
    </div>
  );
}

function FRow({ name, formula, note }: FEntry) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100 last:border-0" dir="rtl">
      <div className="shrink-0 text-right min-w-[130px]">
        <span className="text-sm font-semibold text-black">{name}</span>
        {note && <span className="block text-xs text-slate-400">{note}</span>}
      </div>
      <code className="text-sm font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded leading-relaxed" dir="ltr">
        {formula}
      </code>
    </div>
  );
}

function DarkCard({ id, title, note, children }: { id: number | string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
      <div className="bg-slate-800 text-white px-4 py-3 flex items-center gap-3">
        <span className="w-7 h-7 rounded-full bg-white/15 text-xs font-black flex items-center justify-center shrink-0">{id}</span>
        <div>
          <h3 className="font-bold text-sm">{title}</h3>
          {note && <p className="text-white/60 text-xs">{note}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function TrigFunctionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId="trig-functions" />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">בית</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">פונקציות טריגונומטריות</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex-1">
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1">שאלון 581</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">פונקציות טריגונומטריות</h1>
            <p className="text-white/70 font-medium">נגזרות, אינטגרלים וחקירת פונקציה</p>
          </div>
          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl text-sm">
            תכונות גרפים, פונקציות מוזזות, תחומי הגדרה, נגזרות בכלל שרשרת, אינטגרלים, שטחים וחקירת פונקציה מלאה.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            {["6 נוסחות KaTeX", "נגזרות ואינטגרלים", "9 שלבי חקירה", "שטחים"].map((s) => (
              <span key={s} className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── 1. נוסחות KaTeX ── */}
        <section>
          <SectionHead title="נוסחות מפתח" sub="נגזרות ואינטגרלים בסיסיים" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFormulas.map((f, i) => (
              <FormulaCard key={i} title={f.title} latex={f.latex} explanation={f.explanation} index={i} svgContent={f.svgContent} />
            ))}
          </div>
        </section>

        {/* ── 2. תכונות הפונקציות ── */}
        <section>
          <SectionHead title="תכונות הפונקציות הבסיסיות" />
          <div className="space-y-4">
            {funcProps.map((f, i) => (
              <div key={i} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
                <div className="bg-slate-800 text-white px-4 py-3">
                  <h3 className="font-bold text-sm font-mono">{f.name}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 divide-x divide-slate-100">
                  {[
                    ["תחום", f.domain],
                    ["טווח", f.range],
                    ["מחזור", f.period],
                    ["זוגיות", f.parity],
                    ["אפסים", f.zeros],
                    ["אסימפטוטות", f.asymptotes],
                  ].map(([label, value]) => (
                    <div key={label} className="px-3 py-2.5 border-b border-slate-100">
                      <p className="text-xs text-slate-400 mb-0.5">{label}</p>
                      <p className="text-sm font-mono text-slate-700">{value}</p>
                    </div>
                  ))}
                  {f.max !== "—" && (
                    <div className="px-3 py-2.5 border-b border-slate-100 col-span-2 sm:col-span-3">
                      <p className="text-xs text-slate-400 mb-0.5">מקסימום / מינימום</p>
                      <p className="text-sm font-mono text-slate-700">{f.max}  /  {f.min}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. פונקציה מוזזת ── */}
        <section>
          <SectionHead title="פונקציה מוזזת – y = A·sin(Bx + C) + D" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
              <div className="bg-slate-800 text-white px-4 py-3">
                <h3 className="font-bold text-sm">משמעות הפרמטרים</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {shiftedParams.map((p) => (
                  <div key={p.param} className="flex items-start gap-3 px-4 py-3">
                    <span className="w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0">{p.param}</span>
                    <div>
                      <p className="text-sm font-semibold text-black">{p.name}</p>
                      <p className="text-sm text-slate-600">{p.effect}</p>
                      {p.note && <p className="text-xs text-slate-400">{p.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
              <div className="bg-slate-800 text-white px-4 py-3">
                <h3 className="font-bold text-sm">נוסחאות מפתח</h3>
              </div>
              <div className="px-4 py-1">
                {shiftedFormulas.map((f, i) => <FRow key={i} {...f} />)}
              </div>
              <div className="px-4 pb-4 pt-2">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold">דוגמה:</span> y = 3·sin(2x − π/2) + 1<br />
                  A=3, B=2, C=−π/2, D=1 → T=π, y∈[−2,4], x_start=π/4
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. תחום הגדרה ── */}
        <section>
          <SectionHead title="תחום הגדרה – כללים" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">סוג הפונקציה</th>
                  <th className="px-4 py-3 text-right font-semibold">תנאי תחום</th>
                  <th className="px-4 py-3 text-right font-semibold">הערה</th>
                </tr>
              </thead>
              <tbody>
                {domainRules.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono font-semibold text-black">{row.type}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700">{row.condition}</td>
                    <td className="px-4 py-2.5 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5. נגזרות ── */}
        <section>
          <SectionHead title="נגזרות" sub="בסיסי, כלל שרשרת ודוגמאות" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DarkCard id="א" title="נגזרות בסיסיות">
              <div className="px-4 py-1">
                {basicDerivatives.map((f, i) => <FRow key={i} name={`(${f.name})′`} formula={f.formula} />)}
              </div>
            </DarkCard>
            <DarkCard id="ב" title="כלל שרשרת">
              <div className="px-4 py-1">
                {chainDerivatives.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
          </div>
          <div className="mt-4">
            <DarkCard id="ג" title="דוגמאות נפוצות">
              <div className="px-4 py-1">
                {derivativeExamples.map((f, i) => (
                  <FRow key={i} name={`(${f.name})′`} formula={f.formula} />
                ))}
              </div>
            </DarkCard>
          </div>
        </section>

        {/* ── 6. אינטגרלים ── */}
        <section>
          <SectionHead title="אינטגרלים" sub="בסיסי, מורכב וזהויות לאינטגרציה" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DarkCard id="א" title="אינטגרלים בסיסיים">
              <div className="px-4 py-1">
                {basicIntegrals.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
            <DarkCard id="ב" title="פונקציות מורכבות">
              <div className="px-4 py-1">
                {compositeIntegrals.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
          </div>
          <div className="mt-4">
            <DarkCard id="ג" title="זהויות לפישוט לפני אינטגרציה">
              <div className="px-4 py-1">
                {integrationIdentities.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
          </div>
        </section>

        {/* ── 7. זהויות שימושיות ── */}
        <section>
          <SectionHead title="זהויות שימושיות לפישוט" sub="לפני גזירה / אינטגרציה" />
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
            <div className="px-4 py-1">
              {usefulIdentities.map((f, i) => <FRow key={i} {...f} />)}
            </div>
          </div>
        </section>

        {/* ── 8. שטחים ── */}
        <section>
          <SectionHead title="חישוב שטחים" sub="סוגי שטחים ותוצאות נפוצות" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
              <div className="bg-slate-800 text-white px-4 py-3">
                <h3 className="font-bold text-sm">נוסחאות שטח</h3>
              </div>
              <div className="px-4 py-1">
                {areaFormulas.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
              <div className="bg-slate-800 text-white px-4 py-3">
                <h3 className="font-bold text-sm">תוצאות נפוצות לשינון</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {commonIntegralResults.map((r, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-3">
                    <code className="text-sm font-mono text-slate-700 bg-slate-50 px-2 py-0.5 rounded" dir="ltr">{r.integral}</code>
                    <span className="font-bold text-black text-sm">{r.result}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3">
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  <p className="text-xs text-amber-800 font-medium">
                    ∫[0→2π] sin(x) = 0 כי השטחים מעל ומתחת לציר x מבטלים זה את זה – אל תטעו ותחשבו שזה שטח!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. קשר f ו-f′ ── */}
        <section>
          <SectionHead title="קשר בין גרף הפונקציה לגרף הנגזרת" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fVsfPrime.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm flex items-center gap-3" dir="rtl">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="text-sm font-mono text-slate-700">{item.rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. נגזרת שנייה ── */}
        <section>
          <SectionHead title="נגזרת שנייה – בחינת קיצון" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">תנאי</th>
                  <th className="px-4 py-3 text-right font-semibold">מסקנה</th>
                </tr>
              </thead>
              <tbody>
                {secondDerivTest.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono text-slate-700">{row.condition}</td>
                    <td className="px-4 py-2.5 font-semibold text-black">{row.conclusion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 11. שלבי חקירה ── */}
        <section>
          <SectionHead title="חקירת פונקציה טריגונומטרית – שלבי החקירה" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {investigationSteps.map((step) => (
              <div
                key={step.n}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all"
                dir="rtl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0">
                    {step.n}
                  </span>
                  <h3 className="font-bold text-black text-sm">{step.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pr-10">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tips ── */}
        <section>
          <TipsBox tips={tips} />
          <AiTutor topic="פונקציות טריגונומטריות" />
        </section>

        {/* ── Navigation ── */}
        <nav className="flex justify-between items-center pt-6">
          <div>
            {prev ? (
              <Link
                href={`/topic/${prev.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-slate-800 transition-all text-sm font-medium text-white"
              >
                <span>▶</span>
                <span>
                  <span className="block text-xs text-white/60 mb-0.5">נושא קודם</span>
                  {prev.title}
                </span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black">
                ← חזרה לדף הבית
              </Link>
            )}
          </div>
          <div>
            {next ? (
              <Link
                href={`/topic/${next.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-slate-800 transition-all text-sm font-medium text-white"
              >
                <span>
                  <span className="block text-xs text-white/60 mb-0.5">נושא הבא</span>
                  {next.title}
                </span>
                <span>◀</span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black">
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
              <span className="text-white font-bold text-xl" style={{ fontFamily: "serif", fontStyle: "italic" }}>∑</span>
              <span className="font-bold text-white text-sm">בגרות מתמטיקה 5 יח״ל</span>
            </Link>
            <p className="text-white/60 text-sm">כיתה י״א – בהצלחה בבחינה!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
