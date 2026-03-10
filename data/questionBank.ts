import type { SubQuestion } from "./testQuestions";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BankQuestion {
  bankId: string;       // unique across all exams, e.g. "581-2023s-motion"
  source: string;       // display label, e.g. "שאלון 581 – קיץ תשפ״ג"
  chapter: 1 | 2 | 3;
  topic: string;        // Hebrew label shown to student
  topicId: string;      // slug used for routing / filtering
  text: string;
  subquestions: SubQuestion[];
}

// Chapter definitions — controls the generator structure
export const CHAPTERS: Array<{
  id: 1 | 2 | 3;
  name: string;
  topicIds: string[];
}> = [
  {
    id: 1,
    name: "אלגברה והסתברות",
    topicIds: ["motion", "sequences", "probability"],
  },
  {
    id: 2,
    name: "גאומטריה וטריגונומטריה",
    topicIds: ["geometry", "trigonometry"],
  },
  {
    id: 3,
    name: 'חשבון דיפרנציאלי ואינטגרלי',
    topicIds: ["root-functions", "trig-functions", "optimization"],
  },
];

// Topic display labels
export const TOPIC_LABELS: Record<string, string> = {
  motion: "תנועה",
  sequences: "סדרות",
  probability: "הסתברות",
  geometry: "גאומטריה",
  trigonometry: "טריגונומטריה",
  "root-functions": "פונקציות שורש",
  "trig-functions": "פונקציות טריגונומטריות",
  optimization: "בעיות קיצון",
};

// ─── Question bank ────────────────────────────────────────────────────────────
// Add new exams here — one object per question.
// bankId format: "{examCode}-{year}{season}-{topicId}"  (s=summer, w=winter)

export const questionBank: BankQuestion[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // שאלון 581 – קיץ תשפ״ג (2023)
  // ══════════════════════════════════════════════════════════════════════════

  {
    bankId: "581-2023s-motion",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 1,
    topic: "תנועה",
    topicId: "motion",
    text: "הילה, רונית ודקלה נוהגות לרוץ מדי בוקר במסלול מעגלי שאורכו 2700 מטר. שלושתן מתחילות בנקודה A ורצות באותו כיוון.\nביום ג׳ התחילה הילה בשעה 8:00, רונית 3 דקות אחריה, ודקלה 2 דקות אחרי רונית. שלושתן חלפו זו על פני זו בשעה 8:15, לפני שחזרו לנקודה A. דקלה עברה 9900 מטר מיציאתה עד שחלפה על הילה בפעם השנייה.",
    subquestions: [
      {
        label: "א",
        text: "מצאו את מהירות הריצה של הילה, רונית ודקלה.",
        solution: "בשעה 8:15 שלושתן נפגשות באותה נקודה p:\n  הילה (15 דק׳):  15·v_H = p\n  רונית (12 דק׳): 12·v_R = p\n  דקלה (10 דק׳): 10·v_D = p\nלכן: v_D = 1.5·v_H  ו-v_R = 1.25·v_H\n\nדקלה חלפה על הילה בפעם השנייה אחרי 9900 מ׳.\nדקלה יצאה 5 דק׳ אחרי הילה → פרש התחלה: 5·v_H\n(v_D − v_H)·t = 5·v_H + 2700  (סגירת פרש + הקפה אחת)\nv_D·t = 9900  →  t = 9900/v_D\n\n0.5v_H · (9900 / 1.5v_H) = 5v_H + 2700\n3300 = 5v_H + 2700\n✅ v_H = 120 מ׳/ד׳,  v_R = 150 מ׳/ד׳,  v_D = 180 מ׳/ד׳",
      },
      {
        label: "ב",
        text: "מה המרחק שעברה דקלה מרגע יציאתה עד שחלפה על רונית בפעם השנייה?",
        solution: "דקלה יצאה 2 דק׳ אחרי רונית → פרש התחלה: 150×2 = 300 מ׳\n\n(v_D − v_R)·t = 300 + 2700n\n30t = 300 + 2700n  →  t = 10 + 90n\n\nn=0: t=10 → מפגש ראשון\nn=1: t=100 → מפגש שני\n\n✅ דקלה עברה 180 × 100 = 18000 מטר",
      },
      {
        label: "ג",
        text: "ביום ד׳ התחילו הילה ודקלה מנקודה A באותה שעה ובאותו כיוון. עד שנפגשו שוב בנקודה A — איזה מרחק רצה כל אחת?",
        solution: "הן נפגשות ב-A כשסיימו בו-זמנית מספר שלם של הקפות:\n  2700n / 120 = 2700k / 180  →  3n = 2k\n\nהפתרון המינימלי: n = 2,  k = 3\n\n✅ הילה רצה:  5400 מטר\n   דקלה רצה: 8100 מטר (אחרי 45 דקות)",
      },
    ],
  },

  {
    bankId: "581-2023s-sequences",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 1,
    topic: "סדרות",
    topicId: "sequences",
    text: "סדרה הנדסית של 2n−1 איברים. מנת הסדרה היא q.",
    subquestions: [
      {
        label: "א",
        text: "הראה כי היחס בין סכום n−1 האיברים האחרונים לסכום n−1 האיברים הראשונים הוא q^n.",
        solution: "סכום n−1 האיברים הראשונים:\n  S₁ = a₁(q^(n-1) − 1)/(q−1)\n\nסכום n−1 האיברים האחרונים (מתחיל מ-a_{n+1}):\n  S₂ = a_{n+1}(q^(n-1) − 1)/(q−1)\n\nS₂/S₁ = a_{n+1}/a₁ = q^n   מ.ש.ל.",
      },
      {
        label: "ב",
        text: "נתון: סכום n−1 האחרונים גדול פי 64 מסכום n−1 הראשונים. סכום n האחרונים גדול פי 63 מהאיבר האמצעי.\n1) מצא את מנת הסדרה q.\n2) מצא את מספר האיברים בסדרה.",
        solution: "1) מסעיף א: q^n = 64\n   תנאי שני: q^n − 1 = 63(q−1)  →  q = 2\n2) 2^n = 64  →  n = 6  →  סה״כ 11 איברים",
      },
      {
        label: "ג",
        text: "נתון: סכום איברי הסדרה במקומות האי-זוגיים הוא 170 ו-5/8. מצא את האיבר הראשון.",
        solution: "סדרת האיברים האי-זוגיים: 6 איברים, מנה q² = 4\na₁ · (4⁶ − 1)/3 = 170.625\n✅ a₁ = 1/8",
      },
      {
        label: "ד",
        text: "הסדרה bₙ מקיימת bₙ = −4/aₙ.\n1) הראה ש-bₙ הנדסית.\n2) חשב את b₁ + ... + b_{2n−1}.",
        solution: "1) b_{n+1}/bₙ = 1/q = 1/2 — קבועה  מ.ש.ל.\n2) b₁ = −32, מנה 1/2, N=11\n   S = −32·((1/2)^11 − 1)/(−1/2) = −63 ו-31/32",
      },
      {
        label: "ה",
        text: "חשב את סכום הסדרה האינסופית b₁, −b₃, b₅, −b₇, ...",
        solution: "A₁ = b₁ = −32,  Q = −(1/2)² = −1/4\nסכום = −32 / (1 + 1/4) = −32/(5/4)\n✅ = −25.6",
      },
    ],
  },

  {
    bankId: "581-2023s-probability",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 1,
    topic: "הסתברות",
    topicId: "probability",
    text: "במסיבת יום הולדת נערכה תחרות נושאת פרסים. ילד שזוכה מוציא חטיף מקופסא שבה n חטיפים: 5 חטיפי שוקולד והשאר אגוזים. ליאת, ליהי ואור זכו בפרס ומשכו חטיפים ללא החזרה. ההסתברות שלפחות אחת מליאת וליהי הוציאה שוקולד היא 15/22.",
    subquestions: [
      {
        label: "א",
        text: "מצא את n.",
        solution: "P(לפחות אחת) = 1 − P(שתיהן אגוזים) = 15/22\n(n−5)(n−6)/(n(n−1)) = 7/22\n15n²−235n+660 = 0  →  n = 12",
      },
      {
        label: "ב",
        text: "כעת יש 6 שוקולד (n=12). פי כמה גדלה ההסתברות ש-3 הזוכים קיבלו שוקולד?",
        solution: "P(5 מתוך 12) = 60/1320 = 1/22\nP(6 מתוך 12) = 120/1320 = 1/11\n✅ גדלה פי 2",
      },
    ],
  },

  {
    bankId: "581-2023s-geometry",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 2,
    topic: "גאומטריה",
    topicId: "geometry",
    text: "מנקודה A יוצאים שני ישרים המשיקים למעגל בנקודות B ו-C. BD הוא מיתר המקביל למשיק AC. הקטע AD חותך את המעגל בנקודה E. המשך BE חותך את AC בנקודה F.",
    subquestions: [
      {
        label: "א(1)",
        text: "הוכח: AF · DB = BF · EB",
        solution: "AF ∥ BD  ⟹  ∠AFE = ∠EBD\n∠ABF = ∠EDB  ⟹  △BFA ∼ △DBE\n⟹  AF · DB = BF · EB   מ.ש.ל.",
      },
      {
        label: "א(2)",
        text: "נתון: EB = 1.5·FE. הראה כי AF/FE = √2.5",
        solution: "FE = x, EB = 1.5x, FB = 2.5x\nAF² = BF·FE = 2.5x²  →  AF = x√2.5\nAF/FE = √2.5   מ.ש.ל.",
      },
      {
        label: "ב",
        text: "שטח △AEF הוא S. בטא באמצעות S את שטח △AFB.",
        solution: "S(AEF)/S(BFA) = (FE/FA)² = 1/2.5\n✅ S(AFB) = 2.5S",
      },
      {
        label: "ג",
        text: "נתון: DE = 6, AF = √10. חשב את AC.",
        solution: "x = 2, EB = 3, FB = 5\nBA/DE = FA/BE  →  BA = 2√10\n✅ AC = 2√10",
      },
    ],
  },

  {
    bankId: "581-2023s-trigonometry",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 2,
    topic: "טריגונומטריה",
    topicId: "trigonometry",
    text: "נתון מלבן ABCD. אלכסוניו נחתכים בנקודה M. מנקודה M מעלים אנך ל-AC החותך את DC בנקודה P.\nנתון: BC = k, ∠BMC = 2α, MP ⊥ AC.",
    subquestions: [
      {
        label: "א",
        text: "הבע את CP באמצעות α ו-k.",
        solution: "MC = k/(2sinα), CP = MC/cosα\n✅ CP = k/sin2α",
      },
      {
        label: "ב(1)",
        text: "הבע באמצעות α את היחס S(CMP)/S(BMC).",
        solution: "✅ S(CMP)/S(BMC) = 1/(2cos²α)",
      },
      {
        label: "ב(2)",
        text: "האם יתכן S(BMC) = 2·S(CMP)? נמק.",
        solution: "דורש cos²α = 1  →  α = 0°. לא יתכן כי 0° < α < 90°.",
      },
      {
        label: "ב(3)",
        text: "נתון: S(△CMP) = 0.213·S(ABCD). חשב את α.",
        solution: "1/(8cos²α) = 0.213  →  cosα = 0.766  →  ✅ α = 40°",
      },
      {
        label: "ג",
        text: "נתון: BP = 14.26. מצא את k.",
        solution: "עם α = 40°: BP = 1.426k = 14.26\n✅ k = 10",
      },
    ],
  },

  {
    bankId: "581-2023s-root-functions",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 3,
    topic: "פונקציות שורש",
    topicId: "root-functions",
    text: "נתונה הפונקציה: f(x) = ax / (x − b√x)\nהישרים y = 2 ו-x = 1 הם אסימפטוטות לגרף.",
    subquestions: [
      {
        label: "א(1)",
        text: "מצא a ו-b.",
        solution: "x=1 אנכית: 1 − b = 0 → b=1\ny=2 אופקית: a = 2\n✅ a=2, b=1",
      },
      {
        label: "א(2)",
        text: "מצא את תחום ההגדרה.",
        solution: "✅ (0,1) ∪ (1,∞)",
      },
      {
        label: "א(3)",
        text: "האם יש אסימפטוטות נוספות? נמק.",
        solution: "כאשר x→0⁺: f(x)→0. נקודה חסרה, לא אסימפטוטה.\n✅ אין.",
      },
      {
        label: "ב(1)",
        text: "האם f(x) = h(x) = 2√x/(√x−1)? נמק.",
        solution: "תחומים שונים — f לא מוגדרת ב-x=0, h כן.\n✅ לא שוות.",
      },
      {
        label: "ב(2)",
        text: "הראה ש-f יורדת בכל תחום הגדרתה.",
        solution: "f'(x) = −1/[√x(√x−1)²] < 0 לכל x בתחום.\n✅ יורדת.",
      },
      {
        label: "ג",
        text: "הנקודה (1/9, −6.75) היא מקסימום של f'. קבע קעירות ופיתול.",
        solution: "f(1/9) = −1 → פיתול ב-(1/9, −1)\nקעורה כלפי מעלה ב-(0,1/9) ו-(1,∞)\nקעורה כלפי מטה ב-(1/9,1)",
      },
      {
        label: "ד",
        text: "חשב את השטח המוגבל בין g(x)=|f(x)|, ציר x, x=4 ו-x=9.",
        solution: "✅ שטח = 1",
      },
    ],
  },

  {
    bankId: "581-2023s-trig-functions",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 3,
    topic: "פונקציות טריגונומטריות",
    topicId: "trig-functions",
    text: "נתונות הפונקציות f(x) = sin²(x) − 2.5sin(x) + 1  ו-g(x) = sin(x) + cos(x)\nבתחום 0 ≤ x ≤ π.",
    subquestions: [
      {
        label: "א",
        text: "מצא עבור כל פונקציה: חיתוכים עם צירים, קיצון, תחומי סימן.",
        solution: "f: חיתוכי x ב-π/6 ו-5π/6. מינימום (π/2, −1/2). חיובית מחוץ לקטע [π/6, 5π/6].\ng: חיתוך x ב-3π/4. מקסימום (π/4, √2). חיובית ב-[0, 3π/4].",
      },
      {
        label: "ב",
        text: "עבור h(x) = f(x)/g(x): מצא תחום הגדרה וחיתוכים עם צירים.",
        solution: "תחום: [0, 3π/4) ∪ (3π/4, π]\nחיתוכי x: π/6 ו-5π/6\nחיתוך y: (0, 1)",
      },
    ],
  },

  {
    bankId: "581-2023s-optimization",
    source: "שאלון 581 – קיץ תשפ״ג",
    chapter: 3,
    topic: "בעיות קיצון",
    topicId: "optimization",
    text: "גדר באורך 2a מקיפה צורה המורכבת ממלבן וחצי עיגול. רוחב המלבן גדול ב-20% מקוטר המעגל. נסמן x את רדיוס המעגל.",
    subquestions: [
      {
        label: "א",
        text: "הבע באמצעות a את תחום ההגדרה של x.",
        solution: "היקף: 2(2.4x + y) + πx + 2x = 2a → y = a − (3.4 + π/2)x\ny > 0  →  x < a/(3.4 + π/2) ≈ 0.2a\n✅ 0 < x < 0.2a",
      },
      {
        label: "ב",
        text: "מצא את x שמקסימם את סכום השטחים.",
        solution: "S(x) = 2.4ax − 10.357x²\nS'(x) = 2.4a − 20.714x = 0\n✅ x ≈ 0.116a",
      },
    ],
  },

];
