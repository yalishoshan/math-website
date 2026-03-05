import Link from "next/link";
import Navbar from "@/components/Navbar";
import FormulaCard from "@/components/FormulaCard";
import TipsBox from "@/components/TipsBox";
import { topics } from "@/data/topics";

export const metadata = {
  title: "בעיות קיצון – בגרות מתמטיקה 5 יח״ל",
  description:
    "בעיות קיצון בשאלון 581 – נגזרת ראשונה ושנייה, קיצון על קטע סגור, נוסחאות שטח ונפח, AM-GM.",
};

/* ─── Types ─────────────────────────────────────────────── */

interface FEntry { name: string; formula: string; note?: string }

/* ─── KaTeX Formula Cards ─────────────────────────────────── */

const keyFormulas = [
  {
    title: "תנאי הכרחי לקיצון",
    latex: "f'(x_0) = 0 \\quad \\text{(critical point)}",
    explanation: "נגזרת הפונקציה מתאפסת בנקודת קיצון חשודה",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <line x1="8" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="0.9" />
        <line x1="8" y1="52" x2="8" y2="8" stroke="currentColor" strokeWidth="0.9" />
        <path d="M10,44 C25,34 40,14 60,12 C80,10 95,28 108,44" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <line x1="44" y1="12" x2="76" y2="12" stroke="#3b82f6" strokeWidth="1.4" strokeDasharray="3,2" />
        <line x1="60" y1="12" x2="60" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <circle cx="60" cy="12" r="2.5" fill="currentColor" />
        <text x="53" y="57" fontSize="6.5" fill="currentColor">x₀</text>
        <text x="78" y="11" fontSize="6.5" fill="#3b82f6">{"f′(x₀)=0"}</text>
        <text x="9" y="48" fontSize="6" fill="currentColor">0</text>
      </svg>
    ),
  },
  {
    title: "מבחן הנגזרת השנייה",
    latex: "f''(x_0) > 0 \\Rightarrow \\min \\qquad f''(x_0) < 0 \\Rightarrow \\max",
    explanation: "f''(x₀) > 0: מינימום מקומי. f''(x₀) < 0: מקסימום מקומי. f''(x₀) = 0: בדוק בטבלת סימנים",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <path d="M8,46 Q23,54 38,46" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="23" cy="53" r="2.2" fill="#3b82f6" />
        <line x1="14" y1="50" x2="32" y2="50" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="2,2" />
        <text x="16" y="14" fontSize="7" fill="currentColor" textAnchor="middle">{"f″>0"}</text>
        <text x="22" y="22" fontSize="7" fill="#3b82f6" fontWeight="bold" textAnchor="middle">מינימום</text>
        <text x="14" y="30" fontSize="6" fill="currentColor" textAnchor="middle">U</text>
        <line x1="60" y1="8" x2="60" y2="58" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2,2" opacity="0.4" />
        <path d="M72,46 Q87,38 102,46" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="87" cy="39" r="2.2" fill="#ef4444" />
        <line x1="78" y1="43" x2="96" y2="43" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2,2" />
        <text x="87" y="14" fontSize="7" fill="currentColor" textAnchor="middle">{"f″<0"}</text>
        <text x="87" y="22" fontSize="7" fill="#ef4444" fontWeight="bold" textAnchor="middle">מקסימום</text>
        <text x="87" y="30" fontSize="6" fill="currentColor" textAnchor="middle">∩</text>
      </svg>
    ),
  },
  {
    title: "קיצון על קטע סגור [a,b]",
    latex: "\\text{Check:}\\; f(a),\\; f(b),\\; f(x_0) \\;\\text{where}\\; f'(x_0)=0,\\; x_0\\in(a,b)",
    explanation: "השוו ערכי הפונקציה בקצוות הקטע ובכל נקודה פנימית שבה f'=0",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <line x1="8" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="0.9" />
        <path d="M20,38 C35,28 50,18 65,22 C80,26 95,44 105,34" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="38" r="2.5" fill="currentColor" />
        <circle cx="105" cy="34" r="2.5" fill="currentColor" />
        <circle cx="63" cy="22" r="2.5" fill="#3b82f6" />
        <line x1="20" y1="38" x2="20" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <line x1="63" y1="22" x2="63" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <line x1="105" y1="34" x2="105" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="17" y="57" fontSize="6.5" fill="currentColor">a</text>
        <text x="60" y="57" fontSize="6.5" fill="#3b82f6">x₀</text>
        <text x="103" y="57" fontSize="6.5" fill="currentColor">b</text>
        <text x="10" y="36" fontSize="5.5" fill="currentColor">f(a)</text>
        <text x="55" y="20" fontSize="5.5" fill="#3b82f6">f(x₀)</text>
        <text x="96" y="32" fontSize="5.5" fill="currentColor">f(b)</text>
        <text x="28" y="10" fontSize="5.5" fill="currentColor">השווה את שלושת הערכים</text>
      </svg>
    ),
  },
  {
    title: "שטחי צורות מישוריות",
    latex: "S_{rect} = ab \\quad S_{\\triangle} = \\tfrac{1}{2}bh \\quad S_{circle} = \\pi r^2 \\quad S_{trap} = \\tfrac{a+b}{2}\\cdot h",
    explanation: "מלבן, משולש, עיגול, טרפז – נוסחאות שטח הכרחיות לבעיות קיצון הנדסיות",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <rect x="4" y="8" width="22" height="14" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <text x="6" y="30" fontSize="5.5" fill="currentColor">a·b</text>
        <polygon points="36,22 50,8 64,22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="50" y1="8" x2="50" y2="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="40" y="30" fontSize="5.5" fill="currentColor">½bh</text>
        <circle cx="83" cy="15" r="9" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="83" y1="15" x2="92" y2="15" stroke="currentColor" strokeWidth="0.9" />
        <text x="84" y="13" fontSize="5" fill="currentColor">r</text>
        <text x="76" y="30" fontSize="5.5" fill="currentColor">πr²</text>
        <polygon points="4,52 28,52 24,40 8,40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="16" y1="40" x2="16" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="2" y="58" fontSize="5" fill="currentColor">a</text>
        <text x="10" y="39" fontSize="5" fill="currentColor">b</text>
        <text x="18" y="46" fontSize="5" fill="currentColor">h</text>
        <text x="30" y="52" fontSize="5.5" fill="currentColor">½(a+b)h</text>
      </svg>
    ),
  },
  {
    title: "משולש שווה-צלעות, מעוין וגזרה",
    latex: "S_{eq} = \\frac{\\sqrt{3}}{4}a^2 \\quad S_{rhombus} = \\frac{d_1 d_2}{2} \\quad S_{sector} = \\frac{1}{2}\\alpha r^2",
    explanation: "משולש שווה-צלעות (a = צלע), מעוין (d₁,d₂ = אלכסונות), גזרה (α ברדיאנים)",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <polygon points="20,52 4,52 12,38" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="7" y1="45" x2="9" y2="47" stroke="currentColor" strokeWidth="0.9" />
        <line x1="15" y1="45" x2="17" y2="47" stroke="currentColor" strokeWidth="0.9" />
        <line x1="12" y1="52" x2="12" y2="49" stroke="currentColor" strokeWidth="0.9" />
        <text x="4" y="58" fontSize="5.5" fill="currentColor">√3/4·a²</text>
        <polygon points="52,40 42,49 52,58 62,49" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="42" y1="49" x2="62" y2="49" stroke="#3b82f6" strokeWidth="0.9" strokeDasharray="2,1.5" />
        <line x1="52" y1="40" x2="52" y2="58" stroke="#ef4444" strokeWidth="0.9" strokeDasharray="2,1.5" />
        <text x="41" y="37" fontSize="5" fill="#3b82f6">d₁</text>
        <text x="54" y="37" fontSize="5" fill="#ef4444">d₂</text>
        <text x="38" y="62" fontSize="5.5" fill="currentColor">d₁d₂/2</text>
        <path d="M95,50 L85,32 A14,14 0 0,1 105,32 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
        <path d="M90,44 A6,6 0 0,1 100,44" fill="none" stroke="currentColor" strokeWidth="0.9" />
        <text x="92" y="46" fontSize="5" fill="currentColor">α</text>
        <text x="82" y="36" fontSize="5" fill="currentColor">r</text>
        <text x="82" y="58" fontSize="5.5" fill="currentColor">½αr²</text>
      </svg>
    ),
  },
  {
    title: "נפחים – גליל, חרוט, כדור, פירמידה",
    latex: "V_{cyl} = \\pi r^2 h \\quad V_{cone} = \\tfrac{1}{3}\\pi r^2 h \\quad V_{sphere} = \\tfrac{4}{3}\\pi r^3 \\quad V_{pyr} = \\tfrac{1}{3}Bh",
    explanation: "גליל, חרוט, כדור, פירמידה (B = שטח בסיס) – נוסחאות נפח לבעיות קיצון במרחב",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <ellipse cx="14" cy="44" rx="9" ry="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="14" cy="32" rx="9" ry="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
        <line x1="5" y1="32" x2="5" y2="44" stroke="currentColor" strokeWidth="1" />
        <line x1="23" y1="32" x2="23" y2="44" stroke="currentColor" strokeWidth="1" />
        <text x="5" y="55" fontSize="5.5" fill="currentColor">πr²h</text>
        <ellipse cx="44" cy="48" rx="9" ry="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="48" x2="44" y2="34" stroke="currentColor" strokeWidth="1" />
        <line x1="53" y1="48" x2="44" y2="34" stroke="currentColor" strokeWidth="1" />
        <circle cx="44" cy="34" r="1.2" fill="currentColor" />
        <text x="33" y="58" fontSize="5.5" fill="currentColor">⅓πr²h</text>
        <circle cx="76" cy="40" r="12" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="76" cy="40" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2,2" />
        <line x1="76" y1="40" x2="88" y2="40" stroke="currentColor" strokeWidth="0.9" />
        <text x="78" y="38" fontSize="5" fill="currentColor">r</text>
        <text x="65" y="58" fontSize="5.5" fill="currentColor">4/3πr³</text>
        <polygon points="107,34 97,52 117,52" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        <line x1="107" y1="34" x2="107" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="108" y="43" fontSize="5" fill="currentColor">h</text>
        <text x="97" y="58" fontSize="5.5" fill="currentColor">⅓Bh</text>
      </svg>
    ),
  },
  {
    title: "שטחי פנים – גליל וחרוט",
    latex: "SA_{cyl} = 2\\pi r^2 + 2\\pi rh \\quad SA_{cone} = \\pi r^2 + \\pi rl \\quad l = \\sqrt{r^2+h^2}",
    explanation: "שטח פנים מלא של גליל וחרוט. l = קו יוצר של חרוט",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <circle cx="18" cy="12" r="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1" />
        <text x="14" y="15" fontSize="5.5" fill="#3b82f6">πr²</text>
        <circle cx="18" cy="50" r="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1" />
        <text x="14" y="53" fontSize="5.5" fill="#3b82f6">πr²</text>
        <rect x="30" y="20" width="20" height="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        <text x="31" y="33" fontSize="5" fill="currentColor">2πr</text>
        <text x="52" y="33" fontSize="5" fill="currentColor">h</text>
        <text x="6" y="62" fontSize="5" fill="currentColor">SA=2πr²+2πrh</text>
        <circle cx="92" cy="48" r="8" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="1" />
        <text x="88" y="51" fontSize="5.5" fill="#ef4444">πr²</text>
        <path d="M92,16 L80,36 A14,14 0 0,0 104,36 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
        <text x="86" y="30" fontSize="5.5" fill="currentColor">πrl</text>
        <line x1="92" y1="16" x2="104" y2="36" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2,1.5" />
        <text x="100" y="26" fontSize="5" fill="currentColor">l</text>
      </svg>
    ),
  },
  {
    title: "אי-שוויון AM-GM",
    latex: "\\frac{a+b}{2} \\geq \\sqrt{ab} \\quad (a,b>0)",
    explanation: "שוויון כאשר a = b. סכום קבוע S → מכפלה מקסימלית = (S/2)² מתקיים כשa=b=S/2. מכפלה קבועה P → סכום מינימלי = 2√P מתקיים כשa=b=√P",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <line x1="10" y1="30" x2="110" y2="30" stroke="currentColor" strokeWidth="1" />
        <circle cx="10" cy="30" r="2" fill="currentColor" />
        <circle cx="110" cy="30" r="2" fill="currentColor" />
        <text x="7" y="40" fontSize="6" fill="currentColor">0</text>
        <text x="107" y="40" fontSize="6" fill="currentColor">S</text>
        <line x1="10" y1="30" x2="50" y2="30" stroke="#3b82f6" strokeWidth="2.5" />
        <line x1="50" y1="30" x2="110" y2="30" stroke="#ef4444" strokeWidth="2.5" />
        <circle cx="50" cy="30" r="2.5" fill="currentColor" />
        <circle cx="60" cy="30" r="3" fill="#22c55e" />
        <line x1="60" y1="30" x2="60" y2="20" stroke="#22c55e" strokeWidth="0.9" strokeDasharray="2,1.5" />
        <text x="55" y="18" fontSize="6" fill="#22c55e" fontWeight="bold">AM</text>
        <circle cx="48" cy="30" r="2.5" fill="#f59e0b" />
        <line x1="48" y1="30" x2="48" y2="44" stroke="#f59e0b" strokeWidth="0.9" strokeDasharray="2,1.5" />
        <text x="40" y="50" fontSize="6" fill="#f59e0b" fontWeight="bold">GM</text>
        <text x="62" y="18" fontSize="6" fill="currentColor">AM ≥ GM</text>
        <text x="10" y="58" fontSize="5.5" fill="currentColor">שוויון כאשר a = b (=S/2)</text>
      </svg>
    ),
  },
  {
    title: "AM-GM – שלושה מספרים",
    latex: "\\frac{a+b+c}{3} \\geq \\sqrt[3]{abc} \\quad (a,b,c>0)",
    explanation: "שוויון כאשר a = b = c. סכום קבוע S → מכפלה מקסימלית כאשר a = b = c = S/3",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <rect x="10" y="18" width="16" height="34" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1" />
        <rect x="32" y="8" width="16" height="44" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1" />
        <rect x="54" y="28" width="16" height="24" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1" />
        <text x="13" y="57" fontSize="7" fill="#3b82f6">a</text>
        <text x="35" y="57" fontSize="7" fill="#ef4444">b</text>
        <text x="57" y="57" fontSize="7" fill="#22c55e">c</text>
        <line x1="8" y1="22" x2="72" y2="22" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3,2" />
        <text x="74" y="24" fontSize="6" fill="currentColor" fontWeight="bold">AM</text>
        <line x1="8" y1="30" x2="72" y2="30" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" />
        <text x="74" y="32" fontSize="6" fill="#f59e0b" fontWeight="bold">GM</text>
        <text x="8" y="12" fontSize="5.5" fill="currentColor">שוויון: a=b=c=S/3</text>
      </svg>
    ),
  },
];

/* ─── Solution Steps ─────────────────────────────────────── */

const solutionSteps = [
  { n: 1, title: "הגדר משתנה",         body: "זהה את הגודל שרוצים לייעל ואת המגבלה. קרא למשתנה x והגדר תחום תקין." },
  { n: 2, title: "כתוב פונקציית מטרה", body: "כתוב נוסחה לגודל המיועל (שטח, נפח, מחיר...) בתור פונקציה של הנתונים." },
  { n: 3, title: "בטא במשתנה אחד",     body: "השתמש במגבלה כדי לבטא את כל הגדלים במשתנה x יחיד." },
  { n: 4, title: "גזור ואפס",          body: "חשב f′(x) ופתור f′(x) = 0. קבל נקודות קריטיות חשודות לקיצון." },
  { n: 5, title: "בדוק אופי הנקודה",   body: "f″(x₀) > 0 ← מינימום. f″(x₀) < 0 ← מקסימום. f″=0 ← בנה טבלת סימנים." },
  { n: 6, title: "בדוק קצוות",         body: "אם x ∈ [a,b] – חשב גם f(a) ו-f(b) והשווה לכל הנקודות הפנימיות." },
  { n: 7, title: "כתוב תשובה מלאה",    body: "ציין את x האופטימלי, את ערך המטרה המקסימלי/מינימלי, ואת יחידות המידה." },
];

/* ─── Area / Volume Tables ───────────────────────────────── */

const areaTable = [
  { shape: "מלבן",              formula: "S = a · b",               note: "" },
  { shape: "משולש",             formula: "S = ½ · b · h",           note: "" },
  { shape: "עיגול",             formula: "S = π · r²",              note: "" },
  { shape: "טרפז",              formula: "S = ½ · (a + b) · h",    note: "a,b בסיסים" },
  { shape: "משולש שווה-צלעות", formula: "S = (√3 / 4) · a²",      note: "a = צלע" },
  { shape: "מעוין",             formula: "S = d₁ · d₂ / 2",        note: "d₁,d₂ אלכסונות" },
  { shape: "גזרה",              formula: "S = ½ · α · r²",          note: "α ברדיאנים" },
];

const volumeTable = [
  { shape: "גליל",      volume: "V = π · r² · h",          surface: "SA = 2πr² + 2πrh" },
  { shape: "חרוט",      volume: "V = ⅓ · π · r² · h",     surface: "SA = πr² + πrl,  l = √(r²+h²)" },
  { shape: "כדור",      volume: "V = ⅔ · π · r³",         surface: "SA = 4πr²" },
  { shape: "פירמידה",   volume: "V = ⅓ · B · h",          surface: "B = שטח בסיס" },
];

/* ─── AM-GM Table ────────────────────────────────────────── */

const amgmTable: FEntry[] = [
  { name: "סכום קבוע: a+b = S",         formula: "מכפלה מקסימלית = (S/2)²",         note: "כשa = b = S/2" },
  { name: "מכפלה קבועה: a·b = P",       formula: "סכום מינימלי = 2√P",              note: "כשa = b = √P" },
  { name: "3 מספרים: a+b+c = S",        formula: "מכפלה מקסימלית = (S/3)³",         note: "כשa = b = c = S/3" },
  { name: "3 מספרים: a·b·c = P",        formula: "סכום מינימלי = 3·∛P",             note: "כשa = b = c = ∛P" },
];

/* ─── Navigation ─────────────────────────────────────────── */

const idx = topics.findIndex((t) => t.id === "optimization");
const topic = topics[idx];
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
      <div className="shrink-0 text-right min-w-[160px]">
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

export default function OptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId="optimization" />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">בית</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">בעיות קיצון</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex-1">
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-3">שאלון 581</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">בעיות קיצון</h1>
            <p className="text-lg text-white/70 font-medium">נקודות מקסימום ומינימום עם נגזרות</p>
          </div>
          <p className="text-white/50 mt-5 leading-relaxed max-w-2xl text-sm">
            {topic.description}
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            {["9 נוסחות KaTeX", "7 שלבי פתרון", "טבלאות שטח ונפח", "AM-GM"].map((s) => (
              <span key={s} className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── 1. נוסחות מפתח ── */}
        <section>
          <SectionHead title="נוסחות מפתח" sub="הנוסחאות החיוניות לבעיות קיצון" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFormulas.map((f, i) => (
              <FormulaCard key={i} title={f.title} latex={f.latex} explanation={f.explanation} index={i} svgContent={f.svgContent} />
            ))}
          </div>
        </section>

        {/* ── 2. שלבי פתרון ── */}
        <section>
          <SectionHead title="שלבי פתרון בעיית קיצון" sub="עקבו אחרי הסדר הזה בכל שאלה" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {solutionSteps.map((step) => (
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

        {/* ── 3. טבלאות שטח ונפח ── */}
        <section>
          <SectionHead title="נוסחאות שטח ונפח" sub="לשימוש בבעיות קיצון הנדסיות" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* area table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm" dir="rtl">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-4 py-2.5 text-right font-semibold" colSpan={3}>שטחי צורות מישוריות</th>
                  </tr>
                  <tr className="bg-slate-700 text-white/80 text-xs">
                    <th className="px-4 py-2 text-right">צורה</th>
                    <th className="px-4 py-2 text-right">נוסחה</th>
                    <th className="px-4 py-2 text-right">הערה</th>
                  </tr>
                </thead>
                <tbody>
                  {areaTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-2.5 font-bold text-black">{row.shape}</td>
                      <td className="px-4 py-2.5 font-mono font-semibold text-black">{row.formula}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* volume table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm" dir="rtl">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-4 py-2.5 text-right font-semibold" colSpan={3}>נפחים ושטחי פנים</th>
                  </tr>
                  <tr className="bg-slate-700 text-white/80 text-xs">
                    <th className="px-4 py-2 text-right">גוף</th>
                    <th className="px-4 py-2 text-right">נפח</th>
                    <th className="px-4 py-2 text-right">שטח פנים</th>
                  </tr>
                </thead>
                <tbody>
                  {volumeTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-2.5 font-bold text-black">{row.shape}</td>
                      <td className="px-4 py-2.5 font-mono text-slate-700 text-xs">{row.volume}</td>
                      <td className="px-4 py-2.5 font-mono text-slate-500 text-xs">{row.surface}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 4. AM-GM ── */}
        <section>
          <SectionHead title="אי-שוויון AM-GM" sub="כלי עוצמתי לבעיות קיצון אלגבריות" />
          <DarkCard id="!" title="עיקרון AM-GM" note="ממוצע חשבוני ≥ ממוצע גיאומטרי">
            <div className="px-4 py-1">
              {amgmTable.map((f, i) => <FRow key={i} {...f} />)}
            </div>
          </DarkCard>
          <div
            className="mt-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4 flex items-center gap-4"
            dir="rtl"
          >
            <span className="text-2xl font-black text-black shrink-0">!</span>
            <div>
              <p className="font-bold text-black text-sm">מתי להשתמש ב-AM-GM?</p>
              <p className="text-sm text-slate-700 mt-1">
                כשסכום קבוע → מצא מקסימום מכפלה. כשמכפלה קבועה → מצא מינימום סכום. שוויון מתקיים תמיד כאשר כל המשתנים שווים.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. טיפים ── */}
        <section>
          <TipsBox tips={topic.tips} />
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
