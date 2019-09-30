module.exports = {
  arabicToRoman
}

function arabicToRoman(numberToConvert) {
  let romanResult = '';
  const ARABIC_TABLE = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ROMAN_TABLE = ["V", "IV", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i <= ARABIC_TABLE.length; i++) {
    while (numberToConvert % ARABIC_TABLE[i] < numberToConvert) {
      romanResult += ROMAN_TABLE[i];
      numberToConvert -= ARABIC_TABLE[i];
    }
  }
  return romanResult;
}