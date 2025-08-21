import {
  FarsiCharacter,
  getRandomCharacters,
  getRandomCharacter,
  getRandomCharactersWithUniquePronunciations,
  getRandomCharactersWithBalancedPronunciations,
} from '../data/farsiAlphabet';
import { QuizQuestion, QuizMode } from '../types/quiz';

export const generateQuizQuestion = (mode: QuizMode): QuizQuestion => {
  const correctAnswer = getRandomCharacter();
  
  // Use balanced pronunciations for character-to-pronunciation mode
  const wrongOptions = mode === 'character-to-pronunciation' 
    ? getRandomCharactersWithBalancedPronunciations(correctAnswer, 4)
    : getRandomCharacters(correctAnswer, 4);
    
  const options = [...wrongOptions, correctAnswer].sort(
    () => 0.5 - Math.random(),
  );

  let question: string;

  switch (mode) {
    case 'character-to-name':
      question = `What is the name of this character?`;
      break;
    case 'name-to-character':
      question = `Which character is "${correctAnswer.romanizedName}"?`;
      break;
    case 'character-to-pronunciation':
      question = `How is this character pronounced?`;
      break;
    case 'pronunciation-to-character':
      question = `Which character makes the sound "${correctAnswer.pronunciation}"?`;
      break;
    default:
      question = '';
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    mode,
    correctAnswer,
    options,
    question,
  };
};

export const generateQuizQuestions = (
  mode: QuizMode,
  count: number = 10,
): QuizQuestion[] => {
  return Array.from({ length: count }, () => generateQuizQuestion(mode));
};

export const checkAnswer = (
  selectedAnswer: FarsiCharacter,
  correctAnswer: FarsiCharacter,
): boolean => {
  return selectedAnswer.character === correctAnswer.character;
};

export const getQuizModeDescription = (mode: QuizMode): string => {
  switch (mode) {
    case 'character-to-name':
      return 'Farsi Character → Romanized Name';
    case 'name-to-character':
      return 'Romanized Name → Farsi Character';
    case 'character-to-pronunciation':
      return 'Farsi Character → Pronunciation';
    case 'pronunciation-to-character':
      return 'Pronunciation → Farsi Character';
    default:
      return '';
  }
};
