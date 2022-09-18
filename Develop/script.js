// variable storage 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var specialChar = "!#$%&*+-?^";
var included = "";
var password = "";
var passLength = 0;

// creating password draft
var passDraft = function() {
  // set default password and characters to empty string, and default password length to 0 
  included = "";
  password = "";
  passLength = 0;
  // ask user how long password is with lower limit of 8 and upper limit of 128
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please enter password length. Note: password must be 8-128 characters."
    );
  }
  // ask user prompts for what to include in the password 
  var lowercaseConfirm = confirm("Would you like lowercase letters in your password? Click OK or ENTER if yes");
  var uppercaseConfirm = confirm("Would you like uppercase letters in your password? Click OK or ENTER if yes");
  var numConfirm = confirm("Would you like numbers in your password? Click OK or ENTER if yes");
  var specialCharConfirm = confirm("Would you like special characters in your password? Click OK or ENTER if yes");
  // adding the answers of the prompts into the empty string for the password draft
  if (lowercaseConfirm) {
    included += lowercase;
  };
  if (uppercaseConfirm) {
    included += uppercase; 
  };
  if (numConfirm) {
    included += num;
  };
  if (specialCharConfirm) {
    included += specialChar;
  };

  console.log(included);
}

// generate password length
function generatePassword() {
  passDraft();
  for (let i = 1; i <= passLength; i++) {
    let randomNumber = Math.floor(Math.random() * included.length)
    password += included[randomNumber];
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);