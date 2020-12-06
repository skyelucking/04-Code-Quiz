// Quiz Body Elements
var siteButton = document.getElementById("#site");
var quizQuestionText = document.getElementById("quizQuestion");
var ansText1 = document.getElementById("quizA1");
var ansText2 = document.getElementById("quizA2");
var ansText3 = document.getElementById("quizA3");
var ansText4 = document.getElementById("quizA4");
var leadText = document.getElementById("lead");
var quizIntroText = document.getElementById("quizIntro");

// Quiz Scorekeeping Mechanism
var correctAns = ["JS", "December 4, 1995", "JS", "Oracle", "jQuery", "This is the correct answer. You're welcome!" ]
var quizScore = 0;
var quizName = "Quiz T. Aker";
var highScores = [];
var questionIndex = 0;

// Set Quiz Question Data
var quizDataList = [
  {
    question: "How is JavaScript often abbreviated?",
    answerA: "jvscpt ",
    answerB: "JS",
    answerC: "avaj",
    answerD: "beanjuice"
  },
  {
    question: "When did JavaScript first appear on the scene?",
    answerA: "September 7, 1985 ",
    answerB: "December 4, 1995",
    answerC: "September 20, 1978",
    answerD: "July 24, 2002"
  },
  {
    question: "How is JavaScript often abbreviated?",
    answerA: "jvscpt ",
    answerB: "JS",
    answerC: "avaj",
    answerD: "beanjuice"
  },
  {
    question: "THe software is a trademark of...",
    answerA: "Google ",
    answerB: "Apple",
    answerC: "Microsoft",
    answerD: "Oracle"
  },
  {
    question: "To date the most popular JavaScript library is...",
    answerA: "Backbone ",
    answerB: "jQuery",
    answerC: "Vue",
    answerD: "Ajax"
  },
  {
    question: "Do you think Nick Cage uses Java? The code OR the coffee?",
    answerA: "For shizzle",
    answerB: "This is the correct answer. You're welcome!",
    answerC: "You know he chugs that java while coding to save the planet.",
    answerD: "NO. Just..NO."
  },
];

// Render Quiz Question Data
function showQuestion(quizDataList) {
  console.log(quizDataList)
  console.log("Question Index: " , questionIndex)
  quizQuestionText.textContent = quizDataList[questionIndex].question;
  ansText1.textContent = quizDataList[questionIndex].answerA;
  ansText1.previousSibling.dataset["answer"]= quizDataList[questionIndex].answerA;
  ansText2.textContent = quizDataList[questionIndex].answerB;
  ansText2.previousSibling.dataset["answer"]= quizDataList[questionIndex].answerB;
  ansText3.textContent = quizDataList[questionIndex].answerC;
  ansText3.previousSibling.dataset["answer"]= quizDataList[questionIndex].answerC;
  ansText4.textContent = quizDataList[questionIndex].answerD;
  ansText4.previousSibling.dataset["answer"]= quizDataList[questionIndex].answerD;
}
  
function initializeGame(){
  ansText1.previousSibling.addEventListener("click", function(e){
    e.preventDefault();
    var button = e.target;
    console.log(button.dataset["answer"]);
  })

}

function playGame() {
 startTimer();
 showQuestion(quizDataList);
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

//Timer Start and Show Question
playButton.addEventListener("click", playGame);

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

initializeGame();