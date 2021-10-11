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

var length = "passwordLength";

//parameters for random password
function generatePassword() {
  if (length.length >= 8 && length.length <= 128) {
    var numberChar = confirm('Would you like to use a number?');
    if (numberChar) {
      passwordSet += selectionOfCharacters.numberChar;
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
}

// If user follows parameters
if (selectionOfCharacters.numberChar) {
  selectionOfCharacters.ranCharPool = selectionOfCharacters.ranCharPool.concat(selectionOfCharacters.numberChar)
}
if (selectionOfCharacters.capitalChar) {
  selectionOfCharacters.ranCharPool = selectionOfCharacters.ranCharPool.concat(selectionOfCharacters.capitalChar)
}
if (selectionOfCharacters.lowerChar) {
  selectionOfCharacters.ranCharPool = selectionOfCharacters.ranCharPool.concat(selectionOfCharacters.lowerChar)
}
if (selectionOfCharacters.specialChar) {
  selectionOfCharacters.ranCharPool = selectionOfCharacters.ranCharPool.concat(selectionOfCharacters.specialChar)
}

// If user doesn't follow parameters
if (selectionOfCharacters.numberChar, selectionOfCharacters.capitalChar, selectionOfCharacters.lowerChar, selectionOfCharacters.specialChar === "" 
|| selectionOfCharacters.numberChar, selectionOfCharacters.capitalChar, selectionOfCharacters.lowerChar, selectionOfCharacters.specialChar === null) {
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
document.getElementById('generate').addEventListener("click", writePassword);

// End of function