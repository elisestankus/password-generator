
function generatePass() {
//sets values for min and max password length parameters based on user input

  var minLength = parseInt(window.prompt("Minimum password length:"));
  var maxLength = parseInt(window.prompt("Maximum password length:"));

//returns a random integer between two bounds (use to determine password length based on user input for criteria)
//source: mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

  var randomLength = function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

//built potential character pool by concatenating strings of each character type together -- the string containing each character type is only added to the character pool if the user says to include that type

  var characters = '';

  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var lowercaseLettersYN = window.prompt("Include lowercase letters? (Enter 'Y' or 'N')").toUpperCase();

  if (lowercaseLettersYN == "Y") {
    characters = characters + lowercaseLetters;
  } 

  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var uppercaseLettersYN = window.prompt("Include uppercase letters? (Enter 'Y' or 'N')").toUpperCase();

  if (uppercaseLettersYN == "Y") {
    characters = characters + uppercaseLetters;
  } 

  var numbers = '0123456789';
  var numbersYN = window.prompt("Include numbers? (Enter 'Y' or 'N')").toUpperCase();

  if (numbersYN == "Y") {
    characters = characters + numbers;
  }

  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var specialCharsYN = window.prompt("Include special characters? (Enter 'Y' or 'N')").toUpperCase();

  if (specialCharsYN == "Y") {
    characters = characters + specialChars;
  } 

//at least one character type must be selected in order to generate a password

  if (characters == '') {
    window.alert("Error: you must enter 'Y' for at least one type of character in order to generate a password.")
  }



}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
