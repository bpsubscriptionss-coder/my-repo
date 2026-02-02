import { create } from 'zustand';

interface Question {
  question: string;
  userAnswer: string;
  modelAnswer: string;
  explanation: string;
}

interface Case {
  caseTitle: string;
  scenario: string;
  questions: Question[];
}

interface StageResult {
  cases: Case[];
  rating: number;
  feedback: string;
}

interface AssessmentStore {
  easyStage: StageResult | null;
  mediumStage: StageResult | null;
  difficultStage: StageResult | null;
  setEasyStage: (result: StageResult) => void;
  setMediumStage: (result: StageResult) => void;
  setDifficultStage: (result: StageResult) => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentStore>((set) => ({
  easyStage: null,
  mediumStage: null,
  difficultStage: null,
  setEasyStage: (result) => set({ easyStage: result }),
  setMediumStage: (result) => set({ mediumStage: result }),
  setDifficultStage: (result) => set({ difficultStage: result }),
  reset: () => set({ easyStage: null, mediumStage: null, difficultStage: null }),
}));
