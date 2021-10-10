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
  var userNum = confirm('Would you like to use a number?');
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
}

// If user follows parameters
if (userNum) {
  ranCharPool = ranCharPool.concat(numberChar)
}
if (userCap) {
  ranCharPool = ranCharPool.concat(capitalChar)
}
if (userLwr) {
  ranCharPool = ranCharPool.concat(lowerChar)
}
if (userSpec) {
  ranCharPool = ranCharPool.concat(specialChar)
}

// If user doesn't follow parameters
if (userNum, userCap, userLwr, userSpec === "" || userNum, userCap, userLwr, userSpec === null) {
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






