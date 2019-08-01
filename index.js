module.exports = {
  toRoman
}

const ROMANS = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

function toRoman(number) {
  if (number > 0 && number <= 3) {
    return `${ROMANS[1]}${toRoman(number - 1)}`
  }

  if (number === 4) {
    return `${ROMANS[1]}${ROMANS[5]}`
  }
  
  if (number >= 5 && number < 9) {
    return `${ROMANS[5]}${toRoman(number - 5)}`
  }

  if (number === 9) {
    return `${ROMANS[1]}${ROMANS[10]}`
  }
  
  if (number >= 10 && number < 40) {
    return `${ROMANS[10]}${toRoman(number - 10)}`
  }

  if (number >= 40 && number < 50) {
    return `${ROMANS[10]}${ROMANS[50]}${toRoman(number - 40)}`
  }
  
  if (number >= 50 && number < 90) {
    return `${ROMANS[50]}${toRoman(number - 50)}`
  }

  if (number >= 90 && number < 100) {
    return `${ROMANS[10]}${ROMANS[100]}${toRoman(number - 90)}`
  }
  
  if (number >= 100 && number < 400) {
    return `${ROMANS[100]}${toRoman(number - 100)}`
  }

  if (number >= 400 && number < 500) {
    return `${ROMANS[100]}${ROMANS[500]}${toRoman(number - 400)}`
  }
  
  if (number >= 500 && number < 900) {
    return `${ROMANS[500]}${toRoman(number - 500)}`
  }

  if (number >= 900 && number < 1000) {
    return `${ROMANS[100]}${ROMANS[1000]}${toRoman(number - 900)}`
  }
  
  if (number >= 1000) {
    return `${ROMANS[1000]}${toRoman(number - 1000)}`
  }

  return ''
}