const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const time = document.getElementById('time');

let startTime;
let elapsedTimes=0;
let timerInterval;

function formatTime(time){
    const minutes = Math.floor(time/60000).toString().padStart(2,'0')
    const seconds = Math.floor((time/1000)%60).toString().padStart(2,'0')
    const milliseconds = Math.floor(time/1000).toString().padStart(2,'0')
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay(){
    display.textContent = formatTime(elapsedTimes);
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);