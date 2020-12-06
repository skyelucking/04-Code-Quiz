// Quiz Body Elements
var siteButton = document.getElementById("#site");
var quizQuestionText = document.getElementById("#quizQuestion");
var ansText1 = document.getElementById("#quizA1");
var ansText2 = document.getElementById("#quizA2");
var ansText3 = document.getElementById("#quizA3");
var ansText4 = document.getElementById("#quizA4");
var leadText = document.getElementById("#lead");
var quizIntroText = document.getElementById("#quizIntro");


// Quiz Scorekeeping Mechanism
var correctAns = ["JS", "December 4, 1995", "JS", "Oracle", "jQuery", "This is the correct answer. You're welcome!" ]
var quizScore = 0;
var quizName = "Quiz T. Aker";
var highScores = [];

// Set Quiz Question Data
var quizDataList = [
  {
    question1El: "How is JavaScript often abbreviated?",
    quest1AnsA: "jvscpt ",
    quest1AnsB: "JS",
    quest1AnsC: "avaj",
    quest1AnsD: "beanjuice"
  },
  {
    question2El: "When did JavaScript first appear on the scene?",
    quest2AnsA: "September 7, 1985 ",
    quest2AnsB: "December 4, 1995",
    quest2AnsC: "September 20, 1978",
    quest2AnsD: "July 24, 2002"
  },
  {
    question3El: "How is JavaScript often abbreviated?",
    quest3AnsA: "jvscpt ",
    quest3AnsB: "JS",
    quest3AnsC: "avaj",
    quest3AnsD: "beanjuice"
  },
  {
    question4El: "THe software is a trademark of...",
    quest4AnsA: "Google ",
    quest4AnsB: "Apple",
    quest4AnsC: "Microsoft",
    quest4AnsD: "Oracle"
  },
  {
    question5El: "To date the most popular JavaScript library is...",
    quest5AnsA: "Backbone ",
    quest5AnsB: "jQuery",
    quest5AnsC: "Vue",
    quest5AnsD: "Ajax"
  },
  {
    question6El: "Do you think Nick Cage uses Java? The code OR the coffee?",
    quest6AnsA: "For shizzle",
    quest6AnsB: "This is the correct answer. You're welcome!",
    quest6AnsC: "You know he chugs that java while coding to save the planet.",
    quest6AnsD: "NO. Just..NO."
  },
];

// Render Quiz Question Data
function renderSite(quizDataList) {
  console.log(quizDataList)
  console.log(i)
  // quizQuestionText = quizDataList.element[i].children[0];
  // ansText1.textContent = quizDataList.element[i].children[1];
  // ansText2.textContent = quizDataList.element[i].children[2];
  // ansText3.textContent = quizDataList.element[i].children[3];
  // ansText4.textContent = quizDataList.element[i].children[4];
}
  for (var i = 0; i < quizDataList.length; i++) {
    renderSite(quizDataList[i]);
}

// If then for game play

function playGame() {
}

// If then for keeping and saving score to High Score Page
function getScore() {

}

// Function to End Game
function endGame(){

}

// Set Time-Keeping Variables, Button, Display
var playButton = document.querySelector("#play");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

//Timer and Count-Down
playButton.addEventListener("click", startTimer);
// playButton.addEventListener("click", renderSite);

function startTimer() {
  setTime();
  //Set Interval
  if (totalSeconds > 0) {
    interval = setInterval(function () {
      secondsElapsed++;
      renderTime();
      if (totalSeconds - secondsElapsed <= 0){
        clearInterval(interval);
      }
    }, 1000);
    }
}

renderSite(); { 

  console.log("Did this work?")
}

function setTime() {
  totalSeconds = 4;
}

function renderTime() {
  // do {
  secondsDisplay.textContent = getFormattedSeconds();
  //   } while (secondsElapsed >= totalSeconds + 1);
}

function getFormattedSeconds() {
  var secondsLeft = totalSeconds - secondsElapsed;
  var formattedSeconds;
  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}

//Highscore Script
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  console.log(user);
  
  // validate the fields
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userFirstNameSpan.textContent = lastUser.firstName;
    userLastNameSpan.textContent = lastUser.lastName;
    userEmailSpan.textContent = lastUser.email;
    userPasswordSpan.textContent = lastUser.password;
  }
});

