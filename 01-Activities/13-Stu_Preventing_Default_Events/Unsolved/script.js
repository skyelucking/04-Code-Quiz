var price = document.querySelector("#price");
var percent = document.querySelector("#percent");
var tipAmount = document.querySelector("#tip-amaount");
var newTotal = document.querySelector("#new-total");
var calcButton = document.querySelector("#submit");

calcButton.addEventListener("click", function(event){
    tipAmount = price * (percent * 100);
    countSpan.textContent = tipAmount;
    event.preventDefault();
    console.log(event);
});
