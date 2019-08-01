const {
  toRoman
} = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    { input: 1, expected: 'I' },
    { input: 2, expected: 'II' },
    { input: 3, expected: 'III' },
    { input: 4, expected: 'IV' },
    { input: 5, expected: 'V' },
    { input: 6, expected: 'VI' },
    { input: 9, expected: 'IX' },
    { input: 10, expected: 'X' },
    { input: 14, expected: 'XIV' },
    { input: 40, expected: 'XL' },
    { input: 41, expected: 'XLI' },
    { input: 49, expected: 'IL' },
    { input: 50, expected: 'L' },
    { input: 51, expected: 'LI' },
    { input: 90, expected: 'XC' },
    { input: 91, expected: 'XCI' },
    { input: 99, expected: 'IC' },
    { input: 100, expected: 'C' },
  ]

  SAMPLES.forEach(sample => {

    const {
      input,
      expected
    } = sample

    it(`${input} should be ${expected}`, () => {
      expect(toRoman(input)).toBe(expected)
    })
  })
})
