function updateCurrentTime(){
    const now = new Date();
    const timeStirng = now.toLocaleTimeString();
    document.getElementById('current-Time').textContent = timeStirng;

}

setInterval(updateCurrentTime, 1000);

updateCurrentTime();