const newYear = "1 jan 2023";
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minites = document.querySelector("#minites");
let seconds = document.querySelector("#seconds");
function countdown() {
  const newYearsdate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearsdate - currentDate) / 1000;
  const day = Math.floor(totalSeconds / 3600 / 24);
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;
  days.innerHTML = day;
  hours.innerHTML = hour;
  minites.innerHTML = min;
  seconds.innerHTML = sec;
}

countdown();

setInterval(countdown, 1000);
