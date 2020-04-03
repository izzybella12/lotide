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

//This function has two arguments: a sourcedArray and itemsToRemove array
//The function needs to return a new array
//The new array should contain only the items in sourcedArray that were NOT present in itemsToRemove
//First we need to create a new array
//Next, we need to iterate through sourcedArray
//Next we have to iterate over itemsToRemove array
//Within the nested for loop, we have to write an if-else statement 

//This function put elements from an array into a string
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


console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]));
console.log(assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), ["1"]));
