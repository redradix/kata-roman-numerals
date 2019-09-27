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
    case 9:
      return 'IX'
    case 40:
      return 'XL'
    case 90:
      return 'XC'
  }

  if (number >= 50) {
    return 'L' + numberToRoman(number - 50)
  }
  if (number >= 40) {
    return 'XL' + numberToRoman(number - 40)
  }
  if (number >= 10) {
    return 'X' + numberToRoman(number - 10)
  }
  if (number >= 5) {
    return 'V' + numberToRoman(number - 5)
  }
}

module.exports = {
  numberToRoman
}
