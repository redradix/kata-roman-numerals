const dolorDeCabeza = (val, number, limit) => val + romanNumbers(number - limit)

function romanNumbers(number) {
   if (number <= 3){
    let r = ''
    for (let i=0; i<number; i++) {
      r += 'I'
    }
    return r
  }
  if (number === 4) return 'IV';
  if (number >= 5 && number < 9) return dolorDeCabeza('V', number, 5)
  if (number === 9) return 'IX'
  if (number >= 10 && number < 40) return dolorDeCabeza('X', number, 10)
  if (number >= 40 && number < 50) return dolorDeCabeza('XL', number, 40)
  if (number >= 50 && number < 90) return dolorDeCabeza('L', number, 50)
  if (number >= 90) return dolorDeCabeza('XC', number, 90)
  
}

module.exports = romanNumbers