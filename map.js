const assertArraysEqual = require('./assertArraysEqual');

let map = function(array, callback) {
  let newMapArray = []; 
  for (let item of array) {
    newMapArray.push(callback(item));
  }
  return newMapArray;
}

module.exports = assertArraysEqual;

// const words = ["ground", "control", "to", "major", "tom"];
// const family = ["bella", "sam", "dad", "mom"]; 
// const friends = ["elvi", "jen", "ari", "lena"]; 


// const result1 = map(words, word => word[0]); 
// const result2 = map(family, fam => fam[0]);
// const result3 = map(friends, frien => frien[0]);

// console.log(assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']));
// console.log(assertArraysEqual(result2, ['a', 's', 'd', 'm']));
// console.log(assertArraysEqual(result3, ['e', 'j', 'a', 'l']));