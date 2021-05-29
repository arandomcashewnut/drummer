// Check for mouse click on drum buttons
drumButtons = document.querySelectorAll('.drum')
for (i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function () {
        playSound(this.innerHTML)
        animateButton(this.innerHTML)
    })
}

// Check for keyboard key press
document.addEventListener('keydown', (event) => {
    playSound(event.key.toLowerCase())
    animateButton(event.key.toLowerCase())
} )

//Play sound
tom1Sound = new Audio('sounds/tom-1.mp3')
tom2Sound = new Audio('sounds/tom-2.mp3')
tom3Sound = new Audio('sounds/tom-3.mp3')
tom4Sound = new Audio('sounds/tom-4.mp3')
snareSound = new Audio('sounds/snare.mp3')
kickSound = new Audio('sounds/kick-bass.mp3')
crashSound = new Audio('sounds/crash.mp3')

function playSound(key) {
    switch (key) {
        case 'w':
            tom1Sound.play()
            break;
        case 'a':
            tom2Sound.play()
            break;
        case 's':
            tom3Sound.play()
            break;
        case 'd':
            tom4Sound.play()
            break;
        case 'j':
            snareSound.play()
            break;
        case 'k':
            crashSound.play()
            break;
        case 'l':
            kickSound.play()
            break;
        default: console.log(key)
    }
}

// Animating the button
function animateButton (character) {
    drum = document.querySelector('.' + character)
    drum.classList.add('pressed')
    setTimeout(() => {
        drum.classList.remove('pressed')
    }, 100);
}
