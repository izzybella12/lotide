let map = function(array, callback) {
  let newMapArray = []; 
  for (let item of array) {
    newMapArray.push(callback(item));
  }
  return newMapArray;
}

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
    return `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`;
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const family = ["bella", "sam", "dad", "mom"]; 
const friends = ["elvi", "jen", "ari", "lena"]; 


const result1 = map(words, word => word[0]); 
const result2 = map(family, fam => fam[0]);
const result3 = map(friends, frien => frien[0]);

console.log(assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(result2, ['b', 's', 'd', 'm']));
console.log(assertArraysEqual(result3, ['e', 'j', 'a', 'l']));