export interface FarsiCharacter {
  character: string;
  romanizedName: string;
  pronunciation: string;
  exampleWords: {
    beginning: string;
    middleOrEnd: string;
  };
}

export const farsiAlphabet: FarsiCharacter[] = [
  {
    character: 'ا',
    romanizedName: 'alef',
    pronunciation: 'ā',
    exampleWords: {
      beginning: 'ابرو',
      middleOrEnd: 'کتاب',
    },
  },
  {
    character: 'ب',
    romanizedName: 'be',
    pronunciation: 'b',
    exampleWords: {
      beginning: 'برادر',
      middleOrEnd: 'کتاب',
    },
  },
  {
    character: 'پ',
    romanizedName: 'pe',
    pronunciation: 'p',
    exampleWords: {
      beginning: 'پدر',
      middleOrEnd: 'کاپ',
    },
  },
  {
    character: 'ت',
    romanizedName: 'te',
    pronunciation: 't',
    exampleWords: {
      beginning: 'تلفن',
      middleOrEnd: '',
    },
  },
  {
    character: 'ث',
    romanizedName: 'se',
    pronunciation: 's',
    exampleWords: {
      beginning: 'ثواب',
      middleOrEnd: 'مثلث',
    },
  },
  {
    character: 'ج',
    romanizedName: 'jim',
    pronunciation: 'j',
    exampleWords: {
      beginning: 'جوان',
      middleOrEnd: '',
    },
  },
  {
    character: 'چ',
    romanizedName: 'che',
    pronunciation: 'ch',
    exampleWords: {
      beginning: 'چشم',
      middleOrEnd: 'کاپ',
    },
  },
  {
    character: 'ح',
    romanizedName: 'he',
    pronunciation: 'h',
    exampleWords: {
      beginning: 'حرف',
      middleOrEnd: '',
    },
  },
  {
    character: 'خ',
    romanizedName: 'khe',
    pronunciation: 'kh',
    exampleWords: {
      beginning: 'خوب',
      middleOrEnd: '',
    },
  },
  {
    character: 'د',
    romanizedName: 'dal',
    pronunciation: 'd',
    exampleWords: {
      beginning: 'دست',
      middleOrEnd: '',
    },
  },
  {
    character: 'ذ',
    romanizedName: 'zal',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'ذکر',
      middleOrEnd: '',
    },
  },
  {
    character: 'ر',
    romanizedName: 're',
    pronunciation: 'r',
    exampleWords: {
      beginning: 'روز',
      middleOrEnd: '',
    },
  },
  {
    character: 'ز',
    romanizedName: 'ze',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'زن',
      middleOrEnd: '',
    },
  },
  {
    character: 'س',
    romanizedName: 'sin',
    pronunciation: 's',
    exampleWords: {
      beginning: 'سلام',
      middleOrEnd: '',
    },
  },
  {
    character: 'ش',
    romanizedName: 'shin',
    pronunciation: 'sh',
    exampleWords: {
      beginning: 'شما',
      middleOrEnd: '',
    },
  },
  {
    character: 'ص',
    romanizedName: 'sad',
    pronunciation: 's',
    exampleWords: {
      beginning: 'صبح',
      middleOrEnd: '',
    },
  },
  {
    character: 'ض',
    romanizedName: 'zad',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'ضرب',
      middleOrEnd: '',
    },
  },
  {
    character: 'ط',
    romanizedName: 'ta',
    pronunciation: 't',
    exampleWords: {
      beginning: 'طبیعت',
      middleOrEnd: '',
    },
  },
  {
    character: 'ظ',
    romanizedName: 'za',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'ظاهر',
      middleOrEnd: '',
    },
  },
  {
    character: 'ع',
    romanizedName: 'ayn',
    pronunciation: 'glottal stop',
    exampleWords: {
      beginning: 'علی',
      middleOrEnd: '',
    },
  },
  {
    character: 'غ',
    romanizedName: 'ghayn',
    pronunciation: 'gh',
    exampleWords: {
      beginning: 'غذا',
      middleOrEnd: '',
    },
  },
  {
    character: 'ف',
    romanizedName: 'fe',
    pronunciation: 'f',
    exampleWords: {
      beginning: 'فردا',
      middleOrEnd: '',
    },
  },
  {
    character: 'ق',
    romanizedName: 'qaf',
    pronunciation: 'q',
    exampleWords: {
      beginning: 'قلم',
      middleOrEnd: '',
    },
  },
  {
    character: 'ک',
    romanizedName: 'kaf',
    pronunciation: 'k',
    exampleWords: {
      beginning: 'کتاب',
      middleOrEnd: '',
    },
  },
  {
    character: 'گ',
    romanizedName: 'gaf',
    pronunciation: 'g',
    exampleWords: {
      beginning: 'گل',
      middleOrEnd: '',
    },
  },
  {
    character: 'ل',
    romanizedName: 'lam',
    pronunciation: 'l',
    exampleWords: {
      beginning: 'لطفا',
      middleOrEnd: '',
    },
  },
  {
    character: 'م',
    romanizedName: 'mim',
    pronunciation: 'm',
    exampleWords: {
      beginning: 'مادر',
      middleOrEnd: '',
    },
  },
  {
    character: 'ن',
    romanizedName: 'nun',
    pronunciation: 'n',
    exampleWords: {
      beginning: 'نام',
      middleOrEnd: '',
    },
  },
  {
    character: 'و',
    romanizedName: 'vav',
    pronunciation: 'v/w',
    exampleWords: {
      beginning: 'وان',
      middleOrEnd: '',
    },
  },
  {
    character: 'ه',
    romanizedName: 'he',
    pronunciation: 'h',
    exampleWords: {
      beginning: 'هوا',
      middleOrEnd: '',
    },
  },
  {
    character: 'ی',
    romanizedName: 'ye',
    pronunciation: 'y',
    exampleWords: {
      beginning: 'یاد',
      middleOrEnd: '',
    },
  },
];

export const getRandomCharacters = (
  excludeCharacter: FarsiCharacter,
  count: number,
): FarsiCharacter[] => {
  const availableCharacters = farsiAlphabet.filter(
    char => char.character !== excludeCharacter.character,
  );
  const shuffled = availableCharacters.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getRandomCharacter = (): FarsiCharacter => {
  return farsiAlphabet[Math.floor(Math.random() * farsiAlphabet.length)];
};
