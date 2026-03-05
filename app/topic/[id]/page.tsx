import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FormulaCard from "@/components/FormulaCard";
import ExampleCard from "@/components/ExampleCard";
import TipsBox from "@/components/TipsBox";
import { topics } from "@/data/topics";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return topics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const topic = topics.find((t) => t.id === id);
  if (!topic) return {};
  return {
    title: `${topic.title} – בגרות מתמטיקה 5 יח״ל`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: Props) {
  const { id } = await params;
  const topicIndex = topics.findIndex((t) => t.id === id);
  if (topicIndex === -1) notFound();

  const topic = topics[topicIndex];
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTopicId={topic.id} />

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-black transition-colors">
              בית
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{topic.title}</span>
          </div>
        </div>
      </div>

      {/* Topic Hero */}
      <div className="bg-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-1">
                נושא {topicIndex + 1} מתוך {topics.length}
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                {topic.title}
              </h1>
              <p className="text-white/70 font-medium">{topic.subtitle}</p>
            </div>
          </div>

          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl text-sm">
            {topic.description}
          </p>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-2.5 mt-5">
            {[
              `${topic.formulas.length} נוסחאות`,
              `${topic.examples.length} דוגמאות פתורות`,
              `${topic.tips.length} טיפים`,
            ].map((stat) => (
              <span
                key={stat}
                className="text-xs bg-white/10 rounded-full px-3 py-1.5 text-white font-medium"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* Formulas Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">נוסחאות מפתח</h2>
              <p className="text-sm text-black">הנוסחאות החשובות ביותר שצריך לדעת</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.formulas.map((formula, index) => (
              <FormulaCard
                key={index}
                title={formula.title}
                latex={formula.latex}
                explanation={formula.explanation}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-black">דוגמאות פתורות</h2>
              <p className="text-sm text-black">שאלות אופייניות עם פתרון שלב-שלב</p>
            </div>
          </div>
          <div className="space-y-4">
            {topic.examples.map((example, index) => (
              <ExampleCard
                key={index}
                problem={example.problem}
                steps={example.steps}
                answer={example.answer}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <TipsBox tips={topic.tips} />
        </section>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-6">
          <div>
            {prevTopic ? (
              <Link
                href={`/topic/${prevTopic.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 hover:shadow-sm transition-all text-sm font-medium text-black"
              >
                <span>▶</span>
                <span>
                  <span className="block text-xs text-slate-400 mb-0.5">נושא קודם</span>
                  {prevTopic.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black"
              >
                ← חזרה לדף הבית
              </Link>
            )}
          </div>

          <Link
            href="/"
            className="px-3 py-2 rounded-lg text-xs text-black hover:bg-slate-100 transition-all font-medium"
          >
            כל הנושאים
          </Link>

          <div>
            {nextTopic ? (
              <Link
                href={`/topic/${nextTopic.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 hover:shadow-sm transition-all text-sm font-medium text-black"
              >
                <span>
                  <span className="block text-xs text-slate-400 mb-0.5">נושא הבא</span>
                  {nextTopic.title}
                </span>
                <span>◀</span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 transition-all text-sm font-medium text-black"
              >
                ← חזרה לדף הבית
              </Link>
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
