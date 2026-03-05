module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/topics.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "topics",
    ()=>topics
]);
const topics = [
    {
        id: "motion",
        title: "בעיות תנועה",
        subtitle: "קינמטיקה ומפגשים",
        icon: "ת",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "בעיות תנועה עוסקות בחישוב מרחק, מהירות וזמן של עצמים נעים. נלמד לפתור בעיות של מפגש, מרדף והתקרבות.",
        formulas: [
            {
                title: "נוסחת הדרך",
                latex: "d = v \\cdot t",
                explanation: "מרחק = מהירות × זמן"
            },
            {
                title: "מהירות ממוצעת",
                latex: "\\bar{v} = \\frac{d_{total}}{t_{total}}",
                explanation: "מהירות ממוצעת = מרחק כולל חלקי זמן כולל"
            },
            {
                title: "מרדף – תנאי מפגש",
                latex: "d_1 = d_2 \\quad \\Rightarrow \\quad v_1 \\cdot t_1 = v_2 \\cdot t_2",
                explanation: "שני עצמים נפגשים כאשר המרחקים שעשו שווים"
            },
            {
                title: "התקרבות ממול",
                latex: "d_0 = (v_1 + v_2) \\cdot t",
                explanation: "כשנעים זה לקראת זה – מרחק ראשוני = סכום מהירויות × זמן"
            },
            {
                title: "מרדף – הפרש מהירויות",
                latex: "\\Delta d = (v_1 - v_2) \\cdot t",
                explanation: "כשנעים באותו כיוון, הפרש המרחק = הפרש מהירויות × זמן"
            }
        ],
        examples: [
            {
                problem: "שני אנשים יוצאים ממקום אחד בו-זמנית לכיוונים מנוגדים. מהירות הראשון 60 קמ\"ש ומהירות השני 40 קמ\"ש. אחרי כמה זמן יהיו במרחק 300 ק\"מ זה מזה?",
                steps: [
                    "נסמן את הזמן שחלף: t שעות",
                    "הראשון עשה: 60t ק\"מ",
                    "השני עשה: 40t ק\"מ",
                    "המרחק הכולל: 60t + 40t = 300",
                    "100t = 300",
                    "t = 3 שעות"
                ],
                answer: "אחרי 3 שעות יהיו במרחק 300 ק\"מ זה מזה"
            },
            {
                problem: "רכב נוסע מעיר א׳ לעיר ב׳ במהירות 90 קמ\"ש ובדרך חזרה במהירות 60 קמ\"ש. מה המהירות הממוצעת לאורך כל הנסיעה?",
                steps: [
                    "נסמן את המרחק בין הערים: d ק\"מ",
                    "זמן הלוך: d/90 שעות",
                    "זמן חזרה: d/60 שעות",
                    "זמן כולל: d/90 + d/60 = 2d/180 + 3d/180 = 5d/180",
                    "מרחק כולל: 2d",
                    "מהירות ממוצעת = 2d ÷ (5d/180) = 2d × 180/(5d) = 360/5 = 72"
                ],
                answer: "המהירות הממוצעת היא 72 קמ\"ש"
            },
            {
                problem: "אדם יצא מבית בשעה 8:00 ברכב במהירות 80 קמ\"ש. אחרי 30 דקות יצא חברו ממקום זהה ורדף אחריו במהירות 100 קמ\"ש. מתי יתמודד עם חברו?",
                steps: [
                    "כאשר האדם השני יצא, הראשון כבר נסע: 80 × 0.5 = 40 ק\"מ",
                    "נסמן t = זמן מרגע יציאת השני (בשעות)",
                    "הראשון נסע בסה\"כ: 40 + 80t ק\"מ",
                    "השני נסע: 100t ק\"מ",
                    "בנקודת המפגש: 100t = 40 + 80t",
                    "20t = 40 → t = 2 שעות",
                    "השני יצא ב-8:30, אז המפגש בשעה 10:30"
                ],
                answer: "החבר ישיג אותו בשעה 10:30, לאחר 2 שעות נסיעה"
            }
        ],
        tips: [
            "תמיד הגדירו משתנה ברור (לרוב t = זמן) ורשמו מה כל אחד עשה",
            "בשאלות מפגש: המרחקים שווים. בשאלות התקרבות: סכום המרחקים שווה למרחק הכולל",
            "שימו לב ליחידות! המירו דקות לשעות אם צריך (÷60)",
            "ציירו ציר זמן או ציר מרחק – זה עוזר מאוד להבין את הבעיה"
        ]
    },
    {
        id: "sequences",
        title: "סדרות",
        subtitle: "סדרות חשבוניות וגאומטריות",
        icon: "ס",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "סדרות הן רצף מספרים לפי חוק קבוע. נלמד סדרות חשבוניות (הפרש קבוע) וסדרות גאומטריות (מנה קבועה).",
        formulas: [
            {
                title: "איבר כללי – סדרה חשבונית",
                latex: "a_n = a_1 + (n-1) \\cdot d",
                explanation: "aₙ = האיבר ה-n, a₁ = האיבר הראשון, d = הפרש קבוע"
            },
            {
                title: "סכום n איברים – סדרה חשבונית",
                latex: "S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)",
                explanation: "סכום n האיברים הראשונים של סדרה חשבונית"
            },
            {
                title: "איבר כללי – סדרה גאומטרית",
                latex: "a_n = a_1 \\cdot q^{n-1}",
                explanation: "q = המנה (היחס בין איבר לקודמו)"
            },
            {
                title: "סכום n איברים – סדרה גאומטרית",
                latex: "S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)",
                explanation: "סכום n האיברים הראשונים של סדרה גאומטרית"
            },
            {
                title: "סכום אינסופי – סדרה גאומטרית",
                latex: "S_\\infty = \\frac{a_1}{1 - q} \\quad (|q| < 1)",
                explanation: "סכום אינסופי קיים רק כאשר |q| < 1"
            }
        ],
        examples: [
            {
                problem: "בסדרה חשבונית: a₁ = 3, d = 4. מצאו את a₁₀ ואת S₁₀.",
                steps: [
                    "נתון: a₁ = 3, d = 4, n = 10",
                    "a₁₀ = a₁ + (10-1)·d = 3 + 9·4 = 3 + 36 = 39",
                    "S₁₀ = (10/2)·(a₁ + a₁₀) = 5·(3 + 39) = 5·42 = 210"
                ],
                answer: "a₁₀ = 39, S₁₀ = 210"
            },
            {
                problem: "בסדרה גאומטרית: a₁ = 2, q = 3. מצאו את a₅ ואת S₅.",
                steps: [
                    "נתון: a₁ = 2, q = 3, n = 5",
                    "a₅ = a₁ · q⁴ = 2 · 3⁴ = 2 · 81 = 162",
                    "S₅ = 2 · (3⁵ - 1)/(3 - 1) = 2 · (243 - 1)/2 = 242"
                ],
                answer: "a₅ = 162, S₅ = 242"
            },
            {
                problem: "הסדרה: 4, 2, 1, ½, ... מצאו את הסכום האינסופי.",
                steps: [
                    "a₁ = 4, המנה: q = 2/4 = 1/2",
                    "כיוון ש-|q| = 1/2 < 1, קיים סכום אינסופי",
                    "S∞ = a₁/(1-q) = 4/(1 - 1/2) = 4/(1/2) = 8"
                ],
                answer: "הסכום האינסופי הוא 8"
            }
        ],
        tips: [
            "כדי לזהות סדרה חשבונית: הפרשים בין איברים עוקבים שווים",
            "כדי לזהות סדרה גאומטרית: היחס בין איברים עוקבים קבוע",
            "בסדרה חשבונית: האיבר האמצעי שווה לממוצע שכניו",
            "בסדרה גאומטרית: האיבר האמצעי שווה לממוצע הגאומטרי של שכניו (aₙ² = aₙ₋₁·aₙ₊₁)"
        ]
    },
    {
        id: "probability",
        title: "הסתברות",
        subtitle: "סיכויים, קומבינטוריקה ומשפט בייס",
        icon: "ה",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "הסתברות מודדת את הסיכוי להתרחשות אירוע. נלמד חישוב הסתברויות, הסתברות מותנית, ועץ הסתברויות.",
        formulas: [
            {
                title: "הסתברות קלאסית",
                latex: "P(A) = \\frac{n(A)}{n(S)}",
                explanation: "מספר מקרים רצויים n(A) חלקי מספר מקרים אפשריים n(S) – תקף כאשר כל המקרים שקולים"
            },
            {
                title: "הסתברות משלימה",
                latex: "P(\\bar{A}) = 1 - P(A)",
                explanation: "הסתברות שהאירוע לא יתרחש"
            },
            {
                title: "כלל החיבור",
                latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
                explanation: "הסתברות שA או B יתרחשו"
            },
            {
                title: "אירועים בלתי תלויים",
                latex: "P(A \\cap B) = P(A) \\cdot P(B)",
                explanation: "כשהתרחשות A לא משפיעה על B"
            },
            {
                title: "הסתברות מותנית",
                latex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
                explanation: "הסתברות ל-A בהינתן שB כבר התרחש"
            },
            {
                title: "ביטוי קומבינטורי",
                latex: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
                explanation: "מספר דרכים לבחור k פריטים מתוך n (ללא חשיבות לסדר)"
            }
        ],
        examples: [
            {
                problem: "בקלפים סטנדרטיים (52 קלפים), מה ההסתברות לשלוף קלף מלך אדום?",
                steps: [
                    "מספר מלכים אדומים: 2 (לב ויהלום)",
                    "מספר קלפים כולל: 52",
                    "P(מלך אדום) = 2/52 = 1/26"
                ],
                answer: "ההסתברות היא 1/26 ≈ 3.85%"
            },
            {
                problem: "בכיתה 12 בנים ו-18 בנות. נבחרו באקראי 2 תלמידים. מה ההסתברות שנבחרו שני בנים?",
                steps: [
                    "מספר דרכים לבחור 2 מתוך 30: C(30,2) = 30!/(2!·28!) = 435",
                    "מספר דרכים לבחור 2 בנים מתוך 12: C(12,2) = 12!/(2!·10!) = 66",
                    "P(2 בנים) = 66/435 = 22/145"
                ],
                answer: "ההסתברות היא 22/145 ≈ 15.2%"
            },
            {
                problem: "קופסה מכילה 3 כדורים אדומים ו-5 כדורים כחולים. שולפים 2 כדורים ברצף ללא החזרה. מה ההסתברות שהראשון אדום והשני כחול?",
                steps: [
                    "P(ראשון אדום) = 3/8",
                    "P(שני כחול | ראשון אדום) = 5/7 (נשארו 7 כדורים, 5 כחולים)",
                    "P(אדום ואז כחול) = (3/8) · (5/7) = 15/56"
                ],
                answer: "ההסתברות היא 15/56 ≈ 26.8%"
            }
        ],
        tips: [
            "ציירו עץ הסתברויות בשאלות רב-שלביות",
            "שאלות 'לפחות אחד' – השתמשו במשלים: P(לפחות אחד) = 1 - P(אף אחד)",
            "בדיקה: סכום כל ההסתברויות בדגימה אחת חייב להיות 1",
            "הבדיקו: האם הדגימה עם החזרה או ללא החזרה? זה משנה את החישוב!"
        ]
    },
    {
        id: "geometry",
        title: "גאומטריה",
        subtitle: "משפטים, שטחים ומשולשים דומים",
        icon: "ג",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "נחזור על משפטי המפתח בגאומטריה: פיתגורס, דמיון משולשים, חוג ומשפטי זוויות. נחשב שטחים ואורכים.",
        formulas: [
            {
                title: "משפט פיתגורס",
                latex: "a^2 + b^2 = c^2",
                explanation: "במשולש ישר זווית: סכום ריבועי הניצבים = ריבוע היתר"
            },
            {
                title: "שטח משולש",
                latex: "S = \\frac{1}{2} \\cdot a \\cdot h_a = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C",
                explanation: "שטח = חצי בסיס כפול גובה, או חצי מכפלת שני צלעות בסינוס הזווית ביניהן"
            },
            {
                title: "שטח עיגול ואורך היקף",
                latex: "S = \\pi r^2 \\qquad L = 2\\pi r",
                explanation: "r = רדיוס, π ≈ 3.14159"
            },
            {
                title: "שטח קשת ואורך קשת",
                latex: "S_{sector} = \\frac{\\alpha}{360} \\cdot \\pi r^2 \\qquad l_{arc} = \\frac{\\alpha}{360} \\cdot 2\\pi r",
                explanation: "α = זווית מרכזית בדרגות"
            },
            {
                title: "יחסי דמיון משולשים",
                latex: "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k \\quad \\Rightarrow \\quad \\frac{S_1}{S_2} = k^2",
                explanation: "אם יחס הדמיון הוא k, יחס השטחים הוא k²"
            },
            {
                title: "קו אמצעי במשולש",
                latex: "MN = \\frac{1}{2} BC \\quad \\text{(M midpoint of AB, N midpoint of AC)}",
                explanation: "קו המחבר אמצעי שני צלעות מקביל לצלע השלישית ושווה למחציתה"
            }
        ],
        examples: [
            {
                problem: "במשולש שווה-שוקיים ABC: AB = AC = 10 ס\"מ, BC = 12 ס\"מ. מצאו את הגובה מ-A ל-BC ואת שטח המשולש.",
                steps: [
                    "הגובה מ-A חוצה את BC לשני חצאים: BD = 6 ס\"מ",
                    "לפי פיתגורס במשולש ABD: AD² + BD² = AB²",
                    "AD² + 36 = 100",
                    "AD² = 64 → AD = 8 ס\"מ",
                    "שטח = (1/2)·BC·AD = (1/2)·12·8 = 48 ס\"מ²"
                ],
                answer: "הגובה הוא 8 ס\"מ, השטח 48 ס\"מ²"
            },
            {
                problem: "שני משולשים דומים. בגדול: צלע = 15, בקטן: הצלע המתאימה = 9. שטח הגדול הוא 75 ס\"מ². מצאו את שטח הקטן.",
                steps: [
                    "יחס הדמיון: k = 9/15 = 3/5",
                    "יחס שטחים: k² = (3/5)² = 9/25",
                    "שטח קטן = 75 · (9/25) = 675/25 = 27 ס\"מ²"
                ],
                answer: "שטח המשולש הקטן הוא 27 ס\"מ²"
            }
        ],
        tips: [
            "בכל שאלה בגאומטריה – ציירו תרשים ורשמו על כל הגדלים הידועים",
            "משולשים דומים: בדקו שלושה תנאים – Z.Z.Z, צ.ז.צ, צ.צ.צ",
            "משפט הזווית המרכזית: זווית מרכזית = פי שתיים מהזווית ההיקפית על אותה קשת",
            "חישוב שטח עם sinC שימושי כאשר לא ידוע הגובה ישירות"
        ]
    },
    {
        id: "trigonometry",
        title: "טריגונומטריה",
        subtitle: "משפט הסינוסים, קוסינוסים וחישוב צלעות",
        icon: "ט",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "טריגונומטריה עוסקת ביחסים בין זוויות ואורכי צלעות במשולשים. נלמד משפט הסינוסים, משפט הקוסינוסים וחישוב שטח.",
        formulas: [
            {
                title: "יחסים בסיסיים (משולש ישר זווית)",
                latex: "\\sin\\theta = \\frac{opp}{hyp} \\quad \\cos\\theta = \\frac{adj}{hyp} \\quad \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
                explanation: "SOH-CAH-TOA: sin = ניצב נגדי / יתר, cos = ניצב סמוך / יתר, tan = sin/cos"
            },
            {
                title: "זוויות מיוחדות",
                latex: "\\begin{array}{c|ccc} \\theta & 30^\\circ & 45^\\circ & 60^\\circ \\\\ \\hline \\sin & \\frac{1}{2} & \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{3}}{2} \\\\ \\cos & \\frac{\\sqrt{3}}{2} & \\frac{\\sqrt{2}}{2} & \\frac{1}{2} \\\\ \\tan & \\frac{1}{\\sqrt{3}} & 1 & \\sqrt{3} \\end{array}",
                explanation: "ערכים אלה חייבים לידע בעל פה!"
            },
            {
                title: "משפט הסינוסים",
                latex: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
                explanation: "a,b,c צלעות; A,B,C זוויות מולן; R רדיוס עיגול חוסם"
            },
            {
                title: "משפט הקוסינוסים",
                latex: "a^2 = b^2 + c^2 - 2bc\\cos A",
                explanation: "מרחיב את פיתגורס לכל משולש – שימושי כשידועות שתי צלעות וביניהן זווית"
            },
            {
                title: "שטח משולש עם סינוס",
                latex: "S = \\frac{1}{2}ab\\sin C",
                explanation: "שימושי כאשר ידועות שתי צלעות והזווית הכלואה ביניהן"
            }
        ],
        examples: [
            {
                problem: "במשולש ABC: A = 30°, B = 45°, a = 10. מצאו את b.",
                steps: [
                    "לפי משפט הסינוסים: a/sin A = b/sin B",
                    "10/sin(30°) = b/sin(45°)",
                    "10/(1/2) = b/(√2/2)",
                    "20 = b/(√2/2)",
                    "b = 20 · (√2/2) = 10√2"
                ],
                answer: "b = 10√2 ≈ 14.14"
            },
            {
                problem: "במשולש: b = 7, c = 5, A = 60°. מצאו את a.",
                steps: [
                    "לפי משפט הקוסינוסים: a² = b² + c² - 2bc·cos A",
                    "a² = 49 + 25 - 2·7·5·cos(60°)",
                    "a² = 74 - 70·(1/2)",
                    "a² = 74 - 35 = 39",
                    "a = √39 ≈ 6.24"
                ],
                answer: "a = √39 ≈ 6.24"
            },
            {
                problem: "במשולש: a = 8, b = 6, C = 150°. חשבו את שטח המשולש.",
                steps: [
                    "S = (1/2)·a·b·sin C",
                    "S = (1/2)·8·6·sin(150°)",
                    "sin(150°) = sin(180° - 30°) = sin(30°) = 1/2",
                    "S = (1/2)·8·6·(1/2) = 12"
                ],
                answer: "שטח המשולש הוא 12 יחידות²"
            }
        ],
        tips: [
            "משפט הסינוסים – שימוש: ידועה צלע וזווית מולה + עוד גודל",
            "משפט הקוסינוסים – שימוש: ידועות שלוש צלעות, או שתי צלעות + זווית ביניהן",
            "sin(180°-α) = sin(α), cos(180°-α) = -cos(α) – שימושי לזוויות קהות",
            "בשאלת SSA (שתי צלעות וזווית שאינה ביניהן) עשויות להיות שתי תשובות!"
        ]
    },
    {
        id: "trig-functions",
        title: "פונקציות טריגונומטריות",
        subtitle: "סינוס, קוסינוס וטנגנס כפונקציות",
        icon: "פ",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "נלמד את פונקציות sin, cos, tan כפונקציות ממשיות, מחזוריותן, גרפיהן ושינויים בגרף.",
        formulas: [
            {
                title: "הזהות הפיתגוראית",
                latex: "\\sin^2 x + \\cos^2 x = 1",
                explanation: "תקפה לכל x – הזהות החשובה ביותר!"
            },
            {
                title: "נוסחאות כפל זווית",
                latex: "\\sin(2x) = 2\\sin x \\cos x \\qquad \\cos(2x) = \\cos^2 x - \\sin^2 x",
                explanation: "שימושיות לפישוט ביטויים"
            },
            {
                title: "נוסחאות חיבור זוויות",
                latex: "\\sin(x \\pm y) = \\sin x \\cos y \\pm \\cos x \\sin y",
                explanation: ""
            },
            {
                title: "הפונקציה הכללית: sin",
                latex: "f(x) = A \\sin(Bx + C) + D",
                explanation: "A = משרעת, T = 2π/B = מחזור, C = היסט פאזה, D = היסט אנכי"
            },
            {
                title: "ערכים בגרף עיגול היחידה",
                latex: "\\sin(\\pi - x) = \\sin x \\quad \\cos(\\pi - x) = -\\cos x \\quad \\sin(-x) = -\\sin x",
                explanation: "סימטריות חשובות של פונקציות הטריג"
            },
            {
                title: "פתרון משוואות טריגונומטריות",
                latex: "\\sin x = a \\Rightarrow x = \\arcsin(a) + 2\\pi k \\;\\;\\text{or}\\;\\; x = \\pi - \\arcsin(a) + 2\\pi k",
                explanation: "k מספר שלם (פתרון כללי לכל k ∈ ℤ)"
            }
        ],
        examples: [
            {
                problem: "הפונקציה f(x) = 3sin(2x - π/6) + 1. מצאו: משרעת, מחזור, היסט פאזה, ערך מקסימלי ומינימלי.",
                steps: [
                    "משרעת A = 3",
                    "B = 2 → מחזור T = 2π/B = 2π/2 = π",
                    "היסט פאזה: 2x - π/6 = 0 → x = π/12",
                    "ערך מקסימלי: D + A = 1 + 3 = 4",
                    "ערך מינימלי: D - A = 1 - 3 = -2"
                ],
                answer: "משרעת = 3, מחזור = π, הגרף מוזז ימינה π/12, מקסימום = 4, מינימום = -2"
            },
            {
                problem: "פשטו: sin²x + cos²x + tan²x · cos²x",
                steps: [
                    "sin²x + cos²x = 1 (הזהות הפיתגוראית)",
                    "tan²x · cos²x = (sin²x/cos²x) · cos²x = sin²x",
                    "הביטוי = 1 + sin²x"
                ],
                answer: "הביטוי שווה ל-1 + sin²x"
            },
            {
                problem: "פתרו: 2sin(x) = √3 ב-[0, 2π]",
                steps: [
                    "sin(x) = √3/2",
                    "הזווית הבסיסית: arcsin(√3/2) = π/3 = 60°",
                    "פתרונות ב-[0, 2π]: x = π/3 או x = π - π/3 = 2π/3"
                ],
                answer: "x = π/3 (=60°) או x = 2π/3 (=120°)"
            }
        ],
        tips: [
            "הזהות sin²x + cos²x = 1 היא הכלי החשוב ביותר – אל תשכחוה!",
            "לפני שמציירים גרף, זהו: A (משרעת), T=2π/B (מחזור), C/B (היסט), D (הזזה אנכית)",
            "sin הפונקציה האי-זוגית: sin(-x) = -sin(x). cos הפונקציה הזוגית: cos(-x) = cos(x)",
            "sin ו-cos מחזוריים עם מחזור 2π; tan מחזורי עם מחזור π"
        ]
    },
    {
        id: "root-functions",
        title: "פונקציות שורש",
        subtitle: "שורשים, תחומים וטרנספורמציות",
        icon: "ש",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "פונקציות שורש הן פונקציות מהצורה f(x) = √(g(x)). נלמד תחום, טווח, גרף ופתרון משוואות.",
        formulas: [
            {
                title: "פונקציית שורש בסיסית",
                latex: "f(x) = \\sqrt{x} \\quad x \\geq 0 \\quad y \\geq 0",
                explanation: "תחום: x ≥ 0, טווח: y ≥ 0. השורש מוגדר רק לביטויים אי-שליליים"
            },
            {
                title: "כלל תחום (תנאי הגדרה)",
                latex: "f(x) = \\sqrt{g(x)} \\Rightarrow g(x) \\geq 0",
                explanation: "חייבים לפתור g(x) ≥ 0 כדי למצוא את תחום הפונקציה"
            },
            {
                title: "גרף כללי",
                latex: "f(x) = a\\sqrt{b(x-h)} + k",
                explanation: "h = היסט אופקי, k = היסט אנכי, a = קנה מידה ואורינטציה"
            },
            {
                title: "פתרון משוואות שורש",
                latex: "\\sqrt{f(x)} = g(x) \\Rightarrow f(x) = [g(x)]^2 \\quad (g(x) \\geq 0)",
                explanation: "בעת ריבוע חייב לבדוק שהצד הימני אינו שלילי! תמיד בדקו פתרונות בנוסחה המקורית."
            },
            {
                title: "גזירת פונקציית שורש",
                latex: "(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}",
                explanation: "כלל השרשרת עם גזירת שורש"
            }
        ],
        examples: [
            {
                problem: "מצאו את תחום הפונקציה: f(x) = √(x² - 5x + 6)",
                steps: [
                    "תנאי: x² - 5x + 6 ≥ 0",
                    "שורשי הפרבולה: x² - 5x + 6 = 0 → (x-2)(x-3) = 0",
                    "שורשים: x = 2 ו-x = 3",
                    "הפרבולה פותחת כלפי מעלה → x² - 5x + 6 ≥ 0 עבור x ≤ 2 או x ≥ 3"
                ],
                answer: "התחום: x ≤ 2 או x ≥ 3, כלומר (-∞,2]∪[3,∞)"
            },
            {
                problem: "פתרו: √(2x + 3) = x - 1",
                steps: [
                    "תנאי הכרחי: x - 1 ≥ 0 → x ≥ 1",
                    "נרבע את שני האגפים: 2x + 3 = (x-1)²",
                    "2x + 3 = x² - 2x + 1",
                    "0 = x² - 4x - 2",
                    "x = (4 ± √(16+8))/2 = (4 ± √24)/2 = 2 ± √6",
                    "x₁ = 2 + √6 ≈ 4.45 (עומד בתנאי x ≥ 1 – מתאים)",
                    "x₂ = 2 - √6 ≈ -0.45 (אינו עומד בתנאי x ≥ 1 – נפסל)"
                ],
                answer: "x = 2 + √6"
            },
            {
                problem: "מצאו את נקודת המינימום של f(x) = √(x² - 4x + 8)",
                steps: [
                    "f(x) = √(x² - 4x + 8) = √((x-2)² + 4)",
                    "f מינימלית כאשר הביטוי תחת השורש מינימלי",
                    "(x-2)² ≥ 0, ולכן מינימום כאשר x = 2",
                    "f(2) = √(0 + 4) = √4 = 2"
                ],
                answer: "נקודת המינימום: (2, 2)"
            }
        ],
        tips: [
            "בדיקת תחום: תמיד פתרו g(x) ≥ 0 לפני כל עבודה עם פונקציית שורש",
            "בפתרון משוואות שורש: לאחר ריבוע, תמיד בדקו את הפתרונות בנוסחה המקורית!",
            "גרף f(x) = √x עולה ומוגדר מ-0, ו-f(0) = 0",
            "f(x) = √(x - h) + k: הזזה ימינה b-h ומעלה b-k ביחס לפונקציה הבסיסית"
        ]
    },
    {
        id: "optimization",
        title: "בעיות קיצון",
        subtitle: "נקודות מקסימום ומינימום עם נגזרות",
        icon: "א",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "בעיות קיצון מוצאות את הערכים המקסימליים והמינימליים של פונקציות. נשתמש בנגזרת הראשונה והשנייה.",
        formulas: [
            {
                title: "תנאי הכרחי לקיצון",
                latex: "f'(x_0) = 0 \\quad \\text{(נקודת קיצון חשודה)}",
                explanation: "נגזרת הפונקציה מתאפסת בנקודת קיצון"
            },
            {
                title: "מבחן הנגזרת השנייה",
                latex: "f''(x_0) > 0 \\Rightarrow \\min \\qquad f''(x_0) < 0 \\Rightarrow \\max",
                explanation: "f''(x₀) > 0: מינימום מקומי. f''(x₀) < 0: מקסימום מקומי. f''(x₀) = 0: לא חד משמעי"
            },
            {
                title: "קיצון על קטע סגור [a,b]",
                latex: "\\text{Check:}\\; f(a),\\; f(b),\\; f(x_0) \\;\\text{where}\\; f'(x_0)=0,\\; x_0\\in(a,b)",
                explanation: "השוו את ערכי הפונקציה בקצוות הקטע ובכל נקודה פנימית שבה f'=0"
            },
            {
                title: "נגזרות בסיסיות",
                latex: "(x^n)' = nx^{n-1} \\quad (\\sin x)' = \\cos x \\quad (\\cos x)' = -\\sin x \\quad (e^x)' = e^x",
                explanation: "חוקי גזירה בסיסיים הנדרשים בבגרות"
            },
            {
                title: "כלל השרשרת",
                latex: "[f(g(x))]' = f'(g(x)) \\cdot g'(x)",
                explanation: "גזירת פונקציה מורכבת"
            }
        ],
        examples: [
            {
                problem: "מצאו את נקודות הקיצון של f(x) = x³ - 6x² + 9x + 1 וסווגו אותן.",
                steps: [
                    "f'(x) = 3x² - 12x + 9",
                    "נפס נגזרת: 3x² - 12x + 9 = 0 → x² - 4x + 3 = 0",
                    "(x-1)(x-3) = 0 → x = 1 או x = 3",
                    "f''(x) = 6x - 12",
                    "f''(1) = 6(1) - 12 = -6 < 0 → מקסימום מקומי ב-x = 1",
                    "f''(3) = 6(3) - 12 = 6 > 0 → מינימום מקומי ב-x = 3",
                    "f(1) = 1 - 6 + 9 + 1 = 5",
                    "f(3) = 27 - 54 + 27 + 1 = 1"
                ],
                answer: "מקסימום מקומי: (1, 5), מינימום מקומי: (3, 1)"
            },
            {
                problem: "גינה מלבנית תגודר בחוט אורכו 60 מ'. אחת הצלעות נשענת על גדר קיים. מצאו את המימדים לשטח מקסימלי.",
                steps: [
                    "יש לנו 3 צלעות מחוט: אורך + 2 × רוחב = 60",
                    "נסמן רוחב = x, אז אורך = 60 - 2x",
                    "שטח: S(x) = x · (60 - 2x) = 60x - 2x²",
                    "S'(x) = 60 - 4x = 0 → x = 15",
                    "S''(x) = -4 < 0 → מקסימום (מאושר)",
                    "אורך = 60 - 2(15) = 30",
                    "שטח = 15 × 30 = 450 מ'²"
                ],
                answer: "רוחב = 15 מ', אורך = 30 מ', שטח מקסימלי = 450 מ'²"
            },
            {
                problem: "מצאו את הערך המינימלי של f(x) = x² - 4x + 7 על הקטע [0, 5].",
                steps: [
                    "f'(x) = 2x - 4 = 0 → x = 2",
                    "f(0) = 7, f(2) = 4 - 8 + 7 = 3, f(5) = 25 - 20 + 7 = 12",
                    "המינימום הוא הקטן ביותר מבין הערכים"
                ],
                answer: "הערך המינימלי הוא f(2) = 3 (נקודה פנימית)"
            }
        ],
        tips: [
            "שלב 1: גזרו → שלב 2: השוו ל-0 → שלב 3: בדקו עם הנגזרת השנייה",
            "בבעיות מילוליות: הגדירו משתנה, כתבו פונקציה, מצאו תחום, ואז גזרו",
            "על קטע סגור: תמיד בדקו גם את קצוות הקטע [a, b]",
            "אם f''(x₀) = 0 – עשו טבלת סימנים לנגזרת הראשונה לבדיקת אופי הנקודה"
        ]
    }
];
}),
"[project]/components/Navbar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/topics.ts [app-rsc] (ecmascript)");
;
;
;
function Navbar({ activeTopicId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 bg-black border-b border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2.5 shrink-0 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-xl",
                                    style: {
                                        fontFamily: "serif",
                                        fontStyle: "italic"
                                    },
                                    children: "∑"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-white text-sm md:text-base",
                                    children: "בגרות מתמטיקה 5 יח״ל"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-0.5 overflow-x-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/test",
                                    className: "text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1.5 bg-teal-500 text-white rounded-md hover:bg-teal-400 ml-1",
                                    children: "מבחן"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/topic/${topic.id}`,
                                        className: `text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: topic.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    }, topic.id, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-white/20 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 px-4 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/test",
                            className: "text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-400",
                            children: "מבחן"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/topic/${topic.id}`,
                                className: `text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: topic.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, topic.id, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/FormulaCard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/FormulaCard.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/FormulaCard.tsx <module evaluation>", "default");
}),
"[project]/components/FormulaCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/FormulaCard.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/FormulaCard.tsx", "default");
}),
"[project]/components/FormulaCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/FormulaCard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/FormulaCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/TipsBox.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TipsBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function TipsBox({ tips }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black rounded-xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 text-white text-xs font-bold shrink-0",
                        children: "טי"
                    }, void 0, false, {
                        fileName: "[project]/components/TipsBox.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-white text-lg",
                        children: "טיפים לבחינה"
                    }, void 0, false, {
                        fileName: "[project]/components/TipsBox.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TipsBox.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: tips.map((tip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-5 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5",
                                children: i + 1
                            }, void 0, false, {
                                fileName: "[project]/components/TipsBox.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-white/80 leading-relaxed",
                                children: tip
                            }, void 0, false, {
                                fileName: "[project]/components/TipsBox.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/TipsBox.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/TipsBox.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TipsBox.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/topic/sequences/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SequencesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FormulaCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TipsBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TipsBox.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/topics.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "סדרות – בגרות מתמטיקה 5 יח״ל",
    description: "נוסחאות סדרות חשבוניות והנדסיות, הכנסת אמצעיים, סכומים וטיפים לפתרון – שאלון 581."
};
const formulas = [
    {
        title: "איבר כללי – סדרה חשבונית",
        latex: "a_n = a_1 + (n-1) \\cdot d",
        explanation: "aₙ = האיבר ה-n, a₁ = האיבר הראשון, d = הפרש קבוע"
    },
    {
        title: "סכום n איברים – סדרה חשבונית",
        latex: "S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)",
        explanation: "סכום n האיברים הראשונים של סדרה חשבונית"
    },
    {
        title: "איבר כללי – סדרה גאומטרית",
        latex: "a_n = a_1 \\cdot q^{n-1}",
        explanation: "q = המנה (היחס בין איבר לקודמו). q ≠ 0, q ≠ 1"
    },
    {
        title: "סכום n איברים – סדרה גאומטרית",
        latex: "S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)",
        explanation: "סכום n האיברים הראשונים של סדרה גאומטרית"
    },
    {
        title: "סכום אינסופי – סדרה גאומטרית",
        latex: "S_\\infty = \\frac{a_1}{1 - q} \\quad (|q| < 1)",
        explanation: "סכום אינסופי קיים רק כאשר |q| < 1 (הטור מתכנס)"
    },
    {
        title: "הכנסת k אמצעיים חשבוניים",
        latex: "d = \\frac{b - a}{k + 1}",
        explanation: "הכנסת k איברים בין a ל-b בסדרה חשבונית – d הוא ההפרש החדש"
    },
    {
        title: "הכנסת k אמצעיים הנדסיים",
        latex: "q = \\left(\\frac{b}{a}\\right)^{\\frac{1}{k+1}}",
        explanation: "הכנסת k איברים בין a ל-b בסדרה גאומטרית – q היא המנה החדשה"
    }
];
const tips = [
    "זהה את סוג הסדרה לפני הכל – חשבונית (הפרש קבוע) או הנדסית (מנה קבועה)",
    "בסדרה חשבונית: חפש הפרשים קבועים; בהנדסית: חפש מנות קבועות (חלוקת איברים עוקבים)",
    "אם נתון S(n) – גזור a(n) לפי: a(n) = S(n) − S(n−1) לכל n > 1",
    "שים לב לסימן q: אם q < 0 – האיברים מתחלפים בסימן (חיובי/שלילי/חיובי...)",
    "טור אינסופי מתכנס רק אם |q| < 1 – אחרת אין סכום אינסופי"
];
const seqIndex = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].findIndex((t)=>t.id === "sequences");
const prevTopic = seqIndex > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"][seqIndex - 1] : null;
const nextTopic = seqIndex < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"][seqIndex + 1] : null;
function SequencesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                activeTopicId: "sequences"
            }, void 0, false, {
                fileName: "[project]/app/topic/sequences/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-black transition-colors",
                                children: "בית"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-900 font-medium",
                                children: "סדרות"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/topic/sequences/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/sequences/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-2xl font-black text-white shrink-0",
                                    children: "ס"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1",
                                            children: "שאלון 581"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight",
                                            children: "סדרות"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/70 font-medium",
                                            children: "סדרות חשבוניות וגאומטריות"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/topic/sequences/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 mt-4 leading-relaxed max-w-2xl text-sm",
                            children: "כל הנוסחאות לסדרות חשבוניות והנדסיות – איבר כללי, סכומים, הכנסת אמצעיים, טור אינסופי וטבלת השוואה מלאה."
                        }, void 0, false, {
                            fileName: "[project]/app/topic/sequences/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2.5 mt-5",
                            children: [
                                "7 נוסחאות",
                                "טבלת השוואה",
                                "נוסחאות עזר",
                                "5 טיפים"
                            ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium",
                                    children: stat
                                }, stat, false, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/topic/sequences/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/topic/sequences/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/sequences/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-10 space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-7 rounded-full bg-black shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "נוסחות מפתח"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "כל הנוסחאות החיוניות לסדרות חשבוניות והנדסיות"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: formulas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        title: f.title,
                                        latex: f.latex,
                                        explanation: f.explanation,
                                        index: i
                                    }, i, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-7 rounded-full bg-black shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "השוואה: חשבונית מול הנדסית"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "זהה את ההבדלים לפני שמתחילים לפתור"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-xl border border-slate-200 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    dir: "rtl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-black text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "גודל"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "סדרה חשבונית"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "סדרה הנדסית"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                {
                                                    label: "חוק הסדרה",
                                                    arith: "הפרש d קבוע: aₙ₊₁ − aₙ = d",
                                                    geo: "מנה q קבועה: aₙ₊₁ / aₙ = q",
                                                    stripe: false
                                                },
                                                {
                                                    label: "איבר כללי",
                                                    arith: "aₙ = a₁ + (n−1)·d",
                                                    geo: "aₙ = a₁·qⁿ⁻¹",
                                                    stripe: true
                                                },
                                                {
                                                    label: "סכום n איברים",
                                                    arith: "Sₙ = n/2·(a₁ + aₙ)",
                                                    geo: "Sₙ = a₁·(qⁿ−1)/(q−1)",
                                                    stripe: false
                                                },
                                                {
                                                    label: "אמצעי בין שכנים",
                                                    arith: "aₘ = (aₘ₋₁ + aₘ₊₁) / 2",
                                                    geo: "aₘ² = aₘ₋₁ · aₘ₊₁",
                                                    stripe: true
                                                },
                                                {
                                                    label: "הכנסת k אמצעיים",
                                                    arith: "d = (b − a) / (k + 1)",
                                                    geo: "q = (b/a)^(1/(k+1))",
                                                    stripe: false
                                                },
                                                {
                                                    label: "סכום אינסופי",
                                                    arith: "אין (הסדרה מתבדרת)",
                                                    geo: "S∞ = a₁/(1−q)  כאשר |q| < 1",
                                                    stripe: true
                                                }
                                            ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: row.stripe ? "bg-slate-50" : "bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 font-bold text-black",
                                                            children: row.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 font-mono text-slate-700",
                                                            children: row.arith
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 font-mono text-slate-700",
                                                            children: row.geo
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, row.label, true, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-7 rounded-full bg-black shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "נוסחאות עזר"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "הכנסת אמצעיים וגזירת איבר מסכום"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto rounded-xl border border-slate-200 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm",
                                            dir: "rtl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "bg-slate-800 text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2.5 text-right font-semibold",
                                                                colSpan: 3,
                                                                children: "הכנסת k אמצעיים בין a ל-b"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "bg-slate-700 text-white/80 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right",
                                                                    children: "סוג"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right",
                                                                    children: "נוסחה"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right",
                                                                    children: "דוגמה (k=2)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        {
                                                            type: "חשבוניים",
                                                            formula: "d = (b−a)/(k+1)",
                                                            ex: "בין 1 ל-7: d=2"
                                                        },
                                                        {
                                                            type: "הנדסיים",
                                                            formula: "q = (b/a)^(1/(k+1))",
                                                            ex: "בין 1 ל-8: q=2"
                                                        }
                                                    ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: i % 2 === 0 ? "bg-white" : "bg-slate-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2.5 font-bold text-black",
                                                                    children: r.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2.5 font-mono font-semibold text-black",
                                                                    children: r.formula
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2.5 text-slate-500 text-xs",
                                                                    children: r.ex
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto rounded-xl border border-slate-200 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm",
                                            dir: "rtl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "bg-slate-800 text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2.5 text-right font-semibold",
                                                                colSpan: 3,
                                                                children: "גזירת aₙ מתוך Sₙ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "bg-slate-700 text-white/80 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right",
                                                                    children: "מקרה"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right",
                                                                    children: "נוסחה"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 text-right",
                                                                    children: "הסבר"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        {
                                                            case: "n > 1",
                                                            formula: "aₙ = Sₙ − Sₙ₋₁",
                                                            note: "כלל כללי"
                                                        },
                                                        {
                                                            case: "n = 1",
                                                            formula: "a₁ = S₁",
                                                            note: "מקרה גבולי"
                                                        }
                                                    ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: i % 2 === 0 ? "bg-white" : "bg-slate-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2.5 font-bold text-black font-mono",
                                                                    children: r.case
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2.5 font-mono font-semibold text-black",
                                                                    children: r.formula
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2.5 text-slate-500 text-xs",
                                                                    children: r.note
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-xl border-2 border-black bg-black/5 px-5 py-4 flex items-center gap-4",
                                dir: "rtl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-black text-black shrink-0",
                                        children: "!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-black text-sm",
                                                children: "ערכי q שימושיים לזיהוי סדרה הנדסית"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-700 mt-1 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold",
                                                        children: "q = 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 17
                                                    }, this),
                                                    "  ·  ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold",
                                                        children: "q = 1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this),
                                                    "  ·  ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold",
                                                        children: "q = −1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    "  ·  ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold",
                                                        children: "q = √2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 17
                                                    }, this),
                                                    "  ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 text-xs",
                                                        children: [
                                                            "— אם |q| ",
                                                            "<",
                                                            " 1 הסכום האינסופי מתכנס"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-7 rounded-full bg-black shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "שלבי פתרון תקניים"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "עקבו אחרי הסדר הזה בכל שאלת סדרות"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                                children: [
                                    {
                                        num: 1,
                                        title: "זהו את הסוג",
                                        body: "חשבונית = הפרשים קבועים. הנדסית = מנות קבועות (חלקו איברים עוקבים)"
                                    },
                                    {
                                        num: 2,
                                        title: "כתבו a₁ ו-d/q",
                                        body: "חלצו את האיבר הראשון ואת ההפרש (d) או המנה (q) מהנתונים"
                                    },
                                    {
                                        num: 3,
                                        title: "בחרו נוסחה",
                                        body: "aₙ לחישוב איבר בודד. Sₙ לחישוב סכום. S∞ רק אם |q| < 1"
                                    },
                                    {
                                        num: 4,
                                        title: "הציבו נתונים",
                                        body: "הכניסו את a₁, d/q ו-n לנוסחה. בדקו שכל הנתונים נכונים לפני הצבה"
                                    },
                                    {
                                        num: 5,
                                        title: "פתרו משוואה",
                                        body: "בידדו את המשתנה הנדרש – לרוב n, a₁, d או q"
                                    },
                                    {
                                        num: 6,
                                        title: "בדקו תשובה",
                                        body: "הציבו חזרה בנוסחה המקורית. ודאו ש-n טבעי ושהתשובה הגיונית"
                                    }
                                ].map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0",
                                                        children: step.num
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-black text-sm",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 leading-relaxed pr-10",
                                                children: step.body
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/sequences/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.num, true, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TipsBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            tips: tips
                        }, void 0, false, {
                            fileName: "[project]/app/topic/sequences/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex justify-between items-center pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: prevTopic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/topic/${prevTopic.id}`,
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 hover:shadow-sm transition-all text-sm font-medium text-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-slate-400 mb-0.5",
                                                    children: "נושא קודם"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                prevTopic.icon,
                                                " ",
                                                prevTopic.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black",
                                    children: "← חזרה לדף הבית"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "px-3 py-2 rounded-lg text-xs text-black hover:bg-slate-100 transition-all font-medium",
                                children: "כל הנושאים"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: nextTopic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/topic/${nextTopic.id}`,
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 hover:shadow-sm transition-all text-sm font-medium text-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-slate-400 mb-0.5",
                                                    children: "נושא הבא"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this),
                                                nextTopic.icon,
                                                " ",
                                                nextTopic.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "◀"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/sequences/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black",
                                    children: "← חזרה לדף הבית"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/sequences/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topic/sequences/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black border-t-2 border-black mt-8",
                dir: "rtl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-xl",
                                        style: {
                                            fontFamily: "serif",
                                            fontStyle: "italic"
                                        },
                                        children: "∑"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white text-sm",
                                        children: "בגרות מתמטיקה 5 יח״ל"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/sequences/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm",
                                children: "כיתה י״א – בהצלחה בבחינה!"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/sequences/page.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/sequences/page.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/topic/sequences/page.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/sequences/page.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/topic/sequences/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/topic/sequences/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/topic/sequences/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e25c2ec5._.js.map