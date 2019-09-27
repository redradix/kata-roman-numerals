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
      title: 'fails',
      input: 5,
      expected: 'V'
    },
    {
      title: 'fails',
      input: 6,
      expected: 'VI'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(romanNumbers(sample.input)).toBe(sample.expected)
    })
  })
})
