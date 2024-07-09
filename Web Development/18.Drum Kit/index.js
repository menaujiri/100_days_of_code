
var numberOfDrumKit = document.querySelectorAll(".drum").length

for(var i = 0; i<numberOfDrumKit; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML)) {
            case "w": 
                var tom1 = new Audio("sounds/tom-1.mp3");
                Audio.play()
                break;

            
        
            default: console.log(buttonInnerHTML)
                break;
        }


    });
}



//audio.play();kl




