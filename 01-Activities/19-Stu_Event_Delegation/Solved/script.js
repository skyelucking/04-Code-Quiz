
// var addBtn = document.querySelector("#add-btn");
// var peopleListEl = document.querySelector("#people-list");
// var nameEl = document.querySelector("#name");
// var modalEl = document.querySelector("#modal-container");
// var modalNameEl = document.querySelector("#modal-name");
// var descriptionEl = document.querySelector("#description");
// var closeEl = document.querySelector(".close");
// var saveBtn = document.querySelector("#save");

// var people = [
//   { name: "Bob" }
// ];
// var currentId = 0;

// function addPersonToList(event) {

//   event.preventDefault();
//   var name = nameEl.value;
//   var li = document.createElement("li");
//   li.id = people.length;
//   li.innerHTML = name + " <button>edit</button>";
//   people.push(
//     { name: name }
//   );
//   peopleListEl.append(li);
// }

// function close() {
//   modalEl.style.display = "none";
// }

// function handleClick(evt) {

//   console.log("You clicked")

//   if (evt.target.matches('.myDiv')) {
//     console.log("You clicked on my div");
//   }

//   if (evt.target.matches("button")) {
//     evt.preventDefault();
    
//     console.log("you clicked a button");
    
//     // modalEl.style.display = "block";
//     // currentId = parseInt(event.target.parentElement.id);
//     // var name = people[currentId].name;
//     // var description = people[currentId].description;
//     // modalNameEl.textContent = name;
//     // if(description) {
//     //   descriptionEl.value = description;
//     // } else {
//     //   descriptionEl.value = "";
//     // }
//   }
// }

// closeEl.addEventListener("click", close);
// saveBtn.addEventListener("click", function(event) {
//   event.preventDefault();
//   people[currentId].description = descriptionEl.value;
//   close();
// });


// addBtn.addEventListener("click", addPersonToList);



//peopleListEl.addEventListener("click", handleClick);


// document.addEventListener("click", function(event) {
//   if (event.target === modalEl) {
//     close();
//   }
// });

var availCharacters = [];
var specialCharacters = ["#"];
var lowerCharacters = ["a","b","c"];
var upperCharacters = ["B","C","D","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D"];


function generatePassword() {
  
  var password = "";
  var userSpecial = true;
  var userLower = true;
  var userUpper = true;
  var userLength = 12;

  if (userSpecial) {
    console.log("here");
    availCharacters = availCharacters.concat(specialCharacters);
  }

  if (userUpper) {
    availCharacters = availCharacters.concat(upperCharacters);
  }

  // console.log(availCharacters);

  for (let i = 0; i < userLength; i++) {
    var randomIndex = Math.floor(Math.random() * availCharacters.length);
    password = password + availCharacters[randomIndex];
  }

  console.log(password);
}

generatePassword();



// function logSomething(text, callback) {
//   console.log(text);
//   callback();
// }

// function coolAlert(alertText) {
//   alert(alertText);
// }

// logSomething("Something", function () {
//   coolAlert("Yay!")
// });

