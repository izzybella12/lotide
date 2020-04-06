const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = takeUntil;

//The function should return a slice of the array with elements taken from the beginning
//It should keep going until the callback predicate return truthy

//the callback function should have an if-else
//Once completed, it should return truthy
//the callback function will only provide one value: the item in the array

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //this is the array
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));