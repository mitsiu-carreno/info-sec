let symbols = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function encrypt(n, plain){
  let dataEncrypted = "";
  for (const character of plain){
    let upper = false;
    if(character == character.toUpperCase()){
      upper = true;
    }
    let charIndex = symbols.indexOf(character.toLowerCase());
    let newIndex = (charIndex + Math.abs(n))%symbols.length;
    let newChar = character;
    if(charIndex != -1){
      newChar = upper ? symbols[newIndex].toUpperCase()
      : symbols[newIndex]
    }
    dataEncrypted = dataEncrypted.concat(
      newChar
    );
  }
  return dataEncrypted;
}

module.exports = {encrypt } ;

//const RotN = require('./RotN.js');
//RotN.encrypt(100, "Hola seguridad informatica");
