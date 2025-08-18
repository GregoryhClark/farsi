import { FarsiCharacter } from '../data/farsiAlphabet';

export type QuizMode =
  | 'character-to-name'
  | 'name-to-character'
  | 'character-to-pronunciation'
  | 'pronunciation-to-character';

export interface QuizQuestion {
  id: string;
  mode: QuizMode;
  correctAnswer: FarsiCharacter;
  options: FarsiCharacter[];
  question: string;
}

export interface QuizState {
  currentQuestion: QuizQuestion | null;
  score: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  isAnswered: boolean;
  selectedAnswer: FarsiCharacter | null;
  isCorrect: boolean | null;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}
