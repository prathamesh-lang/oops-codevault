export type CodeTabType = 'code' | 'algorithm' | 'output' | 'viva';
export type ViewMode = 'grid' | 'list';

export interface VivaQuestion {
  question: string;
  answer: string;
}

export interface SampleOutput {
  inputDescription?: string;
  sampleInput?: string;
  output: string;
  note?: string;
}

export interface PracticalAlgorithm {
  steps: string[];
  explanation: string;
}

export interface Practical {
  id: number;
  title: string;
  shortTitle: string;
  category: string;
  originalProblem: string;
  aim: string;
  concepts: string[];
  operations: string[];
  filename: string;
  sourceCode: string;
  lineCount: number;
  algorithm: PracticalAlgorithm;
  sampleOutput: SampleOutput;
  errorCaseOutput?: SampleOutput;
  vivaQuestions: VivaQuestion[];
  importantNotes: string[];
  keyClassesAndFunctions: { name: string; description: string }[];
}

export interface CategoryMetadata {
  name: string;
  description: string;
  iconName: string;
  badgeClass: string;
  count: number;
}
