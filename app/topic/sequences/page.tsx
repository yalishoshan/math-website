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
        },
        {
          title: "סכום n איברים – סדרה חשבונית",
          latex: "S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)",
          explanation: "סכום n האיברים הראשונים של סדרה חשבונית",
        },
        {
          title: "איבר כללי – סדרה גאומטרית",
          latex: "a_n = a_1 \\cdot q^{n-1}",
          explanation: "q = המנה (היחס בין איבר לקודמו). q ≠ 0, q ≠ 1",
        },
        {
          title: "סכום n איברים – סדרה גאומטרית",
          latex: "S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)",
          explanation: "סכום n האיברים הראשונים של סדרה גאומטרית",
        },
        {
          title: "סכום אינסופי – סדרה גאומטרית",
          latex: "S_\\infty = \\frac{a_1}{1 - q} \\quad (|q| < 1)",
          explanation: "סכום אינסופי קיים רק כאשר |q| < 1 (הטור מתכנס)",
        },
        {
          title: "הכנסת k אמצעיים חשבוניים",
          latex: "d = \\frac{b - a}{k + 1}",
          explanation: "הכנסת k איברים בין a ל-b בסדרה חשבונית – d הוא ההפרש החדש",
        },
        {
          title: "הכנסת k אמצעיים הנדסיים",
          latex: "q = \\left(\\frac{b}{a}\\right)^{\\frac{1}{k+1}}",
          explanation: "הכנסת k איברים בין a ל-b בסדרה גאומטרית – q היא המנה החדשה",
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
