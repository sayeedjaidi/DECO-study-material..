import React, { useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, PlayCircle } from 'lucide-react';
import { COURSE_META, COURSE_OUTCOMES, UNITS, WEEKLY_CURRICULUM } from '../data/decoCurriculum';
import { WeekQuizScore } from '../types/curriculum';

interface SyllabusViewProps {
  reviewedConceptIds: string[];
  quizScores: Record<number, WeekQuizScore>;
  onOpenWeekConcepts: (weekNumber: number) => void;
  onStartWeekQuiz: (weekNumber: number) => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  reviewedConceptIds,
  quizScores,
  onOpenWeekConcepts,
  onStartWeekQuiz
}) => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);
  const [showOutcomes, setShowOutcomes] = useState<boolean>(false);

  const totalConcepts = useMemo(
    () => WEEKLY_CURRICULUM.reduce((acc, w) => acc + w.concepts.length, 0),
    []
  );

  const completedQuizzesCount = useMemo(
    () => Object.values(quizScores).filter((s) => s.attempts > 0).length,
    [quizScores]
  );

  const visibleWeeks = useMemo(
    () =>
      selectedUnit === 'all'
        ? WEEKLY_CURRICULUM
        : WEEKLY_CURRICULUM.filter((w) => w.unitNumber === selectedUnit),
    [selectedUnit]
  );

  return (
    <div className="space-y-10">
      {/* Course Hero */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-medium text-slate-500 tabular-nums">
              {COURSE_META.code} · {COURSE_META.semester} · {COURSE_META.academicYear}
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
              {COURSE_META.title}
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Structured 12-week study companion built from the official {COURSE_META.code} syllabus,
              64-lecture delivery schedule, faculty gap notes, and internal exam question banks.
            </p>
            <div className="text-xs text-slate-500 pt-1">
              Faculty: {COURSE_META.faculty} · {COURSE_META.institution} · Credits: {COURSE_META.credits} (CIE {COURSE_META.cieMarks} + SEE {COURSE_META.seeMarks})
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenWeekConcepts(1)}
              className="px-4 py-2.5 text-sm font-medium bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4" />
              Explore Week 1 Concepts
            </button>
            <button
              type="button"
              onClick={() => onStartWeekQuiz(1)}
              className="px-4 py-2.5 text-sm font-medium bg-white text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <PlayCircle className="w-4 h-4" />
              Practice Quiz
            </button>
          </div>
        </div>
      </section>

      {/* 4-Column KPI Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="text-xs text-slate-500">Weekly Curriculum</div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums mt-1">12 Weeks</div>
          <div className="text-xs text-slate-600 mt-1 tabular-nums">64 Lectures · 5 Units</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="text-xs text-slate-500">Highlighted Concepts</div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums mt-1">
            {reviewedConceptIds.length} / {totalConcepts}
          </div>
          <div className="text-xs text-slate-600 mt-1">Concepts marked reviewed</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="text-xs text-slate-500">Weekly Practice Quizzes</div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums mt-1">
            {completedQuizzesCount} / 12
          </div>
          <div className="text-xs text-slate-600 mt-1 tabular-nums">84 syllabus-grounded MCQs</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="text-xs text-slate-500">Interactive Labs</div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums mt-1">5 Simulators</div>
          <div className="text-xs text-slate-600 mt-1">Radix, K-Map, RTL, Cache, Pipeline</div>
        </div>
      </section>

      {/* Unit Filter & Overview */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Weekly Curriculum Schedule</h2>
            <p className="text-sm text-slate-600">
              Filter by syllabus unit to inspect lecture-by-lecture topics, highlighted concepts, and weekly quizzes.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowOutcomes((prev) => !prev)}
            className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            {showOutcomes ? 'Hide Course Outcomes' : 'View Course Outcomes (CO1–CO6)'}
            {showOutcomes ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {showOutcomes && (
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-sm font-semibold text-slate-900">
                Course Outcomes (C31.1 – C31.6) & Bloom’s Taxonomy Mapping
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {COURSE_OUTCOMES.map((co) => (
                <div key={co.code} className="px-5 py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 text-sm">
                  <div className="md:col-span-2 font-mono font-semibold text-sky-800 tabular-nums">
                    {co.code} · Unit {co.unitNumbers.join(', ')}
                  </div>
                  <div className="md:col-span-7 text-slate-700">{co.description}</div>
                  <div className="md:col-span-3 text-xs text-slate-500 md:text-right">{co.btl}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Segmented Unit Filter */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg w-fit max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setSelectedUnit('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedUnit === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All 12 Weeks
          </button>
          {UNITS.map((unit) => (
            <button
              key={unit.unitNumber}
              type="button"
              onClick={() => setSelectedUnit(unit.unitNumber)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedUnit === unit.unitNumber
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unit {unit.roman} (W{unit.weeks[0]}–W{unit.weeks[unit.weeks.length - 1]})
            </button>
          ))}
        </div>

        {/* Selected Unit Summary Banner */}
        {selectedUnit !== 'all' && (
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            {(() => {
              const unit = UNITS.find((u) => u.unitNumber === selectedUnit)!;
              return (
                <div className="space-y-2">
                  <div className="text-xs font-medium text-sky-700 tabular-nums">
                    Unit {unit.roman} · {unit.coCode} · {unit.lectureRange}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{unit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{unit.summary}</p>
                  <div className="text-xs text-slate-500 pt-1">
                    References: {unit.textbooks.join(' · ')}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Weekly Cards */}
        <div className="space-y-4">
          {visibleWeeks.map((week) => {
            const isExpanded = expandedWeek === week.weekNumber;
            const reviewedInWeek = week.concepts.filter((c) => reviewedConceptIds.includes(c.id)).length;
            const score = quizScores[week.weekNumber];

            return (
              <article
                key={week.weekNumber}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 tabular-nums">
                      <span className="font-semibold text-sky-700">Week {week.weekNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>Unit {week.unitNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>{week.lectureRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>{week.coCode} ({week.btlFocus})</span>
                      {week.milestone && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-amber-700">{week.milestone}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{week.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{week.overview}</p>

                    <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-500 tabular-nums">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            reviewedInWeek === week.concepts.length ? 'text-emerald-600' : 'text-slate-400'
                          }`}
                        />
                        {reviewedInWeek} / {week.concepts.length} concepts reviewed
                      </span>
                      <span>
                        {score && score.attempts > 0
                          ? `Best Quiz Score: ${score.bestScore}/${score.total} (${Math.round(
                              (score.bestScore / score.total) * 100
                            )}%)`
                          : 'Quiz: Not attempted yet'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setExpandedWeek(isExpanded ? null : week.weekNumber)}
                      className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                    >
                      {isExpanded ? 'Hide Lectures' : `Lectures (${week.lessons.length})`}
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenWeekConcepts(week.weekNumber)}
                      className="px-3.5 py-2 text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                    >
                      Key Concepts
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onStartWeekQuiz(week.weekNumber)}
                      className="px-3.5 py-2 text-xs font-medium text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0"
                    >
                      Week {week.weekNumber} Quiz
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-slate-200 bg-slate-50/60 overflow-x-auto">
                    <table className="w-full text-left text-xs tabular-nums">
                      <thead className="text-slate-500 border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-5 font-medium w-20">L. No.</th>
                          <th className="py-2.5 px-4 font-medium">Lecture Topic</th>
                          <th className="py-2.5 px-4 font-medium w-24">BTL</th>
                          <th className="py-2.5 px-4 font-medium w-40">Methodology</th>
                          <th className="py-2.5 px-5 font-medium w-28 text-right">Refs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/70">
                        {week.lessons.map((lesson) => (
                          <tr key={lesson.lectureNo} className="text-slate-700">
                            <td className="py-2.5 px-5 font-mono font-semibold text-slate-900">
                              L{lesson.lectureNo}
                            </td>
                            <td className="py-2.5 px-4 text-sm text-slate-800">{lesson.topic}</td>
                            <td className="py-2.5 px-4 font-mono text-slate-600">{lesson.btl}</td>
                            <td className="py-2.5 px-4 text-slate-600">{lesson.method}</td>
                            <td className="py-2.5 px-5 font-mono text-slate-500 text-right">{lesson.reference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
