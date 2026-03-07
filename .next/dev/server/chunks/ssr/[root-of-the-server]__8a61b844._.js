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
                className: "lg:hidden border-t border-white/20 overflow-x-auto relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 px-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/test",
                                className: "text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-400",
                                children: "מבחן"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/topic/${topic.id}`,
                                    className: `text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: topic.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, topic.id, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
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
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/topics.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-b-2 border-black relative overflow-hidden",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
                            alt: "",
                            fill: true,
                            className: "object-cover opacity-[0.06]",
                            sizes: "100vw",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 w-52 xl:w-72 hidden lg:block overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
                                alt: "",
                                fill: true,
                                className: "object-cover opacity-[0.18]",
                                sizes: "(min-width: 1280px) 288px, 208px"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent to-white"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 w-52 xl:w-72 hidden lg:block overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
                                alt: "",
                                fill: true,
                                className: "object-cover opacity-[0.18]",
                                sizes: "(min-width: 1280px) 288px, 208px"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-l from-transparent to-white"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1200 520",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "30",
                                y: "90",
                                fill: "#000",
                                fontSize: "52",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.045",
                                fontWeight: "700",
                                children: "∫"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "85",
                                y: "75",
                                fill: "#000",
                                fontSize: "22",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "f(x)dx"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "20",
                                y: "200",
                                fill: "#000",
                                fontSize: "38",
                                fontFamily: "serif",
                                opacity: "0.04",
                                children: "∑"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "65",
                                y: "195",
                                fill: "#000",
                                fontSize: "16",
                                fontFamily: "monospace",
                                opacity: "0.035",
                                children: "n=1"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "15",
                                y: "320",
                                fill: "#000",
                                fontSize: "30",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.045",
                                children: "sin²x + cos²x = 1"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "25",
                                y: "430",
                                fill: "#000",
                                fontSize: "44",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.04",
                                children: "π"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "75",
                                y: "430",
                                fill: "#000",
                                fontSize: "24",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.035",
                                children: "≈ 3.14159"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "20",
                                y: "490",
                                fill: "#000",
                                fontSize: "18",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "aₙ = a₁ · qⁿ⁻¹"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1080",
                                y: "80",
                                fill: "#000",
                                fontSize: "48",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.04",
                                children: "√x"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1020",
                                y: "160",
                                fill: "#000",
                                fontSize: "20",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "x = −b ± √Δ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1060",
                                y: "260",
                                fill: "#000",
                                fontSize: "36",
                                fontFamily: "serif",
                                opacity: "0.045",
                                children: "∞"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1000",
                                y: "350",
                                fill: "#000",
                                fontSize: "18",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "f′(x) = lim Δx→0"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1040",
                                y: "440",
                                fill: "#000",
                                fontSize: "28",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.04",
                                children: "θ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1065",
                                y: "440",
                                fill: "#000",
                                fontSize: "20",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.035",
                                children: "= arctan(y/x)"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1010",
                                y: "500",
                                fill: "#000",
                                fontSize: "16",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "P(A) = m/n"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "520",
                                y: "40",
                                fill: "#000",
                                fontSize: "26",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.035",
                                children: "2πr"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "580",
                                y: "490",
                                fill: "#000",
                                fontSize: "22",
                                fontFamily: "monospace",
                                opacity: "0.035",
                                children: "Sₙ = n/2·(a₁+aₙ)"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "490",
                                y: "500",
                                fill: "#000",
                                fontSize: "34",
                                fontFamily: "serif",
                                opacity: "0.03",
                                children: "Δ = b²−4ac"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch min-h-[420px] md:min-h-[520px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-col items-center justify-center border-r border-slate-200 px-6 py-10 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap",
                                        style: {
                                            writingMode: "vertical-rl",
                                            transform: "rotate(180deg)"
                                        },
                                        children: "מתמטיקה · שאלון 581"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px flex-1 bg-slate-200 mt-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-10 w-full max-w-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black font-semibold text-sm tracking-[0.2em] uppercase whitespace-nowrap",
                                                children: "כיתה י״א · 5 יחידות לימוד"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "leading-none tracking-tighter text-center w-full",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block font-black text-black",
                                                style: {
                                                    fontSize: "clamp(2rem, 10vw, 8rem)"
                                                },
                                                children: "הכנה על ידי"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block font-black text-black mt-1",
                                                style: {
                                                    fontSize: "clamp(2.5rem, 17vw, 12rem)"
                                                },
                                                children: "תרגול"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-10 w-full max-w-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black text-sm md:text-base text-center",
                                                dir: "rtl",
                                                children: "כל הנושאים, הנוסחאות והדוגמאות הפתורות במקום אחד"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/test",
                                        className: "mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors",
                                        dir: "rtl",
                                        children: "התחל מבחן מלא ←"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-col items-center justify-center border-l border-slate-200 px-6 py-10 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px flex-1 bg-slate-200 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap",
                                        style: {
                                            writingMode: "vertical-rl"
                                        },
                                        children: "5 יחידות לימוד"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center border-t border-slate-200",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 flex items-center justify-center py-8 px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 500 240",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "20",
                                    y1: "120",
                                    x2: "480",
                                    y2: "120",
                                    stroke: "#94a3b8",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 480 120 L 472 115 L 472 125 Z",
                                    fill: "#94a3b8"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 20 120 C 57 40, 57 40, 95 120 C 133 200, 133 200, 170 120 C 207 40, 207 40, 245 120 C 283 200, 283 200, 320 120 C 357 40, 357 40, 395 120 C 433 200, 433 200, 470 120",
                                    stroke: "#0d9488",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "22",
                                    y: "58",
                                    fill: "#0d9488",
                                    fontSize: "20",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    fontWeight: "700",
                                    children: "sin(x)"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "175",
                                    y: "215",
                                    fill: "#3b82f6",
                                    fontSize: "17",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    children: "cos(x)"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "240",
                                    y: "55",
                                    fill: "#6366f1",
                                    fontSize: "13",
                                    fontFamily: "monospace",
                                    children: "f(x) = A · sin(ωx + φ)"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "360",
                                    y: "210",
                                    fill: "#0d9488",
                                    fontSize: "28",
                                    fontFamily: "serif",
                                    fontWeight: "700",
                                    opacity: "0.65",
                                    children: "π"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "420",
                                    y: "52",
                                    fill: "#3b82f6",
                                    fontSize: "14",
                                    fontFamily: "monospace",
                                    opacity: "0.8",
                                    children: "2π"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "22",
                                    y: "215",
                                    fill: "#3b82f6",
                                    fontSize: "13",
                                    fontFamily: "monospace",
                                    opacity: "0.7",
                                    children: "T = 2π/ω"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden",
                        dir: "rtl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 400 300",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "12",
                                        y: "38",
                                        fill: "#0d9488",
                                        fontSize: "32",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.12",
                                        fontWeight: "700",
                                        children: "∫f(x)dx"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "300",
                                        y: "30",
                                        fill: "#6366f1",
                                        fontSize: "20",
                                        fontFamily: "monospace",
                                        opacity: "0.1",
                                        children: "d/dx"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "10",
                                        y: "280",
                                        fill: "#3b82f6",
                                        fontSize: "18",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.1",
                                        children: "lim f(x)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "295",
                                        y: "275",
                                        fill: "#0d9488",
                                        fontSize: "22",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.11",
                                        children: "f′(x)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "12",
                                        y: "160",
                                        fill: "#6366f1",
                                        fontSize: "14",
                                        fontFamily: "monospace",
                                        opacity: "0.09",
                                        children: "y = mx + b"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "310",
                                        y: "155",
                                        fill: "#3b82f6",
                                        fontSize: "28",
                                        fontFamily: "serif",
                                        opacity: "0.1",
                                        children: "∞"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 320 60 C 320 18 380 18 380 60",
                                        stroke: "#0d9488",
                                        strokeWidth: "1.5",
                                        opacity: "0.13"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "350",
                                        cy: "22",
                                        r: "3",
                                        fill: "#0d9488",
                                        opacity: "0.15"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative text-right leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl md:text-6xl font-black tracking-tight text-black",
                                        children: "פתח את"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-8xl font-black tracking-tight text-black mt-1",
                                        children: "המוח"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl md:text-9xl font-black tracking-tighter text-black mt-1",
                                        children: "שלך"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs",
                                        children: "כשנתקלים בשאלה קשה — נסו לפתור אותה בשתי דרכים שונות. הדרך השנייה תפתח הבנה חדשה."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center border-t border-slate-200",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden",
                        dir: "rtl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 400 300",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "10",
                                        y: "35",
                                        fill: "#6366f1",
                                        fontSize: "22",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.12",
                                        children: "C(n,r)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "300",
                                        y: "32",
                                        fill: "#0d9488",
                                        fontSize: "18",
                                        fontFamily: "monospace",
                                        opacity: "0.11",
                                        children: "P(A∩B)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "10",
                                        y: "278",
                                        fill: "#3b82f6",
                                        fontSize: "20",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.1",
                                        children: "n!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "305",
                                        y: "272",
                                        fill: "#6366f1",
                                        fontSize: "16",
                                        fontFamily: "monospace",
                                        opacity: "0.1",
                                        children: "1/2 · n · (n+1)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "12",
                                        y: "158",
                                        fill: "#0d9488",
                                        fontSize: "28",
                                        fontFamily: "serif",
                                        opacity: "0.1",
                                        children: "∑"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "316",
                                        y: "155",
                                        fill: "#3b82f6",
                                        fontSize: "16",
                                        fontFamily: "monospace",
                                        opacity: "0.09",
                                        children: "P(A) = m/n"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "355",
                                        cy: "55",
                                        r: "28",
                                        stroke: "#6366f1",
                                        strokeWidth: "1.2",
                                        opacity: "0.12",
                                        fill: "none",
                                        strokeDasharray: "4 3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "348",
                                        y: "59",
                                        fill: "#6366f1",
                                        fontSize: "11",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.15",
                                        children: "r=1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative text-right leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-8xl font-black tracking-tight text-black",
                                        children: "ללמוד"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl md:text-9xl font-black tracking-tighter text-black mt-2",
                                        children: "מעשייה"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs",
                                        children: "פתרון עשרה תרגילים שווה יותר מקריאת מאה עמודי סיכום. המוח לומד מתוך עשייה, לא מתוך קריאה."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 flex items-center justify-center py-8 px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 500 240",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "80",
                                    fill: "#0f766e",
                                    fontSize: "20",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    fontWeight: "700",
                                    children: "x = −b ± √(b²−4ac)"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "115",
                                    fill: "#0f766e",
                                    fontSize: "20",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    fontWeight: "700",
                                    children: "           2a"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "20",
                                    y1: "122",
                                    x2: "310",
                                    y2: "122",
                                    stroke: "#0f766e",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 330 210 L 480 210 L 480 60 Z",
                                    stroke: "#6366f1",
                                    strokeWidth: "2",
                                    fill: "#6366f1",
                                    fillOpacity: "0.07"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 463 210 L 463 193 L 480 193",
                                    stroke: "#6366f1",
                                    strokeWidth: "1.4",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "342",
                                    y: "202",
                                    fill: "#6366f1",
                                    fontSize: "16",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    children: "θ"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "398",
                                    y: "228",
                                    fill: "#6366f1",
                                    fontSize: "13",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    opacity: "0.8",
                                    children: "a"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "486",
                                    y: "142",
                                    fill: "#6366f1",
                                    fontSize: "13",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    opacity: "0.8",
                                    children: "b"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "388",
                                    y: "118",
                                    fill: "#6366f1",
                                    fontSize: "13",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    opacity: "0.8",
                                    children: "c"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "180",
                                    fill: "#3b82f6",
                                    fontSize: "15",
                                    fontFamily: "monospace",
                                    opacity: "0.8",
                                    children: "a² + b² = c²"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "215",
                                    fill: "#0d9488",
                                    fontSize: "13",
                                    fontFamily: "monospace",
                                    opacity: "0.7",
                                    children: "Δ = b²−4ac"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "220",
                                    y: "185",
                                    fill: "#6366f1",
                                    fontSize: "28",
                                    fontFamily: "serif",
                                    opacity: "0.5",
                                    children: "∑"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "270",
                                    y: "178",
                                    fill: "#3b82f6",
                                    fontSize: "24",
                                    fontFamily: "serif",
                                    opacity: "0.5",
                                    children: "π"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center border-t border-slate-200",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 flex items-center justify-center py-8 px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 500 240",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full max-w-md",
                            children: [
                                [
                                    {
                                        x: 30,
                                        label: "a₁"
                                    },
                                    {
                                        x: 120,
                                        label: "a₂"
                                    },
                                    {
                                        x: 210,
                                        label: "a₃"
                                    },
                                    {
                                        x: 370,
                                        label: "aₙ"
                                    }
                                ].map(({ x, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: x + 25,
                                                cy: 70,
                                                r: "26",
                                                fill: "none",
                                                stroke: "#6366f1",
                                                strokeWidth: "1.8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: x + 25,
                                                y: "76",
                                                fill: "#4f46e5",
                                                fontSize: "15",
                                                fontFamily: "serif",
                                                fontStyle: "italic",
                                                fontWeight: "600",
                                                textAnchor: "middle",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, x, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)),
                                [
                                    56,
                                    146
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M ${x + 24} 70 L ${x + 44} 70`,
                                        stroke: "#6366f1",
                                        strokeWidth: "1.4",
                                        markerEnd: "url(#ar2)"
                                    }, x, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                        id: "ar2",
                                        markerWidth: "7",
                                        markerHeight: "7",
                                        refX: "4",
                                        refY: "3.5",
                                        orient: "auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 0 0 L 7 3.5 L 0 7 Z",
                                            fill: "#6366f1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "310",
                                    y: "76",
                                    fill: "#6366f1",
                                    fontSize: "20",
                                    fontFamily: "serif",
                                    opacity: "0.6",
                                    children: "···"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "150",
                                    fill: "#4f46e5",
                                    fontSize: "16",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    fontWeight: "600",
                                    children: "Sₙ = n/2 · (a₁ + aₙ)"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "30",
                                    y: "200",
                                    fill: "#0d9488",
                                    fontSize: "14",
                                    fontFamily: "monospace",
                                    opacity: "0.85",
                                    children: "aₙ = a₁ + (n−1)d"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "30",
                                    y: "238",
                                    fill: "#3b82f6",
                                    fontSize: "14",
                                    fontFamily: "monospace",
                                    opacity: "0.8",
                                    children: "P(A) = m / n"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "360",
                                    y: "175",
                                    fill: "#6366f1",
                                    fontSize: "14",
                                    fontFamily: "monospace",
                                    opacity: "0.8",
                                    children: "C(n,r) = n! / r!(n-r)!"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "430",
                                    y: "240",
                                    fill: "#4f46e5",
                                    fontSize: "22",
                                    fontFamily: "serif",
                                    opacity: "0.5",
                                    children: "∞"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden",
                        dir: "rtl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 400 300",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "10",
                                        y: "35",
                                        fill: "#0d9488",
                                        fontSize: "20",
                                        fontFamily: "monospace",
                                        opacity: "0.11",
                                        children: "f′′(x) = 0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "298",
                                        y: "30",
                                        fill: "#6366f1",
                                        fontSize: "22",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.12",
                                        children: "max"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "10",
                                        y: "278",
                                        fill: "#3b82f6",
                                        fontSize: "18",
                                        fontFamily: "monospace",
                                        opacity: "0.1",
                                        children: "x = −b/2a"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "315",
                                        y: "275",
                                        fill: "#0d9488",
                                        fontSize: "20",
                                        fontFamily: "serif",
                                        fontStyle: "italic",
                                        opacity: "0.11",
                                        children: "min"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "12",
                                        y: "158",
                                        fill: "#6366f1",
                                        fontSize: "14",
                                        fontFamily: "monospace",
                                        opacity: "0.09",
                                        children: "f(x) = ax² + bx + c"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 318 260 C 318 218 378 218 378 260",
                                        stroke: "#0d9488",
                                        strokeWidth: "1.5",
                                        opacity: "0.14",
                                        transform: "scale(1,-1) translate(0,-300)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "348",
                                        cy: "42",
                                        r: "3",
                                        fill: "#0d9488",
                                        opacity: "0.17"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "335",
                                        y: "38",
                                        fill: "#0d9488",
                                        fontSize: "9",
                                        fontFamily: "serif",
                                        opacity: "0.18",
                                        children: "vertex"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 340 230 L 390 230 L 390 180 Z",
                                        stroke: "#6366f1",
                                        strokeWidth: "1.2",
                                        opacity: "0.12",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative text-right leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl md:text-9xl font-black tracking-tighter text-black",
                                        children: "הצלחה"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl md:text-7xl font-black tracking-tight text-black mt-2",
                                        children: "מתחילה"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-6xl font-black tracking-tight text-black mt-1",
                                        children: "בלימוד"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs",
                                        children: "30 דקות לימוד יומיות לאורך חודש שוות יותר מ־8 שעות לפני הבחינה. הרגלים קטנים בונים ידע אמיתי."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto px-4 py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/topic/${topic.id}`,
                            className: "group flex flex-col justify-between bg-black rounded-2xl p-6 min-h-48 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 hover:-translate-y-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-white text-lg leading-snug",
                                    children: topic.title
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-sm leading-relaxed",
                                    children: topic.description
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-3 border-t border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-white/60",
                                            children: [
                                                topic.formulas.length + topic.examples.length,
                                                " נושאים"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-white flex items-center gap-1",
                                            children: [
                                                "קרא עוד",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "group-hover:-translate-x-0.5 transition-transform inline-block",
                                                    children: "◀"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, topic.id, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black border-t-2 border-black",
                dir: "rtl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4",
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
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white text-sm md:text-base",
                                        children: "בגרות מתמטיקה 5 יח״ל"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm",
                                children: "כיתה י״א – בהצלחה בבחינה!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8a61b844._.js.map