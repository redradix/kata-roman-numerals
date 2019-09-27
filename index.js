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
  1000: 'M',
  5000: '_V'
}

const SORTED_NUMBERS = Object.keys(ROMANS).map(x => Number(x))

function getSmallerAndBiggerRomans(number) {
  const biggerIndex = SORTED_NUMBERS.findIndex(x => x > number)

  const smaller = biggerIndex > 0
    ? SORTED_NUMBERS[biggerIndex - 1]
    : SORTED_NUMBERS[SORTED_NUMBERS.length - 1]

  const bigger = biggerIndex >= 0
    ? SORTED_NUMBERS[biggerIndex]
    : Infinity

  return [ smaller, bigger ]
}

const WHAT = {
  5: 1,
  10: 1,
  50: 10,
  100: 10,
  500: 100,
  1000: 100,
  5000: 1000
}

function getWhat(number) {
  return WHAT[number] || 0
}

function toRoman(number) {
  const [ smaller, bigger ] = getSmallerAndBiggerRomans(number)

  const what = getWhat(bigger)

  if (number >= smaller && number < (bigger - what)) {
    return `${ROMANS[smaller]}${toRoman(number - smaller)}`
  }

  if (number >= (bigger - what) && number < bigger) {
    return `${ROMANS[what]}${ROMANS[bigger]}${toRoman(number - (bigger - what))}`
  }

  return ''
}