// Game-Logic
//{ 
    const gameBox = document.querySelector('.game')
    const whiteSpace = document.querySelector('#space')
    const square = document.querySelector('.square')
    const number = document.querySelector('.number')
    const gOver = document.querySelector('.gOver')
    const minute = document.querySelector('#minutes')
    const success = document.querySelector('.success')
    const normal = document.querySelector('.normal')
    const failed = document.querySelector('.failed')
    const compute_width = window.getComputedStyle(gameBox)
    const compute_height = window.getComputedStyle(gameBox)
    let maxWidth = parseInt(compute_width.width)
    let maxHeight = parseInt(compute_width.height)
    let timerInput = document.querySelector('#time')
    let i = 0

    timerInput.value = `${minute.value} мин.`
    

    minute.addEventListener('change', () => {
        timerInput.value = minute.value + ' мин.'
    })

    whiteSpace.addEventListener('click', () => {
        i--;
        number.innerHTML = i;
    })

    square.addEventListener('click', () => {
        square.style.top = getRandomInt(0, (maxHeight - 30)) + 'px'
        square.style.left = getRandomInt(0, (maxWidth - 30)) + 'px'
        square.style.width = getRandomInt(8, 32) + 'px'
        square.style.height = square.style.width
        i++;
        number.innerHTML = i;
    })

    function getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.ceil(max)

        return Math.ceil(Math.random() * (max - min)) + min
    }
    
    const buttonRun = document.querySelector('.start')
    const count = document.querySelector('.count')
    const timerShow = document.querySelector('.time')

    buttonRun.addEventListener('click', game)

  function game() {    
        
        onReady()

        timer = setInterval(() => {
            seconds = timeMinut%60
            minutes = timeMinut/60%60            
        
            if (timeMinut <= 0) {

                clearInterval(timer)

                whiteSpace.style.display = 'none'
        
                square.style.display = 'none'

                gOver.style.display = 'flex'

                timerShow.style.color = 'red'
                timerShow.innerHTML = '0:00'

                timerInput.value = `${minute.value} мин.`
                
                minute.disabled = false
                
                buttonRun.disabled = false
                buttonRun.classList.remove('disabled')
                buttonRun.classList.add('start')

                if (i < 150) failed.style.display = 'flex'
                else if (i <= 250 && i >= 150) normal.style.display = 'flex'
                else success.style.display = 'flex'

                i = 0
                
            } else {

                if (seconds < 10) timerShow.innerHTML = `${Math.trunc(minutes)}:0${seconds}`
                else timerShow.innerHTML = `${Math.trunc(minutes)}:${seconds}`

            }
            --timeMinut
        }, 1000)
    square.style.display = 'block'
    }

    function onReady() {
        success.style.display = 'none'
        normal.style.display = 'none'
        failed.style.display = 'none'
        minute.disabled = true
        gOver.style.display = 'none'
        count.style.display = 'flex'
        buttonRun.disabled = true
        buttonRun.classList.add('disabled')
        buttonRun.classList.remove('start')
        timerShow.style.display = 'flex'
        timerShow.style.color = 'black'
        whiteSpace.style.display = 'block'
        square.style.top = getRandomInt(0, (maxHeight - 30)) + 'px'
        square.style.left = getRandomInt(0, (maxWidth - 30)) + 'px'
        number.innerHTML = 0
        timerInput.value = ''
        timeMinut = minute.value * 60
    }

// }
