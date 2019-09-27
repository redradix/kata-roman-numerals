const { numberToRoman } = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      input: 1,
      expected: 'I'
    },
    {
      input: 2,
      expected: 'II'
    },
    {
      input: 3,
      expected: 'III'
    },
    {
      input: 4,
      expected: 'IV'
    },
    {
      input: 5,
      expected: 'V'
    },
    {
      input: 6,
      expected: 'VI'
    },
    {
      input: 7,
      expected: 'VII'
    },
    {
      input: 8,
      expected: 'VIII'
    },
    {
      input: 9,
      expected: 'IX'
    },
    {
      input: 10,
      expected: 'X'
    },
    {
      input: 11,
      expected: 'XI'
    },
    {
      input: 12,
      expected: 'XII'
    },
    {
      input: 13,
      expected: 'XIII'
    },
    {
      input: 14,
      expected: 'XIV'
    },
    {
      input: 15,
      expected: 'XV'
    },
    {
      input: 40,
      expected: 'XL'
    },
    {
      input: 41,
      expected: 'XLI'
    },
    {
      input: 50,
      expected: 'L'
    },
    {
      input: 90,
      expected: 'XC'
    },
    {
      input: 100,
      expected: 'C'
    },
    {
      input: 400,
      expected: 'CD'
    }
  ]

  SAMPLES.forEach(sample => {
    it(`Convert ${sample.input}`, () => {
      expect(numberToRoman(sample.input)).toBe(sample.expected)
    })
  })
})
