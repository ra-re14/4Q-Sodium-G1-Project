const catto = document.getElementById("catto");
const obstacles = document.getElementById("obstacles");

onload = setScore();
function setScore() {
  var score = 0;
  var scoreElement = document.getElementById("score");
}

function updateScore() {
  score++;
  scoreElement.innerHTML = "Score: " + score;
}

function jump() {
    if (!catto.classList.contains("jump")) {
      catto.classList.add("jump");
      setTimeout(function () {
        catto.classList.remove("jump");
      }, 400);
    }
  }

let isAlive = setInterval(function () {
  // get current catto Y position
  let cattoTop = parseInt(window.getComputedStyle(catto).getPropertyValue("top"));

  // get current obstacles X position
  let obstaclesLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );

  // get current catto X position
  let cattoLeft = parseInt(
    window.getComputedStyle(catto).getPropertyValue("left")
  );

  // detect collision
  if (Math.abs(cattoLeft - obstaclesLeft) < 40 && cattoTop >= 140) {
    // collision
    alert("Game Over!");
  }

  if (obstaclesLeft < 0) {
    updateScore();
  }
}, 10);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

