//This function orders elements in an array

const assertArraysEqual = function(firstArray, secondArray) {
  let orderedFirstArray = "";
  let orderedSecondArray = "";
  for (let i = 0; i < firstArray.length; i++) { //This goes through everything besides the last element
    orderedFirstArray += firstArray[i]; //this adds each number indexed followed by a comma to ordered first array
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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));




