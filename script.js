"use strict";
let second = 59;
let Hours = 59;
let Days = 1;
let Minutes = 59;

setInterval(() => {
  second--;

  if (second === 0) {
    Minutes--;
    second = 59;
    if (Minutes === 0) {
      Hours--;
      Minutes = 59;
    }

    if (Hours === 0) {
      Days--;
      Hours = 0;
    }
  }
  if (Days === 1) {
  }
  console.log(second);
  let secondcount = (document.querySelector(".seconds").innerText = second);
  console.log(secondscount);

  const minutescount = (document.querySelector(".Minutes").innerText = Minutes);

  const hourscount = (document.querySelector(".Hours").innerText = Hours);

  const dayscount = (document.querySelector(".Days").innerText = Days);
}, 1000);
