const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`;
  }
};

module.exports = assertArraysEqual;


// AN ADDITION I HAD INITIALLY USED FOR EQARRAYS/ASSERTARRAYSEQUAL
// THIS ADDITION ADDS A COMMA BETWEEN VARIABLES IN A STRING
// let orderedFirstArray = "";
// let orderedSecondArray = "";
// for (let i = 0; i < firstArray.length; i++) { 
//   orderedFirstArray += firstArray[i];
//   if (i < firstArray.length - 1) {
//     orderedFirstArray += ", ";
//   }
// }
// for (let j = 0; j < secondArray.length; j++) {
//   orderedSecondArray += secondArray[j];
//   if (j < secondArray.length - 1) {
//     orderedSecondArray += ", ";
//   }
// }


