import Link from "next/link";
import Navbar from "@/components/Navbar";
import TipsBox from "@/components/TipsBox";
import FormulaCard from "@/components/FormulaCard";
import AiTutor from "@/components/AiTutor";
import { topics } from "@/data/topics";

export const metadata = {
  title: "חשבון דיפרנציאלי ואינטגרלי – בגרות מתמטיקה 5 יח״ל",
  description:
    "חדו\"א בשאלון 581 – גבולות, נגזרות, אינטגרלים, שיטות אינטגרציה, שטחים, נפחי סיבוב, פונקציות שורש וחקירת פונקציה.",
};

/* ─── Types ─────────────────────────────────────────────── */

interface FEntry { name: string; formula: string; note?: string }

/* ─── KaTeX Formula Cards ─────────────────────────────────── */

const keyFormulas = [
  {
    title: "(√x)′",
    latex: "(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}",
    explanation: "מוגדרת רק ל-x > 0",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="10" y1="54" x2="110" y2="54" stroke="currentColor" strokeWidth="0.9" />
        <line x1="10" y1="54" x2="10" y2="6" stroke="currentColor" strokeWidth="0.9" />
        {/* √x curve */}
        <path d="M10,54 Q30,30 60,22 Q90,14 110,10" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* tangent line at x=25 (approx point (25,42)→slope small) */}
        <line x1="18" y1="46" x2="46" y2="36" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="2.5,2" />
        {/* point on curve */}
        <circle cx="30" cy="41" r="2.2" fill="currentColor" />
        {/* labels */}
        <text x="85" y="12" fontSize="7.5" fill="currentColor" fontWeight="bold">y=√x</text>
        <text x="48" y="33" fontSize="6.5" fill="#3b82f6">slope=1/(2√x)</text>
        <text x="11" y="52" fontSize="6" fill="currentColor">0</text>
        <text x="107" y="58" fontSize="6.5" fill="currentColor">x</text>
      </svg>
    ),
  },
  {
    title: "(√u)′ – שרשרת",
    latex: "(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}",
    explanation: "u = u(x), מוגדרת כאשר u(x) > 0",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* chain rule diagram: f(g(x)) */}
        {/* outer box */}
        <rect x="8" y="22" width="30" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="23" y="33" fontSize="7" fill="currentColor" textAnchor="middle">√(·)</text>
        {/* inner box */}
        <rect x="60" y="22" width="24" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="72" y="33" fontSize="7" fill="currentColor" textAnchor="middle">u(x)</text>
        {/* arrow outer ← inner */}
        <line x1="60" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" />
        <polygon points="38,27 38,33 32,30" fill="currentColor" />
        {/* x input arrow */}
        <line x1="95" y1="30" x2="84" y2="30" stroke="currentColor" strokeWidth="1" />
        <polygon points="84,27 84,33 78,30" fill="currentColor" />
        <text x="97" y="33" fontSize="7" fill="currentColor">x</text>
        {/* result label */}
        <text x="8" y="52" fontSize="6.5" fill="currentColor">[√u]′ =</text>
        <text x="36" y="52" fontSize="6.5" fill="#3b82f6" fontWeight="bold">u′</text>
        <text x="44" y="52" fontSize="6.5" fill="currentColor"> / 2√u</text>
        {/* title */}
        <text x="60" y="13" fontSize="6" fill="currentColor" textAnchor="middle">כלל שרשרת</text>
      </svg>
    ),
  },
  {
    title: "∫√x dx",
    latex: "\\int \\sqrt{x}\\, dx = \\tfrac{2}{3}x^{3/2} + C",
    explanation: "כתוב √x = x^(1/2) והשתמש בנוסחת החזקה",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="10" y1="54" x2="100" y2="54" stroke="currentColor" strokeWidth="0.9" />
        <line x1="10" y1="54" x2="10" y2="8" stroke="currentColor" strokeWidth="0.9" />
        {/* shaded area under √x from 0 to ~70 */}
        <path d="M10,54 Q30,38 55,28 Q75,20 90,16 L90,54 Z" fill="currentColor" fillOpacity="0.12" />
        {/* √x curve */}
        <path d="M10,54 Q30,38 55,28 Q75,20 90,16" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* a and b markers */}
        <line x1="10" y1="54" x2="10" y2="58" stroke="currentColor" strokeWidth="0.9" />
        <line x1="90" y1="54" x2="90" y2="58" stroke="currentColor" strokeWidth="0.9" />
        <text x="7" y="62" fontSize="6.5" fill="currentColor">a</text>
        <text x="88" y="62" fontSize="6.5" fill="currentColor">b</text>
        {/* label */}
        <text x="38" y="48" fontSize="6.5" fill="currentColor">S = ²⁄₃·b^(³⁄₂)</text>
        <text x="72" y="10" fontSize="7" fill="currentColor">y=√x</text>
      </svg>
    ),
  },
  {
    title: "∫1/√x dx",
    latex: "\\int \\frac{1}{\\sqrt{x}}\\, dx = 2\\sqrt{x} + C",
    explanation: "כתוב 1/√x = x^(−1/2) והשתמש בנוסחת החזקה",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="10" y1="54" x2="110" y2="54" stroke="currentColor" strokeWidth="0.9" />
        <line x1="10" y1="8" x2="10" y2="54" stroke="currentColor" strokeWidth="0.9" />
        {/* 1/√x curve – starts high near 0, decreases */}
        <path d="M12,8 Q16,12 22,18 Q35,26 55,34 Q75,40 105,46" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* shaded area */}
        <path d="M18,14 Q26,20 38,27 Q55,34 80,42 L80,54 L18,54 Z" fill="currentColor" fillOpacity="0.1" />
        {/* vertical asymptote hint */}
        <line x1="10" y1="8" x2="10" y2="54" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.4" />
        <text x="70" y="42" fontSize="7" fill="currentColor">y=1/√x</text>
        <text x="28" y="52" fontSize="6.5" fill="currentColor">∫ = 2√x + C</text>
      </svg>
    ),
  },
  {
    title: "∫f′(x)/f(x) dx",
    latex: "\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C",
    explanation: "זיהוי: המונה הוא נגזרת המכנה (או כפולה שלה)",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* recognition diagram */}
        {/* fraction bar */}
        <line x1="30" y1="32" x2="90" y2="32" stroke="currentColor" strokeWidth="1" />
        {/* numerator box (f') */}
        <rect x="48" y="18" width="24" height="12" rx="2" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" />
        <text x="60" y="28" fontSize="7" fill="#3b82f6" textAnchor="middle" fontWeight="bold">f ′(x)</text>
        {/* denominator box (f) */}
        <rect x="48" y="34" width="24" height="12" rx="2" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1" />
        <text x="60" y="43.5" fontSize="7" fill="#ef4444" textAnchor="middle" fontWeight="bold">f (x)</text>
        {/* arrow to result */}
        <line x1="78" y1="30" x2="94" y2="30" stroke="currentColor" strokeWidth="1" />
        <polygon points="94,27 94,33 100,30" fill="currentColor" />
        <text x="102" y="28" fontSize="6.5" fill="currentColor">ln</text>
        <text x="102" y="36" fontSize="6.5" fill="currentColor">|f|</text>
        {/* label */}
        <text x="8" y="12" fontSize="6" fill="currentColor">זיהוי מבנה:</text>
        <text x="8" y="55" fontSize="6" fill="currentColor">מונה = נגזרת מכנה</text>
      </svg>
    ),
  },
  {
    title: "אינטגרציה בחלקים",
    latex: "\\int u\\, dv = u \\cdot v - \\int v\\, du",
    explanation: "LIATE – בחר u: לוגריתם > פולינום > טריגו > אקספוננט",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* LIATE priority ladder */}
        {[
          { label: "L – ln", y: 12, fill: "#1d4ed8" },
          { label: "I – arcsin", y: 22, fill: "#2563eb" },
          { label: "A – x²", y: 32, fill: "#3b82f6" },
          { label: "T – sin", y: 42, fill: "#60a5fa" },
          { label: "E – eˣ", y: 52, fill: "#93c5fd" },
        ].map(({ label, y, fill }) => (
          <g key={label}>
            <rect x="8" y={y - 8} width="60" height="9" rx="1.5" fill={fill} fillOpacity="0.18" stroke={fill} strokeWidth="0.7" />
            <text x="12" y={y} fontSize="6.5" fill={fill} fontWeight="bold">{label}</text>
          </g>
        ))}
        {/* arrow down = u priority */}
        <line x1="72" y1="10" x2="72" y2="52" stroke="currentColor" strokeWidth="1" />
        <polygon points="69,52 75,52 72,57" fill="currentColor" />
        <text x="74" y="20" fontSize="5.5" fill="currentColor">עדיפות</text>
        <text x="74" y="27" fontSize="5.5" fill="currentColor">ל-u ←</text>
        {/* formula reminder */}
        <text x="74" y="44" fontSize="5.5" fill="currentColor">uv−∫v du</text>
      </svg>
    ),
  },
  {
    title: "משפט היסוד",
    latex: "\\int_a^b f(x)\\, dx = F(b) - F(a)",
    explanation: "F היא פונקציה קדומה של f",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="10" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="0.9" />
        <line x1="10" y1="52" x2="10" y2="8" stroke="currentColor" strokeWidth="0.9" />
        {/* arbitrary curve */}
        <path d="M15,46 C25,30 40,20 60,18 C75,16 90,22 105,20" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* shaded area between a and b */}
        <path d="M35,52 L35,36 C45,28 55,22 70,20 L70,52 Z" fill="currentColor" fillOpacity="0.15" />
        {/* a and b verticals */}
        <line x1="35" y1="36" x2="35" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="70" y1="20" x2="70" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <text x="32" y="57" fontSize="6.5" fill="currentColor">a</text>
        <text x="68" y="57" fontSize="6.5" fill="currentColor">b</text>
        {/* F(b)-F(a) label */}
        <text x="36" y="44" fontSize="6" fill="currentColor">F(b)−F(a)</text>
        <text x="80" y="14" fontSize="6.5" fill="currentColor">y=f(x)</text>
      </svg>
    ),
  },
  {
    title: "נפח גוף סיבוב",
    latex: "V = \\pi \\int_a^b [f(x)]^2\\, dx",
    explanation: "סיבוב הגרף סביב ציר x. רבע את הפונקציה, לא את האינטגרל!",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* x-axis */}
        <line x1="8" y1="30" x2="112" y2="30" stroke="currentColor" strokeWidth="0.9" />
        {/* top half of revolution solid (ellipses + curve) */}
        {/* left cap ellipse */}
        <ellipse cx="30" cy="30" rx="4" ry="14" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        {/* right cap ellipse */}
        <ellipse cx="90" cy="30" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
        {/* top contour (f(x) curve) */}
        <path d="M30,16 Q55,10 90,20" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* bottom contour (mirrored) */}
        <path d="M30,44 Q55,50 90,40" fill="none" stroke="currentColor" strokeWidth="1.8" />
        {/* shaded fill of solid */}
        <path d="M30,16 Q55,10 90,20 L90,40 Q55,50 30,44 Z" fill="currentColor" fillOpacity="0.1" />
        {/* radius line */}
        <line x1="60" y1="30" x2="60" y2="14" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="2,1.5" />
        <text x="62" y="23" fontSize="6" fill="#3b82f6">f(x)</text>
        {/* labels */}
        <text x="27" y="57" fontSize="6.5" fill="currentColor">a</text>
        <text x="88" y="57" fontSize="6.5" fill="currentColor">b</text>
        <text x="40" y="10" fontSize="6" fill="currentColor">V = π∫[f(x)]²dx</text>
      </svg>
    ),
  },
];

/* ─── Limits ─────────────────────────────────────────────── */

const limitRules: FEntry[] = [
  { name: "lim[x→a] c",        formula: "c",                note: "גבול של קבוע" },
  { name: "lim[x→a] x",        formula: "a",                note: "" },
  { name: "lim (f ± g)",       formula: "lim f ± lim g",   note: "אם שניהם קיימים" },
  { name: "lim (f · g)",       formula: "lim f · lim g",   note: "" },
  { name: "lim (f / g)",       formula: "lim f / lim g",   note: "אם lim g ≠ 0" },
];

const importantLimits = [
  { limit: "lim[x→0] sin(x)/x",   result: "1",  note: "x ברדיאנים" },
  { limit: "lim[x→∞] (1+1/x)ˣ",  result: "e",  note: "הגדרת המספר e" },
  { limit: "lim[x→0] (eˣ−1)/x",  result: "1",  note: "" },
  { limit: "lim[x→0] ln(1+x)/x", result: "1",  note: "" },
  { limit: "lim[x→∞] xⁿ/eˣ",    result: "0",  note: "eˣ גדל מהר מכל חזקה" },
  { limit: "lim[x→∞] ln(x)/xⁿ", result: "0",  note: "ln גדל לאט מכל חזקה חיובית" },
];

const limitsAtInfinity = [
  { case: "deg(P) < deg(Q)", result: "0" },
  { case: "deg(P) = deg(Q)", result: "מנת המקדמים המובילים" },
  { case: "deg(P) > deg(Q)", result: "±∞" },
];

/* ─── Derivatives ────────────────────────────────────────── */

const derivTable = [
  { func: "c  (קבוע)",   deriv: "0",            note: "" },
  { func: "xⁿ",          deriv: "n·xⁿ⁻¹",      note: "" },
  { func: "√x",          deriv: "1/(2√x)",      note: "x > 0" },
  { func: "1/x",         deriv: "−1/x²",        note: "x ≠ 0" },
  { func: "eˣ",          deriv: "eˣ",           note: "" },
  { func: "aˣ",          deriv: "aˣ·ln(a)",     note: "a > 0, a ≠ 1" },
  { func: "ln(x)",       deriv: "1/x",          note: "x > 0" },
  { func: "log_a(x)",    deriv: "1/(x·ln(a))",  note: "" },
  { func: "sin(x)",      deriv: "cos(x)",       note: "" },
  { func: "cos(x)",      deriv: "−sin(x)",      note: "" },
  { func: "tan(x)",      deriv: "1/cos²(x)",    note: "" },
];

const derivRules: FEntry[] = [
  { name: "כלל סכום",    formula: "(f ± g)′ = f′ ± g′",                 note: "" },
  { name: "כלל מכפלה",   formula: "(f·g)′ = f′·g + f·g′",              note: "נגזרת ראשונה × שנייה + ראשונה × נגזרת שנייה" },
  { name: "כלל מנה",     formula: "(f/g)′ = (f′·g − f·g′) / g²",       note: "מונה: נגזרת מונה × מכנה − מונה × נגזרת מכנה" },
  { name: "כלל שרשרת",   formula: "[f(g(x))]′ = f′(g(x)) · g′(x)",     note: "נגזרת חיצונית × נגזרת פנימית" },
  { name: "כפל בקבוע",   formula: "(c·f)′ = c·f′",                      note: "" },
];

const basicDerivatives: FEntry[] = [
  { name: "(√x)′",              formula: "1 / (2√x)",                note: "x > 0" },
  { name: "(√g(x))′",          formula: "g′(x) / (2√g(x))",        note: "g(x) > 0" },
  { name: "(x^(1/2))′",        formula: "(1/2)·x^(−1/2) = 1/(2√x)", note: "חזקה שברית" },
  { name: "(x^(n/m))′",        formula: "(n/m)·x^(n/m − 1)",        note: "נוסחה כללית" },
];

const derivativeExamples: FEntry[] = [
  { name: "(√(x²+1))′",           formula: "x / √(x²+1)" },
  { name: "(√(2x+3))′",           formula: "1 / √(2x+3)" },
  { name: "(√(1−x²))′",           formula: "−x / √(1−x²)" },
  { name: "(x·√x)′ = (x^(3/2))′", formula: "(3/2)·√x" },
  { name: "(√x · sin x)′",        formula: "sin(x)/(2√x) + √x·cos(x)",  note: "כלל מכפלה" },
  { name: "(sin(√x))′",           formula: "cos(√x) / (2√x)",           note: "כלל שרשרת" },
];

const commonFunctions = [
  { func: "√(x² + a)",       deriv: "x / √(x²+a)",               domain: "ℝ  (a > 0)" },
  { func: "√(a² − x²)",      deriv: "−x / √(a²−x²)",             domain: "(−a, a)" },
  { func: "x·√(a − x)",      deriv: "(2a − 3x) / (2√(a−x))",    domain: "(−∞, a]" },
  { func: "√x · eˣ",         deriv: "eˣ(1 + 2x) / (2√x)",       domain: "(0, ∞)" },
  { func: "√(xⁿ) = x^(n/2)", deriv: "(n/2)·x^(n/2 − 1)",        domain: "[0,∞)" },
];

/* ─── Domain ─────────────────────────────────────────────── */

const domainExamples = [
  { func: "√(x − 3)",   condition: "x − 3 ≥ 0",          domain: "[3, ∞)" },
  { func: "√(9 − x²)", condition: "9 − x² ≥ 0 ⟹ x² ≤ 9", domain: "[−3, 3]" },
  { func: "√(x² − 4)", condition: "x² − 4 ≥ 0 ⟹ x² ≥ 4", domain: "(−∞,−2] ∪ [2,∞)" },
  { func: "√(sin x)",  condition: "sin(x) ≥ 0",            domain: "[2πk, π + 2πk]" },
];

const basicProps = [
  { label: "תחום הגדרה",    value: "[0, ∞)" },
  { label: "טווח ערכים",    value: "[0, ∞)" },
  { label: "אפסים",         value: "x = 0" },
  { label: "מונוטוניות",    value: "עולה בכל התחום" },
  { label: "קמירות",        value: "קעורה (f″ < 0)" },
  { label: "אסימפטוטות",   value: "אין" },
  { label: "זוגיות",        value: "לא זוגית ולא אי-זוגית" },
  { label: "ערכים מרכזיים", value: "(0,0), (1,1), (4,2), (9,3)" },
];

const parityExamples = [
  { func: "√(x²) = |x|",    parity: "זוגית",                         domain: "ℝ" },
  { func: "√(4 − x²)",      parity: "זוגית – תחום [−2,2] סימטרי",   domain: "[−2, 2]" },
  { func: "√x",              parity: "לא זוגית ולא אי-זוגית",        domain: "[0, ∞)" },
  { func: "x·√(4 − x²)",   parity: "אי-זוגית – f(−x) = −f(x)",     domain: "[−2, 2]" },
];

/* ─── Integrals ──────────────────────────────────────────── */

const basicIntegrals: FEntry[] = [
  { name: "∫ xⁿ dx  (n≠−1)", formula: "xⁿ⁺¹/(n+1) + C",      note: "נוסחת חזקה כללית" },
  { name: "∫ 1/x dx",         formula: "ln|x| + C",             note: "" },
  { name: "∫ eˣ dx",          formula: "eˣ + C",                note: "" },
  { name: "∫ aˣ dx",          formula: "aˣ/ln(a) + C",          note: "" },
  { name: "∫ sin(x) dx",      formula: "−cos(x) + C",           note: "" },
  { name: "∫ cos(x) dx",      formula: "sin(x) + C",            note: "" },
  { name: "∫ √x dx",          formula: "(2/3)·x^(3/2) + C",    note: "" },
  { name: "∫ 1/√x dx",        formula: "2√x + C",               note: "" },
];

const compositeIntegrals: FEntry[] = [
  { name: "∫ g′(x)/(2√g(x)) dx", formula: "√g(x) + C",                  note: "g′ מופיעה במונה" },
  { name: "∫ 1/√(ax+b) dx",      formula: "(2/a)·√(ax+b) + C" },
  { name: "∫ √(ax+b) dx",        formula: "(2/(3a))·(ax+b)^(3/2) + C" },
];

const compositePatterns = [
  { pattern: "f′(x) / f(x)",       integral: "ln|f(x)| + C",          example: "2x/(x²+1) → ln(x²+1) + C" },
  { pattern: "f′(x) · eᶠ⁽ˣ⁾",     integral: "eᶠ⁽ˣ⁾ + C",            example: "2x·e^(x²) → e^(x²) + C" },
  { pattern: "f′(x) · [f(x)]ⁿ",   integral: "[f(x)]ⁿ⁺¹/(n+1) + C",  example: "2x·(x²+1)⁴ → (x²+1)⁵/5 + C" },
  { pattern: "f′(x) / √f(x)",      integral: "2√f(x) + C",            example: "x/√(x²+1) → √(x²+1) + C" },
];

const ibpExamples = [
  { func: "∫ x·eˣ dx",      u: "u = x",      vp: "v′ = eˣ",     result: "eˣ(x − 1) + C" },
  { func: "∫ x·sin(x) dx",  u: "u = x",      vp: "v′ = sin(x)", result: "−x·cos(x) + sin(x) + C" },
  { func: "∫ x²·eˣ dx",     u: "u = x²",     vp: "v′ = eˣ",     result: "eˣ(x²−2x+2) + C",       note: "חלקים פעמיים" },
  { func: "∫ ln(x) dx",     u: "u = ln(x)", vp: "v′ = 1",      result: "x·ln(x) − x + C" },
];

const areaFormulas: FEntry[] = [
  { name: "∫[0→a] √x dx",               formula: "(2/3)·a^(3/2)" },
  { name: "שטח בין √x ו-x² (0 עד 1)",  formula: "∫(√x − x²)dx = 2/3 − 1/3 = 1/3" },
  { name: "הצבה u = g(x)",              formula: "∫√(g(x))·g′(x) dx = (2/3)(g(x))^(3/2) + C", note: "כשg′ נמצאת" },
];

const volumeExamples = [
  { func: "f(x) = √x ב-[0, 4]",   calc: "V = π·∫₀⁴ x dx = π·[x²/2]₀⁴ = 8π" },
  { func: "f(x) = x² ב-[0, 2]",   calc: "V = π·∫₀² x⁴ dx = π·[x⁵/5]₀² = 32π/5" },
  { func: "f(x) = sin(x) ב-[0,π]", calc: "V = π·∫₀π sin²(x)dx = π·[x/2−sin(2x)/4]₀π = π²/2" },
];

/* ─── Conjugate Limits ───────────────────────────────────── */

const conjugateExamples = [
  {
    expr:   "√(x²+x) − x",
    step:   "כפל ב: (√(x²+x) + x) / (√(x²+x) + x)",
    result: "x / (√(x²+x) + x)",
    limit:  "lim(x→∞) = 1/2",
  },
  {
    expr:   "√(x+1) − √x",
    step:   "כפל ב: (√(x+1) + √x) / (√(x+1) + √x)",
    result: "1 / (√(x+1) + √x)",
    limit:  "lim(x→∞) = 0",
  },
];

/* ─── Asymptotes ─────────────────────────────────────────── */

const asymptoteRules: FEntry[] = [
  { name: "אסימפטוטה אנכית",    formula: "lim[x→a] f(x) = ±∞  ⟹  x = a", note: "בדוק כאשר מכנה → 0" },
  { name: "אסימפטוטה אופקית",   formula: "lim[x→±∞] f(x) = L  ⟹  y = L", note: "" },
  { name: "אסימפטוטה אלכסונית", formula: "m = lim f(x)/x, b = lim [f(x)−mx]", note: "deg(מונה) = deg(מכנה)+1" },
  { name: "אנכית – 1/√(x−1)",  formula: "כש-x→1⁺: f→∞  ⟹  x = 1", note: "" },
  { name: "אופקית – √x",        formula: "lim[x→∞] (√A−√B): כפל בצמוד", note: "" },
];

/* ─── Investigation Steps ────────────────────────────────── */

const investigationSteps = [
  { n: 1, title: "תחום הגדרה",         body: "מכנה ≠ 0, ביטוי תחת שורש ≥ 0, ביטוי בלוגריתם > 0. ציין בסוגריים מרובעים." },
  { n: 2, title: "אפסים וחיתוכים",     body: "ציר y: f(0). ציר x: f(x) = 0. לשורש: f(x) = 0 ⟺ g(x) = 0." },
  { n: 3, title: "זוגיות / אי-זוגיות", body: "בדוק f(−x) = f(x) (זוגית) או f(−x) = −f(x) (אי-זוגית). נדרש תחום סימטרי." },
  { n: 4, title: "אסימפטוטות",         body: "אנכית: lim = ±∞. אופקית: lim[x→±∞]. אלכסונית: חלוקה ארוכה כשdeg(P)=deg(Q)+1." },
  { n: 5, title: "נגזרת ראשונה",        body: "חשב f′(x). פתור f′(x) = 0 לנקודות קריטיות. בנה טבלת סימנים." },
  { n: 6, title: "עלייה / ירידה",       body: "f′(x) > 0 ← עולה. f′(x) < 0 ← יורדת. זהה מקסימום/מינימום מקומי." },
  { n: 7, title: "נגזרת שנייה",         body: "f″(x) > 0 ← קמורה (U). f″(x) < 0 ← קעורה (∩). f″=0 ומחליפה סימן ← פיתול." },
  { n: 8, title: "ציור גרף",            body: "סמן אפסים, קיצונות, פיתולים, אסימפטוטות, ערכי קצה. שים לב לנגזרת אנכית בקצה שורש." },
];

/* ─── Tips ───────────────────────────────────────────────── */

const tips = [
  "תחום שורש: פתור g(x) ≥ 0 (כולל 0!). נגזרת בנקודת קצה g=0 שואפת לאינסוף → משיק אנכי",
  "זיהוי מבנה ראשון: המונה = נגזרת המכנה (או כפולה שלה) → ∫f′/f dx = ln|f| + C",
  "זיהוי מבנה שני: f′(x)·eᶠ⁽ˣ⁾ → eᶠ⁽ˣ⁾ + C",
  "זיהוי מבנה שלישי: f′(x)·[f(x)]ⁿ → [f(x)]ⁿ⁺¹/(n+1) + C",
  "אינטגרציה בחלקים (LIATE): בחר u כלוגריתם/פולינום, v′ כאקספוננט/טריגו",
  "לגבולות ∞−∞ עם שורשים: כפל בצמוד (√A−√B)(√A+√B) = A−B",
  "נפח סיבוב: V = π∫[f(x)]²dx – רבע את הפונקציה, לא את האינטגרל!",
  "שטח בין עקומות: מצא חיתוכים, בדוק מי עליונה, ∫(עליון − תחתון)dx",
];

/* ─── Navigation ─────────────────────────────────────────── */

const idx = topics.findIndex((t) => t.id === "root-functions");
const prev = idx > 0 ? topics[idx - 1] : null;
const next = idx < topics.length - 1 ? topics[idx + 1] : null;

/* ─── Helpers ────────────────────────────────────────────── */

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
      <div className="shrink-0 text-right min-w-[140px]">
        <span className="text-sm font-semibold text-black">{name}</span>
        {note && <span className="block text-xs text-slate-400">{note}</span>}
      </div>
      <code className="text-sm font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded leading-relaxed" dir="ltr">
        {formula}
      </code>
    </div>
  );
}

function DarkCard({ id, title, note, children }: {
  id: number | string; title: string; note?: string; children: React.ReactNode;
}) {
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

export default function RootFunctionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId="root-functions" />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">בית</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">חשבון דיפרנציאלי ואינטגרלי</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex-1">
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1">שאלון 581</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">חשבון דיפרנציאלי ואינטגרלי</h1>
            <p className="text-white/70 font-medium">גבולות · נגזרות · אינטגרלים · שטחים ונפחים · פונקציות שורש</p>
          </div>
          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl text-sm">
            גבולות (כולל צורות בלתי-קצובות), כללי גזירה, אינטגרלים בסיסיים ומורכבים, שיטות אינטגרציה, שטחים, נפחי סיבוב, פונקציות שורש וחקירת פונקציה מלאה.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            {["8 נוסחות KaTeX", "גבולות ונגזרות", "שיטות אינטגרציה", "שטחים ונפחים", "פונקציות שורש", "9 שלבי חקירה"].map((s) => (
              <span key={s} className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── 1. נוסחות KaTeX ── */}
        <section>
          <SectionHead title="נוסחות מפתח" sub="נגזרות, אינטגרלים ומשפטים חשובים" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFormulas.map((f, i) => (
              <FormulaCard key={i} title={f.title} latex={f.latex} explanation={f.explanation} index={i} svgContent={f.svgContent} />
            ))}
          </div>
        </section>

        {/* ── 2. גבולות ── */}
        <section>
          <SectionHead title="גבולות" sub="כללים, גבולות חשובים וצורות בלתי-קצובות" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DarkCard id="א" title="כללי גבולות בסיסיים">
              <div className="px-4 py-1">
                {limitRules.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
            <DarkCard id="ב" title="גבולות חשובים לזכור">
              <div className="px-4 py-1">
                {importantLimits.map((l, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100 last:border-0" dir="rtl">
                    <div className="shrink-0 text-right min-w-[160px]">
                      <code className="text-xs font-mono text-black">{l.limit}</code>
                      {l.note && <span className="block text-xs text-slate-400">{l.note}</span>}
                    </div>
                    <code className="text-sm font-mono font-bold text-black bg-black/5 px-2.5 py-1 rounded" dir="ltr">{l.result}</code>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>

          {/* Limits at infinity for rational functions */}
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">lim[x→∞] P(x)/Q(x)</th>
                  <th className="px-4 py-3 text-right font-semibold">תוצאה</th>
                </tr>
              </thead>
              <tbody>
                {limitsAtInfinity.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono text-black font-semibold">{row.case}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Indeterminate forms */}
          <div className="mt-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4" dir="rtl">
            <p className="font-bold text-black text-sm mb-2">צורות בלתי-קצובות ושיטות פתרון</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div><code className="font-mono font-bold text-black">0/0</code><p className="text-slate-600 text-xs mt-1">פירוק לגורמים, כפל בצמוד, או כלל לופיטל: lim f/g = lim f′/g′</p></div>
              <div><code className="font-mono font-bold text-black">∞/∞</code><p className="text-slate-600 text-xs mt-1">חלק מונה ומכנה בחזקה הגבוהה, או כלל לופיטל</p></div>
              <div><code className="font-mono font-bold text-black">∞ − ∞</code><p className="text-slate-600 text-xs mt-1">כפל בצמוד (שורשים) או הוצאת גורם משותף</p></div>
            </div>
          </div>
        </section>

        {/* ── 3. נגזרות ── */}
        <section>
          <SectionHead title="נגזרות" sub="טבלת נגזרות, כללי גזירה, שורשים ופונקציות נפוצות" />

          {/* Comprehensive derivative table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">f(x)</th>
                  <th className="px-4 py-3 text-right font-semibold">f′(x)</th>
                  <th className="px-4 py-3 text-right font-semibold">הערה</th>
                </tr>
              </thead>
              <tbody>
                {derivTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-black">{row.func}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700">{row.deriv}</td>
                    <td className="px-4 py-2.5 text-slate-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Derivative rules */}
          <div className="mb-4 rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
            <div className="bg-slate-800 text-white px-4 py-3">
              <h3 className="font-bold text-sm">כללי גזירה</h3>
            </div>
            <div className="px-4 py-1">
              {derivRules.map((f, i) => <FRow key={i} {...f} />)}
            </div>
          </div>

          {/* Root-specific */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DarkCard id="ג" title="נגזרות שורש – בסיסי">
              <div className="px-4 py-1">
                {basicDerivatives.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
            <DarkCard id="ד" title="דוגמאות נפוצות – שורש">
              <div className="px-4 py-1">
                {derivativeExamples.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
            <div className="bg-slate-800 text-white px-4 py-3">
              <h3 className="font-bold text-sm">פונקציות שורש נפוצות בבגרות</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" dir="rtl">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-4 py-2.5 text-right font-semibold text-slate-700">f(x)</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-slate-700">f′(x)</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-slate-700">תחום</th>
                  </tr>
                </thead>
                <tbody>
                  {commonFunctions.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-2.5 font-mono font-bold text-black">{row.func}</td>
                      <td className="px-4 py-2.5 font-mono text-slate-700">{row.deriv}</td>
                      <td className="px-4 py-2.5 font-mono text-slate-500 text-xs">{row.domain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 4. פונקציית √x – תכונות ── */}
        <section>
          <SectionHead title="פונקציית השורש הבסיסית – f(x) = √x" />
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-slate-100">
              {basicProps.map((p) => (
                <div key={p.label} className="px-4 py-3">
                  <p className="text-xs text-slate-400 mb-0.5">{p.label}</p>
                  <p className="text-sm font-mono text-slate-800">{p.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. תחום הגדרה ── */}
        <section>
          <SectionHead title="תחום הגדרה – f(x) = √(g(x))" sub="כלל: פתור g(x) ≥ 0" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">פונקציה</th>
                  <th className="px-4 py-3 text-right font-semibold">תנאי</th>
                  <th className="px-4 py-3 text-right font-semibold">תחום הגדרה</th>
                </tr>
              </thead>
              <tbody>
                {domainExamples.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-black">{row.func}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700">{row.condition}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700 font-semibold">{row.domain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 6. זוגיות ── */}
        <section>
          <SectionHead title="זוגיות ואי-זוגיות" sub="נדרש תחום סימטרי ביחס ל-0 לזוגיות" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">פונקציה</th>
                  <th className="px-4 py-3 text-right font-semibold">תחום</th>
                  <th className="px-4 py-3 text-right font-semibold">זוגיות</th>
                </tr>
              </thead>
              <tbody>
                {parityExamples.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-black">{row.func}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-600">{row.domain}</td>
                    <td className="px-4 py-2.5 text-slate-700">{row.parity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 7. אינטגרלים ── */}
        <section>
          <SectionHead title="אינטגרלים" sub="נוסחות יסוד, מבנים מורכבים ושיטות זיהוי" />

          {/* Basic integrals table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">f(x)</th>
                  <th className="px-4 py-3 text-right font-semibold">∫f(x)dx</th>
                </tr>
              </thead>
              <tbody>
                {basicIntegrals.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-black">{row.name}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700">{row.formula}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Composite patterns */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
            <div className="bg-slate-800 text-white px-4 py-3">
              <h3 className="font-bold text-sm">מבנים מורכבים – זיהוי ופתרון מיידי</h3>
            </div>
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2.5 text-right font-semibold text-slate-700">מבנה</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-slate-700">תוצאה</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-slate-700">דוגמה</th>
                </tr>
              </thead>
              <tbody>
                {compositePatterns.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-black text-xs">{row.pattern}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-700 text-xs">{row.integral}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-500 text-xs">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DarkCard id="ה" title="אינטגרלי שורש – מורכבים">
              <div className="px-4 py-1">
                {compositeIntegrals.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
            <DarkCard id="ו" title="שטחים – נוסחאות ותוצאות נפוצות">
              <div className="px-4 py-1">
                {areaFormulas.map((f, i) => <FRow key={i} {...f} />)}
              </div>
            </DarkCard>
          </div>
        </section>

        {/* ── 8. אינטגרציה בחלקים ── */}
        <section>
          <SectionHead title="אינטגרציה בחלקים" sub="∫u dv = u·v − ∫v du — כלל LIATE לבחירת u" />
          <div
            className="mb-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4 flex items-center gap-4"
            dir="rtl"
          >
            <span className="text-2xl font-black text-black shrink-0">!</span>
            <div>
              <p className="font-bold text-black text-sm">כלל LIATE – סדר עדיפויות לבחירת u:</p>
              <p className="text-sm text-slate-700 mt-1">
                <strong>L</strong>ogarithm → <strong>I</strong>nverse trig → <strong>A</strong>lgebra (פולינום) → <strong>T</strong>rig → <strong>E</strong>xponent
              </p>
              <p className="text-xs text-slate-500 mt-1">בחר כ-u את הפונקציה שנגזרתה פשוטה יותר</p>
            </div>
          </div>
          <div className="space-y-3">
            {ibpExamples.map((ex, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" dir="rtl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                  <code className="text-sm font-mono font-bold text-black" dir="ltr">{ex.func}</code>
                  {ex.note && <span className="text-xs text-slate-400 mr-2">{ex.note}</span>}
                </div>
                <div className="grid grid-cols-2 gap-2 pr-8 text-xs">
                  <code className="font-mono text-slate-600 bg-slate-50 px-2 py-1 rounded" dir="ltr">{ex.u}</code>
                  <code className="font-mono text-slate-600 bg-slate-50 px-2 py-1 rounded" dir="ltr">{ex.vp}</code>
                </div>
                <p className="text-sm font-bold text-black pr-8 mt-2">
                  תוצאה: <code className="font-mono" dir="ltr">{ex.result}</code>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. שטחים ונפחים ── */}
        <section>
          <SectionHead title="שטחים ונפחי סיבוב" sub="אינטגרל מסוים, שטח בין עקומות ונפח גוף סיבוב" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {[
              { title: "שטח מתחת לגרף (f ≥ 0)", formula: "S = ∫[a,b] f(x) dx" },
              { title: "שטח מעל לגרף (f ≤ 0)",  formula: "S = |∫[a,b] f(x) dx|" },
              { title: "שטח בין שתי עקומות",      formula: "S = ∫[a,b] (f − g) dx" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" dir="rtl">
                <p className="text-xs text-slate-500 mb-1">{item.title}</p>
                <code className="text-sm font-mono font-bold text-black" dir="ltr">{item.formula}</code>
              </div>
            ))}
          </div>

          {/* Volume of revolution */}
          <div
            className="mb-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4"
            dir="rtl"
          >
            <p className="font-bold text-black text-sm mb-1">נפח גוף סיבוב סביב ציר x</p>
            <code className="font-mono text-base font-bold text-black" dir="ltr">V = π · ∫[a,b] [f(x)]² dx</code>
            <p className="text-xs text-slate-500 mt-1">חשוב: רבע את הפונקציה, לא את האינטגרל! (שיטת הוושר: V = π∫([f]²−[g]²)dx)</p>
          </div>

          <div className="space-y-3">
            {volumeExamples.map((ex, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-start justify-between gap-4" dir="rtl">
                <span className="text-sm font-semibold text-black shrink-0">{ex.func}</span>
                <code className="text-sm font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded" dir="ltr">{ex.calc}</code>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. כפל בצמוד ── */}
        <section>
          <SectionHead title="כפל בצמוד – גבולות עם שורשים" sub="לחישוב ∞ − ∞ המכיל שורשים" />
          <div
            className="mb-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4 flex items-center gap-4"
            dir="rtl"
          >
            <span className="text-2xl font-black text-black shrink-0">!</span>
            <div>
              <p className="font-bold text-black text-sm">הנוסחה</p>
              <code className="font-mono text-sm text-slate-700" dir="ltr">
                (√A − √B)(√A + √B) = A − B
              </code>
              <p className="text-sm text-slate-600 mt-1">כפל ומחק את השורש. מתאים לגבולות שונים של ∞ − ∞</p>
            </div>
          </div>
          <div className="space-y-3">
            {conjugateExamples.map((ex, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" dir="rtl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                  <code className="text-sm font-mono font-bold text-black" dir="ltr">{ex.expr}</code>
                </div>
                <div className="space-y-1 pr-8">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">כפל ב:</span>{" "}
                    <code dir="ltr" className="font-mono">{ex.step}</code>
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">מתקבל:</span>{" "}
                    <code dir="ltr" className="font-mono">{ex.result}</code>
                  </p>
                  <p className="text-sm font-bold text-black">
                    <span className="font-semibold">גבול: </span>
                    <code dir="ltr" className="font-mono">{ex.limit}</code>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. אסימפטוטות ── */}
        <section>
          <SectionHead title="אסימפטוטות וגבולות בקצוות" />
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
            <div className="px-4 py-1">
              {asymptoteRules.map((f, i) => <FRow key={i} {...f} />)}
            </div>
          </div>
        </section>

        {/* ── 12. שלבי חקירה ── */}
        <section>
          <SectionHead title="חקירת פונקציה – שלבי החקירה" sub="סדר הפעולות לחקירה מלאה" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
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
          <AiTutor topic="חשבון דיפרנציאלי ואינטגרלי" />
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
