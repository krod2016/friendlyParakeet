var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var capChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var lwrChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "*", "-", ".", "?", "@",]
var ranCharPool = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//parameters for random password
function getUserData() {
  var userNum = confirm( 'Would you like to use a number?');
    if (userNum) {
      passwordSet += selectionOfCharachters.userNum;
    }
  var userCap = confirm('Would you like to use a capital letter?');
    if (userCap) {
      passwordSet += selectionOfCharachters.userCap;
    }
  var userLwr = confirm('Would you like to use a lower case number?');
  if (userLwr) {
    passwordSet += selectionOfCharachters.userLwr;
  }
  var userSpec = confirm('Would you like to use a special character?');
  if (userSpec) {
    passwordSet += selectionOfCharachters.userSpec;
  }
  var userInput = window.prompt ('Please choose your password character length varying from 8-20.');
  if (userInput) {
    passwordSet += selectionOfCharachters.userInput;
  }
}

// Using user inputs, translating to integer
if (parseInt(userInput) <=8) {
  alert('Please select a criteria value.')
}

// If user follows parameters
if (userNum) {
  ranCharPool = ranCharPool.concat(numChar)
}
if (userCap) {
  ranCharPool = ranCharPool.concat(capChar)
}
if (userLwr) {
  ranCharPool = ranCharPool.concat(lwrChar)
}
if (userSpec) {
  ranCharPool = ranCharPool.concat(specChar)
}

// If user doesn't follow parameters
if (userNum === false && userCap === false && userLwr === false && userSpec === false) {
  alert("Please choose a valid response.")
  return null;
}

var ranPassword = ''
for (let i =0; i < length; i++) {
  ranPassword += ranCharPool (
  Math.floor(math.random) * ranCharPool.length
  )
  return password;
}

// Get references to the #generate element
document.querySelector("#generate").addEventListener("click", getUserData);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// End of function
writePassword()






