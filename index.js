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
  
  if (number >= 5 && number < 9) {
    return `V${toRoman(number - 5)}`
  }

  if (number === 9) {
    return 'IX'
  }
  
  if (number >= 10 && number < 40) {
    return `X${toRoman(number - 10)}`
  }

  if (number >= 40 && number < 49) {
    return `XL${toRoman(number - 40)}`
  }
  
  if (number === 49) {
    return 'IL'
  }
  
  if (number >= 50 && number < 90) {
    return `L${toRoman(number - 50)}`
  }

  if (number >= 90 && number < 99) {
    return `XC${toRoman(number - 90)}`
  }
  
  if (number === 99) {
    return 'IC'
  }
  
  if (number >= 100) {
    return `C${toRoman(number - 100)}`
  }

  return ''
}