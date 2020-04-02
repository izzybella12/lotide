const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//We want the keys in objectOne and objectTwo to be the same
//And we want the values assigned to those keys to also be the same
//Lets first create a value for each argument, representing the keys for both
//Lets iterate over one object's keys and see if the keys from the second object match any of the first
//If, for each object, their same keys match their same values, then

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);