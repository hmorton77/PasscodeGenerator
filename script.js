// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerCaseCharacters = ["a",  "b",  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialCharacters = ['@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// random number generation with min/max
function random (min, max) {
  return min + Math.random() * (max - min);
}
function getPassword() {
// step 1: get characters req's
// conditions (number of characters, special symbols, etc.)
  var passLength = parseInt(prompt("How many characters are required for your password? (8-128 characters"));
  while (passLength < 8 || passLength > 128) {
    var passLength = parseInt(prompt("Re-Enter Length: you must request a password within the character limits! (8-128 characters)"))
  }
  var special = confirm("Does your password need special characters?");
  var numbers = confirm("Does your password need numbers 0-9?");
  
// step 2: put all the req'ed chars into 1 array. 
  var randArray = []
  var randArray = randArray.concat(lowerCaseCharacters)
  if (special) 
    var randArray = randArray.concat(specialCharacters)
  if (numbers)
    var randArray = randArray.concat(numerals)

// step 3: from the array, randomly select x characters, x being the amount of characters req'ed  
  randChar = ""
  for (var i = 0; i < passLength; i++)  {
    randNum = Math.floor(random(0,(randArray.length-1))) + 1;
    randChar = randChar + randArray[randNum]
  }
  console.log(randChar)
  var password = document.getElementById("password")
  password.textContent = randChar
}
generateBtn.addEventListener("click", getPassword);