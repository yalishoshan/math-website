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
            },
            {
                title: "גובה על היתר – ממוצע הנדסי",
                latex: "h^2 = p \\cdot q",
                explanation: "במשולש ישר זווית, הגובה אל היתר (h) הוא הממוצע ההנדסי של שני היטלי הניצבים על היתר (p, q). כלומר h = √(p·q)"
            },
            {
                title: "ניצב – ממוצע הנדסי של היתר והיטלו",
                latex: "a^2 = c \\cdot p \\qquad b^2 = c \\cdot q",
                explanation: "כל ניצב הוא הממוצע ההנדסי של היתר ושל היטל אותו ניצב על היתר. a² = c·p ו-b² = c·q"
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
        description: "בעיות קיצון מוצאות את הערכים המקסימליים והמינימליים של פונקציות. נשתמש בנגזרת הראשונה והשנייה, כולל בעיות מילוליות הנדסיות.",
        formulas: [
            {
                title: "תנאי הכרחי לקיצון",
                latex: "f'(x_0) = 0 \\quad \\text{(critical point)}",
                explanation: "נגזרת הפונקציה מתאפסת בנקודת קיצון חשודה"
            },
            {
                title: "מבחן הנגזרת השנייה",
                latex: "f''(x_0) > 0 \\Rightarrow \\min \\qquad f''(x_0) < 0 \\Rightarrow \\max",
                explanation: "f''(x₀) > 0: מינימום מקומי. f''(x₀) < 0: מקסימום מקומי. f''(x₀) = 0: בדוק בטבלת סימנים"
            },
            {
                title: "קיצון על קטע סגור [a,b]",
                latex: "\\text{Check:}\\; f(a),\\; f(b),\\; f(x_0) \\;\\text{where}\\; f'(x_0)=0,\\; x_0\\in(a,b)",
                explanation: "השוו ערכי הפונקציה בקצוות הקטע ובכל נקודה פנימית שבה f'=0"
            },
            {
                title: "שטחי צורות מישוריות",
                latex: "S_{rect} = ab \\quad S_{\\triangle} = \\tfrac{1}{2}bh \\quad S_{circle} = \\pi r^2 \\quad S_{trap} = \\tfrac{a+b}{2}\\cdot h",
                explanation: "מלבן, משולש, עיגול, טרפז – נוסחאות שטח הכרחיות לבעיות קיצון הנדסיות"
            },
            {
                title: "משולש שווה-צלעות, מעוין וגזרה",
                latex: "S_{eq} = \\frac{\\sqrt{3}}{4}a^2 \\quad S_{rhombus} = \\frac{d_1 d_2}{2} \\quad S_{sector} = \\frac{1}{2}\\alpha r^2",
                explanation: "משולש שווה-צלעות (a = צלע), מעוין (d₁,d₂ = אלכסונות), גזרה (α ברדיאנים)"
            },
            {
                title: "נפחים – גליל, חרוט, כדור, פירמידה",
                latex: "V_{cyl} = \\pi r^2 h \\quad V_{cone} = \\tfrac{1}{3}\\pi r^2 h \\quad V_{sphere} = \\tfrac{4}{3}\\pi r^3 \\quad V_{pyr} = \\tfrac{1}{3}Bh",
                explanation: "גליל, חרוט, כדור, פירמידה (B = שטח בסיס) – נוסחאות נפח לבעיות קיצון במרחב"
            },
            {
                title: "שטחי פנים – גליל וחרוט",
                latex: "SA_{cyl} = 2\\pi r^2 + 2\\pi rh \\quad SA_{cone} = \\pi r^2 + \\pi rl \\quad l = \\sqrt{r^2+h^2}",
                explanation: "שטח פנים מלא של גליל וחרוט. l = קו יוצר של חרוט"
            },
            {
                title: "אי-שוויון AM-GM",
                latex: "\\frac{a+b}{2} \\geq \\sqrt{ab} \\quad (a,b>0)",
                explanation: "שוויון כאשר a = b. סכום קבוע S → מכפלה מקסימלית = (S/2)² מתקיים כשa=b=S/2. מכפלה קבועה P → סכום מינימלי = 2√P מתקיים כשa=b=√P"
            },
            {
                title: "AM-GM – שלושה מספרים",
                latex: "\\frac{a+b+c}{3} \\geq \\sqrt[3]{abc} \\quad (a,b,c>0)",
                explanation: "שוויון כאשר a = b = c. סכום קבוע S → מכפלה מקסימלית כאשר a = b = c = S/3"
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
                    "f''(1) = -6 < 0 → מקסימום מקומי ב-x = 1",
                    "f''(3) = 6 > 0 → מינימום מקומי ב-x = 3",
                    "f(1) = 5, f(3) = 1"
                ],
                answer: "מקסימום מקומי: (1, 5), מינימום מקומי: (3, 1)"
            },
            {
                problem: "גינה מלבנית תגודר בחוט אורכו 60 מ'. אחת הצלעות נשענת על גדר קיים. מצאו את המימדים לשטח מקסימלי.",
                steps: [
                    "יש לגדר 3 צלעות: 2x + y = 60, כך ש-y = 60 − 2x",
                    "שטח: S(x) = x·y = x(60 − 2x) = 60x − 2x²",
                    "S'(x) = 60 − 4x = 0 → x = 15",
                    "S''(x) = −4 < 0 → מקסימום מאושר",
                    "y = 60 − 30 = 30, שטח = 15 · 30 = 450 מ'²"
                ],
                answer: "רוחב = 15 מ', אורך = 30 מ', שטח מקסימלי = 450 מ'²"
            },
            {
                problem: "מגיליון קרטון ריבועי בצלע 12 ס\"מ גוזרים ריבועים שווים מהפינות ומקפלים לקופסה פתוחה. מצאו את גודל הריבוע לנפח מקסימלי.",
                steps: [
                    "נחתוך ריבוע בצלע x מכל פינה; ממדי הבסיס: (12−2x)×(12−2x), גובה: x",
                    "V(x) = x(12−2x)², תחום: 0 < x < 6",
                    "V'(x) = (12−2x)² + x·2(12−2x)·(−2) = (12−2x)[(12−2x) − 4x] = (12−2x)(12−6x)",
                    "V'(x) = 0: x = 6 (גבול תחום, V=0) או x = 2",
                    "V(2) = 2·(12−4)² = 2·64 = 128 ס\"מ³",
                    "V''(2) < 0 → מקסימום מאושר"
                ],
                answer: "x = 2 ס\"מ, נפח מקסימלי = 128 ס\"מ³"
            },
            {
                problem: "מצאו את הערך המינימלי של f(x) = x² - 4x + 7 על הקטע [0, 5].",
                steps: [
                    "f'(x) = 2x - 4 = 0 → x = 2",
                    "f(0) = 7, f(2) = 3, f(5) = 12",
                    "המינימום הוא הקטן ביותר מבין הערכים"
                ],
                answer: "הערך המינימלי הוא f(2) = 3"
            }
        ],
        tips: [
            "שלב 1: הגדר משתנה ← שלב 2: כתוב פונקציית מטרה ← שלב 3: בטא הכל במשתנה אחד ← שלב 4: גזור ואפס",
            "בבעיות גידור: שים לב לכמה צדדים גודרים. שלושה צדדים: 2x + y = L → y = L − 2x",
            "קופסה פתוחה מגיליון L×L: V = x(L−2x)², תחום: 0 < x < L/2",
            "AM-GM: סכום קבוע S → מכפלה מקסימלית = (S/2)² כשa = b = S/2",
            "AM-GM: מכפלה קבועה P → סכום מינימלי = 2√P כשa = b = √P",
            "על קטע סגור: תמיד בדוק גם את קצוות הקטע [a, b]",
            "אם f''(x₀) = 0 – עשה טבלת סימנים לנגזרת הראשונה לבדיקת אופי הנקודה"
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
"[project]/app/topic/trig-functions/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrigFunctionsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TipsBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TipsBox.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FormulaCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/topics.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "פונקציות טריגונומטריות – בגרות מתמטיקה 5 יח״ל",
    description: "פונקציות טריגונומטריות בשאלון 581 – תכונות גרפים, נגזרות, אינטגרלים, חקירת פונקציה ושטחים."
};
/* ─── KaTeX Formula Cards ─────────────────────────────────── */ const keyFormulas = [
    {
        title: "(sin x)′",
        latex: "(\\sin x)' = \\cos x",
        explanation: "נגזרת סינוס"
    },
    {
        title: "(cos x)′",
        latex: "(\\cos x)' = -\\sin x",
        explanation: "נגזרת קוסינוס"
    },
    {
        title: "(sin u)′",
        latex: "(\\sin u)' = \\cos u \\cdot u'",
        explanation: "כלל שרשרת – u = u(x)"
    },
    {
        title: "(cos u)′",
        latex: "(\\cos u)' = -\\sin u \\cdot u'",
        explanation: "כלל שרשרת – u = u(x)"
    },
    {
        title: "∫sin(x)dx",
        latex: "\\int \\sin x\\, dx = -\\cos x + C",
        explanation: "אינטגרל בסיסי של סינוס"
    },
    {
        title: "∫cos(x)dx",
        latex: "\\int \\cos x\\, dx = \\sin x + C",
        explanation: "אינטגרל בסיסי של קוסינוס"
    }
];
/* ─── Basic Function Properties ─────────────────────────── */ const funcProps = [
    {
        name: "f(x) = sin(x)",
        domain: "ℝ (כל הממשיים)",
        range: "[−1, 1]",
        period: "2π (360°)",
        parity: "אי-זוגית: sin(−x) = −sin(x)",
        zeros: "x = πk",
        max: "x = π/2 + 2πk  →  y = 1",
        min: "x = 3π/2 + 2πk  →  y = −1",
        asymptotes: "אין"
    },
    {
        name: "f(x) = cos(x)",
        domain: "ℝ (כל הממשיים)",
        range: "[−1, 1]",
        period: "2π (360°)",
        parity: "זוגית: cos(−x) = cos(x)",
        zeros: "x = π/2 + πk",
        max: "x = 2πk  →  y = 1",
        min: "x = π + 2πk  →  y = −1",
        asymptotes: "אין"
    },
    {
        name: "f(x) = tan(x)",
        domain: "ℝ, x ≠ π/2 + πk",
        range: "ℝ (כל הממשיים)",
        period: "π (180°)",
        parity: "אי-זוגית: tan(−x) = −tan(x)",
        zeros: "x = πk",
        max: "—",
        min: "—",
        asymptotes: "אנכיות: x = π/2 + πk"
    }
];
/* ─── Shifted Function ───────────────────────────────────── */ const shiftedParams = [
    {
        param: "A",
        name: "משרעת",
        effect: "גובה הגל. y_max = D + |A|, y_min = D − |A|",
        note: "A < 0 → הגרף מהופך"
    },
    {
        param: "B",
        name: "תדר",
        effect: "מחזור: T = 2π / |B| (בדרגות: 360° / |B|)",
        note: "B < 0 → הפוך סימן"
    },
    {
        param: "C",
        name: "הזזה אופקית",
        effect: "נקודת התחלה: Bx + C = 0  →  x = −C/B",
        note: "C > 0 → שמאלה"
    },
    {
        param: "D",
        name: "הזזה אנכית",
        effect: "ציר הסימטריה: y = D",
        note: ""
    }
];
const shiftedFormulas = [
    {
        name: "מחזור",
        formula: "T = 2π / |B|"
    },
    {
        name: "y מקסימלי",
        formula: "y_max = D + |A|"
    },
    {
        name: "y מינימלי",
        formula: "y_min = D – |A|"
    },
    {
        name: "הזזה אופקית",
        formula: "x_start = –C / B"
    }
];
/* ─── Domain Rules ───────────────────────────────────────── */ const domainRules = [
    {
        type: "sin(g(x)) או cos(g(x))",
        condition: "כל הממשיים – אין הגבלה",
        note: ""
    },
    {
        type: "tan(g(x))",
        condition: "g(x) ≠ π/2 + πk",
        note: "כלומר g(x) ≠ 90° + 180°k"
    },
    {
        type: "1 / sin(g(x))",
        condition: "sin(g(x)) ≠ 0  ⟹  g(x) ≠ πk",
        note: ""
    },
    {
        type: "1 / cos(g(x))",
        condition: "cos(g(x)) ≠ 0  ⟹  g(x) ≠ π/2 + πk",
        note: ""
    },
    {
        type: "√(sin(x))",
        condition: "sin(x) ≥ 0",
        note: "2πk ≤ x ≤ π + 2πk"
    }
];
/* ─── Derivatives ────────────────────────────────────────── */ const basicDerivatives = [
    {
        name: "sin(x)",
        formula: "cos(x)"
    },
    {
        name: "cos(x)",
        formula: "−sin(x)"
    },
    {
        name: "tan(x)",
        formula: "1 / cos²(x)"
    },
    {
        name: "cot(x)",
        formula: "−1 / sin²(x)"
    }
];
const chainDerivatives = [
    {
        name: "(sin u(x))′",
        formula: "cos(u(x)) · u′(x)"
    },
    {
        name: "(cos u(x))′",
        formula: "−sin(u(x)) · u′(x)"
    },
    {
        name: "(tan u(x))′",
        formula: "u′(x) / cos²(u(x))"
    }
];
const derivativeExamples = [
    {
        name: "sin(2x)",
        formula: "2cos(2x)"
    },
    {
        name: "cos(3x)",
        formula: "−3sin(3x)"
    },
    {
        name: "sin²(x)",
        formula: "2sin(x)·cos(x) = sin(2x)"
    },
    {
        name: "cos²(x)",
        formula: "−2cos(x)·sin(x) = −sin(2x)"
    },
    {
        name: "sin²(x) + cos²(x)",
        formula: "0  (קבוע!)"
    },
    {
        name: "tan(x)",
        formula: "1/cos²(x) = 1 + tan²(x)"
    }
];
/* ─── Integrals ──────────────────────────────────────────── */ const basicIntegrals = [
    {
        name: "∫ sin(x) dx",
        formula: "−cos(x) + C"
    },
    {
        name: "∫ cos(x) dx",
        formula: "sin(x) + C"
    },
    {
        name: "∫ 1/cos²(x) dx",
        formula: "tan(x) + C"
    },
    {
        name: "∫ 1/sin²(x) dx",
        formula: "−cot(x) + C"
    }
];
const compositeIntegrals = [
    {
        name: "∫ sin(ax + b) dx",
        formula: "−(1/a)·cos(ax + b) + C"
    },
    {
        name: "∫ cos(ax + b) dx",
        formula: "(1/a)·sin(ax + b) + C"
    },
    {
        name: "∫ sin(u(x))·u′(x) dx",
        formula: "−cos(u(x)) + C"
    },
    {
        name: "∫ cos(u(x))·u′(x) dx",
        formula: "sin(u(x)) + C"
    }
];
const integrationIdentities = [
    {
        name: "sin²(x)",
        formula: "= (1 − cos(2x)) / 2",
        note: "לאינטגרציה של sin²"
    },
    {
        name: "cos²(x)",
        formula: "= (1 + cos(2x)) / 2",
        note: "לאינטגרציה של cos²"
    },
    {
        name: "sin(x)·cos(x)",
        formula: "= sin(2x) / 2",
        note: "לאינטגרציה של מכפלה"
    }
];
/* ─── Area Formulas ──────────────────────────────────────── */ const areaFormulas = [
    {
        name: "מעל ציר x",
        formula: "S = ∫[a→b] f(x) dx",
        note: "f(x) ≥ 0 בכל הקטע"
    },
    {
        name: "מתחת לציר x",
        formula: "S = −∫[a→b] f(x) dx = |∫f dx|",
        note: "f(x) ≤ 0 – תמיד ערך מוחלט!"
    },
    {
        name: "שטח כללי",
        formula: "S = ∫[a→b] |f(x)| dx",
        note: "חלק לתת-קטעים לפי סימן"
    },
    {
        name: "בין שתי פונקציות",
        formula: "S = ∫[a→b] |f(x) − g(x)| dx",
        note: "או (f−g)dx אם f ≥ g"
    }
];
const commonIntegralResults = [
    {
        integral: "∫[0 → π] sin(x) dx",
        result: "2"
    },
    {
        integral: "∫[0 → π/2] cos(x) dx",
        result: "1"
    },
    {
        integral: "∫[0 → 2π] sin(x) dx",
        result: "0  (שטחים מבטלים זה את זה)"
    }
];
/* ─── f vs f′ ────────────────────────────────────────────── */ const fVsfPrime = [
    {
        rule: "f עולה  ⟺  f′ > 0"
    },
    {
        rule: "f יורדת  ⟺  f′ < 0"
    },
    {
        rule: "f קבועה  ⟺  f′ = 0"
    },
    {
        rule: "f במינימום מקומי ⟹ f′ = 0 ומחליפה מ(−) ל(+)"
    },
    {
        rule: "f במקסימום מקומי ⟹ f′ = 0 ומחליפה מ(+) ל(−)"
    },
    {
        rule: "f′ עולה  ⟺  f″ > 0  (קמורה)"
    },
    {
        rule: "f′ יורדת  ⟺  f″ < 0  (קעורה)"
    }
];
/* ─── Second Derivative Test ─────────────────────────────── */ const secondDerivTest = [
    {
        condition: "f′(x₀) = 0 ו-f″(x₀) > 0",
        conclusion: "מינימום מקומי ב-x₀"
    },
    {
        condition: "f′(x₀) = 0 ו-f″(x₀) < 0",
        conclusion: "מקסימום מקומי ב-x₀"
    },
    {
        condition: "f′(x₀) = 0 ו-f″(x₀) = 0",
        conclusion: "אין מסקנה – נדרשת טבלת סימנים"
    }
];
/* ─── Useful Identities ──────────────────────────────────── */ const usefulIdentities = [
    {
        name: "sin²+cos²=1",
        formula: "sin²(x) = 1 − cos²(x)",
        note: "להחליף sin² בcosinus"
    },
    {
        name: "sin(2x)",
        formula: "= 2·sin(x)·cos(x)",
        note: "לפשט מכפלת sin·cos"
    },
    {
        name: "cos(2x) ← sin",
        formula: "cos(2x) = 1 − 2·sin²(x)",
        note: "להמיר sin² לcosinus"
    },
    {
        name: "cos(2x) ← cos",
        formula: "cos(2x) = 2·cos²(x) − 1",
        note: "להמיר cos² לcosinus"
    },
    {
        name: "sin²(x) ←",
        formula: "sin²(x) = (1 − cos(2x)) / 2",
        note: "לאינטגרציה"
    },
    {
        name: "cos²(x) ←",
        formula: "cos²(x) = (1 + cos(2x)) / 2",
        note: "לאינטגרציה"
    }
];
/* ─── Investigation Steps ────────────────────────────────── */ const investigationSteps = [
    {
        n: 1,
        title: "תחום הגדרה",
        body: "מצא היכן הפונקציה מוגדרת. עבור tan: פתור cos(u) ≠ 0. עבור שורש: תנאי אי-שליליות."
    },
    {
        n: 2,
        title: "פריצה (אפסים)",
        body: "פתור f(x) = 0. השתמש בזהויות כדי לפרק. sin(u) = 0 ⟹ u = πk"
    },
    {
        n: 3,
        title: "סימן הפונקציה",
        body: "בנה טבלת סימנים בין האפסים. קבע היכן f > 0 ו-f < 0"
    },
    {
        n: 4,
        title: "נגזרת ראשונה f′(x)",
        body: "גזור תוך שימוש בכלל השרשרת. הוצא גורם משותף לפני פתרון."
    },
    {
        n: 5,
        title: "נקודות קיצון",
        body: "פתור f′(x) = 0. sin(u) = 0 ⟹ u = πk; cos(u) = 0 ⟹ u = π/2 + πk. בנה טבלת סימנים."
    },
    {
        n: 6,
        title: "עלייה / ירידה",
        body: "f′ > 0 ⟹ עולה. f′ < 0 ⟹ יורדת. קבע קיצון (מקסימום / מינימום) מהחלפת הסימן."
    },
    {
        n: 7,
        title: "נגזרת שנייה f″(x)",
        body: "גזור את f′ פעם נוספת. חלופה: השתמש ב-f″(x₀) לסיווג הקיצון."
    },
    {
        n: 8,
        title: "פיתול וקמירות",
        body: "f″(x) = 0 – מועמדים לנקודות פיתול. f″ > 0 ⟹ קמורה; f″ < 0 ⟹ קעורה. בדוק החלפת סימן."
    },
    {
        n: 9,
        title: "אסימפטוטות וגבולות",
        body: "אנכיות: tan ב-x = π/2 + πk. גבול ידוע: lim(sin x / x) = 1 כש-x → 0."
    }
];
/* ─── Tips ───────────────────────────────────────────────── */ const tips = [
    "(sin x)′ = cos x, (cos x)′ = −sin x – שימו לב לסימנים! שכחת המינוס בקוסינוס היא הטעות הנפוצה ביותר",
    "כלל שרשרת: תמיד הכפל בנגזרת הפנימית u′(x) – אל תשכח!",
    "לאינטגרציה של sin²(x): החלף תחילה ל-(1 − cos2x)/2, ואז אינטגרל בסיסי",
    "שטח מתחת לציר: ערך אינטגרל יוצא שלילי – תמיד קח ערך מוחלט לחישוב שטח",
    "בחקירת פונקציה: sin(x) = 0 ⟹ x = πk; cos(x) = 0 ⟹ x = π/2 + πk",
    "גבול חשוב: lim(sin x / x) = 1 כאשר x → 0 (ברדיאנים בלבד!)"
];
/* ─── Navigation ─────────────────────────────────────────── */ const idx = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].findIndex((t)=>t.id === "trig-functions");
const prev = idx > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"][idx - 1] : null;
const next = idx < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"][idx + 1] : null;
/* ─── Helper Components ──────────────────────────────────── */ function SectionHead({ title, sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-7 rounded-full bg-black shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-black",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-black",
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/topic/trig-functions/page.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
function FRow({ name, formula, note }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between gap-4 py-2.5 border-b border-slate-100 last:border-0",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 text-right min-w-[130px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-black",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs text-slate-400",
                        children: note
                    }, void 0, false, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 234,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "text-sm font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded leading-relaxed",
                dir: "ltr",
                children: formula
            }, void 0, false, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/topic/trig-functions/page.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
function DarkCard({ id, title, note, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800 text-white px-4 py-3 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-7 h-7 rounded-full bg-white/15 text-xs font-black flex items-center justify-center shrink-0",
                        children: id
                    }, void 0, false, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-sm",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-xs",
                                children: note
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 250,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/topic/trig-functions/page.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
function TrigFunctionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                activeTopicId: "trig-functions"
            }, void 0, false, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 263,
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
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-900 font-medium",
                                children: "פונקציות טריגונומטריות"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1",
                                    children: "שאלון 581"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight",
                                    children: "פונקציות טריגונומטריות"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 font-medium",
                                    children: "נגזרות, אינטגרלים וחקירת פונקציה"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 mt-4 leading-relaxed max-w-2xl text-sm",
                            children: "תכונות גרפים, פונקציות מוזזות, תחומי הגדרה, נגזרות בכלל שרשרת, אינטגרלים, שטחים וחקירת פונקציה מלאה."
                        }, void 0, false, {
                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2.5 mt-5",
                            children: [
                                "6 נוסחות KaTeX",
                                "נגזרות ואינטגרלים",
                                "9 שלבי חקירה",
                                "שטחים"
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium",
                                    children: s
                                }, s, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-10 space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "נוסחות מפתח",
                                sub: "נגזרות ואינטגרלים בסיסיים"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: keyFormulas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        title: f.title,
                                        latex: f.latex,
                                        explanation: f.explanation,
                                        index: i
                                    }, i, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "תכונות הפונקציות הבסיסיות"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: funcProps.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 text-white px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm font-mono",
                                                    children: f.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-3 gap-0 divide-x divide-slate-100",
                                                children: [
                                                    [
                                                        [
                                                            "תחום",
                                                            f.domain
                                                        ],
                                                        [
                                                            "טווח",
                                                            f.range
                                                        ],
                                                        [
                                                            "מחזור",
                                                            f.period
                                                        ],
                                                        [
                                                            "זוגיות",
                                                            f.parity
                                                        ],
                                                        [
                                                            "אפסים",
                                                            f.zeros
                                                        ],
                                                        [
                                                            "אסימפטוטות",
                                                            f.asymptotes
                                                        ]
                                                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 py-2.5 border-b border-slate-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 mb-0.5",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-mono text-slate-700",
                                                                    children: value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, label, true, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, this)),
                                                    f.max !== "—" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 py-2.5 border-b border-slate-100 col-span-2 sm:col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-400 mb-0.5",
                                                                children: "מקסימום / מינימום"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-mono text-slate-700",
                                                                children: [
                                                                    f.max,
                                                                    "  /  ",
                                                                    f.min
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "פונקציה מוזזת – y = A·sin(Bx + C) + D"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 text-white px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm",
                                                    children: "משמעות הפרמטרים"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-slate-100",
                                                children: shiftedParams.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3 px-4 py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0",
                                                                children: p.param
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-black",
                                                                        children: p.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: p.effect
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    p.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-400",
                                                                        children: p.note
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, p.param, true, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 text-white px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm",
                                                    children: "נוסחאות מפתח"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-1",
                                                children: shiftedFormulas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                        ...f
                                                    }, i, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 48
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 pb-4 pt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 leading-relaxed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "דוגמה:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 19
                                                        }, this),
                                                        " y = 3·sin(2x − π/2) + 1",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 88
                                                        }, this),
                                                        "A=3, B=2, C=−π/2, D=1 → T=π, y∈[−2,4], x_start=π/4"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "תחום הגדרה – כללים"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 382,
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
                                                        children: "סוג הפונקציה"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "תנאי תחום"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "הערה"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: domainRules.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: i % 2 === 0 ? "bg-white" : "bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2.5 font-mono font-semibold text-black",
                                                            children: row.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2.5 font-mono text-slate-700",
                                                            children: row.condition
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2.5 text-slate-500 text-xs",
                                                            children: row.note
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "נגזרות",
                                sub: "בסיסי, כלל שרשרת ודוגמאות"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkCard, {
                                        id: "א",
                                        title: "נגזרות בסיסיות",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1",
                                            children: basicDerivatives.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                    name: `(${f.name})′`,
                                                    formula: f.formula
                                                }, i, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkCard, {
                                        id: "ב",
                                        title: "כלל שרשרת",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1",
                                            children: chainDerivatives.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                    ...f
                                                }, i, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkCard, {
                                    id: "ג",
                                    title: "דוגמאות נפוצות",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-1",
                                        children: derivativeExamples.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                name: `(${f.name})′`,
                                                formula: f.formula
                                            }, i, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "אינטגרלים",
                                sub: "בסיסי, מורכב וזהויות לאינטגרציה"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkCard, {
                                        id: "א",
                                        title: "אינטגרלים בסיסיים",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1",
                                            children: basicIntegrals.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                    ...f
                                                }, i, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 47
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkCard, {
                                        id: "ב",
                                        title: "פונקציות מורכבות",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1",
                                            children: compositeIntegrals.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                    ...f
                                                }, i, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 51
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkCard, {
                                    id: "ג",
                                    title: "זהויות לפישוט לפני אינטגרציה",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-1",
                                        children: integrationIdentities.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                ...f
                                            }, i, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 54
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "זהויות שימושיות לפישוט",
                                sub: "לפני גזירה / אינטגרציה"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                dir: "rtl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-1",
                                    children: usefulIdentities.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                            ...f
                                        }, i, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 47
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "חישוב שטחים",
                                sub: "סוגי שטחים ותוצאות נפוצות"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 text-white px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm",
                                                    children: "נוסחאות שטח"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-1",
                                                children: areaFormulas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FRow, {
                                                        ...f
                                                    }, i, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 text-white px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm",
                                                    children: "תוצאות נפוצות לשינון"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-slate-100",
                                                children: commonIntegralResults.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between px-4 py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-sm font-mono text-slate-700 bg-slate-50 px-2 py-0.5 rounded",
                                                                dir: "ltr",
                                                                children: r.integral
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-black text-sm",
                                                                children: r.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-amber-50 border border-amber-200 rounded-lg px-3 py-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-amber-800 font-medium",
                                                        children: "∫[0→2π] sin(x) = 0 כי השטחים מעל ומתחת לציר x מבטלים זה את זה – אל תטעו ותחשבו שזה שטח!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "קשר בין גרף הפונקציה לגרף הנגזרת"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: fVsfPrime.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 bg-white p-3 shadow-sm flex items-center gap-3",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center shrink-0",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-mono text-slate-700",
                                                children: item.rule
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "נגזרת שנייה – בחינת קיצון"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 515,
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
                                                        children: "תנאי"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "מסקנה"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: secondDerivTest.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: i % 2 === 0 ? "bg-white" : "bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2.5 font-mono text-slate-700",
                                                            children: row.condition
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2.5 font-semibold text-black",
                                                            children: row.conclusion
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: "חקירת פונקציה טריגונומטרית – שלבי החקירה"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                                children: investigationSteps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-7 h-7 rounded-full bg-black text-white text-sm font-black flex items-center justify-center shrink-0",
                                                        children: step.n
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-black text-sm",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 leading-relaxed pr-10",
                                                children: step.body
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.n, true, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TipsBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            tips: tips
                        }, void 0, false, {
                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex justify-between items-center pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: prev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/topic/${prev.id}`,
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 hover:shadow-sm transition-all text-sm font-medium text-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-slate-400 mb-0.5",
                                                    children: "נושא קודם"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 19
                                                }, this),
                                                prev.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black",
                                    children: "← חזרה לדף הבית"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 578,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "px-3 py-2 rounded-lg text-xs text-black hover:bg-slate-100 transition-all font-medium",
                                children: "כל הנושאים"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/topic/${next.id}`,
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 hover:shadow-sm transition-all text-sm font-medium text-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-slate-400 mb-0.5",
                                                    children: "נושא הבא"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 19
                                                }, this),
                                                next.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "◀"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/trig-functions/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black",
                                    children: "← חזרה לדף הבית"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 295,
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
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white text-sm",
                                        children: "בגרות מתמטיקה 5 יח״ל"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 611,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm",
                                children: "כיתה י״א – בהצלחה בבחינה!"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/trig-functions/page.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/trig-functions/page.tsx",
                        lineNumber: 610,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/topic/trig-functions/page.tsx",
                    lineNumber: 609,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/trig-functions/page.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/topic/trig-functions/page.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/topic/trig-functions/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/topic/trig-functions/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f2fcc44._.js.map