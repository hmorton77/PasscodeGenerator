// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerCaseCharacters = ["a",  "b",  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ['@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

// step 1: get characters req's
function getPasswordOptions() {
// conditions (number of letters, special symbols, etc.)
  var passLength = parseInt(prompt("How many characters are required for your password? (8-128 characters"));
  if (passLength < 8)
    var passLength = parseInt(prompt("Re-Enter Length: you must request a password greater than 8 characters!"));
  else if (passLength > 128)
    var passLength = parseInt(prompt("you must request a password with less than 128 characters!"));
  var special = confirm("Does your password need special characters?");
  var numbers = confirm("Does your password need numbers 0-9?");
// step 2: put all the req'ed chars into 1 array. 
  var randArray = []
  var randArray = randArray.concat(lowerCaseCharacters)
  if (special) 
    var randArray = randArray.concat(specialCharacters)
  if (numbers)
    var randArray = randArray.concat(numerals)

console.log(randArray)

}


// function getRandom() {

// }

// function generatePassword
//   var result =[]
//   result[Math.random ]
// // get an array of all of the options

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// Add event listener to generate button when this is clicked, it will run writePassword
generateBtn.addEventListener("click", getPasswordOptions);


// on click i want:
  // 