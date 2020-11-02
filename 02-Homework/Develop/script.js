// Assignment Code

function myFunction() {

  var size = prompt("What is the desired lenght of your password? (enter a numerical value grater than 7 and less than 129");
  var sizeNum = Number(size);
  if (7 < sizeNum && sizeNum < 129) {
    var lowerCase = prompt("Would you like your new password to include lowercase characters? \n Enter 1 for YES and 2 for NO");
    if (lowerCase == "1" || lowerCase == "2") {
      var upperCase = prompt("Would you like your new password to include UPPERCASE characters? \n Enter 1 for YES and 2 for NO");
      if (upperCase == "1" || upperCase == "2") {
        var numericVal = prompt("Would you like your new password to include numeric (ie. 123) characters? \n Enter 1 for YES and 2 for NO");
        if (numericVal == "1" || numericVal == "2") {
          var specialChar = prompt("Would you like your new password to include special characters (ie !@#)? \n Enter 1 for YES and 2 for NO");
          if (numericVal == "1" || numericVal == "2") {
            if (lowerCase == "2" && upperCase == "2" && numericVal == "2" && specialChar == "2") {
              alert("At least one character type should be selected")
            }
            else {
              alert("Your password is being generated");
              genPassword(sizeNum);
            }
          }
          else {
            alert("Please enter 1 for YES or 2 for NO");
          }
        }
        else {
          alert("Please enter 1 for YES or 2 for NO");
        }
      }
      else {
        alert("Please enter 1 for YES or 2 for NO");
      }
    }
    else {
      alert("Please enter 1 for YES or 2 for NO");
    }
  }
  else {
    alert("Please enter a number between 7 and 129");
  }
}

function getRandomSymbol() {
  var symbols = '!@#$$%^&*()<>?/\-=';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function getRandomUpperCase() {
  var alphabetU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return alphabetU[Math.floor(Math.random() * alphabetU.length)];
}

function getRandomLowerCase() {
  var alphabetL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return alphabetL[Math.floor(Math.random() * alphabetL.length)];
}

function getRandomNumber() {
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return number[Math.floor(Math.random() * number.length)];
}

var generateBtn = document.querySelector("#generate");


function genPassword(sizeNum) {
  var password = ""
  for (var i = 0; i < sizeNum; i++) {
    var letter = getRandomNumber();
    password = password + letter;
  }
  document.getElementById("password").innerHTML = password;
  alert("Your new password is: " + password);
}

for (var j = 0; j < randomLow.length; j++) {

}

function getRandomCap() {
  return
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
