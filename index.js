function romanNumbers(number) {
  switch (number){
    default:
        let r = ''
        for (let i=0; i<number; i++) {
          r += 'I'
        }
        return r
    case 4:
      return 'IV'
    case 5:
      return 'V'
    case 6:
      return 'VI'
  }
}

module.exports = romanNumbers