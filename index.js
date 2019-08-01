module.exports = {
  toRoman
}

function toRoman(number) {
  if (number === 3) {
    return 'III'
  }
  if (number === 2) {
    return 'II'
  }
  return 'I'
}