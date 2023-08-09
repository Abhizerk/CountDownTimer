const timerDisplay = document.getElementById("timer");
const dateInput = document.getElementById("dateInput");
const setButton = document.getElementById("setButton");

let countdownDate = new Date().getTime() + 86400000; // Default: 24 hours from now

function updateTimer() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    timerDisplay.innerHTML = "EXPIRED";
  }
}

updateTimer(); // Initial update
const interval = setInterval(updateTimer, 1000);

setButton.addEventListener("click", function() {
  countdownDate = new Date(dateInput.value).getTime();
  updateTimer();
});
