const {
  toRoman
} = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: '1 returns I',
      input: 1,
      expected: 'I'
    }
  ]

  SAMPLES.forEach(sample => {

    const {
      title,
      input,
      expected
    } = sample

    it(title, () => {
      expect(toRoman(input)).toBe(expected)
    })
  })
})
