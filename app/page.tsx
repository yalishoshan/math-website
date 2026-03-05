import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { topics } from "@/data/topics";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero — Full-width headline */}
      <section className="bg-white border-b-2 border-black relative overflow-hidden" dir="ltr">

        {/* Background math photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>

        {/* Side photos */}
        <div className="absolute inset-y-0 left-0 w-52 xl:w-72 hidden lg:block overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.18]"
            sizes="(min-width: 1280px) 288px, 208px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
        </div>
        <div className="absolute inset-y-0 right-0 w-52 xl:w-72 hidden lg:block overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.18]"
            sizes="(min-width: 1280px) 288px, 208px"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
        </div>

        {/* Floating math symbols — decorative background */}
        <svg viewBox="0 0 1200 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none">
          <text x="30"   y="90"  fill="#000" fontSize="52" fontFamily="serif" fontStyle="italic" opacity="0.045" fontWeight="700">∫</text>
          <text x="85"   y="75"  fill="#000" fontSize="22" fontFamily="monospace" opacity="0.04">f(x)dx</text>
          <text x="20"   y="200" fill="#000" fontSize="38" fontFamily="serif" opacity="0.04">∑</text>
          <text x="65"   y="195" fill="#000" fontSize="16" fontFamily="monospace" opacity="0.035">n=1</text>
          <text x="15"   y="320" fill="#000" fontSize="30" fontFamily="serif" fontStyle="italic" opacity="0.045">sin²x + cos²x = 1</text>
          <text x="25"   y="430" fill="#000" fontSize="44" fontFamily="serif" fontStyle="italic" opacity="0.04">π</text>
          <text x="75"   y="430" fill="#000" fontSize="24" fontFamily="serif" fontStyle="italic" opacity="0.035">≈ 3.14159</text>
          <text x="20"   y="490" fill="#000" fontSize="18" fontFamily="monospace" opacity="0.04">aₙ = a₁ · qⁿ⁻¹</text>

          <text x="1080" y="80"  fill="#000" fontSize="48" fontFamily="serif" fontStyle="italic" opacity="0.04">√x</text>
          <text x="1020" y="160" fill="#000" fontSize="20" fontFamily="monospace" opacity="0.04">x = −b ± √Δ</text>
          <text x="1060" y="260" fill="#000" fontSize="36" fontFamily="serif" opacity="0.045">∞</text>
          <text x="1000" y="350" fill="#000" fontSize="18" fontFamily="monospace" opacity="0.04">f′(x) = lim Δx→0</text>
          <text x="1040" y="440" fill="#000" fontSize="28" fontFamily="serif" fontStyle="italic" opacity="0.04">θ</text>
          <text x="1065" y="440" fill="#000" fontSize="20" fontFamily="serif" fontStyle="italic" opacity="0.035">= arctan(y/x)</text>
          <text x="1010" y="500" fill="#000" fontSize="16" fontFamily="monospace" opacity="0.04">P(A) = m/n</text>

          <text x="520"  y="40"  fill="#000" fontSize="26" fontFamily="serif" fontStyle="italic" opacity="0.035">2πr</text>
          <text x="580"  y="490" fill="#000" fontSize="22" fontFamily="monospace" opacity="0.035">Sₙ = n/2·(a₁+aₙ)</text>
          <text x="490"  y="500" fill="#000" fontSize="34" fontFamily="serif" opacity="0.03">Δ = b²−4ac</text>
        </svg>

        <div className="flex items-stretch min-h-[420px] md:min-h-[520px]">

          {/* Side quote — left vertical strip */}
          <div className="hidden md:flex flex-col items-center justify-center border-r border-slate-200 px-6 py-10 shrink-0">
            <p
              className="text-black font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              מתמטיקה · שאלון 581
            </p>
            <div className="w-px flex-1 bg-slate-200 mt-4" />
          </div>

          {/* Main headline — centered */}
          <div className="flex-1 flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center">

            {/* Label with lines */}
            <div className="flex items-center gap-4 mb-10 w-full max-w-xs">
              <div className="flex-1 h-px bg-slate-300" />
              <p className="text-black font-semibold text-sm tracking-[0.2em] uppercase whitespace-nowrap">
                כיתה י״א · 5 יחידות לימוד
              </p>
              <div className="flex-1 h-px bg-slate-300" />
            </div>

            <h1 className="leading-none tracking-tighter text-center w-full" dir="rtl">
              <span className="block font-black text-black" style={{ fontSize: "clamp(2rem, 10vw, 8rem)" }}>
                הכנה על ידי
              </span>
              <span className="block font-black text-black mt-1" style={{ fontSize: "clamp(2.5rem, 17vw, 12rem)" }}>
                תרגול
              </span>
            </h1>

            {/* Subtitle with lines */}
            <div className="flex items-center gap-4 mt-10 w-full max-w-md">
              <div className="flex-1 h-px bg-slate-300" />
              <p className="text-black text-sm md:text-base whitespace-nowrap" dir="rtl">
                כל הנושאים, הנוסחאות והדוגמאות הפתורות במקום אחד
              </p>
              <div className="flex-1 h-px bg-slate-300" />
            </div>

            {/* CTA */}
            <Link
              href="/test"
              className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
              dir="rtl"
            >
              התחל מבחן מלא ←
            </Link>

          </div>

          {/* Mirror strip — right side for balance */}
          <div className="hidden md:flex flex-col items-center justify-center border-l border-slate-200 px-6 py-10 shrink-0">
            <div className="w-px flex-1 bg-slate-200 mb-4" />
            <p
              className="text-slate-300 font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl" }}
            >
              5 יחידות לימוד
            </p>
          </div>

        </div>
      </section>

      {/* Quotes + SVGs — alternating sides */}

      {/* Row 1: illustration left | Quote right */}
      <div className="flex flex-col md:flex-row items-center border-t border-slate-200" dir="ltr">
        <div className="md:w-1/2 flex items-center justify-center py-8 px-10">
          <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            {/* x-axis */}
            <line x1="20" y1="120" x2="480" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 480 120 L 472 115 L 472 125 Z" fill="#94a3b8" />
            {/* Sine wave */}
            <path
              d="M 20 120 C 57 40, 57 40, 95 120 C 133 200, 133 200, 170 120 C 207 40, 207 40, 245 120 C 283 200, 283 200, 320 120 C 357 40, 357 40, 395 120 C 433 200, 433 200, 470 120"
              stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"
            />
            <text x="22"  y="58"  fill="#0d9488" fontSize="20" fontFamily="serif" fontStyle="italic" fontWeight="700">sin(x)</text>
            <text x="175" y="215" fill="#3b82f6" fontSize="17" fontFamily="serif" fontStyle="italic">cos(x)</text>
            <text x="240" y="55"  fill="#6366f1" fontSize="13" fontFamily="monospace">f(x) = A · sin(ωx + φ)</text>
            <text x="360" y="210" fill="#0d9488" fontSize="28" fontFamily="serif" fontWeight="700" opacity="0.65">π</text>
            <text x="420" y="52"  fill="#3b82f6" fontSize="14" fontFamily="monospace" opacity="0.8">2π</text>
            <text x="22"  y="215" fill="#3b82f6" fontSize="13" fontFamily="monospace" opacity="0.7">T = 2π/ω</text>
          </svg>
        </div>
        <div className="md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden" dir="rtl">
          {/* floating math — calculus */}
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none">
            <text x="12"  y="38"  fill="#0d9488" fontSize="32" fontFamily="serif" fontStyle="italic" opacity="0.12" fontWeight="700">∫f(x)dx</text>
            <text x="300" y="30"  fill="#6366f1" fontSize="20" fontFamily="monospace" opacity="0.1">d/dx</text>
            <text x="10"  y="280" fill="#3b82f6" fontSize="18" fontFamily="serif" fontStyle="italic" opacity="0.1">lim f(x)</text>
            <text x="295" y="275" fill="#0d9488" fontSize="22" fontFamily="serif" fontStyle="italic" opacity="0.11">f′(x)</text>
            <text x="12"  y="160" fill="#6366f1" fontSize="14" fontFamily="monospace" opacity="0.09">y = mx + b</text>
            <text x="310" y="155" fill="#3b82f6" fontSize="28" fontFamily="serif" opacity="0.1">∞</text>
            {/* small parabola */}
            <path d="M 320 60 C 320 18 380 18 380 60" stroke="#0d9488" strokeWidth="1.5" opacity="0.13" />
            <circle cx="350" cy="22" r="3" fill="#0d9488" opacity="0.15" />
          </svg>
          <div className="relative text-right leading-none">
            <div className="text-5xl md:text-6xl font-black tracking-tight text-black">פתח את</div>
            <div className="text-6xl md:text-8xl font-black tracking-tight text-black mt-1">המוח</div>
            <div className="text-7xl md:text-9xl font-black tracking-tighter text-black mt-1">שלך</div>
            <p className="text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs">
              כשנתקלים בשאלה קשה — נסו לפתור אותה בשתי דרכים שונות. הדרך השנייה תפתח הבנה חדשה.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Quote left | illustration right */}
      <div className="flex flex-col md:flex-row items-center border-t border-slate-200" dir="ltr">
        <div className="md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden" dir="rtl">
          {/* floating math — probability & combinatorics */}
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none">
            <text x="10"  y="35"  fill="#6366f1" fontSize="22" fontFamily="serif" fontStyle="italic" opacity="0.12">C(n,r)</text>
            <text x="300" y="32"  fill="#0d9488" fontSize="18" fontFamily="monospace" opacity="0.11">P(A∩B)</text>
            <text x="10"  y="278" fill="#3b82f6" fontSize="20" fontFamily="serif" fontStyle="italic" opacity="0.1">n!</text>
            <text x="305" y="272" fill="#6366f1" fontSize="16" fontFamily="monospace" opacity="0.1">1/2 · n · (n+1)</text>
            <text x="12"  y="158" fill="#0d9488" fontSize="28" fontFamily="serif" opacity="0.1">∑</text>
            <text x="316" y="155" fill="#3b82f6" fontSize="16" fontFamily="monospace" opacity="0.09">P(A) = m/n</text>
            {/* small circle — unit circle hint */}
            <circle cx="355" cy="55" r="28" stroke="#6366f1" strokeWidth="1.2" opacity="0.12" fill="none" strokeDasharray="4 3" />
            <text x="348"  y="59"  fill="#6366f1" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.15">r=1</text>
          </svg>
          <div className="relative text-right leading-none">
            <div className="text-6xl md:text-8xl font-black tracking-tight text-black">ללמוד</div>
            <div className="text-7xl md:text-9xl font-black tracking-tighter text-black mt-2">מעשייה</div>
            <p className="text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs">
              פתרון עשרה תרגילים שווה יותר מקריאת מאה עמודי סיכום. המוח לומד מתוך עשייה, לא מתוך קריאה.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center py-8 px-10">
          <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            {/* Quadratic formula */}
            <text x="20" y="80"  fill="#0f766e" fontSize="20" fontFamily="serif" fontStyle="italic" fontWeight="700">x = −b ± √(b²−4ac)</text>
            <text x="20" y="115" fill="#0f766e" fontSize="20" fontFamily="serif" fontStyle="italic" fontWeight="700">           2a</text>
            {/* fraction bar */}
            <line x1="20" y1="122" x2="310" y2="122" stroke="#0f766e" strokeWidth="1.5" />
            {/* Right triangle */}
            <path d="M 330 210 L 480 210 L 480 60 Z" stroke="#6366f1" strokeWidth="2" fill="#6366f1" fillOpacity="0.07" />
            <path d="M 463 210 L 463 193 L 480 193" stroke="#6366f1" strokeWidth="1.4" fill="none" />
            <text x="342" y="202" fill="#6366f1" fontSize="16" fontFamily="serif" fontStyle="italic">θ</text>
            <text x="398" y="228" fill="#6366f1" fontSize="13" fontFamily="serif" fontStyle="italic" opacity="0.8">a</text>
            <text x="486" y="142" fill="#6366f1" fontSize="13" fontFamily="serif" fontStyle="italic" opacity="0.8">b</text>
            <text x="388" y="118" fill="#6366f1" fontSize="13" fontFamily="serif" fontStyle="italic" opacity="0.8">c</text>
            {/* Floating symbols */}
            <text x="20"  y="180" fill="#3b82f6" fontSize="15" fontFamily="monospace" opacity="0.8">a² + b² = c²</text>
            <text x="20"  y="215" fill="#0d9488" fontSize="13" fontFamily="monospace" opacity="0.7">Δ = b²−4ac</text>
            <text x="220" y="185" fill="#6366f1" fontSize="28" fontFamily="serif" opacity="0.5">∑</text>
            <text x="270" y="178" fill="#3b82f6" fontSize="24" fontFamily="serif" opacity="0.5">π</text>
          </svg>
        </div>
      </div>

      {/* Row 3: illustration left | Quote right */}
      <div className="flex flex-col md:flex-row items-center border-t border-slate-200" dir="ltr">
        <div className="md:w-1/2 flex items-center justify-center py-8 px-10">
          <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            {/* Sequence circles: a₁ → a₂ → a₃ → ··· → aₙ */}
            {([{ x: 30, label: "a₁" }, { x: 120, label: "a₂" }, { x: 210, label: "a₃" }, { x: 370, label: "aₙ" }] as {x:number;label:string}[]).map(({ x, label }) => (
              <g key={x}>
                <circle cx={x + 25} cy={70} r="26" fill="none" stroke="#6366f1" strokeWidth="1.8" />
                <text x={x + 25} y="76" fill="#4f46e5" fontSize="15" fontFamily="serif" fontStyle="italic" fontWeight="600" textAnchor="middle">{label}</text>
              </g>
            ))}
            {/* Arrows */}
            {[56, 146].map((x) => (
              <path key={x} d={`M ${x + 24} 70 L ${x + 44} 70`} stroke="#6366f1" strokeWidth="1.4" markerEnd="url(#ar2)" />
            ))}
            <defs>
              <marker id="ar2" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
                <path d="M 0 0 L 7 3.5 L 0 7 Z" fill="#6366f1" />
              </marker>
            </defs>
            <text x="310" y="76" fill="#6366f1" fontSize="20" fontFamily="serif" opacity="0.6">···</text>
            {/* Formulas */}
            <text x="20"  y="150" fill="#4f46e5" fontSize="16" fontFamily="serif" fontStyle="italic" fontWeight="600">Sₙ = n/2 · (a₁ + aₙ)</text>
            <text x="30"  y="200" fill="#0d9488" fontSize="14" fontFamily="monospace" opacity="0.85">aₙ = a₁ + (n−1)d</text>
            <text x="30"  y="238" fill="#3b82f6" fontSize="14" fontFamily="monospace" opacity="0.8">P(A) = m / n</text>
            <text x="360" y="175" fill="#6366f1" fontSize="14" fontFamily="monospace" opacity="0.8">C(n,r) = n! / r!(n-r)!</text>
            <text x="430" y="240" fill="#4f46e5" fontSize="22" fontFamily="serif" opacity="0.5">∞</text>
          </svg>
        </div>
        <div className="md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden" dir="rtl">
          {/* floating math — optimization & derivatives */}
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none">
            <text x="10"  y="35"  fill="#0d9488" fontSize="20" fontFamily="monospace" opacity="0.11">f′′(x) = 0</text>
            <text x="298" y="30"  fill="#6366f1" fontSize="22" fontFamily="serif" fontStyle="italic" opacity="0.12">max</text>
            <text x="10"  y="278" fill="#3b82f6" fontSize="18" fontFamily="monospace" opacity="0.1">x = −b/2a</text>
            <text x="315" y="275" fill="#0d9488" fontSize="20" fontFamily="serif" fontStyle="italic" opacity="0.11">min</text>
            <text x="12"  y="158" fill="#6366f1" fontSize="14" fontFamily="monospace" opacity="0.09">f(x) = ax² + bx + c</text>
            {/* small parabola opening down — max point */}
            <path d="M 318 260 C 318 218 378 218 378 260" stroke="#0d9488" strokeWidth="1.5" opacity="0.14" transform="scale(1,-1) translate(0,-300)" />
            <circle cx="348" cy="42" r="3" fill="#0d9488" opacity="0.17" />
            <text x="335" y="38" fill="#0d9488" fontSize="9" fontFamily="serif" opacity="0.18">vertex</text>
            {/* right triangle small */}
            <path d="M 340 230 L 390 230 L 390 180 Z" stroke="#6366f1" strokeWidth="1.2" opacity="0.12" fill="none" />
          </svg>
          <div className="relative text-right leading-none">
            <div className="text-7xl md:text-9xl font-black tracking-tighter text-black">הצלחה</div>
            <div className="text-5xl md:text-7xl font-black tracking-tight text-black mt-2">מתחילה</div>
            <div className="text-4xl md:text-6xl font-black tracking-tight text-black mt-1">בלימוד</div>
            <p className="text-slate-500 text-sm md:text-base font-normal mt-5 leading-relaxed max-w-xs">
              30 דקות לימוד יומיות לאורך חודש שוות יותר מ־8 שעות לפני הבחינה. הרגלים קטנים בונים ידע אמיתי.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200" />

      {/* 3. Topic Cards Grid */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topic/${topic.id}`}
              className="group flex flex-col justify-between bg-black rounded-2xl p-6 min-h-48 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <h3 className="font-bold text-white text-lg leading-snug">
                {topic.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {topic.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/20">
                <span className="text-xs text-white/60">
                  {topic.formulas.length + topic.examples.length} נושאים
                </span>
                <span className="text-xs font-semibold text-white flex items-center gap-1">
                  קרא עוד
                  <span className="group-hover:-translate-x-0.5 transition-transform inline-block">◀</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-black" dir="rtl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <span className="text-white font-bold text-xl" style={{ fontFamily: "serif", fontStyle: "italic" }}>∑</span>
              <span className="font-bold text-white text-sm md:text-base">בגרות מתמטיקה 5 יח״ל</span>
            </Link>
            <p className="text-white/60 text-sm">כיתה י״א – בהצלחה בבחינה!</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
