// Set Time-Keeping Variables, Button, Display
var playButton = document.querySelector("#play");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// Quiz Body Elements
var quizQuestionText = "test";
var answerText1 = document.querySelector("#quizA1");
var answerText2 = document.querySelector("#quizA2");
var answerText3 = document.querySelector("#quizA3");
var answerText4 = document.querySelector("#quizA4");
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
