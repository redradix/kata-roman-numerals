function romanNumbers(number) {
  if (number <= 3){
    let r = ''
    for (let i=0; i<number; i++) {
      r += 'I'
    }
    return r
  }
  else if (number === 4) return 'IV';
  else if (number >= 5){
    let r = 'V'
    let rest = number - 5

    for (let i = rest; rest > 0; rest--) {
      r += 'I'
    } 
    return r
  }
}

module.exports = romanNumbers