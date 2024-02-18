"use strict";

const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdDiceBtn = document.querySelector(".btn--hold");
const diceImg = document.querySelector(".dice");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add("hidden");

// switch player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // add dice score to the current score and display it
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// user hold
holdDiceBtn.addEventListener("click", function () {
  if (playing) {
    // add current score to the total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // if score >= 100 player win
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      playing = false;
    }
    // switch player
    switchPlayer();
  }
});

newGameBtn.addEventListener("click", function () {
  diceImg.classList.add("hidden");
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  playing = true;
});
