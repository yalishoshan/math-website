module.exports = [
"[project]/data/topics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/AuthModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function AuthModal({ onClose }) {
    const { login, signup, loginAsGuest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [loginEmail, setLoginEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [signupName, setSignupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [signupEmail, setSignupEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [signupPassword, setSignupPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [signupError, setSignupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        onClose
    ]);
    function handleLogin(e) {
        e.preventDefault();
        setLoginError("");
        const err = login(loginEmail, loginPassword);
        if (err) setLoginError(err);
        else onClose();
    }
    function handleSignup(e) {
        e.preventDefault();
        setSignupError("");
        if (!signupName.trim()) {
            setSignupError("נא להזין שם");
            return;
        }
        if (!signupEmail.trim()) {
            setSignupError("נא להזין מייל");
            return;
        }
        if (signupPassword.length < 6) {
            setSignupError("הסיסמה חייבת להכיל לפחות 6 תווים");
            return;
        }
        const err = signup(signupName.trim(), signupEmail.trim(), signupPassword);
        if (err) setSignupError(err);
        else onClose();
    }
    function handleGuest() {
        loginAsGuest();
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/AuthModal.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 left-4 text-black/30 hover:text-black transition-colors text-xl font-bold leading-none",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b-2 border-black mb-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTab("login");
                                    setLoginError("");
                                },
                                className: `pb-3 px-1 ml-6 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${tab === "login" ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"}`,
                                children: "כניסה"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTab("signup");
                                    setSignupError("");
                                },
                                className: `pb-3 px-1 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${tab === "signup" ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"}`,
                                children: "הרשמה"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    tab === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-black/60",
                                        children: "כתובת מייל"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: loginEmail,
                                        onChange: (e)=>setLoginEmail(e.target.value),
                                        placeholder: "example@email.com",
                                        required: true,
                                        dir: "ltr",
                                        className: "w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-black/60",
                                        children: "סיסמה"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        value: loginPassword,
                                        onChange: (e)=>setLoginPassword(e.target.value),
                                        placeholder: "••••••",
                                        required: true,
                                        dir: "ltr",
                                        className: "w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            loginError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs font-medium",
                                children: loginError
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 75,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm",
                                children: "כניסה ←"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    tab === "signup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSignup,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-black/60",
                                        children: "שם מלא"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: signupName,
                                        onChange: (e)=>setSignupName(e.target.value),
                                        placeholder: "ישראל ישראלי",
                                        required: true,
                                        dir: "rtl",
                                        className: "w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-black/60",
                                        children: "כתובת מייל"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: signupEmail,
                                        onChange: (e)=>setSignupEmail(e.target.value),
                                        placeholder: "example@email.com",
                                        required: true,
                                        dir: "ltr",
                                        className: "w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-black/60",
                                        children: "סיסמה"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        value: signupPassword,
                                        onChange: (e)=>setSignupPassword(e.target.value),
                                        placeholder: "לפחות 6 תווים",
                                        required: true,
                                        dir: "ltr",
                                        className: "w-full border-2 border-black/10 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AuthModal.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            signupError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs font-medium",
                                children: signupError
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 97,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm",
                                children: "הרשמה ←"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 my-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-px bg-black/10"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-black/30 font-medium",
                                children: "או"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-px bg-black/10"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthModal.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGuest,
                        className: "w-full border-2 border-black/10 hover:border-black text-black font-bold py-3 rounded-xl transition-colors text-sm",
                        children: "המשך כאורח ←"
                    }, void 0, false, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs text-black/30 mt-4",
                        children: "גישת אורח אינה שומרת התקדמות"
                    }, void 0, false, {
                        fileName: "[project]/components/AuthModal.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AuthModal.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AuthModal.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/topics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuthModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navbar({ activeTopicId }) {
    const { auth, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayName = auth?.type === "user" ? auth.name.split(" ")[0] : auth?.type === "guest" ? "אורח" : null;
    const isGuest = auth?.type === "guest";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 bg-black border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2.5 shrink-0 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-xl",
                                            style: {
                                                fontFamily: "serif",
                                                fontStyle: "italic"
                                            },
                                            children: "∑"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white text-sm md:text-base",
                                            children: "בגרות מתמטיקה 5 יח״ל"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex items-center gap-0.5 overflow-x-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/test",
                                            className: "text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1.5 bg-teal-500 text-white rounded-md hover:bg-teal-400 ml-1",
                                            children: "מבחן"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/topic/${topic.id}`,
                                                className: `text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: topic.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this)
                                            }, topic.id, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mr-2 pr-2 border-r border-white/20",
                                            children: displayName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-semibold px-2.5 py-1 rounded-full ${isGuest ? "bg-white/10 text-white/60" : "bg-violet-600 text-white"}`,
                                                        children: displayName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: logout,
                                                        className: "text-xs text-white/40 hover:text-white transition-colors underline underline-offset-2",
                                                        children: "יציאה"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setModalOpen(true),
                                                className: "text-xs font-semibold px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-md transition-colors whitespace-nowrap",
                                                children: "כניסה / הרשמה"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden border-t border-white/20 overflow-x-auto relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 px-4 py-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/test",
                                        className: "text-xs font-semibold whitespace-nowrap transition-colors px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-400",
                                        children: "מבחן"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/topic/${topic.id}`,
                                            className: `text-xs font-medium whitespace-nowrap transition-colors px-2 py-1 ${activeTopicId === topic.id ? "text-white font-semibold underline underline-offset-4" : "text-white/60 hover:text-white"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: topic.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        }, topic.id, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)),
                                    displayName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap mr-auto ${isGuest ? "bg-white/10 text-white/60" : "bg-violet-600 text-white"}`,
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: logout,
                                                className: "text-xs text-white/40 hover:text-white transition-colors whitespace-nowrap underline underline-offset-2",
                                                children: "יציאה"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setModalOpen(true),
                                        className: "text-xs font-semibold px-3 py-1 bg-violet-600 hover:bg-violet-500 text-white rounded-md transition-colors whitespace-nowrap mr-auto",
                                        children: "כניסה"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 102,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/HomeClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/topics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function HomeClient() {
    const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const displayName = auth?.type === "user" ? auth.name : auth?.type === "guest" ? "אורח" : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-b-2 border-black relative overflow-hidden",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
                            alt: "",
                            fill: true,
                            className: "object-cover opacity-[0.06]",
                            sizes: "100vw",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/HomeClient.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 w-52 xl:w-72 hidden lg:block overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
                                alt: "",
                                fill: true,
                                className: "object-cover opacity-[0.18]",
                                sizes: "(min-width: 1280px) 288px, 208px"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent to-white"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 w-52 xl:w-72 hidden lg:block overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
                                alt: "",
                                fill: true,
                                className: "object-cover opacity-[0.18]",
                                sizes: "(min-width: 1280px) 288px, 208px"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-l from-transparent to-white"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1200 520",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "85",
                                y: "75",
                                fill: "#000",
                                fontSize: "22",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "f(x)dx"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "20",
                                y: "200",
                                fill: "#000",
                                fontSize: "38",
                                fontFamily: "serif",
                                opacity: "0.04",
                                children: "∑"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "15",
                                y: "320",
                                fill: "#000",
                                fontSize: "30",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.045",
                                children: "sin²x + cos²x = 1"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "25",
                                y: "430",
                                fill: "#000",
                                fontSize: "44",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.04",
                                children: "π"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "20",
                                y: "490",
                                fill: "#000",
                                fontSize: "18",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "aₙ = a₁ · qⁿ⁻¹"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1080",
                                y: "80",
                                fill: "#000",
                                fontSize: "48",
                                fontFamily: "serif",
                                fontStyle: "italic",
                                opacity: "0.04",
                                children: "√x"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1020",
                                y: "160",
                                fill: "#000",
                                fontSize: "20",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "x = −b ± √Δ"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1060",
                                y: "260",
                                fill: "#000",
                                fontSize: "36",
                                fontFamily: "serif",
                                opacity: "0.045",
                                children: "∞"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "1010",
                                y: "500",
                                fill: "#000",
                                fontSize: "16",
                                fontFamily: "monospace",
                                opacity: "0.04",
                                children: "P(A) = m/n"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "580",
                                y: "490",
                                fill: "#000",
                                fontSize: "22",
                                fontFamily: "monospace",
                                opacity: "0.035",
                                children: "Sₙ = n/2·(a₁+aₙ)"
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch min-h-[420px] md:min-h-[520px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-col items-center justify-center border-r border-slate-200 px-6 py-10 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap",
                                        style: {
                                            writingMode: "vertical-rl",
                                            transform: "rotate(180deg)"
                                        },
                                        children: "מתמטיקה · שאלון 581"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px flex-1 bg-slate-200 mt-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-10 w-full max-w-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black font-semibold text-sm tracking-[0.2em] uppercase whitespace-nowrap",
                                                children: "כיתה י״א · 5 יחידות לימוד"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "leading-none tracking-tighter text-center w-full",
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block font-black text-black",
                                                style: {
                                                    fontSize: "clamp(2rem, 10vw, 8rem)"
                                                },
                                                children: "הכנה על ידי"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block font-black text-black mt-1",
                                                style: {
                                                    fontSize: "clamp(2.5rem, 17vw, 12rem)"
                                                },
                                                children: "תרגול"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-10 w-full max-w-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black text-sm md:text-base text-center",
                                                dir: "rtl",
                                                children: "כל הנושאים, הנוסחאות והדוגמאות הפתורות במקום אחד"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block flex-1 h-px bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/test",
                                        className: "mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors",
                                        dir: "rtl",
                                        children: "התחל מבחן מלא ←"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-col items-center justify-center border-l border-slate-200 px-6 py-10 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px flex-1 bg-slate-200 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap",
                                        style: {
                                            writingMode: "vertical-rl"
                                        },
                                        children: "5 יחידות לימוד"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center border-t border-slate-200",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 flex items-center justify-center py-8 px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 500 240",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "20",
                                    y1: "120",
                                    x2: "480",
                                    y2: "120",
                                    stroke: "#94a3b8",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 480 120 L 472 115 L 472 125 Z",
                                    fill: "#94a3b8"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 20 120 C 57 40, 57 40, 95 120 C 133 200, 133 200, 170 120 C 207 40, 207 40, 245 120 C 283 200, 283 200, 320 120 C 357 40, 357 40, 395 120 C 433 200, 433 200, 470 120",
                                    stroke: "#0d9488",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "22",
                                    y: "58",
                                    fill: "#0d9488",
                                    fontSize: "20",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    fontWeight: "700",
                                    children: "sin(x)"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "240",
                                    y: "55",
                                    fill: "#6366f1",
                                    fontSize: "13",
                                    fontFamily: "monospace",
                                    children: "f(x) = A · sin(ωx + φ)"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "22",
                                    y: "215",
                                    fill: "#3b82f6",
                                    fontSize: "13",
                                    fontFamily: "monospace",
                                    opacity: "0.7",
                                    children: "T = 2π/ω"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/HomeClient.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden",
                        dir: "rtl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative text-right leading-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl md:text-6xl font-black tracking-tight text-black",
                                    children: "פתח את"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl md:text-8xl font-black tracking-tight text-black mt-1",
                                    children: "המוח"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl md:text-9xl font-black tracking-tighter text-black mt-1",
                                    children: "שלך"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs",
                                    children: "כשנתקלים בשאלה קשה — נסו לפתור אותה בשתי דרכים שונות."
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/HomeClient.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center border-t border-slate-200",
                dir: "ltr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden",
                        dir: "rtl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative text-right leading-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl md:text-8xl font-black tracking-tight text-black",
                                    children: "ללמוד"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl md:text-9xl font-black tracking-tighter text-black mt-2",
                                    children: "מעשייה"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs",
                                    children: "פתרון עשרה תרגילים שווה יותר מקריאת מאה עמודי סיכום."
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/HomeClient.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 flex items-center justify-center py-8 px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 500 240",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "80",
                                    fill: "#0f766e",
                                    fontSize: "20",
                                    fontFamily: "serif",
                                    fontStyle: "italic",
                                    fontWeight: "700",
                                    children: "x = −b ± √(b²−4ac)"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "20",
                                    y1: "122",
                                    x2: "310",
                                    y2: "122",
                                    stroke: "#0f766e",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 330 210 L 480 210 L 480 60 Z",
                                    stroke: "#6366f1",
                                    strokeWidth: "2",
                                    fill: "#6366f1",
                                    fillOpacity: "0.07"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "20",
                                    y: "180",
                                    fill: "#3b82f6",
                                    fontSize: "15",
                                    fontFamily: "monospace",
                                    opacity: "0.8",
                                    children: "a² + b² = c²"
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/HomeClient.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200"
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto px-4 py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$topics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topics"].map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/topic/${topic.id}`,
                            className: "group flex flex-col justify-between bg-black rounded-2xl p-6 min-h-48 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 hover:-translate-y-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-white text-lg leading-snug",
                                    children: topic.title
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-sm leading-relaxed",
                                    children: topic.description
                                }, void 0, false, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-3 border-t border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-white/60",
                                            children: [
                                                topic.formulas.length + topic.examples.length,
                                                " נושאים"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/HomeClient.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-white flex items-center gap-1",
                                            children: [
                                                "קרא עוד ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "group-hover:-translate-x-0.5 transition-transform inline-block",
                                                    children: "◀"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/HomeClient.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 100
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/HomeClient.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/HomeClient.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, topic.id, true, {
                            fileName: "[project]/app/HomeClient.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/HomeClient.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black border-t-2 border-black",
                dir: "rtl",
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
                                        className: "text-white font-bold text-xl",
                                        style: {
                                            fontFamily: "serif",
                                            fontStyle: "italic"
                                        },
                                        children: "∑"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white text-sm md:text-base",
                                        children: "בגרות מתמטיקה 5 יח״ל"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    displayName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/50 text-xs hidden sm:block",
                                        children: [
                                            "מחובר כ: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80 font-semibold",
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/app/HomeClient.tsx",
                                                lineNumber: 146,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-sm",
                                        children: "כיתה י״א – בהצלחה בבחינה!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/HomeClient.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/HomeClient.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ad266a5e._.js.map