import { FarsiCharacter } from '../data/farsiAlphabet';
import { FarsiWord } from '../data/farsiWords';

export type QuizMode =
  | 'character-to-name'
  | 'name-to-character'
  | 'character-to-pronunciation'
  | 'pronunciation-to-character'
  | 'word-to-english'
  | 'english-to-word';

export interface QuizQuestion {
  id: string;
  mode: QuizMode;
  correctAnswer: FarsiCharacter | FarsiWord;
  options: (FarsiCharacter | FarsiWord)[];
  question: string;
}

export interface QuizState {
  currentQuestion: QuizQuestion | null;
  score: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  isAnswered: boolean;
  selectedAnswer: (FarsiCharacter | FarsiWord) | null;
  isCorrect: boolean | null;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}
