
let time = document.querySelector('.time');
let breaks = document.querySelectorAll('.break');
let pomodoro = document.querySelector('.pomodoro');
let longBreak = document.querySelector('.long-break');
let shortBreak = document.querySelector('.short-break');
const playPausedBtn = document.querySelector('.play-paused-btn');
const resetBtn = document.querySelector('.reset-btn');
const audio = document.querySelector('audio');
let displayMin = 24;
let countDown = 59;
let timerInterval =null;
let timerStatus = 'stopped'

 
//reset timer
resetBtn.addEventListener('click', ()=>{
    clearInterval(timerInterval)
    displayMin = 24;
    countDown = 59;
    time.textContent = `${leadingZero.format(displayMin)}:00`;

    playPausedBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="play" viewBox="0 0 16 16">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"></path>
    </svg>`

    console.log('timer reset successfully');
})

//formating the leading zero when the second is less than 10
let leadingZero=new Intl.NumberFormat(undefined, {
    minimumIntegerDigits:2
})

//starting the timer
let startTimer = ()=>{
    countDown--
    time.textContent = `${leadingZero.format(displayMin)}: ${leadingZero.format(countDown)}`

    if (countDown===0) {
        if (displayMin >0) {
            displayMin--
            countDown = 60;
        }

    }
   
    if (displayMin <=0) {
        time.textContent = `${leadingZero.format(displayMin)}:00`

        clearInterval(timerInterval)

        console.log(displayMin);
        console.log(countDown);

    } 



}



    
playPausedBtn.addEventListener('click', ()=>{
    if (timerStatus==="stopped") {
        timerInterval = setInterval(startTimer, 1000)
        playPausedBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="pause" viewBox="0 0 16 16">
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"></path>
        </svg>`
        timerStatus = 'started'
        console.log(timerStatus);
    } else{
        playPausedBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="play" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"></path>
        </svg>`

        clearInterval(timerInterval)
        timerStatus= 'stopped';
        console.log(timerStatus);
    }

})


let pausedTimer=()=>{
    if (timerStatus === 'started') {
        clearInterval(timerInterval)
        timerStatus= 'stopped';

        playPausedBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="play" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"></path>
        </svg>`
    }
}
  

//removing the defualt active class from the pomodoro headers 
let removeClassActive =()=>{
    breaks.forEach((button)=>{
        button.classList.remove('active');
    })

}


pomodoro.addEventListener('click', ()=>{
    removeClassActive()
    displayMin = 24;
    count = 59
    time.textContent = `${displayMin}:00`

    pomodoro.classList.add('active')

    pausedTimer()

})

shortBreak.addEventListener('click', ()=>{
    removeClassActive()
    displayMin = 4;
    count = 59
    time.textContent = `${leadingZero.format(displayMin +1)}:00`

    shortBreak.classList.add('active')

    pausedTimer()

})

longBreak.addEventListener('click', ()=>{
    removeClassActive()
    displayMin = 14;
    count = 59
    time.textContent = `${displayMin +1}:00`

    longBreak.classList.add('active')

    pausedTimer();

})




