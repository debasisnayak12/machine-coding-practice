let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let userScoreAdd = document.getElementById("user-score");
let compScoreAdd = document.getElementById("comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3)
  return options[randomIdx];
}

const draw = () => {
  msg.innerText = "Game was Draw. Play Again!"
  msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWins,userChoice,compChoice) => {
  if(userWins){
    userScore++;
    userScoreAdd.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScoreAdd.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  if(userChoice === compChoice){
    // Draw
    draw();
  }else{
    let userWins = false;
    switch(userChoice){
      case "rock":
        userWins = compChoice === "scissor";
        break;
      case "paper":
        userWins = compChoice === "rock";
        break;
      case "scissor":
        userWins = compChoice === "paper";
        break;  
    }
    showWinner(userWins,userChoice,compChoice)
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})