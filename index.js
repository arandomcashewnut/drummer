
drumButtons = document.querySelectorAll('.drum')
tom1Sound = new Audio('sounds/tom-1.mp3')
tom2Sound = new Audio('sounds/tom-2.mp3')
tom3Sound = new Audio('sounds/tom-3.mp3')
tom4Sound = new Audio('sounds/tom-4.mp3')
snareSound = new Audio('sounds/snare.mp3')
kickSound = new Audio('sounds/kick-bass.mp3')
crashSound = new Audio('sounds/crash.mp3')

for (i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function () {
        switch (this.innerHTML) {
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
            
            default: console.log(this.innerHTML)
            
        }
    })
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
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
        
        default: console.log(event)
    }
})