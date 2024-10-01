let numRounds = 5;
let numGamesPlayed = 0;
let compScore = 0;
let humanScore = 0;

function showCurrentStatus() {
  //create the div
  const div = document.querySelector("div.results");
  const h1 = document.querySelector("h1");
  const body = document.querySelector("body");

  if (numRounds > numGamesPlayed) {
    // div.textContent = `Number of Rounds: ${numRounds}\n Games played: ${numGamesPlayed},Score Player: ${humanScore} vs Score Computer ${compScore}, Game status: Continue`;
    div.innerHTML = `
    Games played: ${numGamesPlayed}/${numRounds}<br>
    Score Player: ${humanScore} vs Score Computer: ${compScore}`;

    h1.textContent = "Let's play a game!";
  } else if (numRounds === numGamesPlayed) {
    // div.textContent = (`Number of Rounds: ${numRounds}\n Games played: ${numGamesPlayed},Score Player: ${humanScore} vs Score Computer ${compScore}, Game status: Ended, Press key to start a new game`)
    div.innerHTML = `
    Games played: ${numGamesPlayed}/${numRounds}<br>
    Score Player: ${humanScore} vs Score Computer: ${compScore}<br>
    <br>
    Game over. Press key to start a new game.`;

    if (compScore === humanScore) {
      h1.textContent = "It's a tie!";
    } else if (compScore > humanScore) {
      h1.textContent = "You lost! :(";
    } else if (compScore < humanScore) {
      h1.textContent = "You won!";
    }

    resetGame();
  }
  // option 1: use div = document.querySelector("div.results") and edit elements directly
  // option 2: use createElement results and replace all children of a div results
  // option 3: use createElement("div.results") and body.replaceChild but then need to specify which child we are replacing and which one we want in that place
  // option 4: use createElement("div.results") and body.append but it will display score each round

  // I only need to use the following append/replace when I am working with CREATE ELEMENT!!! When it's already created I can just edit the text
  //   const results = document.querySelector(".results");
  //   results.replaceChildren(div);
  //   body.append(div);
}

function resetGame() {
  numRounds = 5;
  numGamesPlayed = 0;
  compScore = 0;
  humanScore = 0;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleButtonClick(button.textContent.toLowerCase());
  });
});

const handleButtonClick = (humanChoice) => {
  // if(numGamesPlayed < numRounds){
  let winner = playRound(humanChoice, getComputerChoice());
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    compScore += 1;
  }
  numGamesPlayed += 1;
  console.log(humanScore, compScore, numGamesPlayed);

  // } else {
  //     resetGame()
  // }
  showCurrentStatus();
};

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    return "computer";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "human";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "human";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "human";
  } else return "draw";
}
