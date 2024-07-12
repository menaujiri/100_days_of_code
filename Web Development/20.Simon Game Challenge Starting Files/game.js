

var bottonColours = ["red", "blue", "green", "yellow"];

gamePattern = [];

var randomNumber = Math.floor(Math.random() *4);


var randomChosenColour = bottonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("id=randomChosenColour").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

