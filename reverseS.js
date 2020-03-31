let reverse = function(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } return newString;
};

let input = process.argv.slice(2);
for (let element of input) {
  console.log(reverse(element));
}
/* This is the same as:
for (i = 0; i < input.length; i++) {
  console.log(reverse(input[i]));
} */