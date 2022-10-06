"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let decim = 0;
  let newArray = [];
  for (let i = 0; i < num.length; i++) {
    newArray.unshift(num[i]);
  }

  for (let j = 0; j < newArray.length; j++) {
    decim += Math.pow(2, j) * newArray[j];
  }

  return decim;
}

function DecimalABinario(num) {
  // tu codigo aca
  var bin = [];
  var numString = "";

  for (let i = 0; i < 100; i++) {
    if (num < 1) {
      break;
    }
    bin.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  for (let i = 0; i < bin.length; i++) {
    numString += bin[i];
  }
  return numString;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
