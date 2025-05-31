let interval;
let secondsElapsed = 0;

function startTimer() {
    stopTimer(); // Stop any running timer
    updateTimerDisplay(); // Update display immediately
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    secondsElapsed++;
    updateTimerDisplay();
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    secondsElapsed = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(secondsElapsed / 3600);
    const minutes = Math.floor((secondsElapsed % 3600) / 60);
    const seconds = secondsElapsed % 60;
    document.getElementById('timer').innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
