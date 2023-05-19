// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// Arrays

var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symS = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// prompt 
var userInt = parseInt(prompt("Please input a password length (at least 8 characters but no more than 128 characters)."));

// console log user input
console.log(userInt)


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
