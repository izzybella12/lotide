let findKey = function(object, callback) {
  for (let ob in object) {
    if (callback(object[ob])) {
      return ob;
    }
  } return undefined;
};


//The function should scan the object
//It returns the first key that returns the callback as truthy
//If no key is found, it should return undefined.

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

let result2 = findKey({
  "Bella": { gamesWon: 10 },
  "Sam":   { gamesWon: 6 },
  "Mom":   { gamesWon: 5 },
  "Dad":   { gamesWon: 5 },
}, x => x.gamesWon === 10);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result1, "noma");
assertEqual(result2, "Bella");

