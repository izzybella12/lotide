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

console.log(letterPositions("bella"));

//I've declared an object to push all our letters into;
//when the sentence is entered, we have to divy up the letters in results
//For this I've created a for...loop

//

const assertArraysEqual = function(firstArray, secondArray) {
  let orderedFirstArray = "";
  let orderedSecondArray = "";
  for (let i = 0; i < firstArray.length - 1; i++) {
    orderedFirstArray += firstArray[i] + ", ";
  }
  if (i = firstArray.length - 1) {
    orderedFirstArray += firstArray[i];
  }
  for (let j = 0; j < secondArray.length - 1; j++) {
    orderedSecondArray += secondArray[j] + ", ";
  }
  if (j = secondArray.length - 1) {
    orderedSecondArray += secondArray[j];
  }
  if (orderedFirstArray === orderedSecondArray) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArrayy} !== ${secondArray}`);
  }
};

assertArraysEqual(letterPositions("bella").b, 0);

