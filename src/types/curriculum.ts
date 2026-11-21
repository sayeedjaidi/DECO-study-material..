export type BtlLevel = 'BTL1' | 'BTL2' | 'BTL3' | 'BTL4' | 'BTL5' | 'BTL6';

export type LabType =
  | 'number-converter'
  | 'kmap-logic'
  | 'rtl-alu'
  | 'cache-mapping'
  | 'pipeline-hazards';

export interface CourseOutcome {
  code: string;
  unitNumbers: number[];
  description: string;
  btl: string;
  competency: string;
}

export interface UnitInfo {
  unitNumber: 1 | 2 | 3 | 4 | 5;
  roman: string;
  title: string;
  subtitle: string;
  coCode: string;
  lectureRange: string;
  weeks: number[];
  summary: string;
  textbooks: string[];
}

export interface LessonPlanItem {
  lectureNo: number;
  topic: string;
  btl: BtlLevel;
  method: string;
  reference: string;
}

export interface ConceptFormula {
  label: string;
  expression: string;
}

export interface HighlightedConcept {
  id: string;
  weekNumber: number;
  unitNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  kicker: string;
  summary: string;
  keyPoints: string[];
  formulas?: ConceptFormula[];
  workedExample?: {
    prompt: string;
    solution: string;
  };
  examTip: string;
  isGapTopic?: boolean;
  labType?: LabType;
}

export interface WeekModule {
  weekNumber: number;
  unitNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  lectureRange: string;
  coCode: string;
  btlFocus: string;
  milestone?: string;
  overview: string;
  lessons: LessonPlanItem[];
  concepts: HighlightedConcept[];
}

export interface QuizQuestion {
  id: string;
  weekNumber: number;
  unitNumber: 1 | 2 | 3 | 4 | 5;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  coCode: string;
  btl: BtlLevel;
  sourceTag: string;
}

export interface ExamBankItem {
  id: string;
  unitNumber: 1 | 2 | 3 | 4 | 5;
  type: 'SAQ' | 'LAQ';
  marks: number;
  coCode: string;
  btl: BtlLevel;
  question: string;
  answerSummary: string;
  keySteps: string[];
  diagramNote?: string;
}

export interface WeekQuizScore {
  bestScore: number;
  lastScore: number;
  total: number;
  attempts: number;
  lastAttemptAt: string;
  missedQuestionIds: string[];
}

export type AppView = 'syllabus' | 'concepts' | 'quizzes' | 'exam-bank';
