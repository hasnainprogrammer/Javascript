/*
==============================================;
          GUESS MY NUMBER GAME                ;
==============================================;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let score = 20;
let highscore = 0;
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "⛔ No guess yet";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Guess is correct!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(50, 179, 50)";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too High!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "🔥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too Low!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "🔥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// play again logic
const again = document.querySelector(".again");
again.addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".guess").value = "";
});

*/

/*
==============================================;
       REFACTOR THE CODE DRY PRINICIPLE       ;
==============================================;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const checkBtn = document.querySelector(".check");
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    showMessage("⛔ No guess yet");
  } else if (guess === secretNumber) {
    showMessage("🎉 Guess is correct!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(50, 179, 50)";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score -= 1;
      document.querySelector(".score").textContent = score;
    }
  } else {
    showMessage("🔥 You lost the game!");
    document.querySelector(".score").textContent = 0;
  }
});

// play again logic
const again = document.querySelector(".again");
again.addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".guess").value = "";
});
