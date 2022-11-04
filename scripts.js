"use strict";

const generateNumber = () => Math.floor(Math.random() * 20) + 1;

const btnConfirm = document.querySelector(".confirm");
const btnMinus = document.querySelector(".minus");
const btnPlus = document.querySelector(".plus");
const btnRestart = document.querySelector(".restart");
const displayText = document.querySelector(".display-text");
const guessInput = document.querySelector(".guess");
const highScore = document.querySelector(".high-score");
const outputInfo = document.querySelector(".output-info");
const score = document.querySelector(".score");

let randomNumber = generateNumber();
let currentScore = Number(score.textContent);
let currentHighScore = Number(highScore.textContent);

btnConfirm.addEventListener("click", function () {
  if (currentScore > 0) {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 20) {
      outputInfo.textContent = "❌ Número Inválido!";
    } else {
      if (userGuess > randomNumber) {
        outputInfo.textContent = "🔻 Número muito alto 🔻";
        currentScore--;
        score.textContent = currentScore;
      } else if (userGuess < randomNumber) {
        outputInfo.textContent = "🔺 Número muito baixo 🔺";
        currentScore--;
        score.textContent = currentScore;
      } else {
        outputInfo.textContent = "🎉 Você acertou!";
        document.body.classList.add("winner");
        if (currentScore > currentHighScore) {
          currentHighScore = currentScore;
          highScore.textContent = currentHighScore;
        }
      }
      if (currentScore === 0) {
        outputInfo.textContent = "💔 Você perdeu :(";
        document.body.classList.add("loser");
      }
    }
  }
});

btnRestart.addEventListener("click", function () {
  randomNumber = generateNumber();
  currentScore = 10;
  score.textContent = currentScore;
  outputInfo.textContent = "🎲 Escolha um número...";
  guessInput.value = "";
  document.body.classList.remove("winner", "loser");
});

btnMinus.addEventListener("click", function () {
  guessInput.value--;
});

btnPlus.addEventListener("click", function () {
  guessInput.value++;
});
