// Array of lowercase characters
var lowercasecharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of Uppercase characters
var uppercasecharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// Array of numeric characters
var numericcharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters
var specialcharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~", "|", "{", "}"];

//Function to Prompt user for password options
function getPasswordOptions() {
  //Variable to store length of password
  var length = parseInt(prompt("How Long Would You Like Your Password To Be?"));

  //Conditional statement to check if password length is a number.  Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Sorry, But Password Length Must Be Entered As A Number");
    return;
  }

  //Conditional statement to check if password length is at least 8 characters long.  Prompts end if this evaluates false
  if (length < 8) {
    alert("Error: Password Must Be At Least 8 Characters");
    return;
  }

  //Conditional statement to check if password length is less than 128 characters long.  Prompts end if this evaluates false
  if (length > 128) {
    alert("Error: Password Must Be At Fewer Than 129 Characters");
    return;
  }

  //Variable to store boolean regarding the inclusion of lowercase characters
  var haslowercasecharacters = confirm("Click OK To Include Lowercase Characters.");

  //Variable to store boolean regarding the inclusion of uppercase characters
  var hasuppercasecharacters = confirm("Click OK To Include Uppercase Characters.");

  //variable to store boolean regarding the inclusion of numeric characters
  var hasnumericcharacters = confirm("Click OK To Include Numeric Characters.");

  //Variable to store boolean regarding the inclusion of special characters
  var hasspecialcharacters = confirm("Click OK To Include Special Characters.");

  //Conditional statement to check if user does not include any types of characters.  Password generator ends if all four variables evaluate to false
  if (
    haslowercasecharacters === false &&
    hasuppercasecharacters === false &&
    hasnumericcharacters === false &&
    hasspecialcharacters === false
  ) {
    alert("You Must Select At Least One Character Criteria");
    return;
  }

  //Object to store user input
  var passwordOptions = {
    length: length,
    haslowercasecharacters: haslowercasecharacters,
    hasuppercasecharacters: haslowercasecharacters,
    hasnumericcharacters: hasnumericcharacters,
    hasspecialcharacters: hasspecialcharacters
  };

  return passwordOptions;
}

//Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  //Variable to store password as it's being concatenated
  var result = [];

  //Array to store types of characters to include in password
  var possibleCharacters = [];

  //Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  //Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  //Push new random lowercase character to guaranteedCharacters
  if (options.haslowercasecharacters) {
    possibleCharacters = possibleCharacters.concat(lowercasecharacters);
    guaranteedCharacters.push(getRandom(lowercasecharacters));
  }

  //Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  //Push new random uppercase character to guaranteedCharacters
  if (options.hasuppercasecharacters) {
    possibleCharacters = possibleCharacters.concat(uppercasecharacters);
    guaranteedCharacters.push(getRandom(uppercasecharacters));
  }

  //Conditional statement that adds array of numeric characters into array of possible characters based on user input
  //Push new random numeric character to guaranteedCharacters
  if (options.hasnumericcharacters) {
    possibleCharacters = possibleCharacters.concat(numericcharacters);
    guaranteedCharacters.push(getRandom(numericcharacters));
  }

  //Conditional statement that adds array of special characters into array of possible characters based on user input
  //Push new random special character to guaranteedCharacters
  if (options.hasspecialcharacters) {
    possibleCharacters = possibleCharacters.concat(specialcharacters);
    guaranteedCharacters.push(getRandom(specialcharacters));
  }

  //For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenats
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  //Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  //Transform the result into a string and pass into writePassword
  return result.join("");
}

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);