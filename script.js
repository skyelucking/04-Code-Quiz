// Quiz Body Elements
var siteButton = document.getElementById("#site");
var quizQuestionText = document.getElementById("quizQuestion");
var cageFaceImg = document.getElementById("cageFace");
var ansText1 = document.getElementById("quizA1");
var ansText2 = document.getElementById("quizA2");
var ansText3 = document.getElementById("quizA3");
var ansText4 = document.getElementById("quizA4");
var leadText = document.getElementById("lead");
var ansMsgText = document.getElementById("ansMsg");
var scoreText = document.getElementById("score");
var quizIntroText = document.getElementById("quizIntro");
var ansChoice = "";
var endCages = document.getElementById("score");


// Quiz Scorekeeping Mechanism

var quizScore = 0;
var quizName = "Quiz T. Aker";
var questionIndex = 0;

// Set Quiz Question Data
var quizDataList = [
  {
    question: "How is JavaScript often abbreviated?",
    answerA: "jvscpt ",
    answerB: "JS",
    answerC: "avaj",
    answerD: "beanjuice",
    correct: "JS",
    image: ".calm-cage"
    
    
  },
  {
    question: "When did JavaScript first appear on the scene?",
    answerA: "September 7, 1985 ",
    answerB: "December 4, 1995",
    answerC: "September 20, 1978",
    answerD: "July 24, 2002",
    correct: "December 4, 1995",
    image: ".curious-cage"
   
  },
  {
    question: "What is the file extension for javascript?",
    answerA: ".css",
    answerB: ".js",
    answerC: ".jst",
    answerD: ".htjs",
    correct: ".js",
    image: ".proud-cage"
  },
  {
    question: "The software is a trademark of...",
    answerA: "Google ",
    answerB: "Apple",
    answerC: "Microsoft",
    answerD: "Oracle Corporation",
    correct: "Oracle Corporation",
    image: ".sweaty-cage"
   
  },
  {
    question: "To date the most popular JavaScript library is...",
    answerA: "Backbone ",
    answerB: "jQuery",
    answerC: "Vue",
    answerD: "Ajax",
    correct: "jQuery",
    image: ".toothy-cage"
   
  },
  {
    question: "Do you think Nick Cage uses Java? The code OR the coffee?",
    answerA: "For shizzle",
    answerB: "This is the correct answer. You're welcome!",
    answerC: "You know he chugs that java while coding to save the planet.",
    answerD: "NO. Just..NO.",
    correct: "This is the correct answer. You're welcome!",
    image: ".upside-cage"
    
  },
];



// Render Quiz Question Data
function showQuestion(quizDataList) {
  if (questionIndex < 6 && getFormattedSeconds() > 0){
      
  quizQuestionText.textContent = quizDataList[questionIndex].question;
  ansText1.textContent = quizDataList[questionIndex].answerA;
  ansText1.previousSibling.dataset["answer"] =
    quizDataList[questionIndex].answerA;
  ansText2.textContent = quizDataList[questionIndex].answerB;
  ansText2.previousSibling.dataset["answer"] =
    quizDataList[questionIndex].answerB;
  ansText3.textContent = quizDataList[questionIndex].answerC;
  ansText3.previousSibling.dataset["answer"] =
    quizDataList[questionIndex].answerC;
  ansText4.textContent = quizDataList[questionIndex].answerD;
  ansText4.previousSibling.dataset["answer"] =
    quizDataList[questionIndex].answerD;
  var ansCorrect = quizDataList[questionIndex].correct;
  
  document.querySelector(quizDataList[questionIndex].image).style.visibility = "visible";
    
  
} else {
  endGame();
}
  return ansCorrect;
}

function initializeGame() {
  // Loop for  Answer Check
  ansText1.previousSibling.addEventListener("click", function (e) {
    e.preventDefault();
    var button = e.target;
    console.log("button pressed:", button.dataset["answer"]);
    ansChoice = button.dataset["answer"];
    console.log("They chose: ", ansChoice);
    if (ansChoice == showQuestion(quizDataList)) {
      ansMsgText.textContent =
        "Correct! The answer is " + showQuestion(quizDataList) + curiousCage;
      quizScore = quizScore + 100;
      scoreText.textContent = "Score: " + quizScore;
     setTimeout();
      // questionIndex = questionIndex + 1;
      console.log(questionIndex)
    showQuestion(quizDataList);
    } else {
      ansMsgText.textContent =
        "Nope! The answer is " + showQuestion(quizDataList);
      console.log("Nope. The correct answer was:" + showQuestion(quizDataList));
      totalSeconds = totalSeconds - 10;
      // questionIndex = questionIndex + 1;
      console.log("Question Index: ", questionIndex);
    } 
    questionIndex = questionIndex + 1;
    console.log(questionIndex)
    showQuestion(quizDataList);
  });

  ansText2.previousSibling.addEventListener("click", function (e) {
    e.preventDefault();
    var button = e.target;
    console.log("button pressed:", button.dataset["answer"]);
    ansChoice = button.dataset["answer"];
    console.log("They chose: ", ansChoice);
    if (ansChoice == showQuestion(quizDataList)) {
      ansMsgText.textContent =
        "Correct! The answer is " + showQuestion(quizDataList);
      quizScore = quizScore + 100;
      scoreText.textContent = "Score: " + quizScore;
      
      // questionIndex = questionIndex + 1;
      console.log(questionIndex)
    showQuestion(quizDataList);
    } else {
      ansMsgText.textContent =
        "Nope! The answer is " + showQuestion(quizDataList);
      console.log("Nope. The correct answer was:" + showQuestion(quizDataList));
      totalSeconds = totalSeconds - 10;
      // questionIndex = questionIndex + 1;
      console.log("Question Index: ", questionIndex);
    } 
    questionIndex = questionIndex + 1;
    console.log(questionIndex)
    showQuestion(quizDataList);
  });

  ansText3.previousSibling.addEventListener("click", function (e) {
    e.preventDefault();
    var button = e.target;
    console.log("button pressed:", button.dataset["answer"]);
    ansChoice = button.dataset["answer"];
    console.log("They chose: ", ansChoice);
    if (ansChoice == showQuestion(quizDataList)) {
      ansMsgText.textContent =
        "Correct! The answer is " + showQuestion(quizDataList);
      quizScore = quizScore + 100;
      scoreText.textContent = "Score: " + quizScore;
      // questionIndex = questionIndex + 1;
      console.log(questionIndex)
      showQuestion(quizDataList);
    } else {
      ansMsgText.textContent =
        "Nope! The answer is " + showQuestion(quizDataList);
      console.log("Nope. The correct answer was:" + showQuestion(quizDataList));
      totalSeconds = totalSeconds - 10;
      // questionIndex = questionIndex + 1;
      console.log("Question Index: ", questionIndex);
    } 
    questionIndex = questionIndex + 1;
    console.log(questionIndex)
    showQuestion(quizDataList);
  });
  ansText4.previousSibling.addEventListener("click", function (e) {
    e.preventDefault();
    var button = e.target;
    console.log("button pressed:", button.dataset["answer"]);
    ansChoice = button.dataset["answer"];
    console.log("They chose: ", ansChoice);
    if (ansChoice == showQuestion(quizDataList)) {
      ansMsgText.textContent =
        "Correct! The answer is " + showQuestion(quizDataList);
      quizScore = quizScore + 100;
      scoreText.textContent = "Score: " + quizScore;
      // questionIndex = questionIndex + 1;
      console.log(questionIndex)
      showQuestion(quizDataList);
    } else {
      ansMsgText.textContent =
        "Nope! The answer is " + showQuestion(quizDataList);
      console.log("Nope. The correct answer was:" + showQuestion(quizDataList));
      totalSeconds = totalSeconds - 10;
      // questionIndex = questionIndex + 1;
      console.log("Question Index: ", questionIndex);
    } 
    questionIndex = questionIndex + 1;
    console.log(questionIndex)
    showQuestion(quizDataList);
  });
};



function playGame() {
  startTimer();
  showQuestion(quizDataList);
  
}

// create user object from submission



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
      if (totalSeconds - secondsElapsed <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
}

function setTime() {
  totalSeconds = 60;
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

var scoreInfo = {
    highscore: quizScore,
 };
 // Function to End Game
 function endGame() {
   console.log(quizScore)
   ansMsgText.textContent = "DONE! Your Score is " + quizScore;
  
   localStorage.setItem("scoreInfo", JSON.stringify(quizScore));
   
   window.setTimeout(function(){
     // Move to a new location or you can do something else
     window.location.href = "./HighScore/highscore.html";
 }, 3000);
 
   }


initializeGame();
