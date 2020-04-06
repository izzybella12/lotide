const assertArraysEqual = require('./assertArraysEqual');

const without = function(sourcedArray, itemsToRemove) {
let overlappingItems = []; 
for (let item of sourcedArray) {
  let itemFound = false;
    for (let otherItem of itemsToRemove) {
      if (item === otherItem) {
        itemFound = true;
        break;
      }
    } if (!itemFound) {
      overlappingItems.push(item);
    }
  } return overlappingItems; // Once I start console.logging at line 9, the function stops reading this line...
};

module.exports = without;

//This function has two arguments: a sourcedArray and itemsToRemove array
//The function needs to return a new array
//The new array should contain only the items in sourcedArray that were NOT present in itemsToRemove
//First we need to create a new array
//Next, we need to iterate through sourcedArray
//Next we have to iterate over itemsToRemove array
//Within the nested for loop, we have to write an if-else statement 

// console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
// console.log(assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]));
// console.log(assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), ["1"]));
