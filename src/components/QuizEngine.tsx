import React, { useMemo, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';
import { DECO_QUIZ_QUESTIONS } from '../data/decoQuizzes';
import { UNITS, WEEKLY_CURRICULUM } from '../data/decoCurriculum';
import { QuizQuestion, WeekQuizScore } from '../types/curriculum';

export type QuizScope =
  | { kind: 'week'; weekNumber: number }
  | { kind: 'unit'; unitNumber: number }
  | { kind: 'cie1' }
  | { kind: 'cie2' };

interface QuizEngineProps {
  initialScope: QuizScope;
  quizScores: Record<number, WeekQuizScore>;
  onRecordWeekScore: (weekNumber: number, score: number, total: number, missedIds: string[]) => void;
  onOpenWeekConcepts: (weekNumber: number) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  initialScope,
  quizScores,
  onRecordWeekScore,
  onOpenWeekConcepts
}) => {
  const [scope, setScope] = useState<QuizScope>(initialScope);
  const [mode, setMode] = useState<'study' | 'exam'>('study');
  const [missedOnlyIds, setMissedOnlyIds] = useState<string[] | null>(null);

  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync scope if parent navigates directly to a specific week quiz
  const [prevInitial, setPrevInitial] = useState<QuizScope>(initialScope);
  if (
    prevInitial.kind !== initialScope.kind ||
    (prevInitial.kind === 'week' &&
      initialScope.kind === 'week' &&
      prevInitial.weekNumber !== initialScope.weekNumber) ||
    (prevInitial.kind === 'unit' &&
      initialScope.kind === 'unit' &&
      prevInitial.unitNumber !== initialScope.unitNumber)
  ) {
    setPrevInitial(initialScope);
    setScope(initialScope);
    setMissedOnlyIds(null);
    setCurrentIdx(0);
    setAnswers({});
    setSubmitted(false);
  }

  const questions: QuizQuestion[] = useMemo(() => {
    let base: QuizQuestion[];
    if (scope.kind === 'week') {
      base = DECO_QUIZ_QUESTIONS.filter((q) => q.weekNumber === scope.weekNumber);
    } else if (scope.kind === 'unit') {
      base = DECO_QUIZ_QUESTIONS.filter((q) => q.unitNumber === scope.unitNumber);
    } else if (scope.kind === 'cie1') {
      base = DECO_QUIZ_QUESTIONS.filter((q) => q.weekNumber <= 7);
    } else {
      base = DECO_QUIZ_QUESTIONS.filter((q) => q.weekNumber >= 8);
    }

    if (missedOnlyIds && missedOnlyIds.length > 0) {
      const filtered = base.filter((q) => missedOnlyIds.includes(q.id));
      if (filtered.length > 0) return filtered;
    }
    return base;
  }, [scope, missedOnlyIds]);

  const scopeTitle = useMemo(() => {
    if (scope.kind === 'week') {
      const w = WEEKLY_CURRICULUM.find((item) => item.weekNumber === scope.weekNumber);
      return `Week ${scope.weekNumber} Practice Quiz${w ? ` — ${w.title}` : ''}`;
    }
    if (scope.kind === 'unit') {
      const u = UNITS.find((item) => item.unitNumber === scope.unitNumber);
      return `Unit ${u?.roman ?? scope.unitNumber} Comprehensive Quiz`;
    }
    if (scope.kind === 'cie1') {
      return 'CIE-1 Mock Quiz (Weeks 1–7 · Units I–III)';
    }
    return 'CIE-2 Mock Quiz (Weeks 8–12 · Units IV–V)';
  }, [scope]);

  const resetAttempt = (nextScope: QuizScope, retryIds: string[] | null = null) => {
    setScope(nextScope);
    setMissedOnlyIds(retryIds);
    setCurrentIdx(0);
    setAnswers({});
    setSubmitted(false);
  };

  const activeQuestion = questions[currentIdx] ?? questions[0];
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;

  const scoreSummary = useMemo(() => {
    let correct = 0;
    const missedIds: string[] = [];
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) {
        correct += 1;
      } else {
        missedIds.push(q.id);
      }
    }
    return {
      correct,
      total: questions.length,
      percent: questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0,
      missedIds
    };
  }, [questions, answers]);

  const handleSelectOption = (question: QuizQuestion, optionIdx: number) => {
    if (submitted) return;
    if (mode === 'study' && answers[question.id] !== undefined) return;
    const nextAnswers = { ...answers, [question.id]: optionIdx };
    setAnswers(nextAnswers);

    if (mode === 'study' && scope.kind === 'week' && !missedOnlyIds) {
      const allAnswered = questions.every((q) => nextAnswers[q.id] !== undefined);
      if (allAnswered) {
        let correct = 0;
        const missed: string[] = [];
        for (const q of questions) {
          if (nextAnswers[q.id] === q.correctIndex) correct += 1;
          else missed.push(q.id);
        }
        onRecordWeekScore(scope.weekNumber, correct, questions.length, missed);
      }
    }
  };

  const handleSubmitExam = () => {
    setSubmitted(true);
    if (scope.kind === 'week' && !missedOnlyIds) {
      onRecordWeekScore(
        scope.weekNumber,
        scoreSummary.correct,
        scoreSummary.total,
        scoreSummary.missedIds
      );
    }
  };

  const isOptionRevealed =
    activeQuestion && (submitted || (mode === 'study' && answers[activeQuestion.id] !== undefined));

  const weekSavedScore = scope.kind === 'week' ? quizScores[scope.weekNumber] : undefined;

  return (
    <div className="space-y-8">
      {/* Header & Mode Switch */}
      <section className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-sky-700 tabular-nums">
            Weekly Curriculum Quizzes · {questions.length} Questions Loaded
            {missedOnlyIds ? ' (Missed-Items Retry)' : ''}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
            {scopeTitle}
          </h1>
          <p className="text-sm text-slate-600">
            Practice weekly concepts with immediate step-by-step solutions or switch to Exam Mode for full-set grading.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
            <button
              type="button"
              onClick={() => {
                setMode('study');
                resetAttempt(scope, missedOnlyIds);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                mode === 'study' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Study Mode (Instant)
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('exam');
                resetAttempt(scope, missedOnlyIds);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                mode === 'exam' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exam Mode (Submit)
            </button>
          </div>

          {scope.kind === 'week' && (
            <button
              type="button"
              onClick={() => onOpenWeekConcepts(scope.weekNumber)}
              className="px-3.5 py-2 text-xs font-medium bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Review Week {scope.weekNumber} Notes
            </button>
          )}
        </div>
      </section>

      {/* Week & Exam Scope Picker */}
      <section className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-slate-600">Select Weekly Curriculum Quiz</span>
          <div className="flex flex-wrap items-center gap-1.5">
            {UNITS.map((u) => (
              <button
                key={u.unitNumber}
                type="button"
                onClick={() => resetAttempt({ kind: 'unit', unitNumber: u.unitNumber })}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors whitespace-nowrap ${
                  scope.kind === 'unit' && scope.unitNumber === u.unitNumber
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Unit {u.roman}
              </button>
            ))}
            <button
              type="button"
              onClick={() => resetAttempt({ kind: 'cie1' })}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors whitespace-nowrap ${
                scope.kind === 'cie1'
                  ? 'bg-sky-700 text-white border-sky-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              CIE-1 Mock
            </button>
            <button
              type="button"
              onClick={() => resetAttempt({ kind: 'cie2' })}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors whitespace-nowrap ${
                scope.kind === 'cie2'
                  ? 'bg-sky-700 text-white border-sky-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              CIE-2 Mock
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-1.5">
          {WEEKLY_CURRICULUM.map((w) => {
            const active = scope.kind === 'week' && scope.weekNumber === w.weekNumber;
            const saved = quizScores[w.weekNumber];
            return (
              <button
                key={w.weekNumber}
                type="button"
                onClick={() => resetAttempt({ kind: 'week', weekNumber: w.weekNumber })}
                className={`py-2 px-2 rounded-lg border text-left transition-colors ${
                  active
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold tabular-nums">
                  <span>W{w.weekNumber}</span>
                  <span className={active ? 'text-sky-100' : saved ? 'text-emerald-700' : 'text-slate-400'}>
                    {saved ? `${saved.bestScore}/${saved.total}` : '—'}
                  </span>
                </div>
                <div className={`text-[11px] truncate ${active ? 'text-sky-100' : 'text-slate-500'}`}>
                  U{w.unitNumber}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Quiz Stage */}
      {activeQuestion && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question Card */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs text-slate-500 tabular-nums">
              <span>
                Question {currentIdx + 1} of {questions.length} · Week {activeQuestion.weekNumber} ·{' '}
                {activeQuestion.coCode} · {activeQuestion.btl}
              </span>
              <span>Source: {activeQuestion.sourceTag}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
              {activeQuestion.question}
            </h2>

            <div className="space-y-2.5">
              {activeQuestion.options.map((option, optIdx) => {
                const selected = answers[activeQuestion.id] === optIdx;
                const isCorrectOpt = activeQuestion.correctIndex === optIdx;

                let containerStyle =
                  'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300';
                let labelBadge: React.ReactNode = null;

                if (isOptionRevealed) {
                  if (isCorrectOpt) {
                    containerStyle = 'bg-emerald-50/70 border-emerald-400 text-emerald-950 font-medium';
                    labelBadge = (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                        Correct
                      </span>
                    );
                  } else if (selected && !isCorrectOpt) {
                    containerStyle = 'bg-rose-50/70 border-rose-300 text-rose-950';
                    labelBadge = (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 shrink-0">
                        <XCircle className="w-4 h-4" />
                        Incorrect
                      </span>
                    );
                  } else {
                    containerStyle = 'bg-slate-50/50 border-slate-200 text-slate-500';
                  }
                } else if (selected) {
                  containerStyle = 'bg-sky-50 border-sky-600 text-sky-950 font-medium';
                }

                const letter = String.fromCharCode(65 + optIdx);

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(activeQuestion, optIdx)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors flex items-center justify-between gap-3 ${containerStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-semibold mt-0.5 text-slate-500 shrink-0">
                        {letter}.
                      </span>
                      <span className="text-sm sm:text-base leading-snug">{option}</span>
                    </div>
                    {labelBadge}
                  </button>
                );
              })}
            </div>

            {isOptionRevealed && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <div className="text-xs font-semibold text-slate-700">Step-by-Step Solution</div>
                <p className="text-sm text-slate-700 leading-relaxed">{activeQuestion.explanation}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                  disabled={currentIdx === 0}
                  className="px-3.5 py-2 text-xs font-medium bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 whitespace-nowrap"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))}
                  disabled={currentIdx >= questions.length - 1}
                  className="px-3.5 py-2 text-xs font-medium bg-sky-700 text-white rounded-lg hover:bg-sky-800 disabled:opacity-40 inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  Next Question
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {mode === 'exam' && !submitted && (
                  <button
                    type="button"
                    onClick={handleSubmitExam}
                    className="px-4 py-2 text-xs font-medium bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 whitespace-nowrap"
                  >
                    Submit Quiz ({answeredCount}/{questions.length})
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => resetAttempt(scope, null)}
                  className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restart
                </button>
              </div>
            </div>
          </div>

          {/* Right Rail: Question Map & Score Summary */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">Question Navigator</h3>
                <span className="font-mono text-xs text-slate-500 tabular-nums">
                  {answeredCount}/{questions.length} answered
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5">
                {questions.map((q, idx) => {
                  const chosen = answers[q.id];
                  const isCurrent = idx === currentIdx;
                  const showResult = submitted || (mode === 'study' && chosen !== undefined);

                  let btnStyle = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';
                  if (showResult) {
                    btnStyle =
                      chosen === q.correctIndex
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : 'bg-rose-100 text-rose-900 border-rose-300';
                  } else if (chosen !== undefined) {
                    btnStyle = 'bg-sky-100 text-sky-900 border-sky-300';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIdx(idx)}
                      className={`py-2 text-xs font-mono font-semibold rounded-md border transition-colors tabular-nums ${btnStyle} ${
                        isCurrent ? 'ring-2 ring-sky-700 ring-offset-1' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {(submitted || (mode === 'study' && answeredCount === questions.length)) && (
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="text-xs text-slate-500">Session Score</div>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold text-slate-900 tabular-nums">
                    {scoreSummary.correct} / {scoreSummary.total}
                  </div>
                  <div className="text-lg font-mono font-semibold text-sky-700 tabular-nums">
                    {scoreSummary.percent}%
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  {scoreSummary.percent >= 80
                    ? 'Strong mastery of this section’s syllabus objectives.'
                    : 'Review the missed step-by-step explanations and retry weak items.'}
                </p>
                {scoreSummary.missedIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => resetAttempt(scope, scoreSummary.missedIds)}
                    className="w-full py-2 px-3 text-xs font-medium bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
                  >
                    Retry {scoreSummary.missedIds.length} Missed Question
                    {scoreSummary.missedIds.length > 1 ? 's' : ''}
                  </button>
                )}
              </div>
            )}

            {weekSavedScore && weekSavedScore.attempts > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="text-xs text-slate-500">Week {scope.kind === 'week' ? scope.weekNumber : ''} Saved Record</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Best Score</span>
                  <span className="font-mono font-semibold text-slate-900 tabular-nums">
                    {weekSavedScore.bestScore}/{weekSavedScore.total} (
                    {Math.round((weekSavedScore.bestScore / weekSavedScore.total) * 100)}%)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Completed Attempts</span>
                  <span className="font-mono tabular-nums">{weekSavedScore.attempts}</span>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
};
