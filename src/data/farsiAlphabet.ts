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
      middleOrEnd: 'مدرسه',
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
      middleOrEnd: 'مدرسه',
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
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'خ',
    romanizedName: 'khe',
    pronunciation: 'kh',
    exampleWords: {
      beginning: 'خوب',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'د',
    romanizedName: 'dal',
    pronunciation: 'd',
    exampleWords: {
      beginning: 'دست',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ذ',
    romanizedName: 'zal',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'ذکر',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ر',
    romanizedName: 're',
    pronunciation: 'r',
    exampleWords: {
      beginning: 'روز',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ز',
    romanizedName: 'ze',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'زن',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'س',
    romanizedName: 'sin',
    pronunciation: 's',
    exampleWords: {
      beginning: 'سلام',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ش',
    romanizedName: 'shin',
    pronunciation: 'sh',
    exampleWords: {
      beginning: 'شما',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ص',
    romanizedName: 'sad',
    pronunciation: 's',
    exampleWords: {
      beginning: 'صبح',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ض',
    romanizedName: 'zad',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'ضرب',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ط',
    romanizedName: 'ta',
    pronunciation: 't',
    exampleWords: {
      beginning: 'طبیعت',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ظ',
    romanizedName: 'za',
    pronunciation: 'z',
    exampleWords: {
      beginning: 'ظاهر',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ع',
    romanizedName: 'ayn',
    pronunciation: 'glottal stop',
    exampleWords: {
      beginning: 'علی',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'غ',
    romanizedName: 'ghayn',
    pronunciation: 'gh',
    exampleWords: {
      beginning: 'غذا',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ف',
    romanizedName: 'fe',
    pronunciation: 'f',
    exampleWords: {
      beginning: 'فردا',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ق',
    romanizedName: 'qaf',
    pronunciation: 'q',
    exampleWords: {
      beginning: 'قلم',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ک',
    romanizedName: 'kaf',
    pronunciation: 'k',
    exampleWords: {
      beginning: 'کتاب',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'گ',
    romanizedName: 'gaf',
    pronunciation: 'g',
    exampleWords: {
      beginning: 'گل',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ل',
    romanizedName: 'lam',
    pronunciation: 'l',
    exampleWords: {
      beginning: 'لطفا',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'م',
    romanizedName: 'mim',
    pronunciation: 'm',
    exampleWords: {
      beginning: 'مادر',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ن',
    romanizedName: 'nun',
    pronunciation: 'n',
    exampleWords: {
      beginning: 'نام',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'و',
    romanizedName: 'vav',
    pronunciation: 'v/w',
    exampleWords: {
      beginning: 'وان',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ه',
    romanizedName: 'he',
    pronunciation: 'h',
    exampleWords: {
      beginning: 'هوا',
      middleOrEnd: 'مدرسه',
    },
  },
  {
    character: 'ی',
    romanizedName: 'ye',
    pronunciation: 'y',
    exampleWords: {
      beginning: 'یاد',
      middleOrEnd: 'مدرسه',
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
