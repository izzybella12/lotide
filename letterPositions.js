const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) { //sentence is inputed
  const letterCount = {};
  for (let letter in sentence) {
    if (letterCount[sentence[letter]]) {
      letterCount[sentence[letter]].push(letter);
    } else {
      letterCount[sentence[letter]] = [letter]; 
    }
  }
  return letterCount;
};

module.exports = letterPositions;

//I've declared an object to push all our letters into;
//when the sentence is entered, we have to divy up the letters in results
//For this I've created a for...loop

// console.log(assertArraysEqual(letterPositions("bella").b, [0]));

