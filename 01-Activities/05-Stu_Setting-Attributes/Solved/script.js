var imgTags = document.querySelectorAll("img");
var aTags = document.querySelectorAll("a");
var h4Tags = document.querySelectorAll("h4");

imgTags[0].setAttribute("src", "https://www.placecage.com/300/200");
imgTags[1].setAttribute("src", "https://www.placecage.com/300/300");
imgTags[2].setAttribute("src", "https://www.placecage.com/300/400");

for (let i = 0; i < imgTags.length; i++) {
  imgTags[i].setAttribute("alt", "Nic Cage");
}

aTags[0].setAttribute("href", "http://google.com");
aTags[1].setAttribute("href", "https://bing.com");
aTags[2].setAttribute("href", "https://webcrawler.com");

h4Tags[0].innerText = "Header 1";
h4Tags[1].innerText = "Header 2";
h4Tags[2].innerText = "Header 3";

for (var i = 0; h4Tags.length; i++) {
  h4Tags[i].setAttribute("style", "font-size: 40px; color: blue; text-decoration: underline");
}
