const romanNumbers = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: '1',
      input: 1,
      expected: 'I'
    },
    {
      title: '2',
      input: 2,
      expected: 'II'
    },
    {
      title: '3',
      input: 3,
      expected: 'III'
    },
    {
      title: '4',
      input: 4,
      expected: 'IV'
    },
    {
      title: '5',
      input: 5,
      expected: 'V'
    },
    {
      title: '6',
      input: 6,
      expected: 'VI'
    },
    {
      title: '7',
      input: 7,
      expected: 'VII'
    },
    {
      title: '8',
      input: 8,
      expected: 'VIII'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(romanNumbers(sample.input)).toBe(sample.expected)
    })
  })
})
