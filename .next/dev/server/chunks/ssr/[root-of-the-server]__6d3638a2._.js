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
        title: "חשבון דיפרנציאלי ואינטגרלי",
        subtitle: "גבולות, נגזרות, אינטגרלים ופונקציות שורש",
        icon: "ש",
        color: "text-blue-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        description: "גבולות, נגזרות (כולל כלל שרשרת), אינטגרלים (כולל הצבה ואינטגרציה בחלקים), שטחים, נפחי סיבוב, פונקציות שורש וחקירת פונקציה מלאה.",
        formulas: [
            {
                title: "גבול חשוב – sin(x)/x",
                latex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
                explanation: "x ברדיאנים. בסיס לגבולות טריגונומטריים"
            },
            {
                title: "נגזרת – כלל שרשרת",
                latex: "[f(g(x))]' = f'(g(x)) \\cdot g'(x)",
                explanation: "נגזרת חיצונית × נגזרת פנימית"
            },
            {
                title: "נגזרת שורש – כלל שרשרת",
                latex: "(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}",
                explanation: "u = u(x), מוגדרת כאשר u(x) > 0"
            },
            {
                title: "אינטגרל – נוסחת חזקה",
                latex: "\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
                explanation: "כולל חזקות שבריות: √x = x^(1/2), 1/√x = x^(−1/2)"
            },
            {
                title: "אינטגרל – מבנה f′/f",
                latex: "\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C",
                explanation: "זיהוי: המונה הוא נגזרת המכנה (או כפולה שלה)"
            },
            {
                title: "אינטגרציה בחלקים",
                latex: "\\int u\\, dv = u\\cdot v - \\int v\\, du",
                explanation: "LIATE – בחר u: לוגריתם > פולינום > טריגו > אקספוננט"
            },
            {
                title: "משפט היסוד של החדו\"א",
                latex: "\\int_a^b f(x)\\, dx = F(b) - F(a)",
                explanation: "F היא פונקציה קדומה של f"
            },
            {
                title: "שטח בין שתי עקומות",
                latex: "S = \\int_a^b [f(x) - g(x)]\\, dx \\quad (f \\geq g)",
                explanation: "מצא נקודות חיתוך, בדוק מי עליונה, חשב"
            },
            {
                title: "נפח גוף סיבוב",
                latex: "V = \\pi \\int_a^b [f(x)]^2\\, dx",
                explanation: "סיבוב הגרף f(x) סביב ציר x. חשוב: רבע את הפונקציה!"
            }
        ],
        examples: [
            {
                problem: "מצאו את תחום הפונקציה: f(x) = √(x² - 5x + 6)",
                steps: [
                    "תנאי: x² - 5x + 6 ≥ 0",
                    "שורשי הפרבולה: x² - 5x + 6 = 0 → (x-2)(x-3) = 0",
                    "הפרבולה פותחת כלפי מעלה → x² - 5x + 6 ≥ 0 עבור x ≤ 2 או x ≥ 3"
                ],
                answer: "התחום: (-∞,2]∪[3,∞)"
            },
            {
                problem: "חשבו: ∫ 2x·e^(x²) dx",
                steps: [
                    "זיהוי: 2x הוא נגזרת של x², כלומר f′(x)·eᶠ⁽ˣ⁾",
                    "לפי מבנה ∫f′(x)·eᶠ⁽ˣ⁾dx = eᶠ⁽ˣ⁾ + C",
                    "התשובה: e^(x²) + C"
                ],
                answer: "e^(x²) + C"
            },
            {
                problem: "חשבו: ∫ x·eˣ dx",
                steps: [
                    "אינטגרציה בחלקים: u = x, dv = eˣdx",
                    "du = dx, v = eˣ",
                    "∫x·eˣdx = x·eˣ − ∫eˣdx = x·eˣ − eˣ + C"
                ],
                answer: "eˣ(x − 1) + C"
            },
            {
                problem: "חשבו את השטח בין f(x) = x ו-g(x) = x² בתחום [0,1]",
                steps: [
                    "נקודות חיתוך: x = x² → x = 0 או x = 1",
                    "ב-[0,1]: x ≥ x², לכן S = ∫₀¹(x − x²)dx",
                    "= [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6"
                ],
                answer: "S = 1/6"
            }
        ],
        tips: [
            "תחום שורש: פתור g(x) ≥ 0 (כולל 0). נגזרת בנקודת קצה g=0 → משיק אנכי",
            "זיהוי מבנה ראשון: המונה = נגזרת המכנה → ln|f(x)| + C",
            "זיהוי מבנה שני: f′(x)·eᶠ⁽ˣ⁾ → eᶠ⁽ˣ⁾ + C",
            "זיהוי מבנה שלישי: f′(x)·[f(x)]ⁿ → [f(x)]ⁿ⁺¹/(n+1) + C",
            "אינטגרציה בחלקים (LIATE): בחר u כלוגריתם/פולינום, v′ כאקספוננט/טריגו",
            "לגבולות עם ∞−∞ ושורשים: כפל בצמוד (√A−√B)(√A+√B) = A−B",
            "נפח סיבוב: V = π∫[f(x)]²dx – רבע את הפונקציה, לא את האינטגרל!"
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
"[project]/app/topic/geometry/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeometryPage,
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
    title: "גיאומטריה – בגרות מתמטיקה 5 יח״ל",
    description: "נוסחאות ומשפטים תקניים לגיאומטריה בשאלון 581 – 109 משפטים, טבלת שטחים, זוויות, מקבילים, דמיון ומעגלים."
};
/* ─── Data ──────────────────────────────────────────────── */ const areaFormulas = [
    {
        shape: "משולש",
        formula: "(צלע × גובה לצלע) ÷ 2"
    },
    {
        shape: "משולש ישר זווית",
        formula: "(ניצב × ניצב) ÷ 2"
    },
    {
        shape: "מקבילית",
        formula: "צלע × גובה לצלע"
    },
    {
        shape: "מלבן",
        formula: "אורך × רוחב"
    },
    {
        shape: "מעוין / דלתון",
        formula: "(אלכסון₁ × אלכסון₂) ÷ 2"
    },
    {
        shape: "ריבוע",
        formula: "צלע²  או  אלכסון² ÷ 2"
    },
    {
        shape: "טרפז",
        formula: "(בסיס₁ + בסיס₂) × גובה ÷ 2"
    },
    {
        shape: "מעגל",
        formula: "π × r²"
    },
    {
        shape: "היקף מעגל",
        formula: "π × d  =  2πr"
    }
];
const sections = [
    {
        id: 1,
        title: "זוויות",
        theorems: [
            {
                number: 1,
                text: "זוויות צמודות משלימות זו את זו ל-180°."
            },
            {
                number: 2,
                text: "זוויות קודקודיות שוות זו לזו."
            }
        ]
    },
    {
        id: 2,
        title: "ישרים מקבילים",
        theorems: [
            {
                number: 3,
                text: "אורך האנך מנקודה על ישר לישר המקביל לו קבוע."
            },
            {
                number: 4,
                text: "אם שני ישרים מקבילים נחתכים ע\"י ישר שלישי, כל שתי זוויות מתחלפות שוות זו לזו."
            },
            {
                number: 5,
                text: "שני ישרים נחתכים ע\"י ישר שלישי. אם נוצרו זוויות מתחלפות שוות – שני הישרים מקבילים."
            },
            {
                number: 6,
                text: "אם שני ישרים מקבילים נחתכים ע\"י ישר שלישי, כל שתי זוויות מתאימות שוות זו לזו."
            },
            {
                number: 7,
                text: "שני ישרים נחתכים ע\"י ישר שלישי. אם נוצרו זוויות מתאימות שוות – שני הישרים מקבילים."
            },
            {
                number: 8,
                text: "אם שני ישרים מקבילים נחתכים ע\"י ישר שלישי, סכום כל זוג זוויות חד-צדדיות הוא 180°."
            },
            {
                number: 9,
                text: "שני ישרים נחתכים ע\"י ישר שלישי. אם סכום זוויות חד-צדדיות הוא 180° – שני הישרים מקבילים."
            }
        ]
    },
    {
        id: 3,
        title: "משולשים – כללי",
        theorems: [
            {
                number: 10,
                text: "סכום הזוויות של משולש הוא 180°."
            },
            {
                number: 11,
                text: "זווית חיצונית למשולש שווה לסכום שתי הזוויות הפנימיות שאינן צמודות לה."
            },
            {
                number: 12,
                text: "סכום כל שתי צלעות במשולש גדול מהצלע השלישית (אי-שוויון המשולש)."
            },
            {
                number: 13,
                text: "במשולש (שאינו שווה צלעות), מול הצלע הגדולה יותר מונחת זווית גדולה יותר."
            },
            {
                number: 14,
                text: "במשולש (שאינו שווה זוויות), מול הזווית הגדולה יותר מונחת צלע גדולה יותר."
            },
            {
                number: 15,
                text: "שלושת התיכונים במשולש נחתכים בנקודה אחת."
            },
            {
                number: 16,
                text: "תיכון במשולש מחלק את המשולש לשני משולשים שווי שטח."
            },
            {
                number: 17,
                text: "נקודת חיתוך התיכונים מחלקת כל תיכון ביחס 2:1 (החלק הקרוב לקודקוד ארוך פי 2)."
            }
        ]
    },
    {
        id: 4,
        title: "חפיפת משולשים",
        warning: "אין לחפף משולשים בצ.ז.ז. – יש להראות שוויון הזווית השלישית ולהשתמש בז.צ.ז.",
        theorems: [
            {
                number: 18,
                text: "משפט חפיפה צלע-זווית-צלע (צ.ז.צ.)"
            },
            {
                number: 19,
                text: "משפט חפיפה זווית-צלע-זווית (ז.צ.ז.)"
            },
            {
                number: 20,
                text: "משפט חפיפה צלע-צלע-צלע (צ.צ.צ.)"
            },
            {
                number: 21,
                text: "משפט חפיפה: שתי צלעות והזווית שמול הצלע הגדולה מבין השתיים."
            }
        ]
    },
    {
        id: 5,
        title: "משולש שווה שוקיים",
        theorems: [
            {
                number: 22,
                text: "במשולש שווה שוקיים זוויות הבסיס שוות זו לזו."
            },
            {
                number: 23,
                text: "משולש שבו שתי זוויות שוות הוא משולש שווה שוקיים."
            },
            {
                number: 24,
                text: "במשולש שווה שוקיים: חוצה זווית הראש, התיכון לבסיס והגובה לבסיס מתלכדים."
            },
            {
                number: 25,
                text: "אם במשולש חוצה זווית הוא גובה, אז המשולש הוא שווה שוקיים."
            },
            {
                number: 26,
                text: "אם במשולש חוצה זווית הוא תיכון, אז המשולש הוא שווה שוקיים."
            },
            {
                number: 27,
                text: "אם במשולש גובה הוא תיכון, אז המשולש הוא שווה שוקיים."
            }
        ]
    },
    {
        id: 6,
        title: "משולש ישר זווית",
        theorems: [
            {
                number: 28,
                text: "במשולש ישר זווית, סכום ריבועי הניצבים שווה לריבוע היתר.",
                citable: true,
                name: "משפט פיתגורס"
            },
            {
                number: 29,
                text: "משולש בו סכום ריבועי שתי צלעות שווה לריבוע הצלע השלישית הוא ישר זווית.",
                citable: true,
                name: "המשפט ההפוך למשפט פיתגורס"
            },
            {
                number: 30,
                text: "שני משולשים ישרי זווית שלהם ניצב שווה ויתר שווה חופפים זה לזה."
            },
            {
                number: 31,
                text: "במשולש ישר זווית התיכון ליתר שווה למחצית היתר."
            },
            {
                number: 32,
                text: "משולש בו התיכון שווה למחצית הצלע אותה הוא חוצה הוא משולש ישר זווית."
            },
            {
                number: 33,
                text: "אם במשולש ישר זווית זווית חדה היא 30°, אז הניצב מול זווית זו שווה למחצית היתר."
            },
            {
                number: 34,
                text: "אם במשולש ישר זווית ניצב שווה למחצית היתר, אז מול ניצב זה זווית שגודלה 30°."
            }
        ]
    },
    {
        id: 7,
        title: "מרובעים ומצולעים",
        theorems: [
            {
                number: 35,
                text: "סכום זוויות במרובע הוא 360°."
            },
            {
                number: 36,
                text: "סכום הזוויות הפנימיות של מצולע קמור הוא: 180° × (n − 2)."
            }
        ]
    },
    {
        id: 8,
        title: "דלתון",
        definition: "מרובע שלו שני זוגות זרים של צלעות סמוכות השוות זו לזו.",
        theorems: [
            {
                number: 37,
                text: "זוויות הצד בדלתון שוות זו לזו."
            },
            {
                number: 38,
                text: "האלכסון הראשי בדלתון חוצה את זוויות הראש, חוצה את האלכסון המשני ומאונך לו."
            }
        ]
    },
    {
        id: 9,
        title: "טרפז",
        definition: "מרובע שבו יש זוג יחיד של צלעות המקבילות זו לזו.",
        theorems: [
            {
                number: 39,
                text: "בטרפז שווה שוקיים הזוויות שליד אותו בסיס שוות זו לזו."
            },
            {
                number: 40,
                text: "טרפז בו הזוויות שליד אותו בסיס שוות זו לזו הוא טרפז שווה שוקיים."
            },
            {
                number: 41,
                text: "בטרפז שווה שוקיים האלכסונים שווים זה לזה."
            },
            {
                number: 42,
                text: "טרפז בו האלכסונים שווים זה לזה הוא טרפז שווה שוקיים."
            }
        ]
    },
    {
        id: 10,
        title: "מקבילית",
        definition: "מרובע שבו יש שני זוגות של צלעות המקבילות זו לזו.",
        theorems: [
            {
                number: 43,
                text: "במקבילית כל שתי צלעות נגדיות שוות זו לזו."
            },
            {
                number: 44,
                text: "מרובע שבו כל שתי צלעות נגדיות שוות זו לזו הוא מקבילית."
            },
            {
                number: 45,
                text: "מרובע שבו זוג צלעות מקבילות ושוות הוא מקבילית."
            },
            {
                number: 46,
                text: "במקבילית האלכסונים חוצים זה את זה."
            },
            {
                number: 47,
                text: "מרובע שבו האלכסונים חוצים זה את זה הוא מקבילית."
            },
            {
                number: 48,
                text: "במקבילית כל שתי זוויות נגדיות שוות זו לזו."
            },
            {
                number: 49,
                text: "מרובע שבו כל שתי זוויות נגדיות שוות הוא מקבילית."
            },
            {
                number: 50,
                text: "במקבילית סכום כל שתי זוויות סמוכות הוא 180°."
            },
            {
                number: 51,
                text: "מרובע שבו סכום כל שתי זוויות סמוכות הוא 180° הוא מקבילית."
            }
        ]
    },
    {
        id: 11,
        title: "מלבן",
        definition: "מרובע שבו כל הזוויות ישרות.",
        theorems: [
            {
                number: 52,
                text: "במלבן האלכסונים שווים זה לזה."
            },
            {
                number: 53,
                text: "מקבילית שבה האלכסונים שווים זה לזה היא מלבן."
            },
            {
                number: 54,
                text: "מקבילית שבה יש זווית ישרה היא מלבן."
            }
        ]
    },
    {
        id: 12,
        title: "מעוין",
        definition: "מרובע שבו כל הצלעות שוות.",
        theorems: [
            {
                number: 55,
                text: "במעוין האלכסונים חוצים את הזוויות."
            },
            {
                number: 56,
                text: "במעוין האלכסונים מאונכים זה לזה."
            },
            {
                number: 57,
                text: "מקבילית שבה אלכסון הוא חוצה זווית היא מעוין."
            },
            {
                number: 58,
                text: "מקבילית שבה האלכסונים מאונכים זה לזה היא מעוין."
            },
            {
                number: 59,
                text: "מקבילית שבה שתי צלעות סמוכות שוות היא מעוין."
            }
        ]
    },
    {
        id: 13,
        title: "ריבוע",
        definition: "מרובע שבו כל הצלעות שוות וכל הזוויות ישרות.",
        theorems: [
            {
                number: 60,
                text: "מעוין שבו האלכסונים שווים הוא ריבוע."
            },
            {
                number: 61,
                text: "מלבן בו הצלעות הסמוכות שוות הוא ריבוע."
            }
        ]
    },
    {
        id: 14,
        title: "קטע אמצעים במשולש ובטרפז",
        theorems: [
            {
                number: 62,
                text: "קטע אמצעים במשולש מקביל לצלע השלישית ושווה למחציתה."
            },
            {
                number: 63,
                text: "ישר החוצה צלע אחת במשולש ומקביל לצלע שנייה, חוצה את הצלע השלישית."
            },
            {
                number: 64,
                text: "קטע שקצותיו על שתי צלעות משולש, מקביל לצלע השלישית ושווה למחציתה, הוא קטע אמצעים."
            },
            {
                number: 65,
                text: "קטע האמצעים בטרפז מקביל לבסיסים ושווה למחצית סכומם."
            },
            {
                number: 66,
                text: "בטרפז, ישר החוצה שוק אחת ומקביל לבסיסים, חוצה את השוק השנייה."
            },
            {
                number: 67,
                text: "קטע המחבר שתי שוקיים בטרפז, מקביל לבסיסים ושווה למחצית סכומם, הוא קטע אמצעים."
            }
        ]
    },
    {
        id: 15,
        title: "דמיון משולשים ופרופורציה",
        theorems: [
            {
                number: 68,
                text: "משפט דמיון צ.ז.צ.",
                citable: true,
                name: "דמיון צ.ז.צ."
            },
            {
                number: 69,
                text: "משפט דמיון ז.ז.",
                citable: true,
                name: "דמיון ז.ז."
            },
            {
                number: 70,
                text: "משפט דמיון צ.צ.צ.",
                citable: true,
                name: "דמיון צ.צ.צ."
            },
            {
                number: 71,
                text: "במשולשים דומים:",
                sub_theorems: [
                    "א. יחס גבהים מתאימים שווה ליחס הדמיון.",
                    "ב. יחס חוצי זוויות מתאימות שווה ליחס הדמיון.",
                    "ג. יחס תיכונים מתאימים שווה ליחס הדמיון.",
                    "ד. יחס ההיקפים שווה ליחס הדמיון.",
                    "ה. יחס הרדיוסים של המעגלים החוסמים שווה ליחס הדמיון.",
                    "ו. יחס הרדיוסים של המעגלים החסומים שווה ליחס הדמיון.",
                    "ז. יחס השטחים שווה לריבוע יחס הדמיון."
                ]
            },
            {
                number: 72,
                text: "שני ישרים מקבילים החותכים שוקי זווית, מקצים עליהם קטעים פרופורציוניים.",
                citable: true,
                name: "משפט תאלס"
            },
            {
                number: 73,
                text: "ישר המקביל לאחת מצלעות המשולש חותך את שתי הצלעות האחרות בקטעים פרופורציוניים.",
                citable: true,
                name: "משפט תאלס המורחב"
            },
            {
                number: 74,
                text: "שני ישרים המקצים על שוקי זווית ארבעה קטעים פרופורציוניים הם ישרים מקבילים.",
                citable: true,
                name: "המשפט ההפוך למשפט תאלס"
            },
            {
                number: 75,
                text: "חוצה הזווית הוא המקום הגיאומטרי של כל הנקודות הנמצאות במרחקים שווים משוקי הזווית."
            },
            {
                number: 76,
                text: "חוצה זווית פנימית במשולש מחלק את הצלע שמול הזווית לשני קטעים שיחסם שווה ליחס הצלעות הכולאות.",
                citable: true,
                name: "משפט חוצה זווית"
            },
            {
                number: 77,
                text: "ישר העובר דרך קודקוד ומחלק את הצלע שמולו ביחס שתי הצלעות האחרות, הוא חוצה הזווית.",
                citable: true,
                name: "המשפט ההפוך למשפט חוצה זווית"
            }
        ]
    },
    {
        id: 16,
        title: "קטעים מיוחדים, מעגל חוסם ומעגל חסום",
        theorems: [
            {
                number: 78,
                text: "כל נקודה על חוצה זווית נמצאת במרחקים שווים משוקי זווית זו."
            },
            {
                number: 79,
                text: "אם נקודה נמצאת במרחקים שווים משני שוקי זווית, אז היא נמצאת על חוצה הזווית."
            },
            {
                number: 80,
                text: "שלושת חוצי הזוויות של משולש נחתכים בנקודה אחת – מרכז המעגל החסום במשולש."
            },
            {
                number: 81,
                text: "בכל משולש אפשר לחסום מעגל."
            },
            {
                number: 82,
                text: "כל נקודה הנמצאת על האנך האמצעי של קטע, נמצאת במרחקים שווים מקצות הקטע."
            },
            {
                number: 83,
                text: "כל נקודה הנמצאת במרחקים שווים מקצות קטע, נמצאת על האנך האמצעי לקטע."
            },
            {
                number: 84,
                text: "כל משולש ניתן לחסום במעגל."
            },
            {
                number: 85,
                text: "שלושת האנכים האמצעיים במשולש נחתכים בנקודה אחת – מרכז המעגל החוסם את המשולש."
            },
            {
                number: 86,
                text: "שלושת הגבהים במשולש נחתכים בנקודה אחת."
            },
            {
                number: 87,
                text: "ניתן לחסום מרובע במעגל אם ורק אם סכום זוג זוויות נגדיות שווה ל-180°."
            },
            {
                number: 88,
                text: "מרובע קמור חוסם מעגל אם ורק אם סכום שתי צלעות נגדיות שווה לסכום שתי הצלעות הנגדיות האחרות."
            },
            {
                number: 89,
                text: "כל מצולע משוכלל אפשר לחסום במעגל."
            },
            {
                number: 90,
                text: "בכל מצולע משוכלל אפשר לחסום מעגל."
            },
            {
                number: 91,
                text: "דרך כל שלוש נקודות שאינן על ישר אחד עובר מעגל אחד ויחיד."
            }
        ]
    },
    {
        id: 17,
        title: "מעגלים",
        theorems: [
            {
                number: 92,
                text: "במעגל, שתי זוויות מרכזיות שוות אם ורק אם שתי הקשתות המתאימות להן שוות."
            },
            {
                number: 93,
                text: "במעגל, שתי זוויות מרכזיות שוות אם ורק אם שני המיתרים המתאימים להן שווים."
            },
            {
                number: 94,
                text: "במעגל, מיתרים שווים אם ורק אם שתי הקשתות המתאימות להם שוות."
            },
            {
                number: 95,
                text: "מיתרים שווים נמצאים במרחקים שווים ממרכז המעגל."
            },
            {
                number: 96,
                text: "מיתרים הנמצאים במרחקים שווים ממרכז המעגל שווים זה לזה."
            },
            {
                number: 97,
                text: "האנך ממרכז המעגל למיתר חוצה את המיתר, חוצה את הזווית המרכזית וחוצה את הקשת המתאימה."
            },
            {
                number: 98,
                text: "קטע ממרכז המעגל החוצה את המיתר מאונך למיתר."
            },
            {
                number: 99,
                text: "זווית היקפית שווה למחצית הזווית המרכזית הנשענת על אותה קשת."
            },
            {
                number: 100,
                text: "במעגל, לזוויות היקפיות שוות – קשתות שוות ומיתרים שווים."
            },
            {
                number: 101,
                text: "במעגל, לקשתות שוות מתאימות זוויות היקפיות שוות."
            },
            {
                number: 102,
                text: "כל הזוויות ההיקפיות הנשענות על מיתר מאותו צד של המיתר שוות זו לזו."
            },
            {
                number: 103,
                text: "זווית היקפית הנשענת על קוטר היא זווית ישרה (90°)."
            },
            {
                number: 104,
                text: "זווית היקפית בת 90° נשענת על קוטר."
            },
            {
                number: 105,
                text: "המשיק למעגל מאונך לרדיוס בנקודת ההשקה."
            },
            {
                number: 106,
                text: "ישר המאונך לרדיוס בקצהו הוא משיק למעגל."
            },
            {
                number: 107,
                text: "זווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על מיתר זה מצידו השני.",
                citable: true,
                name: "זווית בין משיק למיתר"
            },
            {
                number: 108,
                text: "שני משיקים למעגל היוצאים מאותה נקודה שווים זה לזה."
            },
            {
                number: 109,
                text: "קטע המחבר את מרכז המעגל לנקודה ממנה יוצאים שני משיקים, חוצה את הזווית שבין המשיקים."
            }
        ]
    },
    {
        id: 18,
        title: "משפטים חשובים לתרגול – לא לציטוט בבגרות",
        theorems: [
            {
                number: "א",
                text: "במעגל, אם מרחקו של מיתר ממרכז המעגל קטן ממרחקו של מיתר אחר, אז מיתר זה ארוך יותר."
            },
            {
                number: "ב",
                text: "אם שני מיתרים נחתכים במעגל, מכפלת קטעי מיתר אחד שווה למכפלת קטעי המיתר השני."
            },
            {
                number: "ג",
                text: "אם מנקודה מחוץ למעגל יוצאים שני חותכים, מכפלת חותך אחד בחלקו החיצוני שווה למכפלת החותך השני בחלקו החיצוני."
            },
            {
                number: "ד",
                text: "אם מנקודה מחוץ למעגל יוצאים חותך ומשיק, מכפלת החותך בחלקו החיצוני שווה לריבוע המשיק."
            },
            {
                number: "ה",
                text: "במשולש ישר זווית, הניצב הוא ממוצע הנדסי של היתר והיטל ניצב זה על היתר."
            },
            {
                number: "ו",
                text: "הגובה ליתר במשולש ישר זווית הוא ממוצע הנדסי של היטלי הניצבים על היתר."
            }
        ]
    }
];
const keyFormulas = [
    {
        title: "משפט פיתגורס *",
        latex: "a^2 + b^2 = c^2",
        explanation: "במשולש ישר זווית: סכום ריבועי הניצבים = ריבוע היתר",
        svgContent: // Right triangle: legs a (vertical), b (horizontal), hypotenuse c; right-angle mark at corner
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 120 60",
            className: "w-full max-w-[180px] h-auto text-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "15,54 88,54 15,10",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "15,44 24,44 24,54",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "5",
                    y: "34",
                    fontSize: "9",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "a"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "47",
                    y: "59",
                    fontSize: "9",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "b"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "52",
                    y: "27",
                    fontSize: "9",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "c"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/topic/geometry/page.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "שטח משולש עם סינוס",
        latex: "S = \\tfrac{1}{2}ab\\sin C",
        explanation: "שתי צלעות והזווית הכלואה ביניהן",
        svgContent: // Triangle with angle C at bottom-left; sides a (left) and b (bottom) labeled; area formula hint
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 120 60",
            className: "w-full max-w-[180px] h-auto text-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "14,54 100,54 48,8",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M27,54 A14,14 0 0,0 20,41",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.1"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "5",
                    y: "57",
                    fontSize: "8",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "C"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "26",
                    y: "28",
                    fontSize: "8",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "a"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "53",
                    y: "59",
                    fontSize: "8",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "b"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "70",
                    y: "38",
                    fontSize: "5.5",
                    fill: "currentColor",
                    children: "S = ½ab·sinC"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/topic/geometry/page.tsx",
            lineNumber: 292,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "גובה על היתר",
        latex: "h^2 = p \\cdot q \\quad a^2 = c\\cdot p \\quad b^2 = c\\cdot q",
        explanation: "h = גובה, p,q = היטלים, a,b = ניצבים, c = יתר",
        svgContent: // Right triangle with right angle at C=(28,16); altitude from C to foot D=(28,54) on hypotenuse AB
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 120 60",
            className: "w-full max-w-[180px] h-auto text-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "10,54 108,54 28,16",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "28",
                    y1: "16",
                    x2: "28",
                    y2: "54",
                    stroke: "currentColor",
                    strokeWidth: "1.2",
                    strokeDasharray: "3 2"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "28",
                    y: "45",
                    width: "7",
                    height: "7",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.1"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "22",
                    fontSize: "5",
                    fill: "currentColor",
                    children: "90°"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "17",
                    y: "59",
                    fontSize: "6.5",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "p"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "63",
                    y: "59",
                    fontSize: "6.5",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "q"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "31",
                    y: "37",
                    fontSize: "7",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "h"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "8",
                    y: "33",
                    fontSize: "6.5",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "a"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "70",
                    y: "28",
                    fontSize: "6.5",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "b"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/topic/geometry/page.tsx",
            lineNumber: 309,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "יחס דמיון → שטח",
        latex: "\\frac{S_1}{S_2} = k^2",
        explanation: "אם יחס הדמיון k, יחס השטחים k²",
        svgContent: // Two similar triangles: large (left) and small (right); ratio k between them
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 120 60",
            className: "w-full max-w-[180px] h-auto text-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "8,54 60,54 28,10",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "47",
                    fontSize: "7",
                    fill: "currentColor",
                    textAnchor: "middle",
                    children: "S₁"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "70,54 102,54 82,27",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "85",
                    y: "50",
                    fontSize: "7",
                    fill: "currentColor",
                    textAnchor: "middle",
                    children: "S₂"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "63",
                    y: "20",
                    fontSize: "6",
                    fill: "currentColor",
                    children: "k"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "63",
                    y: "30",
                    fontSize: "5.5",
                    fill: "currentColor",
                    children: "→ k²"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/topic/geometry/page.tsx",
            lineNumber: 332,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "שטח וקשת מעגל",
        latex: "S_{sector}=\\frac{\\alpha}{360}\\pi r^2 \\quad l=\\frac{\\alpha}{360}\\cdot 2\\pi r",
        explanation: "α = זווית מרכזית בדרגות",
        svgContent: // Circle with shaded sector; labels r (radius), α (central angle), l (arc length)
        // Sector: center=(50,28), r=22; 0° → (72,28); 78° → (50+22cos78°,28+22sin78°)≈(55,49)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 120 60",
            className: "w-full max-w-[180px] h-auto text-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "28",
                    r: "22",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.3"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M50,28 L72,28 A22,22 0 0,1 55,49 Z",
                    fill: "currentColor",
                    fillOpacity: "0.18",
                    stroke: "currentColor",
                    strokeWidth: "1.3"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "57",
                    y: "25",
                    fontSize: "6.5",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "r"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "65",
                    y: "40",
                    fontSize: "8",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "α"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "56",
                    y: "56",
                    fontSize: "6.5",
                    fill: "currentColor",
                    fontStyle: "italic",
                    children: "l"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 361,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "20",
                    fontSize: "5.5",
                    fill: "currentColor",
                    children: "גזרה"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "29",
                    fontSize: "5.5",
                    fill: "currentColor",
                    children: "קשת = l"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/topic/geometry/page.tsx",
            lineNumber: 352,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "קטע אמצעים / תאלס *",
        latex: "MN = \\tfrac{1}{2}BC \\quad \\frac{AM}{MB}=\\frac{AN}{NC}",
        explanation: "קטע אמצעים מקביל לצלע ושווה למחציתה; תאלס – קטעים פרופורציוניים",
        svgContent: // Triangle ABC; M=midpoint(AB), N=midpoint(AC); MN ∥ BC with parallel tick marks
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 120 60",
            className: "w-full max-w-[180px] h-auto text-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "60,6 10,56 110,56",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "35",
                    y1: "31",
                    x2: "85",
                    y2: "31",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "35",
                    cy: "31",
                    r: "2.5",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "85",
                    cy: "31",
                    r: "2.5",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "59",
                    y1: "28",
                    x2: "59",
                    y2: "34",
                    stroke: "currentColor",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "62",
                    y1: "28",
                    x2: "62",
                    y2: "34",
                    stroke: "currentColor",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "59",
                    y1: "53",
                    x2: "59",
                    y2: "59",
                    stroke: "currentColor",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "62",
                    y1: "53",
                    x2: "62",
                    y2: "59",
                    stroke: "currentColor",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "57",
                    y: "4",
                    fontSize: "6.5",
                    fill: "currentColor",
                    children: "A"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "4",
                    y: "58",
                    fontSize: "6.5",
                    fill: "currentColor",
                    children: "B"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "112",
                    y: "58",
                    fontSize: "6.5",
                    fill: "currentColor",
                    children: "C"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "25",
                    y: "29",
                    fontSize: "6",
                    fill: "currentColor",
                    children: "M"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "88",
                    y: "29",
                    fontSize: "6",
                    fill: "currentColor",
                    children: "N"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "87",
                    y: "44",
                    fontSize: "5.5",
                    fill: "currentColor",
                    children: "MN=½BC"
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/topic/geometry/page.tsx",
            lineNumber: 374,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const tips = [
    "ציירו תרשים בכל שאלה ורשמו את כל הנתונים לפני שמתחילים",
    "משפטים עם (*) ניתנים לציטוט בשמם בלבד – לא צריך להוכיח אותם",
    "חפיפה: אין להשתמש בצ.ז.ז. – תמיד הוכיחו שוויון הזווית השלישית ועברו לז.צ.ז.",
    "דמיון: בדקו שלושה תנאים – ז.ז. / צ.ז.צ. / צ.צ.צ. לפי הנתונים",
    "זווית היקפית = מחצית הזווית המרכזית על אותה קשת – נוסחה מרכזית בשאלות מעגל"
];
const idx = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].findIndex((t)=>t.id === "geometry");
const prev = idx > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"][idx - 1] : null;
const next = idx < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"][idx + 1] : null;
function GeometryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                activeTopicId: "geometry"
            }, void 0, false, {
                fileName: "[project]/app/topic/geometry/page.tsx",
                lineNumber: 415,
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
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-900 font-medium",
                                children: "גיאומטריה"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/geometry/page.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1",
                                        children: "שאלון 581"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight",
                                        children: "גיאומטריה"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 font-medium",
                                        children: "נוסחאות ומשפטים תקניים"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/topic/geometry/page.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 mt-4 leading-relaxed max-w-2xl text-sm",
                            children: [
                                "109 משפטים ב-18 נושאים – זוויות, ישרים מקבילים, משולשים, מרובעים, דמיון ומעגלים. משפטים המסומנים ב-",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold",
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 31
                                }, this),
                                " ניתנים לציטוט בבגרות לפי שמם בלבד."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/topic/geometry/page.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2.5 mt-5",
                            children: [
                                "6 נוסחות KaTeX",
                                "טבלת שטחים",
                                "109 משפטים",
                                "18 נושאים"
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium",
                                    children: s
                                }, s, false, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/topic/geometry/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/geometry/page.tsx",
                lineNumber: 429,
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
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "נוסחות מפתח"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "הנוסחאות החיוניות לחישוב"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: keyFormulas.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormulaCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        title: f.title,
                                        latex: f.latex,
                                        explanation: f.explanation,
                                        index: i,
                                        svgContent: f.svgContent
                                    }, i, false, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 453,
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
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "נוסחאות שטח – סיכום"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "כל הצורות במקום אחד"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 470,
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
                                                        children: "צורה"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right font-semibold",
                                                        children: "נוסחת שטח"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: areaFormulas.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: i % 2 === 0 ? "bg-white" : "bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 font-bold text-black",
                                                            children: row.shape
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 font-mono text-slate-700",
                                                            children: row.formula
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 469,
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
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black",
                                                children: "משפטים תקניים"
                                            }, void 0, false, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: [
                                                    "109 משפטים — ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 30
                                                    }, this),
                                                    " = ניתן לציטוט בשם"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: sections.map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 text-white px-4 py-3 flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-7 h-7 rounded-full bg-white/15 text-white text-xs font-black flex items-center justify-center shrink-0",
                                                        children: sec.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-sm",
                                                        children: sec.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 space-y-2",
                                                children: [
                                                    sec.definition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 italic border-r-2 border-slate-300 pr-3 mb-3",
                                                        children: [
                                                            "הגדרה: ",
                                                            sec.definition
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 21
                                                    }, this),
                                                    sec.warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-amber-600 font-black text-sm shrink-0",
                                                                children: "!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-amber-800 font-medium",
                                                                children: sec.warning
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1.5",
                                                        children: sec.theorems.map((thm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5",
                                                                        children: thm.number
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-2 flex-wrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-black leading-relaxed",
                                                                                        children: thm.text
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                                                        lineNumber: 547,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    thm.citable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-flex items-center gap-1 text-xs bg-black text-white rounded-full px-2 py-0.5 font-semibold shrink-0",
                                                                                        children: [
                                                                                            "★ ",
                                                                                            thm.name
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                                                        lineNumber: 549,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                                                lineNumber: 546,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            thm.sub_theorems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "mt-1.5 space-y-1 pr-2",
                                                                                children: thm.sub_theorems.map((sub, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "text-sm text-slate-600 flex items-start gap-1.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "shrink-0 mt-0.5 text-slate-400",
                                                                                                children: "–"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                                                                lineNumber: 558,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            sub
                                                                                        ]
                                                                                    }, si, true, {
                                                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                                                        lineNumber: 557,
                                                                                        columnNumber: 33
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                                                lineNumber: 555,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                                        lineNumber: 545,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, String(thm.number), true, {
                                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/topic/geometry/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, sec.id, true, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TipsBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            tips: tips
                        }, void 0, false, {
                            fileName: "[project]/app/topic/geometry/page.tsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 575,
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
                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-slate-400 mb-0.5",
                                                    children: "נושא קודם"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 19
                                                }, this),
                                                prev.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                            lineNumber: 585,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black",
                                    children: "← חזרה לדף הבית"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "px-3 py-2 rounded-lg text-xs text-black hover:bg-slate-100 transition-all font-medium",
                                children: "כל הנושאים"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 594,
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
                                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, this),
                                                next.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "◀"
                                        }, void 0, false, {
                                            fileName: "[project]/app/topic/geometry/page.tsx",
                                            lineNumber: 602,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black",
                                    children: "← חזרה לדף הבית"
                                }, void 0, false, {
                                    fileName: "[project]/app/topic/geometry/page.tsx",
                                    lineNumber: 605,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/topic/geometry/page.tsx",
                lineNumber: 450,
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
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white text-sm",
                                        children: "בגרות מתמטיקה 5 יח״ל"
                                    }, void 0, false, {
                                        fileName: "[project]/app/topic/geometry/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm",
                                children: "כיתה י״א – בהצלחה בבחינה!"
                            }, void 0, false, {
                                fileName: "[project]/app/topic/geometry/page.tsx",
                                lineNumber: 619,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/topic/geometry/page.tsx",
                        lineNumber: 614,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/topic/geometry/page.tsx",
                    lineNumber: 613,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/topic/geometry/page.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/topic/geometry/page.tsx",
        lineNumber: 414,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/topic/geometry/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/topic/geometry/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6d3638a2._.js.map