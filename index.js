module.exports = {
  toRoman
}

function toRoman(number) {
  if (number > 0 && number <= 3) {
    return `I${toRoman(number - 1)}`
  }

  if (number === 4) {
    return 'IV'
  }
  
  if (number === 9) {
    return 'IX'
  }
  
  if (number >= 5 && number < 10) {
    return `V${toRoman(number - 5)}`
  }

  if (number === 49) {
    return 'IL'
  }
  
  if (number >= 40 && number < 50) {
    return `XL${toRoman(number - 40)}`
  }
  
  if (number >= 10 && number < 50) {
    return `X${toRoman(number - 10)}`
  }

  if (number >= 50) {
    return `L${toRoman(number - 50)}`
  }
  
  return ''
}