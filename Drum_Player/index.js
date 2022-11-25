var clickOnKey = document.querySelectorAll(".drum").length;
for (var i=0; i < clickOnKey; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);   
        buttonAnime(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);
    buttonAnime(event.key);   
});

function makeSound(key) {
    switch (key) {
        case "q":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "e":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "r":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "i":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "o":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "p":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        default: console.log(buttonInnerHTML);


    }
}

function buttonAnime(tappedKey) {
    var tapped = document.querySelector("." + tappedKey);
    tapped.classList.add("press");

    setTimeout(function() {
        tapped.classList.remove("press");
    }, 100); //class press removes after 0.1sec

}