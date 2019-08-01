describe('Kata Roman Numerals', () => {
  const SAMPLES = [
    {
      title: 'fails',
      input: 1,
      expected: 2
    }
  ]

  SAMPLES.forEach(sample => {
    it(sample.title, () => {
      expect(sample.input).toBe(sample.expected)
    })
  })
})
