const VALUE_SYMBOLS = [[50, 'L'], [40, 'XL'], [10, 'X'], [5, 'V'], [1, 'I']]

const numberToRoman = number => {
  switch (number) {
    case 0:
      return ''
    case 4:
      return 'IV'
    case 9:
      return 'IX'
    case 40:
      return 'XL'
    case 90:
      return 'XC'
  }

  for (const [value, symbol] of VALUE_SYMBOLS) {
    if (number >= value) {
      return symbol + numberToRoman(number - value)
    }
  }
}

module.exports = {
  numberToRoman
}
