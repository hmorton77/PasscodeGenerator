// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerCaseCharacters = ["a",  "b",  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ['@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

function getPasswordOptions() {
// conditions (number of letters, special symbols, etc.)
  var length = parseInt(prompt("How many characters are required for your password? (8-128 characters"))
  if (length < 8)
    alert("you must request a password greater than 8 character")
  else if (length > 128)
    alert("you must request a password with less than 128 characters!")
  else 
    return
  
  var special = confirm("Does your password need special characters?")
  var numbers = confirm("Does your password need numbers 0-9?")
}
// run the function
getPasswordOptions()

function getRandom() {

}

function generatePassword
  var result =[]
  result[Math.random ]
// get an array of all of the options

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
