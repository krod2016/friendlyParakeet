//character variables
const selectionOfCharacters = {
  numberChar: '0123456789',
  capitalChar: 'abcdefghifklmnopqrstuvwxyz',
  lowerChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  specialChar: '!#$%&*-.?@',
  ranCharPool: '0123456789abcdefghifklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&*-.?@',
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//parameters for random password
function generatePassword() {
  var passwordSet = "";
  var length = prompt("How many characters for your password?");
  var lengthInt = parseInt(length)

  console.log(lengthInt);

  if (lengthInt >= 8 && lengthInt <= 128) {
    var numberChar = confirm("Would you like to use a number? Choose 'OK' for yes, and 'Cancel' for no.");
    if (numberChar) {
      passwordSet += selectionOfCharacters.numberChar;
    }
    var capitalChar = confirm("Would you like to use a capital letter? Choose 'OK' for yes, and 'Cancel' for no.");
    if (capitalChar) {
      passwordSet += selectionOfCharacters.capitalChar;
    }
    var lowerChar = confirm("Would you like to use a lowercase letter? Choose 'OK' for yes, and 'Cancel' for no.");
    if (lowerChar) {
      passwordSet += selectionOfCharacters.lowerChar;
    }
    var specialChar = confirm("Would you like to use a special character? Choose 'OK' for yes, and 'Cancel' for no.");
    if (specialChar) {
      passwordSet += selectionOfCharacters.specialChar;
    }
    var ranPassword = ['']
    for (let i = 0; i < length; i++) {
      ranPassword += selectionOfCharacters.ranCharPool[Math.floor(Math.random() * selectionOfCharacters.ranCharPool.length)] /* a randomly selected character from passwordSet */
    }
    return ranPassword
  }
  console.log(passwordSet) //string with the character pool.
}

document.getElementById('generate').addEventListener("click", writePassword);