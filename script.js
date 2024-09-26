function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    while (true) {
      const choice = prompt("Choose rock, paper, or scissors:").toLowerCase().trim();
      if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
      } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
      }
    }
  }

function playGame(numberOfRounds) {
    humanScore = 0
    computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
        }   
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;}

        return humanScore, computerScore
        
    }

    for (let i=1; i<= numberOfRounds; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()

        humanScore, computerScore = playRound(humanChoice, computerChoice)
        console.log("Round:",i ,"Human Score:", humanScore, "Computer Score:", computerScore, "Human Choice:", humanChoice, "Computer Choice:",computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("User Won!")
    } else if (humanScore < computerScore) {
        console.log("Computer Won!")
    } else {
        console.log("Draw")
    }
}

playGame(4)