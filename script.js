// Set Time-Keeping Variables, Button, Display
var playButton = document.querySelector("#play");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;


playButton.addEventListener("click", startTimer);

function startTimer() {
  setTime();
  if (totalSeconds > 0) {
        interval = setInterval(function() {
        secondsElapsed++;
        renderTime();
      }, 1000);
  } else {
    secondsDisplay.textContent = secondsElapsed;
    }
  
}
function setTime() {
   totalSeconds = 12;
}

function renderTime() {
  do {
    secondsDisplay.textContent = getFormattedSeconds();
    } while (secondsElapsed >= totalSeconds+1);
  }

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed);
  var formattedSeconds;
  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
   }

 


 
