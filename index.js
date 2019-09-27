const numberToRoman = number => {
  switch (number) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV'
    case 5:
      return 'V'
    case 6:
      return 'V' + numberToRoman(1)
    case 7:
      return 'V' + numberToRoman(2)
    case 8:
      return 'V' + numberToRoman(3)
    case 10:
      return 'X'
  }
}

module.exports = {
  numberToRoman
}
