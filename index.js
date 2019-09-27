function romanNumbers(number) {
  if (number <= 3){
    let r = ''
    for (let i=0; i<number; i++) {
      r += 'I'
    }
    return r
  }
  return number === 5 ? 'V' : 'IV'
}

module.exports = romanNumbers