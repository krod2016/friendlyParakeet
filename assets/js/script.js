var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var capChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var lwrChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "*", "-", ".", "?", "@",]
var ranCharPool = []

//parameters for random password
function getUserData() {
  var userNum = confirm(
    'Would you like to use a number?'
  )
  var userCap = confirm(
    'Would you like to use a capital letter?'
  )
  var userLwr = confirm(
    'Would you like to use a lower case number?'
  )
  var userSpec = confirm(
    'Would you like to use a special character?'
  )
  var userInput = window.prompt (
    'Please choose your password character length varying from 8-20.'
  )
}

//using user inputs, translating to integer
if (parseInt(userInput) >=8 ||parseInt(userInput) <=1) {
  alert('Please select a criteria value.')
}


// Get references to the #generate element
document.querySelector("#generate").addEventListener("click", getUserData);

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

