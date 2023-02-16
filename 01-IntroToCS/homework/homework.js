'use strict';

function BinarioADecimal(num) {
   
   num = num.split("").reverse().join("");
   var resultado = 0;
  for(let i=0; i < num.length; i++){
   resultado += num[i] * 2 ** i
  }
  return resultado;
}
//console.log(BinarioADecimal("1011"));

function DecimalABinario(num) {
var resto = "";
while(num > 0){
resto = num % 2 + resto;
num=Math.floor(num / 2);
 
}
 return resto;
}
console.log(DecimalABinario(11))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

