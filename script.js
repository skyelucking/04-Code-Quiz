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
  },{
    question4El: ""JavaScript" is a trademark of...",
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


// Set Time-Keeping Variables, Button, Display
var playButton = document.querySelector("#play");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// Quiz Body Elements
var quizQuestionText = document.querySelector("#quizQuestion");
var ansText1 = document.querySelector("#quizA1");
var ansText2 = document.querySelector("#quizA2");
var ansText3 = document.querySelector("#quizA3");
var ansText4 = document.querySelector("#quizA4");
var leadText = document.querySelector("#lead");
var quizIntroText = document.querySelector("#quizIntro");

//Timer and Count-Down
playButton.addEventListener("click", startTimer);

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

//Setting Up the Quiz Loop

var quizQuestionText = quiz1[question];
