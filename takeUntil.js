const takeUntil = function(array, callback) {
  newArray = []; 
  for (let element in array) {
    if (callback(array[element]) === true) {
      return newArray;
    } else {
      newArray.push(array[element]); 
    }
  } return newArray; 
};

//The function should return a slice of the array with elements taken from the beginning
//It should keep going until the callback predicate return truthy

//the callback function should have an if-else
//Once completed, it should return truthy
//the callback function will only provide one value: the item in the array

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //this is the array
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

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
    return "✅✅✅ Assertion Passed: " + firstArray + " is equal to " + secondArray;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`;
  }
};

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));