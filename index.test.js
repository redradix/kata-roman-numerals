const { numberToRoman } = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: 'Convert 1',
      input: 1,
      expected: 'I'
    },
    {
      title: 'Convert 2',
      input: 2,
      expected: 'II'
    },
    {
      title: 'Convert 3',
      input: 3,
      expected: 'III'
    },
    {
      title: 'Convert 4',
      input: 4,
      expected: 'IV'
    },
    {
      title: 'Convert 5',
      input: 5,
      expected: 'V'
    },
    {
      title: 'Convert 6',
      input: 6,
      expected: 'VI'
    },
    {
      title: 'Convert 7',
      input: 7,
      expected: 'VII'
    },
    {
      title: 'Convert 8',
      input: 8,
      expected: 'VIII'
    },
    {
      title: 'Convert 9',
      input: 9,
      expected: 'IX'
    },
    {
      title: 'Convert 10',
      input: 10,
      expected: 'X'
    },
    {
      title: 'Convert 11',
      input: 11,
      expected: 'XI'
    },
    {
      title: 'Convert 12',
      input: 12,
      expected: 'XII'
    },
    {
      title: 'Convert 13',
      input: 13,
      expected: 'XIII'
    },
    {
      title: 'Convert 14',
      input: 14,
      expected: 'XIV'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(numberToRoman(sample.input)).toBe(sample.expected)
    })
  })
})
