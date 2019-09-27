const numberToRoman = number => {
  switch (number) {
    case 0:
      return ''
    case 1:
    case 2:
    case 3:
      return 'I' + numberToRoman(number - 1)
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
    case 13:
    case 14:
    case 15:
      return 'X' + numberToRoman(number - 10)
  }
}

module.exports = {
  numberToRoman
}
