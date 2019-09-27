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
      expect(sample.input).toBe(sample.expected)
    })
  })
})
