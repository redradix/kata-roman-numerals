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
    },
    {
      title: '5 returns V',
      input: 5,
      expected: 'V'
    },
    {
      title: '6 returns VI',
      input: 6,
      expected: 'VI'
    },
    {
      title: '9 returns IX',
      input: 9,
      expected: 'IX'
    },
    {
      title: '10 returns X',
      input: 10,
      expected: 'X'
    },
    {
      title: '14 returns XIV',
      input: 14,
      expected: 'XIV'
    },
    {
      title: '40 returns XL',
      input: 40,
      expected: 'XL'
    },
    {
      title: '41 returns XLI',
      input: 41,
      expected: 'XLI'
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
