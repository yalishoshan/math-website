import Link from "next/link";
import Navbar from "@/components/Navbar";
import TipsBox from "@/components/TipsBox";
import FormulaCard from "@/components/FormulaCard";
import AiTutor from "@/components/AiTutor";
import { topics } from "@/data/topics";

export const metadata = {
  title: "גיאומטריה – בגרות מתמטיקה 5 יח״ל",
  description:
    "נוסחאות ומשפטים תקניים לגיאומטריה בשאלון 581 – 109 משפטים, טבלת שטחים, זוויות, מקבילים, דמיון ומעגלים.",
};

/* ─── Data ──────────────────────────────────────────────── */

const areaFormulas = [
  { shape: "משולש",           formula: "(צלע × גובה לצלע) ÷ 2" },
  { shape: "משולש ישר זווית", formula: "(ניצב × ניצב) ÷ 2" },
  { shape: "מקבילית",         formula: "צלע × גובה לצלע" },
  { shape: "מלבן",            formula: "אורך × רוחב" },
  { shape: "מעוין / דלתון",   formula: "(אלכסון₁ × אלכסון₂) ÷ 2" },
  { shape: "ריבוע",           formula: "צלע²  או  אלכסון² ÷ 2" },
  { shape: "טרפז",            formula: "(בסיס₁ + בסיס₂) × גובה ÷ 2" },
  { shape: "מעגל",            formula: "π × r²" },
  { shape: "היקף מעגל",       formula: "π × d  =  2πr" },
];

interface Theorem {
  number: number | string;
  text: string;
  citable?: boolean;
  name?: string;
  sub_theorems?: string[];
}

interface Section {
  id: number;
  title: string;
  definition?: string;
  warning?: string;
  theorems: Theorem[];
}

const sections: Section[] = [
  {
    id: 1, title: "זוויות",
    theorems: [
      { number: 1,  text: "זוויות צמודות משלימות זו את זו ל-180°." },
      { number: 2,  text: "זוויות קודקודיות שוות זו לזו." },
    ],
  },
  {
    id: 2, title: "ישרים מקבילים",
    theorems: [
      { number: 3, text: "אורך האנך מנקודה על ישר לישר המקביל לו קבוע." },
      { number: 4, text: "אם שני ישרים מקבילים נחתכים ע\"י ישר שלישי, כל שתי זוויות מתחלפות שוות זו לזו." },
      { number: 5, text: "שני ישרים נחתכים ע\"י ישר שלישי. אם נוצרו זוויות מתחלפות שוות – שני הישרים מקבילים." },
      { number: 6, text: "אם שני ישרים מקבילים נחתכים ע\"י ישר שלישי, כל שתי זוויות מתאימות שוות זו לזו." },
      { number: 7, text: "שני ישרים נחתכים ע\"י ישר שלישי. אם נוצרו זוויות מתאימות שוות – שני הישרים מקבילים." },
      { number: 8, text: "אם שני ישרים מקבילים נחתכים ע\"י ישר שלישי, סכום כל זוג זוויות חד-צדדיות הוא 180°." },
      { number: 9, text: "שני ישרים נחתכים ע\"י ישר שלישי. אם סכום זוויות חד-צדדיות הוא 180° – שני הישרים מקבילים." },
    ],
  },
  {
    id: 3, title: "משולשים – כללי",
    theorems: [
      { number: 10, text: "סכום הזוויות של משולש הוא 180°." },
      { number: 11, text: "זווית חיצונית למשולש שווה לסכום שתי הזוויות הפנימיות שאינן צמודות לה." },
      { number: 12, text: "סכום כל שתי צלעות במשולש גדול מהצלע השלישית (אי-שוויון המשולש)." },
      { number: 13, text: "במשולש (שאינו שווה צלעות), מול הצלע הגדולה יותר מונחת זווית גדולה יותר." },
      { number: 14, text: "במשולש (שאינו שווה זוויות), מול הזווית הגדולה יותר מונחת צלע גדולה יותר." },
      { number: 15, text: "שלושת התיכונים במשולש נחתכים בנקודה אחת." },
      { number: 16, text: "תיכון במשולש מחלק את המשולש לשני משולשים שווי שטח." },
      { number: 17, text: "נקודת חיתוך התיכונים מחלקת כל תיכון ביחס 2:1 (החלק הקרוב לקודקוד ארוך פי 2)." },
    ],
  },
  {
    id: 4, title: "חפיפת משולשים",
    warning: "אין לחפף משולשים בצ.ז.ז. – יש להראות שוויון הזווית השלישית ולהשתמש בז.צ.ז.",
    theorems: [
      { number: 18, text: "משפט חפיפה צלע-זווית-צלע (צ.ז.צ.)" },
      { number: 19, text: "משפט חפיפה זווית-צלע-זווית (ז.צ.ז.)" },
      { number: 20, text: "משפט חפיפה צלע-צלע-צלע (צ.צ.צ.)" },
      { number: 21, text: "משפט חפיפה: שתי צלעות והזווית שמול הצלע הגדולה מבין השתיים." },
    ],
  },
  {
    id: 5, title: "משולש שווה שוקיים",
    theorems: [
      { number: 22, text: "במשולש שווה שוקיים זוויות הבסיס שוות זו לזו." },
      { number: 23, text: "משולש שבו שתי זוויות שוות הוא משולש שווה שוקיים." },
      { number: 24, text: "במשולש שווה שוקיים: חוצה זווית הראש, התיכון לבסיס והגובה לבסיס מתלכדים." },
      { number: 25, text: "אם במשולש חוצה זווית הוא גובה, אז המשולש הוא שווה שוקיים." },
      { number: 26, text: "אם במשולש חוצה זווית הוא תיכון, אז המשולש הוא שווה שוקיים." },
      { number: 27, text: "אם במשולש גובה הוא תיכון, אז המשולש הוא שווה שוקיים." },
    ],
  },
  {
    id: 6, title: "משולש ישר זווית",
    theorems: [
      { number: 28, text: "במשולש ישר זווית, סכום ריבועי הניצבים שווה לריבוע היתר.", citable: true, name: "משפט פיתגורס" },
      { number: 29, text: "משולש בו סכום ריבועי שתי צלעות שווה לריבוע הצלע השלישית הוא ישר זווית.", citable: true, name: "המשפט ההפוך למשפט פיתגורס" },
      { number: 30, text: "שני משולשים ישרי זווית שלהם ניצב שווה ויתר שווה חופפים זה לזה." },
      { number: 31, text: "במשולש ישר זווית התיכון ליתר שווה למחצית היתר." },
      { number: 32, text: "משולש בו התיכון שווה למחצית הצלע אותה הוא חוצה הוא משולש ישר זווית." },
      { number: 33, text: "אם במשולש ישר זווית זווית חדה היא 30°, אז הניצב מול זווית זו שווה למחצית היתר." },
      { number: 34, text: "אם במשולש ישר זווית ניצב שווה למחצית היתר, אז מול ניצב זה זווית שגודלה 30°." },
    ],
  },
  {
    id: 7, title: "מרובעים ומצולעים",
    theorems: [
      { number: 35, text: "סכום זוויות במרובע הוא 360°." },
      { number: 36, text: "סכום הזוויות הפנימיות של מצולע קמור הוא: 180° × (n − 2)." },
    ],
  },
  {
    id: 8, title: "דלתון",
    definition: "מרובע שלו שני זוגות זרים של צלעות סמוכות השוות זו לזו.",
    theorems: [
      { number: 37, text: "זוויות הצד בדלתון שוות זו לזו." },
      { number: 38, text: "האלכסון הראשי בדלתון חוצה את זוויות הראש, חוצה את האלכסון המשני ומאונך לו." },
    ],
  },
  {
    id: 9, title: "טרפז",
    definition: "מרובע שבו יש זוג יחיד של צלעות המקבילות זו לזו.",
    theorems: [
      { number: 39, text: "בטרפז שווה שוקיים הזוויות שליד אותו בסיס שוות זו לזו." },
      { number: 40, text: "טרפז בו הזוויות שליד אותו בסיס שוות זו לזו הוא טרפז שווה שוקיים." },
      { number: 41, text: "בטרפז שווה שוקיים האלכסונים שווים זה לזה." },
      { number: 42, text: "טרפז בו האלכסונים שווים זה לזה הוא טרפז שווה שוקיים." },
    ],
  },
  {
    id: 10, title: "מקבילית",
    definition: "מרובע שבו יש שני זוגות של צלעות המקבילות זו לזו.",
    theorems: [
      { number: 43, text: "במקבילית כל שתי צלעות נגדיות שוות זו לזו." },
      { number: 44, text: "מרובע שבו כל שתי צלעות נגדיות שוות זו לזו הוא מקבילית." },
      { number: 45, text: "מרובע שבו זוג צלעות מקבילות ושוות הוא מקבילית." },
      { number: 46, text: "במקבילית האלכסונים חוצים זה את זה." },
      { number: 47, text: "מרובע שבו האלכסונים חוצים זה את זה הוא מקבילית." },
      { number: 48, text: "במקבילית כל שתי זוויות נגדיות שוות זו לזו." },
      { number: 49, text: "מרובע שבו כל שתי זוויות נגדיות שוות הוא מקבילית." },
      { number: 50, text: "במקבילית סכום כל שתי זוויות סמוכות הוא 180°." },
      { number: 51, text: "מרובע שבו סכום כל שתי זוויות סמוכות הוא 180° הוא מקבילית." },
    ],
  },
  {
    id: 11, title: "מלבן",
    definition: "מרובע שבו כל הזוויות ישרות.",
    theorems: [
      { number: 52, text: "במלבן האלכסונים שווים זה לזה." },
      { number: 53, text: "מקבילית שבה האלכסונים שווים זה לזה היא מלבן." },
      { number: 54, text: "מקבילית שבה יש זווית ישרה היא מלבן." },
    ],
  },
  {
    id: 12, title: "מעוין",
    definition: "מרובע שבו כל הצלעות שוות.",
    theorems: [
      { number: 55, text: "במעוין האלכסונים חוצים את הזוויות." },
      { number: 56, text: "במעוין האלכסונים מאונכים זה לזה." },
      { number: 57, text: "מקבילית שבה אלכסון הוא חוצה זווית היא מעוין." },
      { number: 58, text: "מקבילית שבה האלכסונים מאונכים זה לזה היא מעוין." },
      { number: 59, text: "מקבילית שבה שתי צלעות סמוכות שוות היא מעוין." },
    ],
  },
  {
    id: 13, title: "ריבוע",
    definition: "מרובע שבו כל הצלעות שוות וכל הזוויות ישרות.",
    theorems: [
      { number: 60, text: "מעוין שבו האלכסונים שווים הוא ריבוע." },
      { number: 61, text: "מלבן בו הצלעות הסמוכות שוות הוא ריבוע." },
    ],
  },
  {
    id: 14, title: "קטע אמצעים במשולש ובטרפז",
    theorems: [
      { number: 62, text: "קטע אמצעים במשולש מקביל לצלע השלישית ושווה למחציתה." },
      { number: 63, text: "ישר החוצה צלע אחת במשולש ומקביל לצלע שנייה, חוצה את הצלע השלישית." },
      { number: 64, text: "קטע שקצותיו על שתי צלעות משולש, מקביל לצלע השלישית ושווה למחציתה, הוא קטע אמצעים." },
      { number: 65, text: "קטע האמצעים בטרפז מקביל לבסיסים ושווה למחצית סכומם." },
      { number: 66, text: "בטרפז, ישר החוצה שוק אחת ומקביל לבסיסים, חוצה את השוק השנייה." },
      { number: 67, text: "קטע המחבר שתי שוקיים בטרפז, מקביל לבסיסים ושווה למחצית סכומם, הוא קטע אמצעים." },
    ],
  },
  {
    id: 15, title: "דמיון משולשים ופרופורציה",
    theorems: [
      { number: 68, text: "משפט דמיון צ.ז.צ.", citable: true, name: "דמיון צ.ז.צ." },
      { number: 69, text: "משפט דמיון ז.ז.", citable: true, name: "דמיון ז.ז." },
      { number: 70, text: "משפט דמיון צ.צ.צ.", citable: true, name: "דמיון צ.צ.צ." },
      {
        number: 71, text: "במשולשים דומים:",
        sub_theorems: [
          "א. יחס גבהים מתאימים שווה ליחס הדמיון.",
          "ב. יחס חוצי זוויות מתאימות שווה ליחס הדמיון.",
          "ג. יחס תיכונים מתאימים שווה ליחס הדמיון.",
          "ד. יחס ההיקפים שווה ליחס הדמיון.",
          "ה. יחס הרדיוסים של המעגלים החוסמים שווה ליחס הדמיון.",
          "ו. יחס הרדיוסים של המעגלים החסומים שווה ליחס הדמיון.",
          "ז. יחס השטחים שווה לריבוע יחס הדמיון.",
        ],
      },
      { number: 72, text: "שני ישרים מקבילים החותכים שוקי זווית, מקצים עליהם קטעים פרופורציוניים.", citable: true, name: "משפט תאלס" },
      { number: 73, text: "ישר המקביל לאחת מצלעות המשולש חותך את שתי הצלעות האחרות בקטעים פרופורציוניים.", citable: true, name: "משפט תאלס המורחב" },
      { number: 74, text: "שני ישרים המקצים על שוקי זווית ארבעה קטעים פרופורציוניים הם ישרים מקבילים.", citable: true, name: "המשפט ההפוך למשפט תאלס" },
      { number: 75, text: "חוצה הזווית הוא המקום הגיאומטרי של כל הנקודות הנמצאות במרחקים שווים משוקי הזווית." },
      { number: 76, text: "חוצה זווית פנימית במשולש מחלק את הצלע שמול הזווית לשני קטעים שיחסם שווה ליחס הצלעות הכולאות.", citable: true, name: "משפט חוצה זווית" },
      { number: 77, text: "ישר העובר דרך קודקוד ומחלק את הצלע שמולו ביחס שתי הצלעות האחרות, הוא חוצה הזווית.", citable: true, name: "המשפט ההפוך למשפט חוצה זווית" },
    ],
  },
  {
    id: 16, title: "קטעים מיוחדים, מעגל חוסם ומעגל חסום",
    theorems: [
      { number: 78, text: "כל נקודה על חוצה זווית נמצאת במרחקים שווים משוקי זווית זו." },
      { number: 79, text: "אם נקודה נמצאת במרחקים שווים משני שוקי זווית, אז היא נמצאת על חוצה הזווית." },
      { number: 80, text: "שלושת חוצי הזוויות של משולש נחתכים בנקודה אחת – מרכז המעגל החסום במשולש." },
      { number: 81, text: "בכל משולש אפשר לחסום מעגל." },
      { number: 82, text: "כל נקודה הנמצאת על האנך האמצעי של קטע, נמצאת במרחקים שווים מקצות הקטע." },
      { number: 83, text: "כל נקודה הנמצאת במרחקים שווים מקצות קטע, נמצאת על האנך האמצעי לקטע." },
      { number: 84, text: "כל משולש ניתן לחסום במעגל." },
      { number: 85, text: "שלושת האנכים האמצעיים במשולש נחתכים בנקודה אחת – מרכז המעגל החוסם את המשולש." },
      { number: 86, text: "שלושת הגבהים במשולש נחתכים בנקודה אחת." },
      { number: 87, text: "ניתן לחסום מרובע במעגל אם ורק אם סכום זוג זוויות נגדיות שווה ל-180°." },
      { number: 88, text: "מרובע קמור חוסם מעגל אם ורק אם סכום שתי צלעות נגדיות שווה לסכום שתי הצלעות הנגדיות האחרות." },
      { number: 89, text: "כל מצולע משוכלל אפשר לחסום במעגל." },
      { number: 90, text: "בכל מצולע משוכלל אפשר לחסום מעגל." },
      { number: 91, text: "דרך כל שלוש נקודות שאינן על ישר אחד עובר מעגל אחד ויחיד." },
    ],
  },
  {
    id: 17, title: "מעגלים",
    theorems: [
      { number: 92,  text: "במעגל, שתי זוויות מרכזיות שוות אם ורק אם שתי הקשתות המתאימות להן שוות." },
      { number: 93,  text: "במעגל, שתי זוויות מרכזיות שוות אם ורק אם שני המיתרים המתאימים להן שווים." },
      { number: 94,  text: "במעגל, מיתרים שווים אם ורק אם שתי הקשתות המתאימות להם שוות." },
      { number: 95,  text: "מיתרים שווים נמצאים במרחקים שווים ממרכז המעגל." },
      { number: 96,  text: "מיתרים הנמצאים במרחקים שווים ממרכז המעגל שווים זה לזה." },
      { number: 97,  text: "האנך ממרכז המעגל למיתר חוצה את המיתר, חוצה את הזווית המרכזית וחוצה את הקשת המתאימה." },
      { number: 98,  text: "קטע ממרכז המעגל החוצה את המיתר מאונך למיתר." },
      { number: 99,  text: "זווית היקפית שווה למחצית הזווית המרכזית הנשענת על אותה קשת." },
      { number: 100, text: "במעגל, לזוויות היקפיות שוות – קשתות שוות ומיתרים שווים." },
      { number: 101, text: "במעגל, לקשתות שוות מתאימות זוויות היקפיות שוות." },
      { number: 102, text: "כל הזוויות ההיקפיות הנשענות על מיתר מאותו צד של המיתר שוות זו לזו." },
      { number: 103, text: "זווית היקפית הנשענת על קוטר היא זווית ישרה (90°)." },
      { number: 104, text: "זווית היקפית בת 90° נשענת על קוטר." },
      { number: 105, text: "המשיק למעגל מאונך לרדיוס בנקודת ההשקה." },
      { number: 106, text: "ישר המאונך לרדיוס בקצהו הוא משיק למעגל." },
      { number: 107, text: "זווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על מיתר זה מצידו השני.", citable: true, name: "זווית בין משיק למיתר" },
      { number: 108, text: "שני משיקים למעגל היוצאים מאותה נקודה שווים זה לזה." },
      { number: 109, text: "קטע המחבר את מרכז המעגל לנקודה ממנה יוצאים שני משיקים, חוצה את הזווית שבין המשיקים." },
    ],
  },
  {
    id: 18, title: "משפטים חשובים לתרגול – לא לציטוט בבגרות",
    theorems: [
      { number: "א", text: "במעגל, אם מרחקו של מיתר ממרכז המעגל קטן ממרחקו של מיתר אחר, אז מיתר זה ארוך יותר." },
      { number: "ב", text: "אם שני מיתרים נחתכים במעגל, מכפלת קטעי מיתר אחד שווה למכפלת קטעי המיתר השני." },
      { number: "ג", text: "אם מנקודה מחוץ למעגל יוצאים שני חותכים, מכפלת חותך אחד בחלקו החיצוני שווה למכפלת החותך השני בחלקו החיצוני." },
      { number: "ד", text: "אם מנקודה מחוץ למעגל יוצאים חותך ומשיק, מכפלת החותך בחלקו החיצוני שווה לריבוע המשיק." },
      { number: "ה", text: "במשולש ישר זווית, הניצב הוא ממוצע הנדסי של היתר והיטל ניצב זה על היתר." },
      { number: "ו", text: "הגובה ליתר במשולש ישר זווית הוא ממוצע הנדסי של היטלי הניצבים על היתר." },
    ],
  },
];

const keyFormulas = [
  {
    title: "משפט פיתגורס *",
    latex: "a^2 + b^2 = c^2",
    explanation: "במשולש ישר זווית: סכום ריבועי הניצבים = ריבוע היתר",
    svgContent: (
      // Right triangle: legs a (vertical), b (horizontal), hypotenuse c; right-angle mark at corner
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <polygon points="15,54 88,54 15,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* right-angle mark */}
        <polyline points="15,44 24,44 24,54" fill="none" stroke="currentColor" strokeWidth="1.2"/>
        <text x="5"  y="34" fontSize="9" fill="currentColor" fontStyle="italic">a</text>
        <text x="47" y="59" fontSize="9" fill="currentColor" fontStyle="italic">b</text>
        <text x="52" y="27" fontSize="9" fill="currentColor" fontStyle="italic">c</text>
      </svg>
    ),
  },
  {
    title: "שטח משולש עם סינוס",
    latex: "S = \\tfrac{1}{2}ab\\sin C",
    explanation: "שתי צלעות והזווית הכלואה ביניהן",
    svgContent: (
      // Triangle with angle C at bottom-left; sides a (left) and b (bottom) labeled; area formula hint
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <polygon points="14,54 100,54 48,8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* angle-C arc at bottom-left vertex */}
        <path d="M27,54 A14,14 0 0,0 20,41" fill="none" stroke="currentColor" strokeWidth="1.1"/>
        <text x="5"  y="57" fontSize="8" fill="currentColor" fontStyle="italic">C</text>
        <text x="26" y="28" fontSize="8" fill="currentColor" fontStyle="italic">a</text>
        <text x="53" y="59" fontSize="8" fill="currentColor" fontStyle="italic">b</text>
        <text x="70" y="38" fontSize="5.5" fill="currentColor">S = ½ab·sinC</text>
      </svg>
    ),
  },
  {
    title: "גובה על היתר",
    latex: "h^2 = p \\cdot q \\quad a^2 = c\\cdot p \\quad b^2 = c\\cdot q",
    explanation: "h = גובה, p,q = היטלים, a,b = ניצבים, c = יתר",
    svgContent: (
      // Right triangle with right angle at C=(28,16); altitude from C to foot D=(28,54) on hypotenuse AB
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <polygon points="10,54 108,54 28,16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* altitude (dashed) */}
        <line x1="28" y1="16" x2="28" y2="54" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2"/>
        {/* right-angle mark at foot D */}
        <rect x="28" y="45" width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1.1"/>
        {/* right-angle label at C */}
        <text x="30" y="22" fontSize="5" fill="currentColor">90°</text>
        {/* segment labels */}
        <text x="17" y="59" fontSize="6.5" fill="currentColor" fontStyle="italic">p</text>
        <text x="63" y="59" fontSize="6.5" fill="currentColor" fontStyle="italic">q</text>
        <text x="31" y="37" fontSize="7"   fill="currentColor" fontStyle="italic">h</text>
        <text x="8"  y="33" fontSize="6.5" fill="currentColor" fontStyle="italic">a</text>
        <text x="70" y="28" fontSize="6.5" fill="currentColor" fontStyle="italic">b</text>
      </svg>
    ),
  },
  {
    title: "יחס דמיון → שטח",
    latex: "\\frac{S_1}{S_2} = k^2",
    explanation: "אם יחס הדמיון k, יחס השטחים k²",
    svgContent: (
      // Two similar triangles: large (left) and small (right); ratio k between them
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        {/* large triangle */}
        <polygon points="8,54 60,54 28,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <text x="30" y="47" fontSize="7" fill="currentColor" textAnchor="middle">S₁</text>
        {/* small similar triangle */}
        <polygon points="70,54 102,54 82,27" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <text x="85" y="50" fontSize="7" fill="currentColor" textAnchor="middle">S₂</text>
        {/* ratio label between them */}
        <text x="63" y="20" fontSize="6"   fill="currentColor">k</text>
        <text x="63" y="30" fontSize="5.5" fill="currentColor">→ k²</text>
      </svg>
    ),
  },
  {
    title: "שטח וקשת מעגל",
    latex: "S_{sector}=\\frac{\\alpha}{360}\\pi r^2 \\quad l=\\frac{\\alpha}{360}\\cdot 2\\pi r",
    explanation: "α = זווית מרכזית בדרגות",
    svgContent: (
      // Circle with shaded sector; labels r (radius), α (central angle), l (arc length)
      // Sector: center=(50,28), r=22; 0° → (72,28); 78° → (50+22cos78°,28+22sin78°)≈(55,49)
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <circle cx="50" cy="28" r="22" fill="none" stroke="currentColor" strokeWidth="1.3"/>
        {/* shaded sector (~78°) */}
        <path d="M50,28 L72,28 A22,22 0 0,1 55,49 Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.3"/>
        {/* radius label */}
        <text x="57" y="25" fontSize="6.5" fill="currentColor" fontStyle="italic">r</text>
        {/* angle α inside sector */}
        <text x="65" y="40" fontSize="8" fill="currentColor" fontStyle="italic">α</text>
        {/* arc label l near arc endpoint */}
        <text x="56" y="56" fontSize="6.5" fill="currentColor" fontStyle="italic">l</text>
        {/* helper labels */}
        <text x="80" y="20" fontSize="5.5" fill="currentColor">גזרה</text>
        <text x="80" y="29" fontSize="5.5" fill="currentColor">קשת = l</text>
      </svg>
    ),
  },
  {
    title: "קטע אמצעים / תאלס *",
    latex: "MN = \\tfrac{1}{2}BC \\quad \\frac{AM}{MB}=\\frac{AN}{NC}",
    explanation: "קטע אמצעים מקביל לצלע ושווה למחציתה; תאלס – קטעים פרופורציוניים",
    svgContent: (
      // Triangle ABC; M=midpoint(AB), N=midpoint(AC); MN ∥ BC with parallel tick marks
      <svg viewBox="0 0 120 60" className="w-full max-w-[180px] h-auto text-slate-700">
        <polygon points="60,6 10,56 110,56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* midline MN: M=(35,31), N=(85,31) */}
        <line x1="35" y1="31" x2="85" y2="31" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="35" cy="31" r="2.5" fill="currentColor"/>
        <circle cx="85" cy="31" r="2.5" fill="currentColor"/>
        {/* parallel tick marks on MN */}
        <line x1="59" y1="28" x2="59" y2="34" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="62" y1="28" x2="62" y2="34" stroke="currentColor" strokeWidth="1.2"/>
        {/* parallel tick marks on BC */}
        <line x1="59" y1="53" x2="59" y2="59" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="62" y1="53" x2="62" y2="59" stroke="currentColor" strokeWidth="1.2"/>
        {/* labels */}
        <text x="57" y="4"   fontSize="6.5" fill="currentColor">A</text>
        <text x="4"  y="58"  fontSize="6.5" fill="currentColor">B</text>
        <text x="112" y="58" fontSize="6.5" fill="currentColor">C</text>
        <text x="25" y="29"  fontSize="6"   fill="currentColor">M</text>
        <text x="88" y="29"  fontSize="6"   fill="currentColor">N</text>
        <text x="87" y="44"  fontSize="5.5" fill="currentColor">MN=½BC</text>
      </svg>
    ),
  },
];

const tips = [
  "ציירו תרשים בכל שאלה ורשמו את כל הנתונים לפני שמתחילים",
  "משפטים עם (*) ניתנים לציטוט בשמם בלבד – לא צריך להוכיח אותם",
  "חפיפה: אין להשתמש בצ.ז.ז. – תמיד הוכיחו שוויון הזווית השלישית ועברו לז.צ.ז.",
  "דמיון: בדקו שלושה תנאים – ז.ז. / צ.ז.צ. / צ.צ.צ. לפי הנתונים",
  "זווית היקפית = מחצית הזווית המרכזית על אותה קשת – נוסחה מרכזית בשאלות מעגל",
];

const idx = topics.findIndex((t) => t.id === "geometry");
const prev = idx > 0 ? topics[idx - 1] : null;
const next = idx < topics.length - 1 ? topics[idx + 1] : null;

/* ─── Component ─────────────────────────────────────────── */

export default function GeometryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId="geometry" />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">בית</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">גיאומטריה</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1">שאלון 581</p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">גיאומטריה</h1>
              <p className="text-white/70 font-medium">נוסחאות ומשפטים תקניים</p>
            </div>
          </div>
          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl text-sm">
            109 משפטים ב-18 נושאים – זוויות, ישרים מקבילים, משולשים, מרובעים, דמיון ומעגלים.
            משפטים המסומנים ב-<span className="text-white font-bold">★</span> ניתנים לציטוט בבגרות לפי שמם בלבד.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            {["6 נוסחות KaTeX", "טבלת שטחים", "109 משפטים", "18 נושאים"].map((s) => (
              <span key={s} className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── 1. נוסחות KaTeX ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">נוסחות מפתח</h2>
              <p className="text-sm text-black">הנוסחאות החיוניות לחישוב</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFormulas.map((f, i) => (
              <FormulaCard key={i} title={f.title} latex={f.latex} explanation={f.explanation} index={i} svgContent={f.svgContent} />
            ))}
          </div>
        </section>

        {/* ── 2. טבלת שטחים ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">נוסחאות שטח – סיכום</h2>
              <p className="text-sm text-black">כל הצורות במקום אחד</p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-right font-semibold">צורה</th>
                  <th className="px-4 py-3 text-right font-semibold">נוסחת שטח</th>
                </tr>
              </thead>
              <tbody>
                {areaFormulas.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-bold text-black">{row.shape}</td>
                    <td className="px-4 py-3 font-mono text-slate-700">{row.formula}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 3. כל 18 הנושאים ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">משפטים תקניים</h2>
              <p className="text-sm text-black">
                109 משפטים — <span className="font-semibold">★</span> = ניתן לציטוט בשם
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((sec) => (
              <div key={sec.id} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm" dir="rtl">
                {/* Section header */}
                <div className="bg-slate-800 text-white px-4 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/15 text-white text-xs font-black flex items-center justify-center shrink-0">
                    {sec.id}
                  </span>
                  <h3 className="font-bold text-sm">{sec.title}</h3>
                </div>

                <div className="p-4 space-y-2">
                  {/* Definition */}
                  {sec.definition && (
                    <p className="text-xs text-slate-500 italic border-r-2 border-slate-300 pr-3 mb-3">
                      הגדרה: {sec.definition}
                    </p>
                  )}

                  {/* Warning */}
                  {sec.warning && (
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3">
                      <span className="text-amber-600 font-black text-sm shrink-0">!</span>
                      <p className="text-xs text-amber-800 font-medium">{sec.warning}</p>
                    </div>
                  )}

                  {/* Theorems */}
                  <div className="space-y-1.5">
                    {sec.theorems.map((thm) => (
                      <div key={String(thm.number)} className="flex items-start gap-3">
                        {/* Number badge */}
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {thm.number}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-start gap-2 flex-wrap">
                            <p className="text-sm text-black leading-relaxed">{thm.text}</p>
                            {thm.citable && (
                              <span className="inline-flex items-center gap-1 text-xs bg-black text-white rounded-full px-2 py-0.5 font-semibold shrink-0">
                                ★ {thm.name}
                              </span>
                            )}
                          </div>
                          {thm.sub_theorems && (
                            <ul className="mt-1.5 space-y-1 pr-2">
                              {thm.sub_theorems.map((sub, si) => (
                                <li key={si} className="text-sm text-slate-600 flex items-start gap-1.5">
                                  <span className="shrink-0 mt-0.5 text-slate-400">–</span>
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. טיפים ── */}
        <section>
          <TipsBox tips={tips} />
          <AiTutor topic="גיאומטריה" />
        </section>

        {/* ── Navigation ── */}
        <nav className="flex justify-between items-center pt-6">
          <div>
            {prev ? (
              <Link href={`/topic/${prev.id}`} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-slate-800 transition-all text-sm font-medium text-white">
                <span>▶</span>
                <span>
                  <span className="block text-xs text-white/60 mb-0.5">נושא קודם</span>
                  {prev.title}
                </span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black">← חזרה לדף הבית</Link>
            )}
          </div>
          <div>
            {next ? (
              <Link href={`/topic/${next.id}`} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black hover:bg-slate-800 transition-all text-sm font-medium text-white">
                <span>
                  <span className="block text-xs text-white/60 mb-0.5">נושא הבא</span>
                  {next.title}
                </span>
                <span>◀</span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black">← חזרה לדף הבית</Link>
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
