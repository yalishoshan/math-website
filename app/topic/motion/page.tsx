import TopicPageLayout from "@/components/TopicPageLayout";
import { topics } from "@/data/topics";

export const metadata = {
  title: "נוסחאות תנועה לשאלון 581 – בגרות מתמטיקה 5 יח״ל",
  description:
    "נוסחאות ומשפטים תקניים לבעיות תנועה בשאלון 581 – מרדף, התקרבות, מהירות ממוצעת, המרת יחידות.",
};

const idx = topics.findIndex((t) => t.id === "motion");
const prev = idx > 0 ? topics[idx - 1] : null;
const next = idx < topics.length - 1 ? topics[idx + 1] : null;

export default function MotionPage() {
  return (
    <TopicPageLayout
      topicId="motion"
      icon="ת"
      title="בעיות תנועה"
      subtitle="נוסחאות ומשפטים תקניים"
      description="כל הנוסחאות, הטבלאות וכללי הפתרון לבעיות תנועה בשאלון 581 – מרדף, התקרבות, מהירות ממוצעת, המרת יחידות ושלבי פתרון תקניים."
      breadcrumbLabel="בעיות תנועה"
      statsChips={["6 נוסחאות", "5 סוגי בעיות", "טבלת המרת יחידות", "6 טיפים"]}

      /* ── Section 1: נוסחות ── */
      formulasSectionTitle="נוסחות מפתח"
      formulasSectionSubtitle="הנוסחאות החיוניות לכל בעיות התנועה"
      formulas={[
        {
          title: "נוסחת הדרך",
          latex: "d = v \\cdot t",
          explanation: "מרחק = מהירות × זמן – הנוסחה הבסיסית שממנה הכל נגזר",
          svgContent: (
            <svg viewBox="0 0 120 60" fill="none" className="w-full max-w-[180px] h-auto">
              {/* y-axis */}
              <line x1="15" y1="53" x2="15" y2="5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 12 9 L 15 4 L 18 9" fill="#94a3b8" />
              {/* x-axis */}
              <line x1="15" y1="53" x2="108" y2="53" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 105 50 L 110 53 L 105 56" fill="#94a3b8" />
              {/* d = vt straight line */}
              <line x1="15" y1="53" x2="98" y2="11" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
              {/* axis labels */}
              <text x="5" y="9" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">d</text>
              <text x="110" y="56" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">t</text>
              <text x="54" y="28" fill="#0d9488" fontSize="6.5" fontFamily="monospace">d=v·t</text>
            </svg>
          ),
        },
        {
          title: "מהירות ממוצעת",
          latex: "\\bar{v} = \\frac{d_{total}}{t_{total}}",
          explanation: "מרחק כולל ÷ זמן כולל. שימו לב: זה לא ממוצע חשבוני של המהירויות!",
          svgContent: (
            <svg viewBox="0 0 120 60" fill="none" className="w-full max-w-[180px] h-auto">
              {/* y-axis */}
              <line x1="15" y1="53" x2="15" y2="5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 12 9 L 15 4 L 18 9" fill="#94a3b8" />
              {/* x-axis */}
              <line x1="15" y1="53" x2="108" y2="53" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 105 50 L 110 53 L 105 56" fill="#94a3b8" />
              {/* Leg 1: fast */}
              <line x1="15" y1="53" x2="55" y2="17" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
              {/* Leg 2: slow */}
              <line x1="55" y1="17" x2="102" y2="29" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
              {/* Average dashed line */}
              <line x1="15" y1="53" x2="102" y2="29" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round" />
              {/* Labels */}
              <text x="5" y="9" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">d</text>
              <text x="110" y="56" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">t</text>
              <text x="72" y="35" fill="#0d9488" fontSize="8" fontFamily="serif" fontStyle="italic">v̄</text>
            </svg>
          ),
        },
        {
          title: "מרדף – שוויון מרחקים",
          latex: "v_1 \\cdot t_1 = v_2 \\cdot t_2",
          explanation: "שני עצמים נפגשים כאשר המרחקים שעשו מאותה נקודת ייחוס שווים",
          svgContent: (
            <svg viewBox="0 0 120 60" fill="none" className="w-full max-w-[180px] h-auto">
              {/* y-axis */}
              <line x1="15" y1="53" x2="15" y2="5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 12 9 L 15 4 L 18 9" fill="#94a3b8" />
              {/* x-axis */}
              <line x1="15" y1="53" x2="108" y2="53" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 105 50 L 110 53 L 105 56" fill="#94a3b8" />
              {/* v₁ – starts at t=0, slower slope */}
              <line x1="15" y1="53" x2="82" y2="18" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
              {/* v₂ – starts later (Δt), steeper slope */}
              <line x1="38" y1="53" x2="82" y2="18" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
              {/* Meeting point */}
              <circle cx="82" cy="18" r="3.5" fill="#0d9488" />
              {/* Labels */}
              <text x="5" y="9" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">d</text>
              <text x="110" y="56" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">t</text>
              <text x="20" y="42" fill="#3b82f6" fontSize="7" fontFamily="serif" fontStyle="italic">v₁</text>
              <text x="48" y="50" fill="#ef4444" fontSize="7" fontFamily="serif" fontStyle="italic">v₂</text>
              <text x="85" y="16" fill="#0d9488" fontSize="5.5" fontFamily="monospace">d₁=d₂</text>
            </svg>
          ),
        },
        {
          title: "התקרבות / התרחקות",
          latex: "d_0 = (v_1 + v_2) \\cdot t",
          explanation: "נסיעה זה לקראת זה (או זה מזה) – מרחק = סכום המהירויות × זמן",
          svgContent: (
            <svg viewBox="0 0 120 60" fill="none" className="w-full max-w-[180px] h-auto">
              {/* Number line */}
              <line x1="8" y1="26" x2="112" y2="26" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />
              {/* Left object (blue) */}
              <circle cx="16" cy="26" r="5" fill="#3b82f6" />
              {/* Right object (red) */}
              <circle cx="104" cy="26" r="5" fill="#ef4444" />
              {/* Left arrow → */}
              <line x1="23" y1="26" x2="50" y2="26" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
              <path d="M 47 22.5 L 52 26 L 47 29.5" fill="#3b82f6" />
              {/* Right arrow ← */}
              <line x1="97" y1="26" x2="70" y2="26" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <path d="M 73 22.5 L 68 26 L 73 29.5" fill="#ef4444" />
              {/* Labels above */}
              <text x="10" y="14" fill="#3b82f6" fontSize="7" fontFamily="serif" fontStyle="italic">v₁</text>
              <text x="98" y="14" fill="#ef4444" fontSize="7" fontFamily="serif" fontStyle="italic">v₂</text>
              {/* Distance bracket below */}
              <line x1="16" y1="40" x2="104" y2="40" stroke="#0d9488" strokeWidth="1" />
              <line x1="16" y1="37" x2="16" y2="43" stroke="#0d9488" strokeWidth="1" />
              <line x1="104" y1="37" x2="104" y2="43" stroke="#0d9488" strokeWidth="1" />
              <text x="55" y="53" fill="#0d9488" fontSize="8" fontFamily="serif" fontStyle="italic">d₀</text>
            </svg>
          ),
        },
        {
          title: "מרדף – הפרש מהירויות",
          latex: "(v_1 - v_2) \\cdot t = \\Delta d",
          explanation: "נסיעה באותו כיוון – הפרש המרחקים = הפרש המהירויות × זמן (v₁ > v₂)",
          svgContent: (
            <svg viewBox="0 0 120 60" fill="none" className="w-full max-w-[180px] h-auto">
              {/* y-axis */}
              <line x1="15" y1="53" x2="15" y2="5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 12 9 L 15 4 L 18 9" fill="#94a3b8" />
              {/* x-axis */}
              <line x1="15" y1="53" x2="108" y2="53" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 105 50 L 110 53 L 105 56" fill="#94a3b8" />
              {/* v₁ – faster, starts behind */}
              <line x1="15" y1="53" x2="88" y2="14" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
              {/* v₂ – slower, starts with Δd head start */}
              <line x1="15" y1="38" x2="88" y2="14" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
              {/* Δd gap at t=0 */}
              <line x1="9" y1="38" x2="9" y2="53" stroke="#6366f1" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="1" y="47" fill="#6366f1" fontSize="5.5" fontFamily="serif" fontStyle="italic">Δd</text>
              {/* Meeting point */}
              <circle cx="88" cy="14" r="3.5" fill="#0d9488" />
              {/* Labels */}
              <text x="5" y="9" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">d</text>
              <text x="110" y="56" fill="#475569" fontSize="8" fontFamily="serif" fontStyle="italic">t</text>
              <text x="30" y="50" fill="#3b82f6" fontSize="7" fontFamily="serif" fontStyle="italic">v₁</text>
              <text x="34" y="36" fill="#ef4444" fontSize="7" fontFamily="serif" fontStyle="italic">v₂</text>
            </svg>
          ),
        },
        {
          title: "המרת יחידות",
          latex: "1 \\;\\frac{km}{h} = \\frac{1}{3.6} \\;\\frac{m}{s} \\approx 0.278 \\;\\frac{m}{s}",
          explanation: "km/h → m/s: חלקו ב-3.6.  m/s → km/h: כפלו ב-3.6",
          svgContent: (
            <svg viewBox="0 0 120 60" fill="none" className="w-full max-w-[180px] h-auto">
              {/* km/h box */}
              <rect x="4" y="10" width="34" height="30" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" />
              <text x="10" y="22" fill="#1d4ed8" fontSize="8" fontWeight="700" fontFamily="monospace">km</text>
              <line x1="10" y1="26" x2="32" y2="26" stroke="#1d4ed8" strokeWidth="1" />
              <text x="17" y="36" fill="#1d4ed8" fontSize="8" fontFamily="monospace">h</text>
              {/* Forward arrow ÷3.6 */}
              <line x1="40" y1="22" x2="76" y2="22" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 73 18.5 L 78 22 L 73 25.5" fill="#0d9488" />
              <text x="44" y="17" fill="#0d9488" fontSize="6.5" fontFamily="monospace">÷3.6</text>
              {/* Reverse arrow ×3.6 */}
              <line x1="76" y1="33" x2="40" y2="33" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 43 29.5 L 38 33 L 43 36.5" fill="#64748b" />
              <text x="44" y="46" fill="#64748b" fontSize="6.5" fontFamily="monospace">×3.6</text>
              {/* m/s box */}
              <rect x="82" y="10" width="34" height="30" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.2" />
              <text x="90" y="22" fill="#15803d" fontSize="8" fontWeight="700" fontFamily="monospace">m</text>
              <line x1="90" y1="26" x2="110" y2="26" stroke="#15803d" strokeWidth="1" />
              <text x="96" y="36" fill="#15803d" fontSize="8" fontFamily="monospace">s</text>
            </svg>
          ),
        },
      ]}

      /* ── Section 2: טבלת סוגי בעיות ── */
      mainTableSectionTitle="סוגי בעיות תנועה"
      mainTableSectionSubtitle="זהו את הסוג לפני שמקימים משוואה"
      mainTableHeaders={["סוג הבעיה", "תיאור", "נוסחת מפתח", "המשוואה"]}
      mainTableRows={[
        { cells: ["מרדף",          "שניים נעים באותו כיוון; אחד מדביק את השני",  "d₁ = d₂",              "v₁·t₁ = v₂·t₂"],         stripe: false },
        { cells: ["התקרבות",       "שניים נעים זה לקראת זה ממקום אחד",            "d = (v₁+v₂)·t",        "t = d₀ ÷ (v₁+v₂)"],      stripe: true  },
        { cells: ["מפגש",          "שניים יוצאים ממקומות שונים זה לקראת זה",       "d₁ + d₂ = d₀",         "v₁·t + v₂·t = d₀"],       stripe: false },
        { cells: ["התרחקות",       "שניים נעים לכיוונים מנוגדים",                  "d = (v₁+v₂)·t",        "t = d ÷ (v₁+v₂)"],        stripe: true  },
        { cells: ["מהירות ממוצעת", "הלוך במהירות אחת, חזרה במהירות שונה",         "v̄ = d_כולל ÷ t_כולל", "v̄ = 2d ÷ (d/v₁+d/v₂)"],  stripe: false },
      ]}

      /* ── Section 3: המרת יחידות ── */
      sideTablesSectionTitle="המרת יחידות"
      sideTablesSectionSubtitle="1 km/h = 1/3.6 m/s ≈ 0.278 m/s — חובה לזכור!"
      leftTableTitle="המרת מהירות"
      leftTableHeaders={["מ-", "ל-", "פעולה ודוגמה"]}
      leftTableRows={[
        { cells: ["km/h", "m/s",    "÷ 3.6 — 90÷3.6=25 m/s"]  },
        { cells: ["m/s",  "km/h",   "× 3.6 — 25×3.6=90 km/h"] },
        { cells: ["km/h", "km/min", "÷ 60 — 60÷60=1 km/min"]  },
      ]}
      rightTableTitle="המרת זמן"
      rightTableHeaders={["מ-", "ל-", "פעולה ודוגמה"]}
      rightTableRows={[
        { cells: ["שעות", "דקות",  "× 60 — 1.5h=90 min"]    },
        { cells: ["דקות", "שעות",  "÷ 60 — 45 min=0.75h"]   },
        { cells: ["שעות", "שניות", "× 3600 — 2h=7200 sec"]  },
      ]}
      highlightTitle="דוגמאות מהירות נפוצות"
      highlightBody={
        <p>
          <span className="font-mono font-semibold">36 km/h = 10 m/s</span>
          {"  ·  "}
          <span className="font-mono font-semibold">72 km/h = 20 m/s</span>
          {"  ·  "}
          <span className="font-mono font-semibold">90 km/h = 25 m/s</span>
          {"  ·  "}
          <span className="font-mono font-semibold">108 km/h = 30 m/s</span>
        </p>
      }

      /* ── Section 4: שלבי פתרון ── */
      stepsSectionTitle="שלבי פתרון תקניים"
      stepsSectionSubtitle="עקבו אחרי הסדר הזה בכל שאלת תנועה"
      steps={[
        { title: "קראו היטב",      body: "זהו מי נע, לאיזה כיוון, מתי יצא כל אחד ומה השאלה" },
        { title: "הגדירו משתנה",   body: "סמנו t = זמן (בשעות או דקות) ורשמו ביטוי מרחק לכל עצם: v·t" },
        { title: "זהו את הסוג",    body: "מרדף / התקרבות / מפגש / התרחקות – לכל סוג משוואה שונה" },
        { title: "הקימו משוואה",   body: "השוו מרחקים (מרדף), חברו (מפגש/התקרבות), הפחיתו (הפרש)" },
        { title: "בדקו יחידות",    body: "וודאו שכל הגדלים באותה יחידה. km/h, m/s, דקות, שעות – לא לערבב!" },
        { title: "בדקו סבירות",    body: "הכניסו את התשובה חזרה לתנאי הבעיה ובדקו שהיא הגיונית" },
      ]}

      /* ── Section 5: טיפים ── */
      tips={[
        "הגדירו משתנה ברור: לרוב t = זמן נסיעה (בשעות). רשמו ביטוי מרחק לכל עצם",
        "זהו סוג הבעיה: מרדף (אותו כיוון), התקרבות (כיוונים מנוגדים), מפגש (ממקומות שונים)",
        "בדקו יחידות לפני כל חישוב – אסור לערבב km/h עם m/s",
        "ציירו ציר מרחק עם חיצים לכל עצם – זה מבהיר מיד את הסיטואציה",
        "מהירות ממוצעת להלוך-חזור: השתמשו ב-d_total ÷ t_total, לא בממוצע המהירויות",
        "הפרש זמן יציאה: אם האחד יצא ראשון בזמן Δt, הוא עשה v₁·Δt ק\"מ לפני שהשני יצא",
      ]}

      prevTopic={prev}
      nextTopic={next}
    />
  );
}
