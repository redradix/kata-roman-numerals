

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
  } else {
    return 'IX'
  }

}

module.exports = romanNumbers