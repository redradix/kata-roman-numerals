const romanNumbers = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: '1',
      input: 1,
      expected: 'I'
    },
    {
      title: 'fails',
      input: 2,
      expected: 'II'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(romanNumbers(sample.input)).toBe(sample.expected)
    })
  })
})
