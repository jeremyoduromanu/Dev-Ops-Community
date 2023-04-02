// Check if the countDownDate is already stored in local storage
let countDownDate = localStorage.getItem("countDownDate");

// If the countDownDate is not stored in local storage, set it to the next Saturday at 11:59:59 PM
if (!countDownDate) {
  const now = new Date();
  const daysUntilSaturday = 6 - now.getDay();
  countDownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilSaturday, 23, 59, 59).getTime();
  localStorage.setItem("countDownDate", countDownDate);
}

// Update the countdown timer every second
let x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countDownDate - now;

  // Calculate the hours, minutes, and seconds remaining
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining in the timer
  document.getElementById("hours").innerHTML = ("000" + hours).slice(-3);
  document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

  // If the countdown is over, stop updating the timer and remove the countDownDate from local storage
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("hours").innerHTML = "000";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    localStorage.removeItem("countDownDate");
  }
}, 1000);
