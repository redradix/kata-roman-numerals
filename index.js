function romanNumbers(number) {
  if (number <= 3){
    let r = ''
    for (let i=0; i<number; i++) {
      r += 'I'
    }
    return r
  }
  return 'IV'
}

module.exports = romanNumbers