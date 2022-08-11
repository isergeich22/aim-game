// Game-Logic
//{
    const square = document.querySelector('.square')
    const number = document.querySelector('.number')
    const gOver = document.querySelector('.gOver')
    const minute = document.querySelector('#minutes')
    const success = document.querySelector('.success')
    const normal = document.querySelector('.normal')
    const failed = document.querySelector('.failed')
    let timerInput = document.querySelector('#time')
    let i = 0
    
    minute.addEventListener('change', () => {
        timerInput.value = minute.value + ' мин.'
    })

    square.addEventListener('click', () => {
        square.style.top = getRandomInt(0, 365) + 'px'
        square.style.left = getRandomInt(0, 665) + 'px'
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
    let timerShow = document.querySelector('.time')

    buttonRun.addEventListener('click', game)

  function game() {    
        
        onReady()

        timer = setInterval(() => {
            seconds = timeMinut%60
            minutes = timeMinut/60%60            
        
            if (timeMinut <= 0) {

                clearInterval(timer)
        
                square.style.display = 'none'

                gOver.style.display = 'flex'

                timerShow.style.color = 'red'
                timerShow.innerHTML = '0:0'

                timerInput.value = '1 мин.'
                
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
        square.style.top = getRandomInt(0, 365) + 'px'
        square.style.left = getRandomInt(0, 665) + 'px'
        number.innerHTML = 0
        timerInput.value = ''
        timeMinut = parseInt(minute.value) * 60
    }

// }
