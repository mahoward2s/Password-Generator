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



var prompt1 = confirm("Follow The Prompts To Generate A Password")
var prompt2 = "Password Length"
var prompt3 = "Password Criteria"
 
var criteria=["Uppercase", "Lowercase", "Numeric", "Special Character"]

