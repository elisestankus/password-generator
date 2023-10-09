
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

  var characters = '';

  



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
