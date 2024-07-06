var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomImageSource)

var randomNumber2 = math.floor(Math.random() *6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomImageSource2)

