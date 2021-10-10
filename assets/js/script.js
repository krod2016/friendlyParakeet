//character variables
const selectionOfCharacters = {
  numberChar: '0123456789',
  capitalChar: 'abcdefghifklmnopqrstuvwxyz',
  lowerChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  specialChar: '!#$%&*-.?@',
  ranCharPool: '',
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//parameters for random password
if (length >= 8 && length <= 128) {
  var numberChar = confirm('Would you like to use a number?');
  if (numberChar) {
    passwordSet += selectionOfCharachters.numberChar;
  }
  var capitalChar = confirm('Would you like to use a capital letter?');
  if (capitalChar) {
    passwordSet += selectionOfCharachters.capitalChar;
  }
  var lowerChar = confirm('Would you like to use a lower case number?');
  if (lowerChar) {
    passwordSet += selectionOfCharachters.lowerChar;
  }
  var specialChar = confirm('Would you like to use a special character?');
  if (specialChar) {
    passwordSet += selectionOfCharachters.specialChar;
  }
}

// If user follows parameters
if (numberChar) {
  ranCharPool = ranCharPool.concat(numberChar)
}
if (capitalChar) {
  ranCharPool = ranCharPool.concat(capitalChar)
}
if (lowerChar) {
  ranCharPool = ranCharPool.concat(lowerChar)
}
if (specialChar) {
  ranCharPool = ranCharPool.concat(specialChar)
}

// If user doesn't follow parameters
if (numberChar, capitalChar, lowerChar, specialChar === "" || numberChar, capitalChar, lowerChar, specialChar === null) {
  window.alert("Please choose a valid response.");
}

var ranPassword = ''
for (let i = 0; i < length; i++) {
  ranPassword += ranCharPool(
    Math.floor(math.random) * ranCharPool.length
  )
}

// Get references to the #generate element
document.querySelector("#generate").addEventListener("click", selectionOfCharacters);

// Add event listener to generate button
document.getElementById('#generatebtn').addEventListener("click", writePassword);

// End of function
writePassword()






