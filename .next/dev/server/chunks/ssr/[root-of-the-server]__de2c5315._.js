module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/testQuestions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testQuestions",
    ()=>testQuestions
]);
const testQuestions = [
    // ─── Question 1 — תנועה ───────────────────────────────────────────────────
    {
        id: 1,
        topic: "תנועה",
        topicId: "motion",
        text: "הילה, רונית ודקלה נוהגות לרוץ מדי בוקר במסלול מעגלי שאורכו 2700 מטר. שלושתן מתחילות בנקודה A ורצות באותו כיוון.\nביום ג׳ התחילה הילה בשעה 8:00, רונית 3 דקות אחריה, ודקלה 2 דקות אחרי רונית. שלושתן חלפו זו על פני זו בשעה 8:15, לפני שחזרו לנקודה A. דקלה עברה 9900 מטר מיציאתה עד שחלפה על הילה בפעם השנייה.",
        subquestions: [
            {
                label: "א",
                text: "מצאו את מהירות הריצה של הילה, רונית ודקלה.",
                solution: "בשעה 8:15 שלושתן נפגשות באותה נקודה p:\n  הילה (15 דק׳):  15·v_H = p\n  רונית (12 דק׳): 12·v_R = p\n  דקלה (10 דק׳): 10·v_D = p\nלכן: v_D = 1.5·v_H  ו-v_R = 1.25·v_H\n\nדקלה חלפה על הילה בפעם השנייה אחרי 9900 מ׳.\nדקלה יצאה 5 דק׳ אחרי הילה → פרש התחלה: 5·v_H\n(v_D − v_H)·t = 5·v_H + 2700  (סגירת פרש + הקפה אחת)\nv_D·t = 9900  →  t = 9900/v_D\n\n0.5v_H · (9900 / 1.5v_H) = 5v_H + 2700\n3300 = 5v_H + 2700\n✅ v_H = 120 מ׳/ד׳,  v_R = 150 מ׳/ד׳,  v_D = 180 מ׳/ד׳\n   בדיקה: 15×120 = 12×150 = 10×180 = 1800 מ׳ ✓"
            },
            {
                label: "ב",
                text: "מה המרחק שעברה דקלה מרגע יציאתה עד שחלפה על רונית בפעם השנייה?",
                solution: "דקלה יצאה 2 דק׳ אחרי רונית → פרש התחלה: 150×2 = 300 מ׳\n\n(v_D − v_R)·t = 300 + 2700n\n30t = 300 + 2700n  →  t = 10 + 90n\n\nn=0: t=10 → מפגש ראשון (8:15, דקלה רצה 1800 מ׳)\nn=1: t=100 → מפגש שני\n\n✅ דקלה עברה 180 × 100 = 18000 מטר"
            },
            {
                label: "ג",
                text: "ביום ד׳ התחילו הילה ודקלה מנקודה A באותה שעה ובאותו כיוון, באותן מהירויות. עד שנפגשו שוב בנקודה A — איזה מרחק רצה כל אחת?",
                solution: "הן נפגשות ב-A כשסיימו בו-זמנית מספר שלם של הקפות:\n  2700n / 120 = 2700k / 180  →  3n = 2k\n\nהפתרון המינימלי: n = 2,  k = 3\n\n✅ הילה רצה:  2 × 2700 = 5400 מטר\n   דקלה רצה: 3 × 2700 = 8100 מטר\n   (לאחר 45 דקות ריצה)"
            }
        ]
    },
    // ─── Question 2 — סדרות הנדסיות ──────────────────────────────────────────
    {
        id: 2,
        topic: "סדרות",
        topicId: "sequences",
        text: "סדרה הנדסית של 2n−1 איברים. מנת הסדרה היא q.",
        subquestions: [
            {
                label: "א",
                text: "הראה כי היחס בין סכום n−1 האיברים האחרונים לסכום n−1 האיברים הראשונים הוא q^n.",
                solution: "סכום n−1 האיברים הראשונים:\n  S₁ = a₁(q^(n-1) − 1)/(q−1)\n\nסכום n−1 האיברים האחרונים (מתחיל מ-a_{n+1}):\n  S₂ = a_{n+1}(q^(n-1) − 1)/(q−1)\n\nS₂/S₁ = a_{n+1}/a₁ = q^n   מ.ש.ל."
            },
            {
                label: "ב",
                text: "נתון: סכום n−1 האחרונים גדול פי 64 מסכום n−1 הראשונים. סכום n האחרונים גדול פי 63 מהאיבר האמצעי.\n1) מצא את מנת הסדרה q.\n2) מצא את מספר האיברים בסדרה.",
                solution: "1) מסעיף א: q^n = 64\n   תנאי שני: aₙ(q^n − 1)/(q−1) = 63·aₙ\n   → q^n − 1 = 63(q−1)\n   → 63 = 63(q−1)  →  q−1 = 1  →  q = 2\n\n2) 2^n = 64  →  n = 6\n   מספר האיברים = 2n−1 = 11"
            },
            {
                label: "ג",
                text: "נתון: סכום איברי הסדרה במקומות האי-זוגיים הוא 170 ו-5/8. מצא את האיבר הראשון.",
                solution: "סדרת האיברים האי-זוגיים: a₁, a₃, ..., a₁₁\nאיבר ראשון a₁, מנה q² = 4, מספר איברים 6:\n\na₁·(4⁶ − 1)/(4−1) = 170.625\n4095·a₁/3 = 170.625\na₁ = 170.625·3/4095 = 511.875/4095\n\n✅ a₁ = 1/8"
            },
            {
                label: "ד",
                text: "הסדרה bₙ מקיימת bₙ = −4/aₙ.\n1) הראה ש-bₙ היא סדרה הנדסית.\n2) חשב את b₁ + b₂ + ... + b_{2n−1}.",
                solution: "1) b_{n+1}/bₙ = (−4/a_{n+1})/(−4/aₙ) = aₙ/a_{n+1} = 1/q = 1/2\n   מנה קבועה 1/2  →  הסדרה הנדסית. מ.ש.ל.\n\n2) b₁ = −4/a₁ = −4/(1/8) = −32,  מנה = 1/2,  N = 11\n   S₁₁ = −32·((1/2)^11 − 1)/(1/2 − 1)\n       = −32·(−1 + 1/2048)/(−1/2)\n   ✅ S₁₁ = −63 ו-31/32"
            },
            {
                label: "ה",
                text: "נתון: b₁ הוא האיבר הראשון של הסדרה האינסופית b₁, −b₃, b₅, −b₇, ...\nחשב את סכום הסדרה האינסופית.",
                solution: "A₁ = b₁ = −32\nQ = −(1/2)² = −1/4\n\nסכום אינסופי = A₁/(1 − Q) = −32/(1 − (−1/4)) = −32/(5/4)\n\n✅ סכום = −25.6"
            }
        ]
    },
    // ─── Question 3 — הסתברות ─────────────────────────────────────────────────
    {
        id: 3,
        topic: "הסתברות",
        topicId: "probability",
        text: "במסיבת יום הולדת נערכה תחרות נושאת פרסים. ילד שזוכה מוציא חטיף מקופסא שבה n חטיפים: 5 חטיפי שוקולד והשאר אגוזים. ליאת, ליהי ואור זכו בפרס ומשכו חטיפים ללא החזרה. ההסתברות שלפחות אחת מליאת וליהי הוציאה שוקולד היא 15/22.",
        subquestions: [
            {
                label: "א",
                text: "מצא את n (מספר החטיפים הכולל בקופסא).",
                solution: "P(לפחות אחת מהן שוקולד) = 1 − P(שתיהן אגוזים)\nP(שתיהן אגוזים) = (n−5)(n−6)/(n(n−1))\n\n1 − (n−5)(n−6)/(n(n−1)) = 15/22\n(n−5)(n−6)/(n(n−1)) = 7/22\n\n22(n²−11n+30) = 7n(n−1)\n22n²−242n+660 = 7n²−7n\n15n²−235n+660 = 0\n3n²−47n+132 = 0\n(3n−11)(n−12) = 0\nn=12 (n>5 הכרחי)\n\n✅ n = 12"
            },
            {
                label: "ב",
                text: "כעת יש 6 חטיפי שוקולד בקופסא (n נשאר 12). פי כמה גדלה ההסתברות ששלושת הזוכים קיבלו שוקולד?",
                solution: "P(3 שוקולד | 5 מתוך 12) = 5·4·3/(12·11·10) = 60/1320 = 1/22\nP(3 שוקולד | 6 מתוך 12) = 6·5·4/(12·11·10) = 120/1320 = 1/11\n\nיחס: (1/11)/(1/22) = 2\n\n✅ ההסתברות גדלה פי 2"
            }
        ]
    },
    // ─── Question 4 — גיאומטריה: מעגל ומשיקים ───────────────────────────────
    {
        id: 4,
        topic: "גיאומטריה",
        topicId: "geometry",
        text: "מנקודה A יוצאים שני ישרים המשיקים למעגל בנקודות B ו-C. BD הוא מיתר במעגל המקביל למשיק AC. הקטע AD חותך את המעגל בנקודה E. המשך המיתר BE חותך את המשיק AC בנקודה F.",
        subquestions: [
            {
                label: "א(1)",
                text: "הוכח: AF · DB = BF · EB",
                solution: "AF ∥ BD  ⟹  ∠AFE = ∠EBD (זוויות מתחלפות)\n∠ABF = ∠EDB (זווית בין משיק למיתר = זווית חקורה)\n⟹  △BFA ∼ △DBE\n⟹  BF/DB = FA/BE\n⟹  AF · DB = BF · EB   מ.ש.ל."
            },
            {
                label: "א(2)",
                text: "נתון: EB = 1.5·FE. הראה כי AF/FE = √2.5",
                solution: "נסמן FE = x  →  EB = 1.5x  →  FB = FE + EB = 2.5x\n\nמ-△AFE ∼ △BFA (זוויות שוות):\n  AF/BF = FE/FA\n  AF² = BF·FE = 2.5x · x = 2.5x²\n  AF = x√2.5\n\nAF/FE = x√2.5 / x = √2.5   מ.ש.ל."
            },
            {
                label: "ב",
                text: "נתון: שטח המשולש AEF הוא S. בטא באמצעות S את שטח המשולש AFB.",
                solution: "מ-△AEF ∼ △BFA:\n  S(AEF)/S(BFA) = (FE/FA)² = (x/(x√2.5))² = 1/2.5\n\n⟹  S/S(AFB) = 2/5\n⟹  S(AFB) = 2.5S\n\n✅ שטח △AFB = 2.5S"
            },
            {
                label: "ג",
                text: "נתון: DE = 6, AF = √10. חשב את AC.",
                solution: "AF = x√2.5 = √10  →  x² = 4  →  x = 2\nFE = 2, EB = 3, FB = 5\n\nמ-△BFA ∼ △DBE:\n  FA/BE = BA/DE\n  √10/3 = BA/6\n  BA = 2√10\n\nAC = AB = 2√10 (שני משיקים מאותה נקודה)\n\n✅ AC = 2√10 ≈ 6.32"
            }
        ]
    },
    // ─── Question 5 — טריגונומטריה: מלבן ────────────────────────────────────
    {
        id: 5,
        topic: "טריגונומטריה",
        topicId: "trigonometry",
        text: "נתון מלבן ABCD. אלכסוני המלבן נחתכים בנקודה M. מנקודה M מעלים אנך ל-AC החותך את DC בנקודה P.\nנתון: BC = k, ∠BMC = 2α, MP ⊥ AC.",
        subquestions: [
            {
                label: "א",
                text: "הבע את אורך CP באמצעות α ו-k.",
                solution: "∠BMC = 2α  ⟹  ∠BCM = 90°−α  ⟹  ∠ACD = α\nAD = BC = k\nsin α = k/AC  →  AC = k/sin α  →  MC = k/(2sin α)\ncos α = MC/CP  →  CP = MC/cos α = k/(2sin α·cos α)\n\n✅ CP = k/sin 2α"
            },
            {
                label: "ב(1)",
                text: "הבע באמצעות α את היחס בין שטח המשולש CMP לבין שטח המשולש BMC.",
                solution: "S(CMP) = ½·CM·CP·sin α = k²/(4 sin 2α)\nS(BMC) = ½·CM²·sin 2α = k² cos α/(4 sin α)\n\nיחס = S(CMP)/S(BMC) = [k²/(4 sin 2α)] / [k² cos α/(4 sin α)]\n     = sin α/(sin 2α · cos α)\n     = sin α/(2 sin α cos²α)\n\n✅ S(CMP)/S(BMC) = 1/(2cos²α)"
            },
            {
                label: "ב(2)",
                text: "האם יתכן כי שטח המשולש BMC גדול פי 2 משטח המשולש CMP? נמק.",
                solution: "S(BMC) = 2·S(CMP)  ⟹  S(CMP)/S(BMC) = 1/2\n1/(2cos²α) = 1/2  ⟹  cos²α = 1  ⟹  α = 0°\n\nלא יתכן, כי α הוא זווית במלבן ולכן 0° < α < 90°."
            },
            {
                label: "ב(3)",
                text: "נתון: S(△CMP) = 0.213·S(ABCD). חשב את α.",
                solution: "S(ABCD) = 4·S(BMC)\nS(CMP)/S(ABCD) = S(CMP)/(4·S(BMC)) = 1/(8cos²α) = 0.213\ncos²α = 1/(8·0.213) = 0.587\ncos α = 0.766\n\n✅ α = 40°"
            },
            {
                label: "ג",
                text: "נתון: אורך הקטע BP הוא 14.26. מצא את k.",
                solution: "עם α = 40°:\nMC = k/(2 sin 40°) ≈ 0.778k\nMP = MC·tan 40° ≈ 0.653k\n∠BMP = 180° − 2α = 100° (משלים)\n\nBP² = MB² + MP² − 2·MB·MP·cos(∠BMP)\n    = (0.778k)² + (0.653k)² − 2·0.778k·0.653k·cos 100°\n    ≈ 0.605k² + 0.426k² + 0.176k² ≈ 2.032k²\nBP = 1.426k = 14.26\n\n✅ k = 10"
            }
        ]
    },
    // ─── Question 6 — חדו״א: פונקציה רציונלית ───────────────────────────────
    {
        id: 6,
        topic: "חדו״א",
        topicId: "root-functions",
        text: "נתונה הפונקציה: f(x) = ax / (x − b√x)\nהישרים y = 2 ו-x = 1 הם אסימפטוטות לגרף הפונקציה.",
        subquestions: [
            {
                label: "א(1)",
                text: "מצא את a ואת b.",
                solution: "x = 1 אסימפטוטה אנכית:  1 − b·√1 = 0  →  b = 1\ny = 2 אסימפטוטה אופקית:  lim(x→∞) ax/x = a = 2\n\n✅ a = 2,  b = 1"
            },
            {
                label: "א(2)",
                text: "מצא את תחום ההגדרה של f(x).",
                solution: "צריך: x ≥ 0  וגם  x − √x ≠ 0\n√x(√x − 1) ≠ 0  →  x ≠ 0, x ≠ 1\n\n✅ תחום הגדרה: (0,1) ∪ (1,∞)"
            },
            {
                label: "א(3)",
                text: "האם יש לגרף אסימפטוטות נוספות המאונכות לצירים? נמק.",
                solution: "כאשר x→0⁺:\nf(x) = 2√x/(√x − 1) → 0/(−1) = 0\nהנקודה (0,0) היא נקודה חסרה, לא אסימפטוטה.\n\n✅ אין אסימפטוטות אנכיות נוספות."
            },
            {
                label: "ב(1)",
                text: "נתונה h(x) = 2√x/(√x − 1). האם f(x) = h(x)? נמק.",
                solution: "תחום h(x): x ≥ 0, x ≠ 1  (כולל 0 ≤ x < 1)\nתחום f(x): (0,1) ∪ (1,∞)  (לא כולל x = 0)\n\nהתחומים שונים  →  f(x) ≠ h(x)"
            },
            {
                label: "ב(2)",
                text: "הראה שהפונקציה f(x) יורדת בכל תחום הגדרתה.",
                solution: "f(x) = 2√x/(√x − 1)\nf'(x) = −1/[√x·(√x − 1)²]\n\nלכל x בתחום ההגדרה: √x > 0 ו-(√x−1)² > 0\n→  f'(x) < 0\n\n✅ הפונקציה יורדת בכל תחום הגדרתה."
            },
            {
                label: "ג",
                text: "בציור מתואר גרף f'(x). הנקודה (1/9, −6.75) היא נקודת מקסימום של f'(x).\n1) מצא את f(1/9) והסק מסקנה על גרף f.\n2) קבע את תחומי הקעירות של f.\n3) סרטט סקיצה של f.",
                solution: "1) f(1/9) = 2·(1/3)/((1/3)−1) = (2/3)/(−2/3) = −1\n   מקסימום של f' → נקודת פיתול של f ב-(1/9, −1)\n\n2) f' עולה  →  f קעורה כלפי מעלה ב: (0, 1/9) ו-(1,∞)\n   f' יורדת  →  f קעורה כלפי מטה ב: (1/9, 1)\n\n3) סקיצה: יורדת בכל תחום, פיתול ב-(1/9,−1),\n   אסימפטוטות: x=1 (אנכית), y=2 (אופקית)"
            },
            {
                label: "ד",
                text: "נתונה g(x) = |f(x)|.\n1) סרטט סקיצה של g'(x).\n2) חשב את השטח המוגבל בין גרף g(x), ציר ה-x, הישר x=4 והישר x=9.",
                solution: "2) בתחום x > 1: g(x) = f(x) = 2√x/(√x−1) > 0\nS = ∫₄⁹ g(x) dx\n\nאינטגרציה: ∫ 2√x/(√x−1) dx = 2∫ t/(t−1) · 2t dt (t=√x)\nאחרי חישוב: ∫₄⁹ f(x)dx = [f·x]₄⁹ ...\n\n✅ שטח = 1"
            }
        ]
    },
    // ─── Question 7 — פונקציות טריגונומטריות ────────────────────────────────
    {
        id: 7,
        topic: "פונקציות טריגונומטריות",
        topicId: "trig-functions",
        text: "נתונות הפונקציות f(x) = sin²(x) − 2.5sin(x) + 1  ו-g(x) = sin(x) + cos(x)\nבתחום 0 ≤ x ≤ π.",
        subquestions: [
            {
                label: "א",
                text: "מצא לכל אחת מהפונקציות:\n1) נקודות חיתוך עם הצירים.\n2) שיעורי נקודות קיצון.\n3) תחומי חיוביות ושליליות.",
                solution: "f(x) = sin²x − 2.5sin x + 1:\n1) חיתוך x: (π/6, 0) ו-(5π/6, 0). חיתוך y: (0, 1)\n2) מינימום: (π/2, −1/2). קצוות: (0,1) ו-(π,1)\n3) חיובית: 0<x<π/6 ו-5π/6<x<π. שלילית: π/6<x<5π/6\n\ng(x) = sin x + cos x:\n1) חיתוך x: (3π/4, 0). חיתוך y: (0, 1)\n2) מקסימום: (π/4, √2). ערכי קצה: (0,1) ו-(π,−1)\n3) חיובית: 0<x<3π/4. שלילית: 3π/4<x<π"
            },
            {
                label: "ב",
                text: "נתונה h(x) = f(x)/g(x) בתחום 0 ≤ x ≤ π.\nבעזרת סעיף א:\n1) מצא את תחום ההגדרה של h.\n2) מצא נקודות חיתוך עם הצירים.",
                solution: "1) תחום הגדרה: g(x) ≠ 0  →  sin x + cos x ≠ 0\n   x ≠ 3π/4\n   תחום: [0, 3π/4) ∪ (3π/4, π]\n\n2) חיתוך x: f(x)=0 ו-g(x)≠0\n   x = π/6 ו-x = 5π/6 (בדוק: g(π/6)≠0, g(5π/6)≠0 ✓)\n   חיתוך y: h(0) = 1/1 = 1  →  (0, 1)"
            }
        ]
    },
    // ─── Question 8 — אופטימיזציה ────────────────────────────────────────────
    {
        id: 8,
        topic: "אופטימיזציה",
        topicId: "optimization",
        text: "גדר באורך 2a מקיפה צורה המורכבת ממלבן וחצי עיגול. רוחב המלבן גדול ב-20% מקוטר המעגל. נסמן x את רדיוס המעגל.",
        subquestions: [
            {
                label: "א",
                text: "הבע באמצעות a את תחום ההגדרה של x.",
                solution: "רוחב המלבן = 1.2 · 2x = 2.4x\nנסמן y = גובה המלבן.\nהיקף כולל: 2(2.4x + y) + πx + 2x = 2a\n→ y = a − (3.4 + π/2)x ≈ a − 4.97x\n\ny > 0  →  x < a/4.97 ≈ 0.2a\n\n✅ תחום הגדרה: 0 < x < 0.2a"
            },
            {
                label: "ב",
                text: "הבע באמצעות a את רדיוס המעגל עבורו סכום השטחים של המלבן וחצי העיגול הוא מקסימלי (עגל ל-3 ספרות אחרי הנקודה).",
                solution: "שטח כולל:\nf(x) = πx²/2 + 2.4x·(a − 4.97x)\n     = 1.571x² + 2.4ax − 11.928x²\n     = 2.4ax − 10.357x²\n\nf'(x) = 2.4a − 20.714x = 0\nx = 2.4a/20.714\n\n✅ x ≈ 0.116a"
            }
        ]
    }
];
}),
"[project]/app/test/TestClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/testQuestions.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const TOTAL_SECONDS = 3 * 60 * 60;
function formatTime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor(s % 3600 / 60);
    const sec = s % 60;
    if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function NavBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 bg-black border-b border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2.5 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center justify-center w-8 h-8 rounded-lg bg-white/25 text-white font-black text-sm",
                                children: "מ"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-white text-sm md:text-base",
                                children: "בגרות מתמטיקה 5 יח״ל"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/TestClient.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-white/60 hover:text-white text-sm transition-colors",
                        children: "← חזרה לדף הבית"
                    }, void 0, false, {
                        fileName: "[project]/app/test/TestClient.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/TestClient.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/test/TestClient.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/test/TestClient.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TestClient() {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(TOTAL_SECONDS);
    const [timerActive, setTimerActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // key = `${questionId}-${label}`, value = open/closed
    const [openSolutions, setOpenSolutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const endTest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTimerActive(false);
        setPhase("solutions");
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!timerActive) return;
        const id = setInterval(()=>setTimeLeft((t)=>Math.max(0, t - 1)), 1000);
        return ()=>clearInterval(id);
    }, [
        timerActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timerActive && timeLeft === 0) endTest();
    }, [
        timeLeft,
        timerActive,
        endTest
    ]);
    function startTest() {
        setTimeLeft(TOTAL_SECONDS);
        setTimerActive(true);
        setOpenSolutions(new Set());
        setPhase("test");
    }
    function restart() {
        setPhase("intro");
        setTimeLeft(TOTAL_SECONDS);
        setTimerActive(false);
        setOpenSolutions(new Set());
    }
    function toggleSolution(key) {
        setOpenSolutions((prev)=>{
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }
    function revealAll() {
        const all = new Set();
        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testQuestions"].forEach((q)=>q.subquestions.forEach((sub)=>all.add(`${q.id}-${sub.label}`)));
        setOpenSolutions(all);
    }
    const isLowTime = timeLeft < 10 * 60;
    // ══════════════════════════════════════════════════════════════════════════
    // INTRO
    // ══════════════════════════════════════════════════════════════════════════
    if (phase === "intro") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex flex-col",
            dir: "rtl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 md:px-12 h-14 border-b border-slate-100 shrink-0 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white font-black text-sm",
                                    children: "מ"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-black text-sm md:text-base",
                                    children: "בגרות מתמטיקה 5 יח״ל"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold text-black border border-slate-300 rounded-full px-3 py-1",
                            children: "שאלון 581"
                        }, void 0, false, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/TestClient.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col justify-center items-center text-center px-8 md:px-16 py-10 border-b-2 border-black relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 left-0 w-56 xl:w-72 hidden lg:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
                                            alt: "",
                                            fill: true,
                                            className: "object-cover opacity-80",
                                            sizes: "(min-width: 1280px) 288px, 224px"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-transparent to-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 right-0 w-56 xl:w-72 hidden lg:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
                                            alt: "",
                                            fill: true,
                                            className: "object-cover opacity-80",
                                            sizes: "(min-width: 1280px) 288px, 224px"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-l from-transparent to-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1600&q=80",
                                    alt: "",
                                    fill: true,
                                    className: "object-cover opacity-10",
                                    sizes: "100vw",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative text-black text-sm font-semibold tracking-widest uppercase mb-4",
                                    children: "מבחן פתוח · כיתה י״א"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "relative leading-none font-black text-black tracking-tighter mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[18vw] leading-none",
                                        children: "מבחן מלא"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/TestClient.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative text-black text-base md:text-xl leading-relaxed",
                                    children: "פתור במחברת — בדוק את עצמך לאחר הגשה"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col justify-between items-center px-8 md:px-16 py-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 w-full max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-black text-sm md:text-base leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: "מבנה השאלון ומפתח ההערכה:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/TestClient.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                " בשאלון זה שלושה פרקים, ובהם שמונה שאלות."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5 pr-4 border-r-2 border-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black text-sm md:text-base",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            children: "פרק ראשון"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/TestClient.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 64
                                                        }, this),
                                                        " – אלגברה והסתברות"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/TestClient.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black text-sm md:text-base",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            children: "פרק שני"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/TestClient.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 64
                                                        }, this),
                                                        " – גאומטרייה וטריגונומטרייה במישור"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/TestClient.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black text-sm md:text-base leading-relaxed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            children: "פרק שלישי"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/TestClient.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 80
                                                        }, this),
                                                        " – חשבון דיפרנציאלי ואינטגרלי של פולינומים, של פונקציות שורש, של פונקציות רציונליות ושל פונקציות טריגונומטריות"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/TestClient.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-black text-sm md:text-base font-bold",
                                            children: "יש לענות על חמש שאלות, לפחות על שאלה אחת מכל פרק – 5×20 = 100 נקודות."
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: startTest,
                                            className: "w-full bg-black text-white font-black text-xl py-6 rounded-2xl hover:bg-slate-800 transition-colors tracking-tight",
                                            children: "התחל מבחן ←"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "mt-4 text-center text-sm text-black hover:underline transition-colors block",
                                            children: "חזרה לדף הבית"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/TestClient.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/test/TestClient.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this);
    }
    // ══════════════════════════════════════════════════════════════════════════
    // TEST — all 8 questions displayed, student solves on paper
    // ══════════════════════════════════════════════════════════════════════════
    if (phase === "test") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50",
            dir: "rtl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 z-50 bg-black border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-4 h-14 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-2 font-mono font-bold text-lg ${isLowTime ? "text-red-400" : "text-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/TestClient.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 6v6l4 2",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/TestClient.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/TestClient.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        formatTime(timeLeft)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/70 text-sm hidden sm:block",
                                    children: "ענה/י על 5 שאלות לבחירתך במחברת"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: endTest,
                                    className: "bg-white text-black font-bold text-sm px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors",
                                    children: "סיים מבחן"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/TestClient.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        isLowTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-600 text-white text-center text-xs py-1 font-semibold",
                            children: "פחות מ-10 דקות נותרו!"
                        }, void 0, false, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/TestClient.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-10 space-y-8",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testQuestions"].map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/TestClient.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold rounded-full px-3 py-1",
                                                children: q.topic
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/TestClient.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/TestClient.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black text-base leading-relaxed whitespace-pre-line mb-6 font-medium",
                                        children: q.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/TestClient.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 border-t border-slate-100 pt-5",
                                        children: q.subquestions.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-black",
                                                        children: sub.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-black text-sm leading-relaxed whitespace-pre-line",
                                                        children: sub.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, sub.label, true, {
                                                fileName: "[project]/app/test/TestClient.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/TestClient.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center pt-4 pb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: endTest,
                                className: "bg-black text-white font-bold px-10 py-4 rounded-xl hover:bg-slate-800 transition-colors text-base",
                                children: "סיים וראה פתרונות ←"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/TestClient.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/test/TestClient.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this);
    }
    // ══════════════════════════════════════════════════════════════════════════
    // SOLUTIONS — reveal per sub-question
    // ══════════════════════════════════════════════════════════════════════════
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBar, {}, void 0, false, {
                fileName: "[project]/app/test/TestClient.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black text-white rounded-2xl p-8 mb-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm mb-2",
                                children: "מבחן הסתיים"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-black mb-2",
                                children: "מפתח פתרונות"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/70 text-sm",
                                children: 'לחץ על "הצג פתרון" בכל סעיף לבדיקה עצמית'
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/TestClient.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: revealAll,
                            className: "text-sm font-semibold text-black hover:text-slate-700 underline underline-offset-2 transition-colors",
                            children: "הצג את כל הפתרונות"
                        }, void 0, false, {
                            fileName: "[project]/app/test/TestClient.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/test/TestClient.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8 mb-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testQuestions"].map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 md:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm shrink-0",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold rounded-full px-3 py-1",
                                                        children: q.topic
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/TestClient.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black text-base leading-relaxed whitespace-pre-line font-medium mb-0",
                                                children: q.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/TestClient.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/TestClient.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-slate-100",
                                        children: q.subquestions.map((sub)=>{
                                            const key = `${q.id}-${sub.label}`;
                                            const isOpen = openSolutions.has(key);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-6 md:px-8 py-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-black",
                                                                children: sub.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/TestClient.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-black text-sm leading-relaxed whitespace-pre-line flex-1",
                                                                children: sub.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/TestClient.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mr-11",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleSolution(key),
                                                            className: `text-xs font-bold px-4 py-1.5 rounded-lg border transition-all ${isOpen ? "bg-green-50 border-green-300 text-green-700" : "bg-slate-50 border-slate-300 text-black hover:border-slate-400"}`,
                                                            children: isOpen ? "▲ הסתר פתרון" : "▼ הצג פתרון"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/TestClient.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, this),
                                                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mr-11 mt-3 bg-green-50 border border-green-200 rounded-xl p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-green-900 text-sm leading-loose whitespace-pre-line font-mono",
                                                            children: sub.solution
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/TestClient.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/TestClient.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, sub.label, true, {
                                                fileName: "[project]/app/test/TestClient.tsx",
                                                lineNumber: 334,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/TestClient.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/test/TestClient.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: restart,
                                className: "bg-black text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800 transition-colors",
                                children: "מבחן חדש"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "border border-slate-300 text-black font-bold px-8 py-3 rounded-xl hover:border-slate-500 transition-colors",
                                children: "חזרה לדף הבית"
                            }, void 0, false, {
                                fileName: "[project]/app/test/TestClient.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/TestClient.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/TestClient.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/TestClient.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de2c5315._.js.map