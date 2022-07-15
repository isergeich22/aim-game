// Game-Logic

const square = document.querySelector('.square')

square.addEventListener('click', () => {
    square.style.top = getRandomInt(0, 365) + 'px'
    square.style.left = getRandomInt(0, 665) + 'px'
})

function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.ceil(max)

    return Math.ceil(Math.random() * (max - min)) + min
}


// Timer-Logic
let timerInput = document.querySelector('#time')
let buttonRun = document.querySelector('.start')
let timerShow = document.querySelector('.time')

buttonRun.addEventListener('click', () => {
    timeMinut = parseInt(timerInput.value) * 60
    timer = setInterval(() => {
        seconds = timeMinut%60
        minutes = timeMinut/60%60
    
        if (timeMinut <= 0) {
            clearInterval(timer)
    
            square.style.display = 'none'
    
            alert('Время вышло!')
            
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`
    
            timerShow.innerHTML = strTimer
        }
        --timeMinut
    }, 1000)
    square.style.display = 'block'
})

