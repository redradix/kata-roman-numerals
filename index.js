module.exports = {
  toRoman
}

function toRoman(number) {
  if (number === 4) {
    return 'IV'
  }
  
  if (number === 9) {
    return 'IX'
  }
  
  let result = ''

  if (number >= 5) {
    result = 'V'
    number = number - 5
  }

  for (let i = number ; number > 0; number--) {
    result += 'I'
  }

  return result
}