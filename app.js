let hr = min = sec = ms = 0,
    startTimer;

const startBtn = document.querySelector('.watch__btn__start'),
    stopBtn = document.querySelector('.watch__btn__stop'),
    resetBtn = document.querySelector('.watch__btn__reset');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start() {
    startBtn.classList.add('active');
    stopBtn.classList.remove('active');

    startTimer = setInterval(() => {
        
        ms++

        if (ms === 100) {
            sec++
            ms = 0;
        }

        if (sec === 60) {
            min++
            sec = 0;
        }

        if (min === 60) {
            hr++
            min = 0;
        }

        renderValue();
    }, 10);
}

function stop() {
    startBtn.classList.remove('active');
    stopBtn.classList.add('active');
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove('active');
    stopBtn.classList.remove('active');
    clearInterval(startTimer);
    hr = min = sec = ms = 0;
    renderValue();
}

function addZero(val) {
    return val < 10 ? "0" + val : val;
}

function renderValue() {
    document.querySelector('.watch__counter__millis').innerText = addZero(ms);
    document.querySelector('.watch__counter__secs').innerText = addZero(sec);
    document.querySelector('.watch__counter__minutes').innerText = addZero(min);
    document.querySelector('.watch__counter__hours').innerText = addZero(hr);
}