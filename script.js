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

function playGame(humanChoice, numberOfRounds) {
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
        // const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()

        humanScore, computerScore = playRound(humanChoice, computerChoice)
        console.log("Round:",i)
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("--------------------");
    }

    if (humanScore > computerScore) {
        console.log("Final result: User Won!")
    } else if (humanScore < computerScore) {
        console.log("Final result: Computer Won!")
    } else {
        console.log("Final result: Draw")
    }
    console.log("Total Human Score:", humanScore, "Total Computer Score:", computerScore)

}

// playGame(2)

// const buttons = document.querySelector("#one");
// buttons.onclick = () => alert("Hello World");

// const buttons = document.querySelectorAll("button");
// buttons.addEventListener("click", () => {
//   alert("Hello World");
// });


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (event) => {
        playGame(button.textContent.toLowerCase(),1)
    
  });
});

// 1. User clicks the button: rock, paper scissors
// 2. Button click runs the playGame function 