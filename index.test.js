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
    it(sample.title, () => {
      expect(sample.input).toBe(sample.expected)
    })
  })
})
