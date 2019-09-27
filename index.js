const VALUE_SYMBOLS = [
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
  [0, '']
]

const numberToRoman = number => {
  if (number === 0) return ''

  for (const [value, symbol] of VALUE_SYMBOLS) {
    if (number >= value) {
      return symbol + numberToRoman(number - value)
    }
  }
}

module.exports = {
  numberToRoman
}
