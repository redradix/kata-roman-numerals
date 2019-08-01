const {
  toRoman
} = require('./index')

describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: '1 returns I',
      input: 1,
      expected: 'I'
    },
    {
      title: '2 returns II',
      input: 2,
      expected: 'II'
    },
    {
      title: '3 returns III',
      input: 3,
      expected: 'III'
    },
    {
      title: '4 returns IV',
      input: 4,
      expected: 'IV'
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
