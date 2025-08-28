import {
  FarsiCharacter,
  getRandomCharacters,
  getRandomCharacter,
  getRandomCharactersWithUniquePronunciations,
  getRandomCharactersWithBalancedPronunciations,
} from '../data/farsiAlphabet';
import { FarsiWord, getRandomWord, getRandomWords } from '../data/farsiWords';
import { QuizQuestion, QuizMode } from '../types/quiz';

export const generateQuizQuestion = (mode: QuizMode): QuizQuestion => {
  let correctAnswer: FarsiCharacter | FarsiWord;
  let wrongOptions: (FarsiCharacter | FarsiWord)[];
  let question: string;

  if (mode === 'word-to-english' || mode === 'english-to-word') {
    // Word-based quiz modes
    correctAnswer = getRandomWord();
    wrongOptions = getRandomWords(correctAnswer, 4);

    switch (mode) {
      case 'word-to-english':
        question = `What does "${correctAnswer.farsi}" mean?`;
        break;
      case 'english-to-word':
        question = `What is the Farsi word for "${correctAnswer.english}"?`;
        break;
      default:
        question = '';
    }
  } else {
    // Character-based quiz modes
    correctAnswer = getRandomCharacter();

    // Use balanced pronunciations for character-to-pronunciation mode
    wrongOptions =
      mode === 'character-to-pronunciation'
        ? getRandomCharactersWithBalancedPronunciations(correctAnswer, 4)
        : getRandomCharacters(correctAnswer, 4);

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
  }

  const options = [...wrongOptions, correctAnswer].sort(
    () => 0.5 - Math.random(),
  );

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
  selectedAnswer: FarsiCharacter | FarsiWord,
  correctAnswer: FarsiCharacter | FarsiWord,
): boolean => {
  if ('character' in selectedAnswer && 'character' in correctAnswer) {
    return selectedAnswer.character === correctAnswer.character;
  } else if ('farsi' in selectedAnswer && 'farsi' in correctAnswer) {
    return selectedAnswer.farsi === correctAnswer.farsi;
  }
  return false;
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
    case 'word-to-english':
      return 'Farsi Word → English Meaning';
    case 'english-to-word':
      return 'English Word → Farsi Translation';
    default:
      return '';
  }
};
