module.exports = {
  toRoman
}

function toRoman(number) {
  let result = ''

  for (let i = number ; number > 0; number--) {
    result += 'I'
  }

  return result
}