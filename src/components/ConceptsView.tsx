import React, { useMemo, useState } from 'react';
import { Search, CheckCircle2, Circle, Lightbulb, PlayCircle, AlertCircle } from 'lucide-react';
import { WEEKLY_CURRICULUM } from '../data/decoCurriculum';
import { HighlightedConcept, LabType } from '../types/curriculum';
import { InteractiveLab } from './InteractiveLabs';

interface ConceptsViewProps {
  selectedWeek: number;
  onSelectWeek: (weekNumber: number) => void;
  reviewedConceptIds: string[];
  onToggleReviewed: (conceptId: string) => void;
  onStartWeekQuiz: (weekNumber: number) => void;
}

export const ConceptsView: React.FC<ConceptsViewProps> = ({
  selectedWeek,
  onSelectWeek,
  reviewedConceptIds,
  onToggleReviewed,
  onStartWeekQuiz
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gapsOnly, setGapsOnly] = useState<boolean>(false);

  const activeWeek = useMemo(
    () => WEEKLY_CURRICULUM.find((w) => w.weekNumber === selectedWeek) ?? WEEKLY_CURRICULUM[0],
    [selectedWeek]
  );

  const filteredConcepts: HighlightedConcept[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q && !gapsOnly) {
      return activeWeek.concepts;
    }

    const pool = q || gapsOnly ? WEEKLY_CURRICULUM.flatMap((w) => w.concepts) : activeWeek.concepts;
    return pool.filter((concept) => {
      if (gapsOnly && !concept.isGapTopic) return false;
      if (!q) return true;
      return (
        concept.title.toLowerCase().includes(q) ||
        concept.summary.toLowerCase().includes(q) ||
        concept.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
        (concept.formulas?.some(
          (f) => f.label.toLowerCase().includes(q) || f.expression.toLowerCase().includes(q)
        ) ??
          false)
      );
    });
  }, [activeWeek.concepts, searchQuery, gapsOnly]);

  const activeLabType: LabType | undefined = useMemo(() => {
    if (searchQuery.trim() || gapsOnly) return undefined;
    return activeWeek.concepts.find((c) => c.labType)?.labType;
  }, [activeWeek.concepts, searchQuery, gapsOnly]);

  return (
    <div className="space-y-8">
      {/* Header & Controls */}
      <section className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-sky-700 tabular-nums">
            {searchQuery.trim() || gapsOnly
              ? 'Filtered Across All 12 Weeks'
              : `Week ${activeWeek.weekNumber} · Unit ${activeWeek.unitNumber} · ${activeWeek.lectureRange}`}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
            {searchQuery.trim() || gapsOnly ? 'Concept Search & Gap Topics' : activeWeek.title}
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Core definitions, algebraic theorems, worked derivations, and exam insights extracted from lectures and question banks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formulas, laws, topics..."
              aria-label="Search concepts"
              className="pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <button
            type="button"
            onClick={() => setGapsOnly((prev) => !prev)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
              gapsOnly
                ? 'bg-amber-700 text-white border-amber-700'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Beyond-Syllabus Gaps
          </button>

          <button
            type="button"
            onClick={() => onStartWeekQuiz(activeWeek.weekNumber)}
            className="px-4 py-2 text-xs font-medium bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <PlayCircle className="w-4 h-4" />
            Practice Week {activeWeek.weekNumber} Quiz
          </button>
        </div>
      </section>

      {/* Week 1-12 Selector Bar */}
      <nav aria-label="Week selector" className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-1.5">
        {WEEKLY_CURRICULUM.map((week) => {
          const isActive = !searchQuery.trim() && !gapsOnly && week.weekNumber === selectedWeek;
          const reviewedCount = week.concepts.filter((c) => reviewedConceptIds.includes(c.id)).length;
          const allDone = reviewedCount === week.concepts.length;
          return (
            <button
              key={week.weekNumber}
              type="button"
              onClick={() => {
                setSearchQuery('');
                setGapsOnly(false);
                onSelectWeek(week.weekNumber);
              }}
              className={`py-2 px-2 rounded-lg border text-left transition-colors ${
                isActive
                  ? 'bg-sky-700 text-white border-sky-700'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold tabular-nums">
                <span>W{week.weekNumber}</span>
                <span className={isActive ? 'text-sky-100' : allDone ? 'text-emerald-600' : 'text-slate-400'}>
                  {reviewedCount}/{week.concepts.length}
                </span>
              </div>
              <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                Unit {week.unitNumber}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Embedded Interactive Hardware / Math Lab for the Selected Week */}
      {activeLabType && <InteractiveLab labType={activeLabType} />}

      {/* Concept Cards */}
      {filteredConcepts.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
          <p className="text-base font-semibold text-slate-900">No matching concepts found</p>
          <p className="text-sm text-slate-600">
            Try another keyword (such as Booth, K-Map, DMA, Cache, or Hazard) or clear the filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setGapsOnly(false);
            }}
            className="mt-2 px-4 py-2 text-xs font-medium bg-sky-700 text-white rounded-lg hover:bg-sky-800"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredConcepts.map((concept) => {
            const isReviewed = reviewedConceptIds.includes(concept.id);
            return (
              <article
                key={concept.id}
                className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 tabular-nums">
                      <span>Week {concept.weekNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>Unit {concept.unitNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>{concept.kicker}</span>
                      {concept.isGapTopic && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 font-medium text-amber-700">
                            <AlertCircle className="w-3.5 h-3.5" />
                            Faculty Gap Topic
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900">{concept.title}</h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleReviewed(concept.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                      isReviewed
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isReviewed ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Reviewed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mark Reviewed</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-base text-slate-700 leading-relaxed max-w-4xl">{concept.summary}</p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 space-y-2.5">
                    <h3 className="text-xs font-semibold text-slate-500 tracking-wide">
                      Highlighted Key Points
                    </h3>
                    <ul className="space-y-2">
                      {concept.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                          <span className="font-mono text-xs text-sky-700 font-semibold mt-1 tabular-nums shrink-0">
                            0{idx + 1}.
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    {concept.formulas && concept.formulas.length > 0 && (
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
                        <h3 className="text-xs font-semibold text-slate-500">Key Formulas & Laws</h3>
                        <div className="space-y-2">
                          {concept.formulas.map((f) => (
                            <div key={f.label} className="space-y-0.5">
                              <div className="text-xs text-slate-500">{f.label}</div>
                              <div className="font-mono text-sm font-semibold text-slate-900 break-words">
                                {f.expression}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.workedExample && (
                      <div className="p-4 bg-sky-50/50 border border-sky-200/80 rounded-lg space-y-1.5">
                        <h3 className="text-xs font-semibold text-sky-900">Worked Example</h3>
                        <p className="text-xs font-medium text-slate-800">{concept.workedExample.prompt}</p>
                        <p className="text-xs font-mono text-slate-700 leading-relaxed pt-1">
                          {concept.workedExample.solution}
                        </p>
                      </div>
                    )}

                    <div className="p-3.5 bg-amber-50/50 border border-amber-200/80 rounded-lg flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Exam Focus: </span>
                        {concept.examTip}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
