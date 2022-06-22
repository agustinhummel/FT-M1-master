'use strict'

function BinarioADecimal(num) {
  var res = 0;
  var pos = 0;
    for (var i = num.length-1; i >= 0; i--){
      res = res + num[i] * 2 ** pos;
     pos++;
    }
  return res;
  }
  
function DecimalABinario(num) {
  // tu codigo aca
  let resto = '';
  while (num > 0) {
    resto = num % 2 + resto; 
    num = Math.floor(num / 2); 
  }
  return resto; 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}