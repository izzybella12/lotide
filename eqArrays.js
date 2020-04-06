const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {
  let orderedFirstArray = "";
  let orderedSecondArray = "";
  for (let i = 0; i < firstArray.length; i++) {//loops through the first array
    orderedFirstArray += firstArray[i];//puts each value into a string
  }
  for (let j = 0; j < secondArray.length; j++) {//loops through the second array
    orderedSecondArray += secondArray[j];//put each value into a string
  }
  if (orderedFirstArray === orderedSecondArray) {//compares the two strings
    return true;//if they're the same, return true
  } else {
    return false;//otherwise, return false
  }
};

module.exports = eqArrays;





