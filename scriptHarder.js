const catto = document.getElementById("catto");
const obstacles = document.getElementById("obstacles");
var score = 0
var isScoreAdded = false;


function setScore(){
  score = 0;
  document.getElementById('score').innerHTML = 'score: ' + score;
  var highScore = document.cookie.split('; ').find(row => row.startsWith('score='));
  if (highScore) {
    highScore = parseInt(highScore.split('=')[1]);
    document.getElementById('highscore').innerHTML = 'Highscore: ' + highScore;
  }else{
    document.getElementById('highscore').innerHTML = 'Highscore: 0';
  }
}

function updateScore(){
  score++;
  document.getElementById('score').innerHTML = 'Score: ' + score;
  var highScore = document.cookie.split('; ').find(row => row.startsWith('score='));
  if (highScore) {
    highScore = parseInt(highScore.split('=')[1]);
    if (score > highScore){
      document.getElementById('highscore').innerHTML = 'Highscore: ' + score;
    }
  }else{
    document.getElementById('highscore').innerHTML = 'Highscore: ' + score;
  }
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
    var highScore = document.cookie.split('; ').find(row => row.startsWith('score='));
    if (highScore) {
      highScore = parseInt(highScore.split('=')[1]);
      if (score > highScore){
        document.cookie = 'score=' + score;
      }
    }else{
      document.cookie = 'score=' + score;
    }

    location.reload();

  }

  if(obstaclesLeft < -10 && isScoreAdded == false){
    updateScore();
    isScoreAdded = true;

  }

  if(obstaclesLeft >= -10){
    isScoreAdded = false;
  }
  

}, 10);




document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

