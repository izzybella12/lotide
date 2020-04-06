const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
let middleNums = [];
let arrayDivided = (array.length / 2);
  if ((array.length === 1) || (array.length === 2)) {
  } else if (array.length % 2 !== 0) {
    middleNums.push(array[arrayDivided - 0.5]);
  } else if ((array.length % 2 === 0)) {
    middleNums.push(array[arrayDivided - 1]);
    middleNums.push(array[arrayDivided]);
  } 
  return middleNums;
};

module.exports = middle;

//The middle function should return an array with only the middle element(s) 
//of the provided array
//The length of the returned elements could vary

//If an array has 1 - 2 elements, there is no middle 
//And the array should return empty
//If the array is odd, a single element can be returned
//If the array is even, the two middle elements should be returned

//If the array is even, two elements should be returned: 

 