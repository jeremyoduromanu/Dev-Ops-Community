//timer element function
// Set the date and time to count down to
const countDownDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown timer every second
let x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countDownDate - now;

  // Calculate the hours, minutes, and seconds remaining
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining in the timer
  document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

  // If the countdown is over, stop updating the timer
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
