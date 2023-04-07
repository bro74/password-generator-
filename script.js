// Assignment Code
var generateBtn = document.querySelector("#generate");



//declaring function
function generatePassword(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button: method presses button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


//define the length of the password 
//a. prompt user for password length
var passwordLength = prompt("Enter password length (must be between 8 and 128 characters):");
//b. validate password length input
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt ("Password length must be between 8 and 128 characters. Please enter a valid password length:")
}
//define the possible characters that can be used for password
var passwordChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

//Generate password using while loop
var password = "";
for (var i=0; i < passwordlength; i++) {
  console.log (password)
}

//Display password in text area 
var passwordText = document.querySelector("#password");
passwordText.value = password;




//myNotes
  // console.log variables
    // console.log(generateBtn);
    // console.log(password);
    // console.log(passwordText);
  // make a function expression with paramaters
  // then call function 
  // then return function