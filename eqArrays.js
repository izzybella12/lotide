const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstArray, secondArray) {
  let orderedFirstArray = "";  
  let orderedSecondArray = ""; 
  for (let i = 0; i < firstArray.length; i++) {
    orderedFirstArray += firstArray[i]; 
  } 
  for (let j = 0; j < secondArray.length; j++) {
    orderedSecondArray += secondArray[j]; 
  } 
  if (orderedFirstArray === orderedSecondArray) {
    return true; 
  } else {
    return false; 
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

