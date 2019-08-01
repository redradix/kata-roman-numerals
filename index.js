module.exports = {
  toRoman
}

function toRoman(number) {
  let result = ''

  if (number >= 5) {
    result = 'V'
    number = number - 5
  }

  if (number === 4) {
    return 'IV'
  }
  
  for (let i = number ; number > 0; number--) {
    result += 'I'
  }

  return result
}