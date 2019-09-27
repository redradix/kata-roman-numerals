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
      title: 'fails',
      input: 3,
      expected: 'III'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(romanNumbers(sample.input)).toBe(sample.expected)
    })
  })
})
