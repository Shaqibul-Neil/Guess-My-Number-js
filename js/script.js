"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input or input is 0
  if (!guess) {
    // document.querySelector(".message").textContent =
    //   "☹️ Please choose a valid number between 1 and 20 or else 🔫🤺💣 ";
    displayMessage(
      "☹️ Please choose a valid number between 1 and 20 or else 🔫🤺💣"
    );
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent =
    //   "🥳 Congrats! You won this time. I dare you to try again 😎";
    displayMessage(
      "🥳 Congrats! You won this time. I dare you to try again 😎"
    );
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "300px";

    //implementing highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber
      //     ? "He He He! You Lost! 😝 You're too high"
      //     : "He He He! You Lost! You're too low";
      displayMessage(
        guess > secretNumber
          ? "He He He! You Lost! 😝 You're too high"
          : "He He He! You Lost! You're too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "You Lost the Game. Can't beat me? 😝😂 Try Again?";
      displayMessage("You Lost the Game. Can't beat me? 😝😂 Try Again?");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#800000";
    }
  }
});

//again button resetting
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent =
  //   "Start Guessing... I dare you to beat me 😎";
  displayMessage("Start Guessing... I dare you to beat me 😎");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "150px";
});

//   //when guess is high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent =
//       "He He He! You Lost! 😝 You're too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent =
//       "You Lost the Game. Can't beat me? 😝😂 Try Again?";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "#800000";
//   }
//   //when guess is low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent =
//       "He He He! You Lost! 😝 You're too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent =
//       "You Lost the Game. Can't beat me? 😝😂 Try Again?";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "#800000";
//   }
