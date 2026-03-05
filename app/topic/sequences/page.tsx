import TopicPageLayout from "@/components/TopicPageLayout";
import { topics } from "@/data/topics";

export const metadata = {
  title: "סדרות – בגרות מתמטיקה 5 יח״ל",
  description:
    "נוסחאות סדרות חשבוניות והנדסיות, הכנסת אמצעיים, סכומים וטיפים לפתרון – שאלון 581.",
};

const idx = topics.findIndex((t) => t.id === "sequences");
const prev = idx > 0 ? topics[idx - 1] : null;
const next = idx < topics.length - 1 ? topics[idx + 1] : null;

export default function SequencesPage() {
  return (
    <TopicPageLayout
      topicId="sequences"
      icon="ס"
      title="סדרות"
      subtitle="סדרות חשבוניות וגאומטריות"
      description="כל הנוסחאות לסדרות חשבוניות והנדסיות – איבר כללי, סכומים, הכנסת אמצעיים, טור אינסופי וטבלת השוואה מלאה."
      breadcrumbLabel="סדרות"
      statsChips={["7 נוסחאות", "טבלת השוואה", "נוסחאות עזר", "5 טיפים"]}

      /* ── Section 1: נוסחות ── */
      formulasSectionTitle="נוסחות מפתח"
      formulasSectionSubtitle="כל הנוסחאות החיוניות לסדרות חשבוניות והנדסיות"
      formulas={[
        {
          title: "איבר כללי – סדרה חשבונית",
          latex: "a_n = a_1 + (n-1) \\cdot d",
          explanation: "aₙ = האיבר ה-n, a₁ = האיבר הראשון, d = הפרש קבוע",
          svgContent: (
            // Linear sequence: dots going up with constant spacing (d>0)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="10" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <polyline points="22,48 38,41 54,34 70,27 86,20 102,13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="22" cy="48" r="2.5" fill="currentColor" />
              <circle cx="38" cy="41" r="2.5" fill="currentColor" />
              <circle cx="54" cy="34" r="2.5" fill="currentColor" />
              <circle cx="70" cy="27" r="2.5" fill="currentColor" />
              <circle cx="86" cy="20" r="2.5" fill="currentColor" />
              <circle cx="102" cy="13" r="2.5" fill="currentColor" />
              {/* d bracket between first two dots */}
              <line x1="22" y1="41" x2="38" y2="41" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="38" y1="41" x2="38" y2="48" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
              <text x="27" y="39" fontSize="5.5" fill="currentColor" fontStyle="italic">d</text>
            </svg>
          ),
        },
        {
          title: "סכום n איברים – סדרה חשבונית",
          latex: "S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)",
          explanation: "סכום n האיברים הראשונים של סדרה חשבונית",
          svgContent: (
            // Partial sums Sn grow quadratically (parabolic curve)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="10" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M22,51 C38,51 52,49 66,43 S86,28 102,8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* S1..S5 dots – quadratic growth */}
              <circle cx="22" cy="51" r="2.5" fill="currentColor" />
              <circle cx="38" cy="50" r="2.5" fill="currentColor" />
              <circle cx="54" cy="46" r="2.5" fill="currentColor" />
              <circle cx="70" cy="38" r="2.5" fill="currentColor" />
              <circle cx="86" cy="25" r="2.5" fill="currentColor" />
              <circle cx="102" cy="8"  r="2.5" fill="currentColor" />
              <text x="14" y="50" fontSize="5" fill="currentColor">S₁</text>
              <text x="96" y="6"  fontSize="5" fill="currentColor">Sₙ</text>
            </svg>
          ),
        },
        {
          title: "איבר כללי – סדרה גאומטרית",
          latex: "a_n = a_1 \\cdot q^{n-1}",
          explanation: "q = המנה (היחס בין איבר לקודמו). q ≠ 0, q ≠ 1",
          svgContent: (
            // Exponential growth: dots follow a·qⁿ curve, slow then very fast
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="10" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M22,50 C44,50 56,48 68,43 S84,32 102,7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* a1·q^0, a1·q^1, ... – exponential */}
              <circle cx="22" cy="50" r="2.5" fill="currentColor" />
              <circle cx="38" cy="49" r="2.5" fill="currentColor" />
              <circle cx="54" cy="46" r="2.5" fill="currentColor" />
              <circle cx="70" cy="38" r="2.5" fill="currentColor" />
              <circle cx="86" cy="23" r="2.5" fill="currentColor" />
              <circle cx="102" cy="7"  r="2.5" fill="currentColor" />
              <text x="14" y="49" fontSize="5" fill="currentColor">a₁</text>
              <text x="96" y="5"  fontSize="5" fill="currentColor" fontStyle="italic">×q</text>
            </svg>
          ),
        },
        {
          title: "סכום n איברים – סדרה גאומטרית",
          latex: "S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)",
          explanation: "סכום n האיברים הראשונים של סדרה גאומטרית",
          svgContent: (
            // Cumulative sums as growing bars (staircase) – each bar = previous×q taller
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="10" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* bars of increasing height representing S1..S5 */}
              <rect x="14" y="47" width="13" height="5"  fill="none" stroke="currentColor" strokeWidth="1.2" />
              <rect x="30" y="43" width="13" height="9"  fill="none" stroke="currentColor" strokeWidth="1.2" />
              <rect x="46" y="34" width="13" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <rect x="62" y="17" width="13" height="35" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <rect x="78" y="6"  width="13" height="46" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <text x="13"  y="57" fontSize="5" fill="currentColor">S₁</text>
              <text x="77"  y="57" fontSize="5" fill="currentColor">S₅</text>
            </svg>
          ),
        },
        {
          title: "סכום אינסופי – סדרה גאומטרית",
          latex: "S_\\infty = \\frac{a_1}{1 - q} \\quad (|q| < 1)",
          explanation: "סכום אינסופי קיים רק כאשר |q| < 1 (הטור מתכנס)",
          svgContent: (
            // Partial sums Sn converge to horizontal asymptote S∞
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="10" y1="52" x2="112" y2="52" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* asymptote S∞ */}
              <line x1="10" y1="11" x2="112" y2="11" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
              <text x="3" y="14" fontSize="5.5" fill="currentColor">S∞</text>
              {/* converging curve */}
              <path d="M22,44 C36,28 50,18 66,14 S88,11.8 102,11.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* dots S1..S5 approaching asymptote */}
              <circle cx="22" cy="44"   r="2.5" fill="currentColor" />
              <circle cx="38" cy="30"   r="2.5" fill="currentColor" />
              <circle cx="54" cy="18"   r="2.5" fill="currentColor" />
              <circle cx="70" cy="13.5" r="2.5" fill="currentColor" />
              <circle cx="86" cy="11.8" r="2.5" fill="currentColor" />
            </svg>
          ),
        },
        {
          title: "הכנסת k אמצעיים חשבוניים",
          latex: "d = \\frac{b - a}{k + 1}",
          explanation: "הכנסת k איברים בין a ל-b בסדרה חשבונית – d הוא ההפרש החדש",
          svgContent: (
            // Number line: a and b (filled) with k=3 equally-spaced means (open) between them
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="12" y1="30" x2="108" y2="30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* a (filled) */}
              <circle cx="18" cy="30" r="3"   fill="currentColor" />
              {/* k=3 arithmetic means (open) – equally spaced */}
              <circle cx="38" cy="30" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="58" cy="30" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="78" cy="30" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
              {/* b (filled) */}
              <circle cx="98" cy="30" r="3"   fill="currentColor" />
              {/* equal-spacing tick marks */}
              <line x1="28" y1="26" x2="28" y2="34" stroke="currentColor" strokeWidth="0.9" />
              <line x1="48" y1="26" x2="48" y2="34" stroke="currentColor" strokeWidth="0.9" />
              <line x1="68" y1="26" x2="68" y2="34" stroke="currentColor" strokeWidth="0.9" />
              <line x1="88" y1="26" x2="88" y2="34" stroke="currentColor" strokeWidth="0.9" />
              <text x="13" y="22" fontSize="7" fill="currentColor" fontStyle="italic">a</text>
              <text x="93" y="22" fontSize="7" fill="currentColor" fontStyle="italic">b</text>
              <text x="34" y="22" fontSize="5" fill="currentColor">m₁</text>
              <text x="74" y="22" fontSize="5" fill="currentColor">m₃</text>
            </svg>
          ),
        },
        {
          title: "הכנסת k אמצעיים הנדסיים",
          latex: "q = \\left(\\frac{b}{a}\\right)^{\\frac{1}{k+1}}",
          explanation: "הכנסת k איברים בין a ל-b בסדרה גאומטרית – q היא המנה החדשה",
          svgContent: (
            // Number line: a and b with k=2 geometric means; gaps grow (×q each time)
            // a=1, g1=2, g2=4, b=8 → positions 25, 36, 58, 102 (gaps: 11, 22, 44)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <line x1="12" y1="30" x2="108" y2="30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              {/* a (filled) */}
              <circle cx="25" cy="30" r="3"   fill="currentColor" />
              {/* k=2 geometric means (open) – unequally spaced */}
              <circle cx="36" cy="30" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="58" cy="30" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
              {/* b (filled) */}
              <circle cx="102" cy="30" r="3"   fill="currentColor" />
              {/* gap labels showing ×q spacing */}
              <text x="25" y="22" fontSize="5" fill="currentColor">a</text>
              <text x="97" y="22" fontSize="5" fill="currentColor">b</text>
              {/* brace/arc showing widening gaps */}
              <path d="M25,38 Q30.5,44 36,38"  fill="none" stroke="currentColor" strokeWidth="0.9" />
              <path d="M36,38 Q47,46 58,38"    fill="none" stroke="currentColor" strokeWidth="0.9" />
              <path d="M58,38 Q80,50 102,38"   fill="none" stroke="currentColor" strokeWidth="0.9" />
              <text x="27"  y="48" fontSize="4.5" fill="currentColor">×q</text>
              <text x="44"  y="51" fontSize="4.5" fill="currentColor">×q</text>
              <text x="73"  y="54" fontSize="4.5" fill="currentColor">×q</text>
            </svg>
          ),
        },
      ]}

      /* ── Section 2: טבלת השוואה ── */
      mainTableSectionTitle="השוואה: חשבונית מול הנדסית"
      mainTableSectionSubtitle="זהה את ההבדלים לפני שמתחילים לפתור"
      mainTableHeaders={["גודל", "סדרה חשבונית", "סדרה הנדסית"]}
      mainTableRows={[
        { cells: ["חוק הסדרה",       "הפרש d קבוע: aₙ₊₁ − aₙ = d",    "מנה q קבועה: aₙ₊₁ / aₙ = q"],  stripe: false },
        { cells: ["איבר כללי",        "aₙ = a₁ + (n−1)·d",               "aₙ = a₁·qⁿ⁻¹"],                 stripe: true  },
        { cells: ["סכום n איברים",    "Sₙ = n/2·(a₁ + aₙ)",              "Sₙ = a₁·(qⁿ−1)/(q−1)"],         stripe: false },
        { cells: ["אמצעי בין שכנים", "aₘ = (aₘ₋₁ + aₘ₊₁) / 2",        "aₘ² = aₘ₋₁ · aₘ₊₁"],            stripe: true  },
        { cells: ["הכנסת k אמצעיים", "d = (b − a) / (k + 1)",            "q = (b/a)^(1/(k+1))"],           stripe: false },
        { cells: ["סכום אינסופי",     "אין (הסדרה מתבדרת)",               "S∞ = a₁/(1−q) כאשר |q| < 1"],   stripe: true  },
      ]}

      /* ── Section 3: נוסחאות עזר ── */
      sideTablesSectionTitle="נוסחאות עזר"
      sideTablesSectionSubtitle="הכנסת אמצעיים וגזירת איבר מסכום"
      leftTableTitle="הכנסת k אמצעיים בין a ל-b"
      leftTableHeaders={["סוג", "נוסחה", "דוגמה (k=2)"]}
      leftTableRows={[
        { cells: ["חשבוניים", "d = (b−a)/(k+1)", "בין 1 ל-7: d=2"] },
        { cells: ["הנדסיים",  "q = (b/a)^(1/(k+1))", "בין 1 ל-8: q=2"] },
      ]}
      rightTableTitle="גזירת aₙ מתוך Sₙ"
      rightTableHeaders={["מקרה", "נוסחה", "הסבר"]}
      rightTableRows={[
        { cells: ["n > 1", "aₙ = Sₙ − Sₙ₋₁", "כלל כללי"]   },
        { cells: ["n = 1", "a₁ = S₁",          "מקרה גבולי"] },
      ]}
      highlightTitle="ערכי q שימושיים לזיהוי סדרה הנדסית"
      highlightBody={
        <p>
          <span className="font-mono font-semibold">q = 2</span>
          {"  ·  "}
          <span className="font-mono font-semibold">q = 1/2</span>
          {"  ·  "}
          <span className="font-mono font-semibold">q = −1</span>
          {"  ·  "}
          <span className="font-mono font-semibold">q = √2</span>
          {"  "}
          <span className="text-slate-400 text-xs">— אם |q| {"<"} 1 הסכום האינסופי מתכנס</span>
        </p>
      }

      /* ── Section 4: שלבי פתרון ── */
      stepsSectionTitle="שלבי פתרון תקניים"
      stepsSectionSubtitle="עקבו אחרי הסדר הזה בכל שאלת סדרות"
      steps={[
        { title: "זהו את הסוג",    body: "חשבונית = הפרשים קבועים. הנדסית = מנות קבועות (חלקו איברים עוקבים)" },
        { title: "כתבו a₁ ו-d/q", body: "חלצו את האיבר הראשון ואת ההפרש (d) או המנה (q) מהנתונים" },
        { title: "בחרו נוסחה",     body: "aₙ לחישוב איבר בודד. Sₙ לחישוב סכום. S∞ רק אם |q| < 1" },
        { title: "הציבו נתונים",   body: "הכניסו את a₁, d/q ו-n לנוסחה. בדקו שכל הנתונים נכונים לפני הצבה" },
        { title: "פתרו משוואה",    body: "בידדו את המשתנה הנדרש – לרוב n, a₁, d או q" },
        { title: "בדקו תשובה",     body: "הציבו חזרה בנוסחה המקורית. ודאו ש-n טבעי ושהתשובה הגיונית" },
      ]}

      /* ── Section 5: טיפים ── */
      tips={[
        "זהה את סוג הסדרה לפני הכל – חשבונית (הפרש קבוע) או הנדסית (מנה קבועה)",
        "בסדרה חשבונית: חפש הפרשים קבועים; בהנדסית: חפש מנות קבועות (חלוקת איברים עוקבים)",
        "אם נתון S(n) – גזור a(n) לפי: a(n) = S(n) − S(n−1) לכל n > 1",
        "שים לב לסימן q: אם q < 0 – האיברים מתחלפים בסימן (חיובי/שלילי/חיובי...)",
        "טור אינסופי מתכנס רק אם |q| < 1 – אחרת אין סכום אינסופי",
      ]}

      prevTopic={prev}
      nextTopic={next}
    />
  );
}
