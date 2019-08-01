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

  if (number >= 40 && number < 50) {
    return `XL${toRoman(number - 40)}`
  }
  
  if (number >= 50 && number < 90) {
    return `L${toRoman(number - 50)}`
  }

  if (number >= 90 && number < 100) {
    return `XC${toRoman(number - 90)}`
  }
  
  if (number >= 100 && number < 400) {
    return `C${toRoman(number - 100)}`
  }

  if (number >= 400 && number < 500) {
    return `CD${toRoman(number - 400)}`
  }
  
  if (number >= 500 && number < 900) {
    return `D${toRoman(number - 500)}`
  }

  if (number === 900) {
    return `CM`
  }
  
  return ''
}