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

  if (number >= 5 && number < 10) {
    result = 'V'
    number = number - 5
  }

  if (number >= 10) {
    return `X${toRoman(number - 10)}`
  }

  for (let i = number ; number > 0; number--) {
    result += 'I'
  }

  return result
}