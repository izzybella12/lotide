//this function takes two objects and compares that the keys and values are identical
//it also makes sure that if the keys whose values are arrays, they must also be identical...
const eqObjects = function(objectOne, objectTwo) {
  let objectOnesKeys = Object.keys(objectOne); //the keys of objectOne
  let objectTwosKeys = Object.keys(objectTwo); //the keys of objectTwo
  if (objectOnesKeys.length !== objectTwosKeys.length) {
    return false;
  } else {
    for (let keyIndexOne = 0; keyIndexOne < objectOnesKeys.length; keyIndexOne++) { //iterating over objectOne's keys
      let currentKey = objectOnesKeys[keyIndexOne]; //assigning a value to each of objectOne's keys { //iterating over objectTwo's keys
      if (Array.isArray(objectOne[currentKey]) && Array.isArray(objectTwo[currentKey])) {
        let equatedArrays = eqArrays(objectOne[currentKey], objectTwo[currentKey]);
        if (equatedArrays === false) {
          return false;
        }
      }
    }
  }
  return true;
};

const eqArrays = function(firstArray, secondArray) {
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
};

//this function is supposed to help us easily test functions that return objects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(abc, ab);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);