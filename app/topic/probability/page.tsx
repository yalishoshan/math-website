import TopicPageLayout from "@/components/TopicPageLayout";
import { topics } from "@/data/topics";

export const metadata = {
  title: "הסתברות – בגרות מתמטיקה 5 יח״ל",
  description:
    "נוסחאות הסתברות, קומבינטוריקה, שאיבה עם/ללא החזרה וטיפים לפתרון – שאלון 581.",
};

const idx = topics.findIndex((t) => t.id === "probability");
const prev = idx > 0 ? topics[idx - 1] : null;
const next = idx < topics.length - 1 ? topics[idx + 1] : null;

export default function ProbabilityPage() {
  return (
    <TopicPageLayout
      topicId="probability"
      icon="ה"
      title="הסתברות"
      subtitle="סיכויים, קומבינטוריקה ומאורעות"
      description="כל הנוסחאות לחישוב הסתברויות – קלאסית, מותנית, כלל החיבור והכפל, קומבינטוריקה, שאיבה עם ללא החזרה ושלבי פתרון תקניים."
      breadcrumbLabel="הסתברות"
      statsChips={["6 נוסחאות", "6 סוגי בעיות", "טבלת קומבינטוריקה", "6 טיפים"]}

      /* ── Section 1: נוסחות ── */
      formulasSectionTitle="נוסחות מפתח"
      formulasSectionSubtitle="הנוסחאות החיוניות לכל שאלות ההסתברות"
      formulas={[
        {
          title: "הסתברות קלאסית",
          latex: "P(A) = \\frac{n(A)}{n(S)}",
          explanation: "מספר מקרים רצויים חלקי מספר מקרים אפשריים – תקף כשכל תוצאה שקולה",
        },
        {
          title: "הסתברות משלימה",
          latex: "P(\\bar{A}) = 1 - P(A)",
          explanation: "הסתברות שהמאורע לא יתרחש. שימושי במיוחד ב\"לפחות אחד\"",
        },
        {
          title: "כלל החיבור",
          latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
          explanation: "הסתברות ש-A או B יתרחשו. אם A,B זרים: P(A∩B)=0",
        },
        {
          title: "כלל הכפל – בלתי תלויים",
          latex: "P(A \\cap B) = P(A) \\cdot P(B)",
          explanation: "כשהתרחשות A לא משפיעה על B. תקף רק למאורעות בלתי-תלויים",
        },
        {
          title: "הסתברות מותנית",
          latex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
          explanation: "הסתברות ל-A בהינתן ש-B כבר התרחש. כלל הכפל הכללי: P(A∩B)=P(B)·P(A|B)",
        },
        {
          title: "ביטוי קומבינטורי",
          latex: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
          explanation: "מספר דרכים לבחור k פריטים מתוך n ללא חשיבות לסדר",
        },
      ]}

      /* ── Section 2: סוגי בעיות ── */
      mainTableSectionTitle="סוגי בעיות הסתברות"
      mainTableSectionSubtitle="זהו את הסוג לפני שבוחרים נוסחה"
      mainTableHeaders={["סוג הבעיה", "תיאור", "נוסחה", "מתי להשתמש"]}
      mainTableRows={[
        { cells: ["קלאסית",             "מרחב מדגם שווה-סיכויי",                  "P(A) = n(A)/n(S)",           "כשכל תוצאה שקולה"],                   stripe: false },
        { cells: ["משלים",              "קל יותר לחשב את ההופכי",                  "P(A) = 1 − P(Ā)",            "\"לפחות אחד\", \"לא כולם\""],          stripe: true  },
        { cells: ["חיבור",              "A או B (לא בהכרח זרים)",                  "P(A∪B) = P(A)+P(B)−P(A∩B)", "איחוד שני מאורעות"],                   stripe: false },
        { cells: ["כפל – בלתי תלויים", "A וגם B, ללא תלות",                       "P(A∩B) = P(A)·P(B)",         "ניסויים עצמאיים"],                     stripe: true  },
        { cells: ["מותנית",             "A בהינתן שB קרה",                          "P(A|B) = P(A∩B)/P(B)",       "שאיבה ללא החזרה / מידע נוסף"],         stripe: false },
        { cells: ["קומבינטורית",        "שאיבה ללא החזרה, ללא חשיבות לסדר",       "C(n,k) = n!/(k!(n−k)!)",     "בחירת וועדה, ידיים בקלפים"],           stripe: true  },
      ]}

      /* ── Section 3: קומבינטוריקה ושאיבה ── */
      sideTablesSectionTitle="קומבינטוריקה ושאיבה"
      sideTablesSectionSubtitle="כלים לספירת מקרים אפשריים ורצויים"
      leftTableTitle="שאיבה עם/ללא החזרה"
      leftTableHeaders={["סוג שאיבה", "מאפיין", "חישוב P"]}
      leftTableRows={[
        { cells: ["עם החזרה",    "המכנה קבוע בכל שלב",   "P(A)·P(B)·..."] },
        { cells: ["ללא החזרה",  "המכנה קטן בכל שלב",    "P(A)·P(B|A)·..."] },
      ]}
      rightTableTitle="נוסחאות קומבינטוריקה"
      rightTableHeaders={["גודל", "נוסחה", "הסבר"]}
      rightTableRows={[
        { cells: ["C(n,k)", "n! / (k!·(n−k)!)", "בחירה ללא סדר"] },
        { cells: ["P(n,k)", "n! / (n−k)!",       "סידור עם סדר"]  },
        { cells: ["n!",     "n·(n−1)·...·1",     "מספר סידורים"]  },
      ]}
      highlightTitle='לפחות אחד — כמעט תמיד דרך המשלים'
      highlightBody={
        <p>
          <span className="font-mono font-semibold">P(לפחות אחד) = 1 − P(אף אחד)</span>
          {"  "}
          <span className="text-slate-400 text-xs">
            — הרבה יותר קל לחשב את ההופכי ולהחסיר מ-1
          </span>
        </p>
      }

      /* ── Section 4: שלבי פתרון ── */
      stepsSectionTitle="שלבי פתרון תקניים"
      stepsSectionSubtitle="עקבו אחרי הסדר הזה בכל שאלת הסתברות"
      steps={[
        { title: "הגדר מרחב מדגם",   body: "רשום בבירור מהן כל התוצאות האפשריות ומה גודל מרחב המדגם n(S)" },
        { title: "זהה את הסוג",      body: "קלאסית / משלים / חיבור / כפל / מותנית / קומבינטורית" },
        { title: "בדוק תלות וזרות",  body: "זרים: A∩B=∅. בלתי-תלויים: P(A∩B)=P(A)·P(B). לא להחליף ביניהם!" },
        { title: "בחר נוסחה",        body: "לפי הסוג שזיהית – ראה טבלת הסוגים למעלה" },
        { title: "חשב את ההסתברות", body: "הצב ופשט. אם נדרש C(n,k) – חשב מונה ומכנה בנפרד" },
        { title: "בדוק תוצאה",       body: "סכום כל ההסתברויות חייב להיות 1. ערך חייב להיות בין 0 ל-1" },
      ]}

      /* ── Section 5: טיפים ── */
      tips={[
        "הגדר בבירור את מרחב המדגם לפני כל חישוב",
        "בדוק אם המאורעות זרים או בלתי-תלויים לפני שבוחר נוסחה",
        "\"לפחות אחד\" – כמעט תמיד קל יותר דרך המשלים: 1 − P(אף אחד)",
        "ציר עץ – כלי עזר מצוין לבעיות עם שלבים (שאיבה ללא החזרה וכד׳)",
        "שאיבה ללא החזרה – המכנה משתנה בכל שלב (n−1, n−2, ...)",
        "בדוק בסוף: סכום כל ההסתברויות בדגימה אחת חייב להיות 1",
      ]}

      prevTopic={prev}
      nextTopic={next}
    />
  );
}
