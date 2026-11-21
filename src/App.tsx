import { useEffect, useState } from 'react';
import { AppView, WeekQuizScore } from './types/curriculum';
import { COURSE_META } from './data/decoCurriculum';
import { SyllabusView } from './components/SyllabusView';
import { ConceptsView } from './components/ConceptsView';
import { QuizEngine, QuizScope } from './components/QuizEngine';
import { ExamPrepView } from './components/ExamPrepView';

const STORAGE_REVIEWED_KEY = 'deco_u24ec304_reviewed_concepts_v1';
const STORAGE_SCORES_KEY = 'deco_u24ec304_quiz_scores_v1';

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [activeView, setActiveView] = useState<AppView>('syllabus');
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [quizScope, setQuizScope] = useState<QuizScope>({ kind: 'week', weekNumber: 1 });

  const [reviewedConceptIds, setReviewedConceptIds] = useState<string[]>(() =>
    loadJson<string[]>(STORAGE_REVIEWED_KEY, [])
  );
  const [quizScores, setQuizScores] = useState<Record<number, WeekQuizScore>>(() =>
    loadJson<Record<number, WeekQuizScore>>(STORAGE_SCORES_KEY, {})
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_REVIEWED_KEY, JSON.stringify(reviewedConceptIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [reviewedConceptIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_SCORES_KEY, JSON.stringify(quizScores));
    } catch {
      // Ignore storage quota errors
    }
  }, [quizScores]);

  const handleToggleReviewed = (conceptId: string) => {
    setReviewedConceptIds((prev) =>
      prev.includes(conceptId) ? prev.filter((id) => id !== conceptId) : [...prev, conceptId]
    );
  };

  const handleOpenWeekConcepts = (weekNumber: number) => {
    setSelectedWeek(weekNumber);
    setActiveView('concepts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartWeekQuiz = (weekNumber: number) => {
    setSelectedWeek(weekNumber);
    setQuizScope({ kind: 'week', weekNumber });
    setActiveView('quizzes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRecordWeekScore = (
    weekNumber: number,
    score: number,
    total: number,
    missedIds: string[]
  ) => {
    setQuizScores((prev) => {
      const existing = prev[weekNumber];
      return {
        ...prev,
        [weekNumber]: {
          bestScore: existing ? Math.max(existing.bestScore, score) : score,
          lastScore: score,
          total,
          attempts: (existing?.attempts ?? 0) + 1,
          lastAttemptAt: new Date().toISOString(),
          missedQuestionIds: missedIds
        }
      };
    });
  };

  const handleResetProgress = () => {
    setReviewedConceptIds([]);
    setQuizScores({});
    try {
      window.localStorage.removeItem(STORAGE_REVIEWED_KEY);
      window.localStorage.removeItem(STORAGE_SCORES_KEY);
    } catch {
      // Ignore
    }
  };

  const navItems: { id: AppView; label: string }[] = [
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'concepts', label: 'Key Concepts' },
    { id: 'quizzes', label: 'Weekly Quizzes' },
    { id: 'exam-bank', label: 'Exam Bank' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => setActiveView('syllabus')}
            className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors"
          >
            DECO U24EC304
          </button>

          {/* Zone 2: 4 Single-Line Text Navigation Links */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveView(item.id)}
                  className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                    isActive
                      ? 'text-sky-700 border-sky-700'
                      : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary CTA */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => handleStartWeekQuiz(selectedWeek)}
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0"
            >
              Start Quiz
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation (keeps sticky height compact) */}
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-slate-100 px-4 py-2 flex items-center gap-4 overflow-x-auto text-xs font-medium"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveView(item.id)}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive ? 'text-sky-700 border-sky-700' : 'text-slate-600 border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {activeView === 'syllabus' && (
          <SyllabusView
            reviewedConceptIds={reviewedConceptIds}
            quizScores={quizScores}
            onOpenWeekConcepts={handleOpenWeekConcepts}
            onStartWeekQuiz={handleStartWeekQuiz}
          />
        )}

        {activeView === 'concepts' && (
          <ConceptsView
            selectedWeek={selectedWeek}
            onSelectWeek={setSelectedWeek}
            reviewedConceptIds={reviewedConceptIds}
            onToggleReviewed={handleToggleReviewed}
            onStartWeekQuiz={handleStartWeekQuiz}
          />
        )}

        {activeView === 'quizzes' && (
          <QuizEngine
            initialScope={quizScope}
            quizScores={quizScores}
            onRecordWeekScore={handleRecordWeekScore}
            onOpenWeekConcepts={handleOpenWeekConcepts}
          />
        )}

        {activeView === 'exam-bank' && <ExamPrepView />}
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            {COURSE_META.code} · {COURSE_META.title} · {COURSE_META.semester}
          </div>
          <button
            type="button"
            onClick={handleResetProgress}
            className="text-slate-500 hover:text-slate-800 underline underline-offset-2 whitespace-nowrap"
          >
            Reset Saved Study Progress
          </button>
        </div>
      </footer>
    </div>
  );
}
