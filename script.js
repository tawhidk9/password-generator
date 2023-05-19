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

//"if" condition for inputs
if (!userInt) {
  alert("Please input a numeric value.")
  return generatePassword()
} else if (userInt < 8 || userInt > 128) {
  alert("Please input a value between 8 & 128.")
  return generatePassword()
} else {
  console.log('conditions met')

  var confirmLower = confirm("Include Lower Case?");
  var confirmUpper = confirm("Include Upper Case?");
  var confirmNums = confirm("Include Numbers?");
  var confirmSyms = confirm("Include Symbols?");
}

//array concat

if(confirmNums) {
  resArray = resArray.concat(numS);
}
if(confirmLower) {
  resArray = resArray.concat(lowChar);
}
if(confirmUpper) {
  resArray = resArray.concat(upChar);
}
if(confirmSyms) {
  resArray = resArray.concat(symS);
}

// logged resArray to see if it concatted correctly
console.log(resArray)

// random generator
  
for (var i = 0; i < userInt; i++) {
  // pushes our resArray into userArray
  userArray.push(resArray[Math.floor(Math.random() * resArray.length)]);
}

console.log(userArray)

// converts returned userArray into string
return userArray.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // password.Text will first run gen func then paste output val into passwordText area
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
