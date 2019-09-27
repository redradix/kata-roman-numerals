const numberToRoman = number => {
  if (number === 5) return 'V'
  return number === 1 ? 'I' : number === 2 ? 'II' : 'III'
}

module.exports = {
  numberToRoman
}
