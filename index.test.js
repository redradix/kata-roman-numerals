const { numberToRoman } = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: 'Convert 1',
      input: 1,
      expected: 'I'
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(numberToRoman(sample.input)).toBe(sample.expected)
    })
  })
})
