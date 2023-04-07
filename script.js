// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // calling the function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//making function
function generatePassword() {
  //window.prompt
  //define the length of the password 
//a. prompt user for password length
  var passwordLength = prompt("Enter password length (must be between 8 and 128 characters):");
 
//b. validate password length input
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt ("Password length must be between 8 and 128 characters. Please enter a valid password length:")
  }
  // With prompts, users can type in anything 
  // With confirms, users can select okay or cancel which relates to true or false
  var passwordLowerCaseChoice = confirm("Do you want lowercase characters?")
  var passwordUpperCaseChoice =  confirm("Do you want upercase characters?")
  var passwordSpecialCharChoice = confirm ("Do you want special characters?")
  var passwordNumchoice = confirm("Do you want number characters?")
  // add Number Choice

  var passwordCharacterChoices = '';
  // Conditional statement 
  if (passwordLowerCaseChoice) {
    // concat adds the string onto our passwordCharacterChoices variable
    passwordCharacterChoices = passwordCharacterChoices.concat('abcdefghijklmnopqrstuvwxyz');
  }

  console.log(passwordCharacterChoices);

  if (passwordUpperCaseChoice) {
    passwordCharacterChoices = passwordCharacterChoices.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }

  console.log(passwordCharacterChoices)

  if (passwordSpecialCharChoice) {
    passwordCharacterChoices = passwordCharacterChoices.concat ('!@#$%^&*()_+ ')
  }

  console.log(passwordCharacterChoices)

  if (passwordNumchoice) {
    passwordCharacterChoices = passwordCharacterChoices.concat ('0123456789')
  }

  console.log(passwordCharacterChoices)
  // method to convert to array: passwordCharacterChoices.split('');
  const passwordArray = passwordCharacterChoices.split('');
  console.log(passwordArray)

//Generate password using while loop
  var password = ""
  for (var i=0; i < passwordLength; i++) {
  console.log (password)
  // randomly select characters from the passwordCharacterChoices
  // math.Random(math.floor)
  var randomIndex= Math.floor(Math.random() * passwordCharacterChoices.length);
  var randomCharacter = passwordCharacterChoices[randomIndex];
  // add (concat) the random character into the password variable
  password += randomCharacter;
  }
  return password;
}

// Add event listener to generate button: method presses button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);









//myNotes
  // console.log variables
  // make a function expression with paramaters
  // then call function 
  // then return function

  /* */ 

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page