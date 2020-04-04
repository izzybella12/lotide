const assertArraysEqual = function(firstArray, secondArray) {
  let orderedFirstArray = "";
  let orderedSecondArray = "";
  for (let i = 0; i < firstArray.length; i++) { 
    orderedFirstArray += firstArray[i];
    if (i < firstArray.length - 1) {
      orderedFirstArray += ", ";
    }
  }
  for (let j = 0; j < secondArray.length; j++) {
    orderedSecondArray += secondArray[j];
    if (j < secondArray.length - 1) {
      orderedSecondArray += ", ";
    }
  }
  if (orderedFirstArray === orderedSecondArray) {
    return `✅✅✅ Assertion Passed: ${orderedFirstArray} === ${orderedSecondArray}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${orderedFirstArray} !== ${orderedSecondArray}`;
  }
};

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

////////////////////////////////

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

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

//The middle function should return an array with only the middle element(s) 
//of the provided array
//The length of the returned elements could vary

//If an array has 1 - 2 elements, there is no middle 
//And the array should return empty
//If the array is odd, a single element can be returned
//If the array is even, the two middle elements should be returned

//If the array is even, two elements should be returned: 

 