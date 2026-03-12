import TopicPageLayout from "@/components/TopicPageLayout";
import { topics } from "@/data/topics";

export const metadata = {
  title: "הסתברות – בגרות מתמטיקה 5 יח״ל",
  description:
    "נוסחאות הסתברות, קומבינטוריקה, שאיבה עם/ללא החזרה וטיפים לפתרון – שאלון 581.",
};

const idx = topics.findIndex((t) => t.id === "probability");
const probabilityTopic = topics[idx];
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
          svgContent: (
            // Sample space S rectangle: 3 filled dots inside region A, 5 open dots outside
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <rect x="4" y="4" width="112" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <text x="8" y="13" fontSize="6" fill="currentColor" fontStyle="italic">S</text>
              {/* A region – dashed ellipse */}
              <ellipse cx="40" cy="32" rx="26" ry="22" fill="none" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2"/>
              <text x="20" y="13" fontSize="7" fill="currentColor" fontStyle="italic">A</text>
              {/* favorable outcomes (filled) */}
              <circle cx="30" cy="26" r="3.5" fill="currentColor"/>
              <circle cx="44" cy="24" r="3.5" fill="currentColor"/>
              <circle cx="36" cy="40" r="3.5" fill="currentColor"/>
              {/* unfavorable outcomes (open) */}
              <circle cx="75" cy="18" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="90" cy="24" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="100" cy="14" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="82" cy="38" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="100" cy="42" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          ),
        },
        {
          title: "הסתברות משלימה",
          latex: "P(\\bar{A}) = 1 - P(A)",
          explanation: "הסתברות שהמאורע לא יתרחש. שימושי במיוחד ב\"לפחות אחד\"",
          svgContent: (
            // Bar from 0 to 1: filled portion = P(A), remainder = P(Ā)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <text x="60" y="13" fontSize="6" fill="currentColor" textAnchor="middle">P(A) + P(Ā) = 1</text>
              <rect x="10" y="20" width="100" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              {/* P(A) – filled (~35%) */}
              <rect x="10" y="20" width="35" height="18" rx="2" fill="currentColor"/>
              <text x="27" y="32" fontSize="6.5" fill="white" textAnchor="middle" fontWeight="bold">P(A)</text>
              <text x="77" y="32" fontSize="6.5" fill="currentColor" textAnchor="middle">P(Ā)</text>
              {/* tick marks */}
              <line x1="10"  y1="39" x2="10"  y2="44" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="45"  y1="39" x2="45"  y2="44" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="110" y1="39" x2="110" y2="44" stroke="currentColor" strokeWidth="1.2"/>
              <text x="9"   y="52" fontSize="6" fill="currentColor" textAnchor="middle">0</text>
              <text x="45"  y="52" fontSize="5.5" fill="currentColor" textAnchor="middle">P(A)</text>
              <text x="110" y="52" fontSize="6" fill="currentColor" textAnchor="middle">1</text>
            </svg>
          ),
        },
        {
          title: "כלל החיבור",
          latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
          explanation: "הסתברות ש-A או B יתרחשו. אם A,B זרים: P(A∩B)=0",
          svgContent: (
            // Venn diagram: two overlapping circles, both filled (= union A∪B)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <circle cx="46" cy="30" r="22" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="74" cy="30" r="22" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4"/>
              <text x="27" y="34" fontSize="9" fill="currentColor" fontStyle="italic" fontWeight="bold">A</text>
              <text x="88" y="34" fontSize="9" fill="currentColor" fontStyle="italic" fontWeight="bold">B</text>
              <text x="60" y="27" fontSize="5.5" fill="currentColor" textAnchor="middle">A∩B</text>
              <text x="60" y="55" fontSize="6.5" fill="currentColor" textAnchor="middle">A ∪ B</text>
            </svg>
          ),
        },
        {
          title: "כלל הכפל – בלתי תלויים",
          latex: "P(A \\cap B) = P(A) \\cdot P(B)",
          explanation: "כשהתרחשות A לא משפיעה על B. תקף רק למאורעות בלתי-תלויים",
          svgContent: (
            // Tree diagram: root → A (highlighted path) → A∩B (filled end node)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <circle cx="10" cy="30" r="2.5" fill="currentColor"/>
              {/* branch A – highlighted */}
              <line x1="13" y1="28" x2="48" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="24" y="16" fontSize="5.5" fill="currentColor">P(A)</text>
              <circle cx="48" cy="14" r="2.5" fill="currentColor"/>
              {/* A → B (highlighted, bold) */}
              <line x1="51" y1="12" x2="86" y2="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <text x="63" y="5" fontSize="5" fill="currentColor">P(B)</text>
              <circle cx="86" cy="5" r="3.2" fill="currentColor"/>
              <text x="91" y="9" fontSize="5.5" fill="currentColor" fontWeight="bold">A∩B</text>
              {/* A → B̄ (faded) */}
              <line x1="51" y1="16" x2="86" y2="24" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2" strokeLinecap="round"/>
              <circle cx="86" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
              {/* branch Ā */}
              <line x1="13" y1="32" x2="48" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="22" y="46" fontSize="5.5" fill="currentColor">P(Ā)</text>
              <circle cx="48" cy="46" r="2.5" fill="currentColor"/>
              {/* Ā → B (faded) */}
              <line x1="51" y1="44" x2="86" y2="36" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2" strokeLinecap="round"/>
              <circle cx="86" cy="36" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
              {/* Ā → B̄ (faded) */}
              <line x1="51" y1="48" x2="86" y2="55" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 2" strokeLinecap="round"/>
              <circle cx="86" cy="55" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          ),
        },
        {
          title: "הסתברות מותנית",
          latex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
          explanation: "הסתברות ל-A בהינתן ש-B כבר התרחש. כלל הכפל הכללי: P(A∩B)=P(B)·P(A|B)",
          svgContent: (
            // Venn: A dashed, B bold (= the new reduced universe), intersection labeled P(A|B)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              {/* A – dashed (part of it outside B doesn't count) */}
              <circle cx="46" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2"/>
              {/* B – solid thick (the given condition = new sample space) */}
              <circle cx="74" cy="30" r="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.2"/>
              <text x="27" y="34" fontSize="9" fill="currentColor" fontStyle="italic">A</text>
              <text x="88" y="34" fontSize="9" fill="currentColor" fontStyle="italic" fontWeight="bold">B</text>
              {/* intersection label */}
              <text x="60" y="26" fontSize="5.5" fill="currentColor" textAnchor="middle">P(A|B)</text>
              <text x="60" y="35" fontSize="5" fill="currentColor" textAnchor="middle">= A∩B / B</text>
              {/* "given B" note */}
              <text x="60" y="55" fontSize="5.5" fill="currentColor" textAnchor="middle">בהינתן B</text>
            </svg>
          ),
        },
        {
          title: "ביטוי קומבינטורי",
          latex: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
          explanation: "מספר דרכים לבחור k פריטים מתוך n ללא חשיבות לסדר",
          svgContent: (
            // n=5 items in a row; k=2 filled (chosen), 3 open (not chosen)
            <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
              <text x="60" y="9" fontSize="6" fill="currentColor" textAnchor="middle">C(5,2) = 10</text>
              <circle cx="16" cy="28" r="8" fill="currentColor"/>
              <circle cx="36" cy="28" r="8" fill="currentColor"/>
              <circle cx="56" cy="28" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="76" cy="28" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="96" cy="28" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <text x="10" y="50" fontSize="5.5" fill="currentColor">■ נבחר (k=2)</text>
              <text x="62" y="50" fontSize="5.5" fill="currentColor">□ לא נבחר</text>
            </svg>
          ),
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

      exercises={probabilityTopic.exercises}

      prevTopic={prev}
      nextTopic={next}
    />
  );
}
