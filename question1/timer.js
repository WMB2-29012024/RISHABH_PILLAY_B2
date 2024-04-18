const timeInputElem = document.querySelector('#time-input');
const timeDisplayElem = document.querySelector('#time_display');
let remainingTime = 0;
let timer;
let pause = false;
let pauseTime; 

const startTimer = () => {
    if (!pause) {
        if (timer) {
            clearInterval(timer);
            remainingTime = 0;
        }
        remainingTime = remainingTime || parseInt(timeInputElem.value);
        timer = setInterval(() => {
            updateTime();
        }, 1000);
    }else{

        if (timer) {
            clearInterval(timer);
            remainingTime = 0;
        }
        remainingTime = pauseTime ;
        timer = setInterval(() => {
            updateTime();
        }, 1000);

    }
};

const updateTime = () => {
    if (remainingTime > 0) {
        remainingTime--;
        displayTime(remainingTime);
    } else {
        clearInterval(timer);
    }
};

const pauseTimer = () => {
    pause = true;
    clearInterval(timer);
    pauseTime = remainingTime
};

const resetTimer = () => {
    clearInterval(timer);   
    remainingTime = parseInt(timeInputElem.value);
    pause = false;
    startTimer()
};

const displayTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    timeDisplayElem.innerHTML = `<p>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</p>`;
};

export { startTimer, pauseTimer, resetTimer };



