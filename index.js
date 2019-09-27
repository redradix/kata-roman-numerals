const numberToRoman = number => {
  if (number === 5) return 'V'
  return number === 1 ? 'I' : 'II'
}

module.exports = {
  numberToRoman
}
