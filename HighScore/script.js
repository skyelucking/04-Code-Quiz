var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var highscoreInput = document.querySelector("#highscore");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userhighscoreSpan = document.querySelector("#user-highscore");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

quizbutton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    highscore: highscoreInput.value.trim()
  };

  console.log(user);
  
  // validate the fields
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.highscore === "") {
    displayMessage("error", "highscore cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userFirstNameSpan.textContent = lastUser.firstName;
    userLastNameSpan.textContent = lastUser.lastName;
    userhighscoreSpan.textContent = lastUser.highscore;
  }
});
