const numberToRoman = number => {
  switch (number) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 5:
      return 'V'
  }
}

module.exports = {
  numberToRoman
}
