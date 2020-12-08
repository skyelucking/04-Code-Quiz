var initialsInput = document.querySelector("#initials");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var highscoreInput = document.querySelector("#highscore");
var hsPlaceHolder = document.querySelector("#highscorePlaceHolder");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userinitialsSpan = document.querySelector("#user-initials");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userhighscoreSpan = document.querySelector("#user-highscore");
// var scores = JSON.parse(localStorage.getItem("scoreInfo"));
var scoreInfo = localStorage.getItem('scoreInfo');
document.getElementById("highscore").placeholder = localStorage.getItem('scoreInfo');

console.log(scoreInfo);
clearbutton.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  userinitialsSpan.textContent = "";
    userhighscoreSpan.textContent = "";
});

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}


quizbutton.addEventListener("click", function(event) {
event.preventDefault(); 
 
  // create user object from submission
  var user = {
    initials: initialsInput.value.trim(),
    highscore: highscoreInput.value.trim()
  };

  console.log(user);
  
  // validate the fields
  if (user.initials === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.highscore === "") {
    displayMessage("error", "highscore cannot be blank");
  } else {
    displayMessage("success", "Do you feel good about yourself? You should!");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userinitialsSpan.textContent = lastUser.initials;
    userhighscoreSpan.textContent = lastUser.highscore;
  }
});