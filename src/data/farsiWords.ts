export interface FarsiWord {
  farsi: string;
  english: string;
  romanized: string;
  category: 'noun' | 'pronoun' | 'phrase';
}

export const farsiWords: FarsiWord[] = [
  // Common nouns
  {
    farsi: 'سگ',
    english: 'dog',
    romanized: 'sag',
    category: 'noun',
  },
  {
    farsi: 'گربه',
    english: 'cat',
    romanized: 'gorbe',
    category: 'noun',
  },
  {
    farsi: 'خانه',
    english: 'house',
    romanized: 'khāne',
    category: 'noun',
  },
  {
    farsi: 'ماشین',
    english: 'car',
    romanized: 'māshin',
    category: 'noun',
  },
  {
    farsi: 'کتاب',
    english: 'book',
    romanized: 'ketāb',
    category: 'noun',
  },
  {
    farsi: 'آب',
    english: 'water',
    romanized: 'āb',
    category: 'noun',
  },
  {
    farsi: 'نان',
    english: 'bread',
    romanized: 'nān',
    category: 'noun',
  },
  {
    farsi: 'درخت',
    english: 'tree',
    romanized: 'derakht',
    category: 'noun',
  },
  {
    farsi: 'ماه',
    english: 'moon',
    romanized: 'māh',
    category: 'noun',
  },
  {
    farsi: 'خورشید',
    english: 'sun',
    romanized: 'khorshid',
    category: 'noun',
  },

  // Pronouns
  {
    farsi: 'من',
    english: 'I/me',
    romanized: 'man',
    category: 'pronoun',
  },
  {
    farsi: 'تو',
    english: 'you (singular)',
    romanized: 'to',
    category: 'pronoun',
  },
  {
    farsi: 'او',
    english: 'he/she/it',
    romanized: 'u',
    category: 'pronoun',
  },
  {
    farsi: 'ما',
    english: 'we/us',
    romanized: 'mā',
    category: 'pronoun',
  },
  {
    farsi: 'شما',
    english: 'you (plural/formal)',
    romanized: 'shomā',
    category: 'pronoun',
  },
  {
    farsi: 'آنها',
    english: 'they/them',
    romanized: 'ānhā',
    category: 'pronoun',
  },

  // Possessive pronouns
  {
    farsi: 'مال من',
    english: 'mine',
    romanized: 'māl-e man',
    category: 'phrase',
  },
  {
    farsi: 'مال تو',
    english: 'yours',
    romanized: 'māl-e to',
    category: 'phrase',
  },
  {
    farsi: 'مال او',
    english: 'his/hers',
    romanized: 'māl-e u',
    category: 'phrase',
  },

  // Common phrases
  {
    farsi: 'خانه من',
    english: 'my house',
    romanized: 'khāne-ye man',
    category: 'phrase',
  },
  {
    farsi: 'کتاب تو',
    english: 'your book',
    romanized: 'ketāb-e to',
    category: 'phrase',
  },
  {
    farsi: 'ماشین او',
    english: 'his/her car',
    romanized: 'māshin-e u',
    category: 'phrase',
  },
  {
    farsi: 'سگ ما',
    english: 'our dog',
    romanized: 'sag-e mā',
    category: 'phrase',
  },
  {
    farsi: 'گربه شما',
    english: 'your cat',
    romanized: 'gorbe-ye shomā',
    category: 'phrase',
  },
];

export const getRandomWord = (): FarsiWord => {
  return farsiWords[Math.floor(Math.random() * farsiWords.length)];
};

export const getRandomWords = (
  excludeWord: FarsiWord,
  count: number,
): FarsiWord[] => {
  const availableWords = farsiWords.filter(
    word => word.farsi !== excludeWord.farsi,
  );
  const shuffled = availableWords.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
