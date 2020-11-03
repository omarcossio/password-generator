// Assignment Code
// generates prompts with user validation
function myFunction() {

  var size = prompt("What is the desired lenght of your password? (enter a numerical value greater or equal to 8 and less than or equal to 128");
  //using Number function to convert user input into number format
  var sizeNum = Number(size);
  //begin conditional statements for criteria
  if (7 < sizeNum && sizeNum < 129) {
    var lowerCase = prompt("Would you like your new password to include lowercase characters? \n Enter 1 for YES and 2 for NO");
    if (lowerCase == "1" || lowerCase == "2") {
      var upperCase = prompt("Would you like your new password to include UPPERCASE characters? \n Enter 1 for YES and 2 for NO");
      if (upperCase == "1" || upperCase == "2") {
        var numericVal = prompt("Would you like your new password to include numeric (ie. 123) characters? \n Enter 1 for YES and 2 for NO");
        if (numericVal == "1" || numericVal == "2") {
          var specialChar = prompt("Would you like your new password to include special characters (ie !@#)? \n Enter 1 for YES and 2 for NO");
          if (specialChar == "1" || specialChar == "2") {
            if (lowerCase == "2" && upperCase == "2" && numericVal == "2" && specialChar == "2") {
              alert("At least one character type should be selected")
            }
            else {
              alert("Your password is being generated");
              writePassword(sizeNum, lowerCase, upperCase, numericVal, specialChar);
            }
          }
          // if specialChar is not equal to 1 or 2, alert user to enter 1 or 2
          else {
            alert("Please enter 1 for YES or 2 for NO");
          }
        }
        // if numericVal is not equal to 1 or 2, alert user to enter 1 or 2
        else {
          alert("Please enter 1 for YES or 2 for NO");
        }
      }
      // if upperCase is not equal to 1 or 2, alert user to enter 1 or 2
      else {
        alert("Please enter 1 for YES or 2 for NO");
      }
    }
    // if lowerCase is not equal to 1 or 2, alert user to enter 1 or 2
    else {
      alert("Please enter 1 for YES or 2 for NO");
    }
  }
  // if sizeNum is not between 7 and 129, alert user to enter a number between 7 and 129
  else {
    alert("Please enter a number between 8 and 128");
  }
}

// Write password to the #password input
function writePassword(size, lower, upper, numeric, special) {
  var possibleChar = [];
  var charLower = "";
  var charUpper = "";
  var charNum = "";
  var charSpecial = "";
  var criteriaQuantity = 0;

  // If lowercase criteria is selected, choose random letter from array below, then push it to possibleChar array, and add 1 to criteriaQuantity
  if (lower == "1") {
    var alphabetL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    possibleChar.push(alphabetL);
    charLower = alphabetL[Math.floor(Math.random() * alphabetL.length)];
    criteriaQuantity++;
  }
  // if uppercase criteria is selected, choose random letter from array below, then push to possibleChar array, and add 1 to criteriaQuantity
  if (upper == "1") {
    var alphabetU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    possibleChar.push(alphabetU);
    charUpper = alphabetU[Math.floor(Math.random() * alphabetU.length)];
    criteriaQuantity++;
  }
  // if numeric criteria is selected, choose random number from array, then push to possibleChar array, and add 1 to criteriaQuantity
  if (numeric == "1") {
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    possibleChar.push(number);
    charNum = number[Math.floor(Math.random() * number.length)];
    criteriaQuantity++;
  }
  //if special characted selected in criteria, choose randome characted, push to PossibleChar array, and add 1 to criteriaQuantity
  if (special == "1") {
    var symbols = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "+", "-", "=", '"', "'", ";", ":", ",", "."];
    possibleChar.push(symbols);
    charSpecial = symbols[Math.floor(Math.random() * symbols.length)];
    criteriaQuantity++;
  }
  // generates password
  var password = ""; 
  var newSize = size - criteriaQuantity;
  for (var j = 0; j < newSize; j++) {
    var charset = possibleChar[Math.floor(Math.random() * possibleChar.length)];
    var char = charset[Math.floor(Math.random() * charset.length)];
    password += char;
  }
  // adds one characted from each selected criteria to password to complete the length of selected length and to assure no criteria set is missing. 
  password = password + charLower + charUpper + charNum + charSpecial;

  if (password == null) {
    alert("no password was generated")
  }
  else {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }


}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", myFunction);


