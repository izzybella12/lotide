const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function takes in a sentence string and returns a count of each of the letters
//in that sentence
//the return should be an object
let countLetters = function(stringSentence) {
  let letterCount = {};
  for (let letter of stringSentence) { // the loop through each letter of stringSentence
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1; //how to i reference letter from the loop but also make it a key?
    }
  }
  return letterCount;
};

const results = (countLetters("bella"));

assertEqual(results["b"], 1);
assertEqual(results["e"], 1);
assertEqual(results["l"], 2);
assertEqual(results["l"], 2);
assertEqual(results["a"], 1);

//The stringSentence should be return in a new object: letterCount!
//We need a for...of loop to iterate over the stringSentence

//for each letter, add the letter to letterCount as a key with the value of 1
//if letter is already in letterCount, just incread the value by 1
//at the end, return the object.

//WHAT DOES ASSERTEQUAL DO HERE? WHAT IS THERE TO COMPARE?