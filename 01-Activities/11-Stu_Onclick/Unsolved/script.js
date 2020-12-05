// Find the increment button in html
var incButton = document.querySelector("#increment");
var decButton = document.querySelector("#decrement");
var count = 0;
var countSpan = document.querySelector("#count");

//wire-up a click handler to that button

incButton.addEventListener("click", function(){
    count++;
    countSpan.textContent = count;
});

decButton.addEventListener("click", function(){
    if (count >0) { 
    count--;
     countSpan.textContent = count;
}
});