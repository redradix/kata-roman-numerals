module.exports = {
  arabicToRoman,
  fromRoman
}

function arabicToRoman(numberToConvert) {
  let romanResult = '';
  const ARABIC_TABLE = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ROMAN_TABLE = ["_V", "I_V", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i <= ARABIC_TABLE.length; i++) {
    while (numberToConvert % ARABIC_TABLE[i] < numberToConvert) {
      romanResult += ROMAN_TABLE[i];
      numberToConvert -= ARABIC_TABLE[i];
    }
  }
  return romanResult;
}

function fromRoman(stringToConvert) {
  let arabicResult = 0;
  const ARABIC_TABLE = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ROMAN_TABLE = ["_V", "I_V", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (var i = 0;i<=ARABIC_TABLE.length;i++) {
    while (stringToConvert.indexOf(ROMAN_TABLE[i]) === 0){
      arabicResult += ARABIC_TABLE[i];
      stringToConvert = stringToConvert.replace(ROMAN_TABLE[i],'');
    }
  }
  return arabicResult;
}