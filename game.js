// Game-Logic
//{
    const square = document.querySelector('.square')
    const number = document.querySelector('.number')
    const gOver = document.querySelector('.gOver')
    const minute = document.querySelector('#minutes')
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
    const buttonReRun = document.querySelector('.rerun')
    let timerShow = document.querySelector('.time')

    
    buttonReRun.addEventListener('click', game)
    buttonRun.addEventListener('click', game)

  function game() {
        minute.disabled = true
        gOver.style.display = 'none'  
        timerShow.style.color = 'black'
        square.style.top = getRandomInt(0, 365) + 'px'
        square.style.left = getRandomInt(0, 665) + 'px'
        number.innerHTML = 0
        timerInput.value = ''
        timeMinut = parseInt(minute.value) * 60

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

                i = 0
                
            } else {

                let strTimer = `${Math.trunc(minutes)}:${seconds}`
        
                timerShow.innerHTML = strTimer

            }
            --timeMinut
        }, 1000)
    square.style.display = 'block'
    }
// }
