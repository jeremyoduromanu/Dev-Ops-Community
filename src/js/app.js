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
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining in the timer
  document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

  // If the countdown is over, stop updating the timer and remove the countDownDate from local storage
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    localStorage.removeItem("countDownDate");
  }
}, 1000);

// Summary:
// This code creates a countdown timer that counts down to the next Saturday at 11:59:59 PM. The code checks if the countDownDate value is already stored in local storage, and if not, it calculates the date and time of the next Saturday and sets it as the value of countDownDate. The code updates the countdown timer every second and displays the time remaining in hours, minutes, and seconds. When the countdown is over, the code stops updating the timer and removes the countDownDate value from local storage.

// Explanation:
// The code first checks if the countDownDate value is already stored in local storage using the localStorage.getItem() method. If the value is not stored, the code calculates the date and time of the next Saturday using the Date() constructor and sets it as the value of countDownDate. The code then stores the countDownDate value in local storage using the localStorage.setItem() method.

// The code then sets up an interval using the setInterval() method that updates the countdown timer every second. Inside the interval function, the code gets the current date and time using the Date().getTime() method and calculates the time remaining until the countDownDate using simple arithmetic operations.

// The code then calculates the hours, minutes, and seconds remaining using the Math.floor() and modulus (%) operators, and displays the time remaining in the timer by setting the innerHTML property of the corresponding HTML elements using the document.getElementById() method.

// Finally, if the countdown is over (i.e., the timeRemaining value is less
// ChatGPT Mar 14 Version