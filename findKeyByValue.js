const assertEqual = require('./assertEqual');

const findKeyByValue = function (inputObject, value) {
  let inputObjectKey = Object.keys(inputObject) // assigning inputObject's keys to inputObjectKey
  for (let j = 0; j < inputObjectKey.length; j++) { // looping through the keys in the object
    let currentKey = inputObjectKey[j];
    if (inputObject[currentKey] === value) {
      return currentKey;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

//the function scans the object
//the function should scan the object's keys
//if a key contains the value, the function should return that key
//if the function never finds a value, it should return undefined

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);