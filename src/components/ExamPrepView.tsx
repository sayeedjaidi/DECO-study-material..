import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { DECO_EXAM_BANK } from '../data/decoExamBank';
import { UNITS } from '../data/decoCurriculum';

export const ExamPrepView: React.FC = () => {
  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'SAQ' | 'LAQ'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({
    'eb-u1-saq1': true
  });

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DECO_EXAM_BANK.filter((item) => {
      if (unitFilter !== 'all' && item.unitNumber !== unitFilter) return false;
      if (typeFilter !== 'all' && item.type !== typeFilter) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answerSummary.toLowerCase().includes(q) ||
        item.keySteps.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [unitFilter, typeFilter, searchQuery]);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      <section className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-sky-700 tabular-nums">
            CIE-1, CIE-2 & SEE Preparation · {filteredItems.length} Question Bank Entries
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
            Short & Long Answer Exam Bank
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Curated 2-mark Short Answer Questions (SAQ) and 12-mark Long Answer Questions (LAQ) mapped to CO1–CO6 and Bloom’s Taxonomy Levels.
          </p>
        </div>

        <div className="relative shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search exam questions..."
            aria-label="Search exam bank"
            className="pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
          <button
            type="button"
            onClick={() => setUnitFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              unitFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Units
          </button>
          {UNITS.map((u) => (
            <button
              key={u.unitNumber}
              type="button"
              onClick={() => setUnitFilter(u.unitNumber)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                unitFilter === u.unitNumber
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unit {u.roman}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
          {(['all', 'SAQ', 'LAQ'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                typeFilter === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t === 'all' ? 'All Formats' : t === 'SAQ' ? 'SAQ (2 Marks)' : 'LAQ (12 Marks)'}
            </button>
          ))}
        </div>
      </section>

      {/* Question List */}
      <section className="space-y-4">
        {filteredItems.map((item) => {
          const isOpen = !!revealedIds[item.id];
          return (
            <article key={item.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="text-xs text-slate-500 tabular-nums">
                    <span className="font-semibold text-sky-700">{item.type}</span> · Unit {item.unitNumber} ·{' '}
                    {item.marks} Marks · {item.coCode} · {item.btl}
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    {item.question}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => toggleReveal(item.id)}
                  className="px-3.5 py-2 text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  {isOpen ? 'Hide Solution' : 'Reveal Model Answer'}
                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-slate-100 bg-slate-50/60 space-y-3">
                  <p className="text-sm text-slate-800 leading-relaxed">{item.answerSummary}</p>
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-semibold text-slate-500">Key Scoring Points</div>
                    <ul className="space-y-1.5">
                      {item.keySteps.map((step, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="font-mono text-xs font-semibold text-sky-700 mt-0.5 tabular-nums">
                            0{i + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};
