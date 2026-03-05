import Link from "next/link";
import Navbar from "@/components/Navbar";
import TipsBox from "@/components/TipsBox";
import FormulaCard from "@/components/FormulaCard";
import { topics } from "@/data/topics";

export const metadata = {
  title: "טריגונומטריה – בגרות מתמטיקה 5 יח״ל",
  description:
    "נוסחאות ומשפטים תקניים לטריגונומטריה בשאלון 581 – זהויות, ערכים מיוחדים, משפט הסינוסים והקוסינוסים, פונקציות וגרפים.",
};

/* ─── KaTeX Formula Cards ─────────────────────────────────── */

const keyFormulas = [
  {
    title: "זהות פיתגורס",
    latex: "\\sin^2\\!\\alpha + \\cos^2\\!\\alpha = 1",
    explanation: "הזהות הבסיסית ביותר – מחברת סינוס וקוסינוס",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* unit circle */}
        <circle cx="60" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1.2" />
        {/* axes */}
        <line x1="35" y1="32" x2="85" y2="32" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <line x1="60" y1="8" x2="60" y2="56" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        {/* point on circle at ~50° */}
        <line x1="60" y1="32" x2="74" y2="18" stroke="currentColor" strokeWidth="1.4" />
        {/* sin leg (vertical) */}
        <line x1="74" y1="18" x2="74" y2="32" stroke="#3b82f6" strokeWidth="1.6" />
        {/* cos leg (horizontal) */}
        <line x1="60" y1="32" x2="74" y2="32" stroke="#ef4444" strokeWidth="1.6" />
        {/* angle arc */}
        <path d="M68,32 A8,8 0 0,0 63.5,25.5" fill="none" stroke="currentColor" strokeWidth="0.9" />
        {/* dot */}
        <circle cx="74" cy="18" r="2" fill="currentColor" />
        {/* labels */}
        <text x="77" y="26" fontSize="7" fill="#3b82f6" fontWeight="bold">sin</text>
        <text x="66" y="39" fontSize="7" fill="#ef4444" fontWeight="bold">cos</text>
        <text x="64" y="30" fontSize="6" fill="currentColor">α</text>
        <text x="38" y="10" fontSize="7" fill="currentColor">sin²+cos²=1</text>
      </svg>
    ),
  },
  {
    title: "משפט הסינוסים",
    latex: "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R",
    explanation: "R = רדיוס המעגל החוסם. משמש כשנתונה צלע וזווית מולה",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* circumscribed circle */}
        <circle cx="60" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.5" />
        {/* triangle A=(40,12) B=(84,50) C=(24,50) */}
        <polygon points="40,10 86,50 18,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* side labels */}
        <text x="58" y="56" fontSize="7" fill="currentColor" textAnchor="middle">a</text>
        <text x="65" y="28" fontSize="7" fill="currentColor">b</text>
        <text x="24" y="28" fontSize="7" fill="currentColor">c</text>
        {/* vertex labels */}
        <text x="36" y="8" fontSize="7" fill="currentColor" fontWeight="bold">A</text>
        <text x="87" y="54" fontSize="7" fill="currentColor" fontWeight="bold">B</text>
        <text x="11" y="54" fontSize="7" fill="currentColor" fontWeight="bold">C</text>
        {/* center dot + R line */}
        <circle cx="60" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
        <line x1="60" y1="32" x2="86" y2="50" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2,2" opacity="0.5" />
        <text x="72" y="38" fontSize="6" fill="currentColor" opacity="0.7">R</text>
      </svg>
    ),
  },
  {
    title: "משפט הקוסינוסים",
    latex: "c^2 = a^2 + b^2 - 2ab\\cos C",
    explanation: "C היא הזווית בין a ו-b. לחישוב: cos C = (a²+b²−c²)/(2ab)",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* triangle C=(18,52) A=(100,52) B=(38,10) */}
        <polygon points="18,52 100,52 38,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* angle arc at C */}
        <path d="M30,52 A12,12 0 0,1 24.5,42" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* side labels */}
        <text x="56" y="59" fontSize="7" fill="currentColor" textAnchor="middle">a (מול A)</text>
        <text x="68" y="30" fontSize="7" fill="currentColor">b</text>
        <text x="22" y="30" fontSize="7" fill="currentColor">c</text>
        {/* vertex labels */}
        <text x="96" y="59" fontSize="7" fill="currentColor" fontWeight="bold">A</text>
        <text x="34" y="8" fontSize="7" fill="currentColor" fontWeight="bold">B</text>
        <text x="8" y="56" fontSize="7" fill="currentColor" fontWeight="bold">C</text>
        <text x="28" y="47" fontSize="6" fill="currentColor">C</text>
      </svg>
    ),
  },
  {
    title: "שטח משולש",
    latex: "S = \\tfrac{1}{2}\\,ab\\sin C",
    explanation: "שתי צלעות והזווית הכלואה ביניהן",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* filled triangle */}
        <polygon points="20,54 100,54 55,10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        {/* altitude dashed */}
        <line x1="55" y1="10" x2="55" y2="54" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2.5,2" />
        {/* right-angle mark */}
        <rect x="55" y="48" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="0.9" />
        {/* angle arc at left vertex */}
        <path d="M33,54 A14,14 0 0,1 27,44" fill="none" stroke="#3b82f6" strokeWidth="1.1" />
        {/* side labels */}
        <text x="34" y="30" fontSize="7" fill="currentColor">a</text>
        <text x="76" y="30" fontSize="7" fill="currentColor">b</text>
        <text x="57" y="36" fontSize="7" fill="currentColor">h</text>
        {/* C label */}
        <text x="27" y="50" fontSize="6.5" fill="#3b82f6" fontWeight="bold">C</text>
        {/* S = ½ab·sinC hint */}
        <text x="52" y="7" fontSize="5.5" fill="currentColor" textAnchor="middle">S = ½·a·b·sin C</text>
      </svg>
    ),
  },
  {
    title: "סינוס זווית כפולה",
    latex: "\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha",
    explanation: "נגזר מנוסחת הסכום (α = β)",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* axes */}
        <line x1="8" y1="32" x2="112" y2="32" stroke="currentColor" strokeWidth="0.8" />
        <line x1="8" y1="8" x2="8" y2="56" stroke="currentColor" strokeWidth="0.8" />
        {/* sin(α) half-period wave (shorter) */}
        <path d="M8,32 C20,8 32,8 44,32 C56,56 68,56 80,32" fill="none" stroke="#3b82f6" strokeWidth="1.4" strokeDasharray="3,2" />
        {/* sin(2α) full-period wave (double freq) */}
        <path d="M8,32 C14,8 20,8 26,32 C32,56 38,56 44,32 C50,8 56,8 62,32 C68,56 74,56 80,32" fill="none" stroke="currentColor" strokeWidth="1.6" />
        {/* labels */}
        <text x="84" y="30" fontSize="6.5" fill="currentColor" fontWeight="bold">sin 2α</text>
        <text x="84" y="42" fontSize="6.5" fill="#3b82f6">sin α</text>
        {/* period arrow */}
        <text x="10" y="8" fontSize="5.5" fill="currentColor">מחזור מחצה</text>
      </svg>
    ),
  },
  {
    title: "קוסינוס זווית כפולה",
    latex: "\\cos 2\\alpha = \\cos^2\\!\\alpha - \\sin^2\\!\\alpha",
    explanation: "גרסאות: 1 − 2sin²α  /  2cos²α − 1",
    svgContent: (
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* unit circle */}
        <circle cx="38" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* axes */}
        <line x1="16" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2,2" />
        <line x1="38" y1="10" x2="38" y2="54" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2,2" />
        {/* radius to point at ~40° */}
        <line x1="38" y1="32" x2="53" y2="19" stroke="currentColor" strokeWidth="1.4" />
        {/* cos² block */}
        <rect x="38" y="19" width="15" height="13" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="0.8" />
        {/* sin² block */}
        <rect x="53" y="19" width="0" height="13" fill="none" />
        {/* vertical & horizontal legs */}
        <line x1="53" y1="19" x2="53" y2="32" stroke="#3b82f6" strokeWidth="1.4" />
        <line x1="38" y1="32" x2="53" y2="32" stroke="#ef4444" strokeWidth="1.4" />
        <circle cx="53" cy="19" r="2" fill="currentColor" />
        {/* labels */}
        <text x="42" y="29" fontSize="6" fill="#ef4444" fontWeight="bold">cos</text>
        <text x="54" y="27" fontSize="6" fill="#3b82f6" fontWeight="bold">sin</text>
        <text x="36" y="16" fontSize="5.5" fill="currentColor">α</text>
        {/* right panel: three versions */}
        <text x="68" y="18" fontSize="6" fill="currentColor">cos²α − sin²α</text>
        <text x="68" y="28" fontSize="6" fill="currentColor">1 − 2sin²α</text>
        <text x="68" y="38" fontSize="6" fill="currentColor">2cos²α − 1</text>
        <text x="68" y="10" fontSize="6" fill="currentColor" fontWeight="bold">cos 2α =</text>
      </svg>
    ),
  },
];

/* ─── Special Values ─────────────────────────────────────── */

const specialValues = [
  { deg: "0°",   rad: "0",    sin: "0",     cos: "1",      tan: "0",      cot: "—"     },
  { deg: "30°",  rad: "π/6",  sin: "1/2",   cos: "√3/2",   tan: "1/√3",   cot: "√3"    },
  { deg: "45°",  rad: "π/4",  sin: "√2/2",  cos: "√2/2",   tan: "1",      cot: "1"     },
  { deg: "60°",  rad: "π/3",  sin: "√3/2",  cos: "1/2",    tan: "√3",     cot: "1/√3"  },
  { deg: "90°",  rad: "π/2",  sin: "1",     cos: "0",      tan: "—",      cot: "0"     },
  { deg: "120°", rad: "2π/3", sin: "√3/2",  cos: "−1/2",   tan: "−√3",    cot: "−1/√3" },
  { deg: "135°", rad: "3π/4", sin: "√2/2",  cos: "−√2/2",  tan: "−1",     cot: "−1"    },
  { deg: "150°", rad: "5π/6", sin: "1/2",   cos: "−√3/2",  tan: "−1/√3",  cot: "−√3"  },
  { deg: "180°", rad: "π",    sin: "0",     cos: "−1",     tan: "0",      cot: "—"     },
  { deg: "270°", rad: "3π/2", sin: "−1",    cos: "0",      tan: "—",      cot: "0"     },
  { deg: "360°", rad: "2π",   sin: "0",     cos: "1",      tan: "0",      cot: "—"     },
];

/* ─── Quadrant Signs ─────────────────────────────────────── */

const quadrantSigns = [
  { q: "רבע I (0°–90°)",      sin: "+", cos: "+", tan: "+", cot: "+" },
  { q: "רבע II (90°–180°)",   sin: "+", cos: "–", tan: "–", cot: "–" },
  { q: "רבע III (180°–270°)", sin: "–", cos: "–", tan: "+", cot: "+" },
  { q: "רבע IV (270°–360°)",  sin: "–", cos: "+", tan: "–", cot: "–" },
];

/* ─── Identity Sections ──────────────────────────────────── */

interface FEntry { name: string; formula: string; note?: string }
interface IdentitySection { id: number; title: string; note?: string; formulas: FEntry[] }

const identitySections: IdentitySection[] = [
  {
    id: 4,
    title: "זהויות יסודיות – פיתגורס",
    formulas: [
      { name: "זהות פיתגורס",       formula: "sin²(α) + cos²(α) = 1",      note: "הזהות הבסיסית" },
      { name: "נגזרת sin",          formula: "sin²(α) = 1 – cos²(α)" },
      { name: "נגזרת cos",          formula: "cos²(α) = 1 – sin²(α)" },
      { name: "עם tan",             formula: "tan²(α) + 1 = 1 / cos²(α)",   note: "cos(α) ≠ 0" },
      { name: "עם cot",             formula: "cot²(α) + 1 = 1 / sin²(α)",   note: "sin(α) ≠ 0" },
      { name: "tan = sin/cos",       formula: "tan(α) = sin(α) / cos(α)" },
      { name: "cot = cos/sin",       formula: "cot(α) = cos(α) / sin(α)" },
    ],
  },
  {
    id: 5,
    title: "זוויות שליליות",
    formulas: [
      { name: "sin(–α)", formula: "= –sin(α)", note: "אי-זוגית" },
      { name: "cos(–α)", formula: "= cos(α)",  note: "זוגית"    },
      { name: "tan(–α)", formula: "= –tan(α)", note: "אי-זוגית" },
    ],
  },
  {
    id: 6,
    title: "זוויות משלימות ומשלימות ל-180°",
    formulas: [
      { name: "sin(90° – α)",  formula: "= cos(α)" },
      { name: "cos(90° – α)",  formula: "= sin(α)" },
      { name: "sin(180° – α)", formula: "= sin(α)",   note: "לפתרון משוואות sin" },
      { name: "cos(180° – α)", formula: "= –cos(α)" },
      { name: "tan(180° – α)", formula: "= –tan(α)" },
      { name: "sin(180° + α)", formula: "= –sin(α)" },
      { name: "cos(180° + α)", formula: "= –cos(α)" },
      { name: "sin(360° + α)", formula: "= sin(α)",   note: "מחזוריות" },
      { name: "cos(360° + α)", formula: "= cos(α)",   note: "מחזוריות" },
      { name: "tan(180° + α)", formula: "= tan(α)",   note: "מחזוריות tan" },
    ],
  },
  {
    id: 7,
    title: "סכום והפרש זוויות",
    note: "מנוסחאון משרד החינוך",
    formulas: [
      { name: "sin(α + β)", formula: "= sin(α)cos(β) + cos(α)sin(β)" },
      { name: "sin(α – β)", formula: "= sin(α)cos(β) – cos(α)sin(β)" },
      { name: "cos(α + β)", formula: "= cos(α)cos(β) – sin(α)sin(β)" },
      { name: "cos(α – β)", formula: "= cos(α)cos(β) + sin(α)sin(β)" },
      { name: "tan(α + β)", formula: "= (tan α + tan β) / (1 – tan α·tan β)", note: "מכנה ≠ 0" },
      { name: "tan(α – β)", formula: "= (tan α – tan β) / (1 + tan α·tan β)", note: "מכנה ≠ 0" },
    ],
  },
  {
    id: 8,
    title: "זווית כפולה",
    formulas: [
      { name: "sin(2α)",          formula: "= 2·sin(α)·cos(α)" },
      { name: "cos(2α) – גרסה 1", formula: "= cos²(α) – sin²(α)" },
      { name: "cos(2α) – גרסה 2", formula: "= 1 – 2·sin²(α)" },
      { name: "cos(2α) – גרסה 3", formula: "= 2·cos²(α) – 1" },
      { name: "tan(2α)",          formula: "= 2·tan(α) / (1 – tan²(α))", note: "מכנה ≠ 0" },
    ],
  },
  {
    id: 9,
    title: "סכום והפרש של שתי פונקציות",
    note: "מנוסחאון משרד החינוך",
    formulas: [
      { name: "sin α + sin β", formula: "= 2·sin((α+β)/2)·cos((α–β)/2)" },
      { name: "sin α – sin β", formula: "= 2·cos((α+β)/2)·sin((α–β)/2)" },
      { name: "cos α + cos β", formula: "= 2·cos((α+β)/2)·cos((α–β)/2)" },
      { name: "cos α – cos β", formula: "= –2·sin((α+β)/2)·sin((α–β)/2)" },
    ],
  },
  {
    id: 10,
    title: "פתרון משוואות טריגונומטריות",
    formulas: [
      { name: "sin(x) = sin(α)", formula: "x = α + 360k  או  x = 180° – α + 360k", note: "k∈ℤ" },
      { name: "cos(x) = cos(α)", formula: "x = ±α + 360k",                           note: "k∈ℤ" },
      { name: "tan(x) = tan(α)", formula: "x = α + 180k",                            note: "k∈ℤ" },
    ],
  },
];

/* ─── Theorem Sections ───────────────────────────────────── */

const theoremSections = [
  {
    id: 11,
    title: "משפט הסינוסים",
    note: "R = רדיוס מעגל חוסם",
    formulas: [
      { name: "היחס", formula: "a/sin(A) = b/sin(B) = c/sin(C) = 2R" },
    ] as FEntry[],
    usage: [
      "נתון: צלע וזווית מולה → מציאת שאר הצלעות / זוויות",
      "אמביגואוס: כשנתונה זווית חדה ייתכנו שני פתרונות",
    ],
  },
  {
    id: 12,
    title: "משפט הקוסינוסים",
    note: "C היא הזווית הכלואה בין a ל-b",
    formulas: [
      { name: "לחישוב צלע",  formula: "c² = a² + b² – 2ab·cos(C)" },
      { name: "לחישוב זווית", formula: "cos(C) = (a² + b² – c²) / (2ab)" },
    ] as FEntry[],
    usage: [
      "נתונות שלוש צלעות → מציאת זוויות",
      "נתונות שתי צלעות והזווית ביניהן → הצלע השלישית",
    ],
  },
  {
    id: 13,
    title: "שטח משולש",
    formulas: [
      { name: "בסיסית",        formula: "S = ½ · בסיס · גובה" },
      { name: "עם סינוס",      formula: "S = ½ · a · b · sin(C)" },
      { name: "עם רדיוס חוסם", formula: "S = (a·b·c) / (4R)" },
      { name: "נוסחת הרון",    formula: "S = √(s(s–a)(s–b)(s–c)),  s = (a+b+c)/2" },
    ] as FEntry[],
  },
  {
    id: 14,
    title: "קשת וגזרה – רדיאנים",
    note: "α חייב להיות ברדיאנים בנוסחאות l ו-S",
    formulas: [
      { name: "מעלות → רדיאנים", formula: "α[רד] = α[°] · π / 180" },
      { name: "רדיאנים → מעלות", formula: "α[°] = α[רד] · 180 / π" },
      { name: "אורך קשת",        formula: "l = α · R" },
      { name: "שטח גזרה",        formula: "S = ½ · α · R²" },
    ] as FEntry[],
  },
];

/* ─── Graph Properties ───────────────────────────────────── */

const graphProps = [
  { name: "y = sin x",  period: "360° (2π)",  range: "[−1, 1]",       zeros: "0°, 180°, 360°, ...",  max: "90° + 360k",  min: "270° + 360k",  undef: "—"          },
  { name: "y = cos x",  period: "360° (2π)",  range: "[−1, 1]",       zeros: "90°, 270°, ...",       max: "0° + 360k",   min: "180° + 360k",  undef: "—"          },
  { name: "y = tan x",  period: "180° (π)",   range: "ℝ",             zeros: "0° + 180k",            max: "—",           min: "—",            undef: "90° + 180k" },
];

/* ─── Shifted Function ───────────────────────────────────── */

const shiftedParams = [
  { param: "A", effect: "משרעת (amplitude) – גובה הגל. ערך מקסימלי = |A|" },
  { param: "B", effect: "תדר – מחזור = 360°/|B| (ברדיאנים: 2π/|B|)" },
  { param: "C", effect: "הזזה אופקית (פאזה) – הגרף מוזז C/B שמאלה" },
  { param: "D", effect: "הזזה אנכית – ציר הסימטריה: y = D" },
];

const shiftedFormulas: FEntry[] = [
  { name: "מחזור",         formula: "T = 360° / |B|" },
  { name: "ערך מקסימלי",  formula: "y_max = D + |A|" },
  { name: "ערך מינימלי",  formula: "y_min = D – |A|" },
];

/* ─── Tips ───────────────────────────────────────────────── */

const tips = [
  "זהות פיתגורס sin²α + cos²α = 1 היא הכלי הנפוץ ביותר – לבטא סינוס דרך קוסינוס ולהיפך",
  "בפתרון משוואת sin – תמיד שני פתרונות בתחום [0°,360°): α ו-180°–α",
  "בפתרון משוואת cos – תמיד שני פתרונות: α ו-360°–α",
  "משפט הסינוסים עם זווית חדה: בדקו אם יש אמביגואוס (שני משולשים שונים)",
  "cos(2α) – שלוש גרסאות: בחרו לפי מה נוח לבטל (sin בלבד / cos בלבד / שניהם)",
  "ברדיאנים: l = αR ו-S = ½αR² – α חייב להיות ברדיאנים, לא במעלות",
];

/* ─── Navigation ─────────────────────────────────────────── */

const idx = topics.findIndex((t) => t.id === "trigonometry");
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
    <div
      className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100 last:border-0"
      dir="rtl"
    >
      <div className="shrink-0 text-right min-w-[120px]">
        <span className="text-sm font-semibold text-black">{name}</span>
        {note && <span className="block text-xs text-slate-400">{note}</span>}
      </div>
      <code
        className="text-sm font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded leading-relaxed"
        dir="ltr"
      >
        {formula}
      </code>
    </div>
  );
}

function CardBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 shadow-sm bg-white px-4 py-1">
      {children}
    </div>
  );
}

function DarkHeader({ id, title, note }: { id: number; title: string; note?: string }) {
  return (
    <div className="bg-slate-800 text-white px-4 py-3 flex items-center gap-3">
      <span className="w-7 h-7 rounded-full bg-white/15 text-xs font-black flex items-center justify-center shrink-0">
        {id}
      </span>
      <div>
        <h3 className="font-bold text-sm">{title}</h3>
        {note && <p className="text-white/60 text-xs">{note}</p>}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function TrigonometryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId="trigonometry" />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">בית</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">טריגונומטריה</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex-1">
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1">שאלון 581</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">טריגונומטריה</h1>
            <p className="text-white/70 font-medium">נוסחאות ומשפטים תקניים</p>
          </div>
          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl text-sm">
            זהויות טריגונומטריות, ערכים מיוחדים, משפטי סינוסים וקוסינוסים, נוסחאות שטח, גרפים ופונקציות מוזזות.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            {["6 נוסחות KaTeX", "11 ערכים מיוחדים", "7 סקציות זהויות", "גרפים ופונקציות"].map((s) => (
              <span key={s} className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── 1. נוסחות KaTeX ── */}
        <section>
          <SectionHead title="נוסחות מפתח" sub="הנוסחאות החיוניות לחישוב" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFormulas.map((f, i) => (
              <FormulaCard key={i} title={f.title} latex={f.latex} explanation={f.explanation} index={i} svgContent={f.svgContent} />
            ))}
          </div>
        </section>

        {/* ── 2. ערכים מיוחדים ── */}
        <section>
          <SectionHead title="ערכים מיוחדים" sub="חשוב לשנן – מופיעים בכל בחינה" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  {["זווית (°)", "רדיאנים", "sin", "cos", "tan", "cot"].map((h) => (
                    <th key={h} className="px-3 py-3 text-right font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specialValues.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-2.5 font-bold text-black">{row.deg}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600">{row.rad}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{row.sin}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{row.cos}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{row.tan}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{row.cot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 3. סימן לפי רבע ── */}
        <section>
          <SectionHead title="סימן הפונקציות לפי רבע" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-slate-800 text-white">
                  {["רבע", "sin", "cos", "tan", "cot"].map((h) => (
                    <th key={h} className="px-4 py-3 text-right font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quadrantSigns.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 font-semibold text-black">{row.q}</td>
                    {[row.sin, row.cos, row.tan, row.cot].map((sign, j) => (
                      <td
                        key={j}
                        className={`px-4 py-2.5 font-bold text-center ${
                          sign === "+" ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {sign}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="mt-3 rounded-xl border-2 border-black bg-black/5 px-4 py-3 flex items-center gap-3"
            dir="rtl"
          >
            <span className="text-xl font-black text-black shrink-0">!</span>
            <p className="text-sm text-slate-700">
              <span className="font-bold">כלל הסימנים:</span> רבע I – הכל חיובי. רבע II – רק sin. רבע III – רק tan. רבע IV – רק cos.
            </p>
          </div>
        </section>

        {/* ── 4–10. זהויות ── */}
        <section>
          <SectionHead title="זהויות טריגונומטריות" sub="לפי קבוצות" />
          <div className="space-y-4">
            {identitySections.map((sec) => (
              <div key={sec.id} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
                <DarkHeader id={sec.id} title={sec.title} note={sec.note} />
                <div className="px-4 py-1">
                  {sec.formulas.map((f, i) => (
                    <FRow key={i} {...f} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11–14. משפטים + שטח + רדיאנים ── */}
        <section>
          <SectionHead title="משפטים, שטח וגזרה" />
          <div className="space-y-4">
            {theoremSections.map((sec) => (
              <div key={sec.id} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
                <DarkHeader id={sec.id} title={sec.title} note={sec.note} />
                <div className="px-4 py-1">
                  {sec.formulas.map((f, i) => (
                    <FRow key={i} {...f} />
                  ))}
                </div>
                {"usage" in sec && sec.usage && (
                  <div className="px-4 pb-3 pt-1 space-y-1">
                    {sec.usage.map((u: string, i: number) => (
                      <p key={i} className="text-xs text-slate-500 flex gap-1.5">
                        <span className="text-slate-300 shrink-0">•</span>
                        {u}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 15. תכונות גרף ── */}
        <section>
          <SectionHead title="פונקציות טריגונומטריות – תכונות הגרף" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  {["פונקציה", "מחזור", "תחום ערכים", "אפסים", "מקסימום", "מינימום", "אינסוף"].map((h) => (
                    <th key={h} className="px-3 py-3 text-right font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {graphProps.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-2.5 font-bold text-black font-mono">{row.name}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{row.period}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{row.range}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600 text-xs">{row.zeros}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600 text-xs">{row.max}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600 text-xs">{row.min}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600 text-xs">{row.undef}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 16. פונקציה מוזזת ── */}
        <section>
          <SectionHead title="פונקציה מוזזת – y = A·sin(Bx + C) + D" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Parameters */}
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
              <div className="bg-slate-800 text-white px-4 py-3">
                <h3 className="font-bold text-sm">משמעות הפרמטרים</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {shiftedParams.map((p) => (
                  <div key={p.param} className="flex items-start gap-3 px-4 py-3">
                    <span className="w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0">
                      {p.param}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{p.effect}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulas */}
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
              <div className="bg-slate-800 text-white px-4 py-3">
                <h3 className="font-bold text-sm">נוסחאות מפתח</h3>
              </div>
              <div className="px-4 py-1">
                {shiftedFormulas.map((f, i) => (
                  <FRow key={i} {...f} />
                ))}
              </div>
              <div className="px-4 pb-4 pt-2">
                <p className="text-xs text-slate-500 leading-relaxed">
                  דוגמה: y = 3·sin(2x + 90°) + 1<br />
                  A=3 → y∈[−2, 4], מחזור = 180°, הזזה שמאלה 45°, ציר y=1
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tips ── */}
        <section>
          <TipsBox tips={tips} />
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
