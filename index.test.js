const {
  arabicToRoman,
  fromRomanToArabic
} = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    { arabic: 1, roman: 'I' },
    { arabic: 2, roman: 'II' },
    { arabic: 3, roman: 'III' },
    { arabic: 4, roman: 'IV' },
    { arabic: 5, roman: 'V' },
    { arabic: 6, roman: 'VI' },
    { arabic: 9, roman: 'IX' },
    { arabic: 10, roman: 'X' },
    { arabic: 14, roman: 'XIV' },
    { arabic: 40, roman: 'XL' },
    { arabic: 41, roman: 'XLI' },
    { arabic: 49, roman: 'XLIX' },
    { arabic: 50, roman: 'L' },
    { arabic: 51, roman: 'LI' },
    { arabic: 90, roman: 'XC' },
    { arabic: 91, roman: 'XCI' },
    { arabic: 99, roman: 'XCIX' },
    { arabic: 100, roman: 'C' },
    { arabic: 400, roman: 'CD' },
    { arabic: 401, roman: 'CDI' },
    { arabic: 500, roman: 'D' },
    { arabic: 900, roman: 'CM' },
    { arabic: 901, roman: 'CMI' },
    { arabic: 1000, roman: 'M' },
    { arabic: 1999, roman: 'MCMXCIX' },
    { arabic: 3000, roman: 'MMM' },
    { arabic: 3334, roman: 'MMMCCCXXXIV' },
    { arabic: 4000, roman: 'I_V' },
    { arabic: 4444, roman: 'I_VCDXLIV' },
    { arabic: 5000, roman: '_V' }
  ]

  SAMPLES.forEach(sample => {

    const {
      arabic,
      roman
    } = sample

    it(`Arabic number ${arabic} should be ${roman} in Roman`, () => {
      expect(arabicToRoman(arabic)).toBe(roman)
    })

    it(`Roman number ${roman} should be ${arabic} in Arabic`, () => {
      expect(fromRomanToArabic(roman)).toBe(arabic)
    })
  })
})