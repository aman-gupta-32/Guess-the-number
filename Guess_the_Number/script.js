"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".guess-num").addEventListener("change", function () {
  let input = this;
  if (input.value < 1 || input.value > 20) {
    alert("Please choose a number between 1 and 20");
    input.value = 1;
  }
});

document.querySelector("#check-btn").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess-num").value);
  const secretNum = document.querySelector(".secret-num");
  const highScoreDisplay = document.querySelector(".high-score");

  const scoreDisplay = document.querySelector(".score");
  if (!guessNum) {
    displayMessage("No Number!🚫");
  } else if (guessNum === secretNumber) {
    displayMessage("Correct Number! 🎉");
    secretNum.style.width = "20rem";
    secretNum.style.borderRadius = 0;
    secretNum.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highScoreDisplay.textContent = highscore;
    }
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? "Too High..." : "Too Low...");
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage("You Lost! 😔");
      scoreDisplay.textContent = 0;
    }
  }
});

document.querySelector("#again-btn").addEventListener("click", function () {
  const secretNum = document.querySelector(".secret-num");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Guess it...");
  document.querySelector(".score").textContent = score;
  secretNum.style.width = "10rem";
  secretNum.style.borderRadius = '50%';
  secretNum.textContent = '?';
  document.querySelector('.guess-num').value = '';
});
