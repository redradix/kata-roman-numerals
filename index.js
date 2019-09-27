

function romanNumbers(number) {
   if (number <= 3){
    let r = ''
    for (let i=0; i<number; i++) {
      r += 'I'
    }
    return r
  }
  else if (number === 4) return 'IV';
  else if (number >= 5 && number < 9){
    let r = 'V'
    let rest = number - 5
    return r + romanNumbers(rest)
  } 
  else if (number === 9) return 'IX'
  else if (number >= 10 && number < 40){
    let r = 'X'
    let rest = number - 10
    return r + romanNumbers(rest)
  }
  else if (number >= 40 && number < 50){
    let r = 'XL'
    let rest = number - 40
    return r + romanNumbers(rest)
  }
  else if (number >= 50){
    let r = 'L';
    let rest = number - 50;
    return r + romanNumbers(rest)
  }
}

module.exports = romanNumbers