let timer;
let time = 0;

function displayTime() {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 100;
  document.getElementById('display').textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

document.getElementById('startBtn').addEventListener('click', function() {
  if (!timer) {
    timer = setInterval(function() {
      time += 10;
      displayTime();
    }, 10);
  }
});

document.getElementById('stopBtn').addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
});

document.getElementById('resetBtn').addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
  time = 0;
  displayTime();
});
