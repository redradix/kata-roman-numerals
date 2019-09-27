const numberToRoman = number => {
  switch (number) {
    case 0:
      return ''
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV'
    case 5:
    case 6:
    case 7:
    case 8:
      return 'V' + numberToRoman(number - 5)
    case 9:
      return 'IX'
    case 10:
    case 11:
    case 12:
      return 'X' + numberToRoman(number - 10)
  }
}

module.exports = {
  numberToRoman
}
