
var numberOfDrumKit = document.querySelectorAll(".drum").length

var audio = new Audio("sounds/tom-1.mp3");

for(var i = 0; i<numberOfDrumKit; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "white"
    });
}



//audio.play();




