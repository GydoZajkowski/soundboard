// Detecting Button Press
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

}

// Detecting Key Press

document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/Lach.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/Filmpje.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/Owned-gek.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/SoNo.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/Twee.mp3");
      snare.play();
    break;

    case "k":
      var kick = new Audio("sounds/Wreed-gek.mp3");
      kick.play();
    break;

    case "l":
      var crash = new Audio("sounds/bandages.mp3");
      crash.play();
    break;

    default: console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}
