for (i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            var buttonClicked = this.innerHTML;
            makeSound(buttonClicked);
            animation(buttonClicked);
        });
    }

document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        animation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "a":
            var a = new Audio("/sounds/tom-1.mp3")
            a.play();
            break;
    
        case "s":
            var s = new Audio("/sounds/tom-2.mp3")
            s.play();         
            break;
    
        case "d":
            var d = new Audio("/sounds/tom-3.mp3")
            d.play();
            break;
    
        case "f":
            var f = new Audio("/sounds/tom-4.mp3")
            f.play();
            break;

        case "j":
            var j = new Audio("/sounds/crash.mp3")
            j.play();
            break;

        case "k":
            var k = new Audio("/sounds/kick-bass.mp3")
            k.play();
            break;
        
        case "l":
            var l = new Audio("/sounds/snare.mp3")
            l.play();
            break;
    }
}

function animation(buttonClicked) {
    var active = document.querySelector("." + buttonClicked);
    active.classList.add("animation");

    setTimeout(function (){
        active.classList.remove("animation")
    }, 100);
}
