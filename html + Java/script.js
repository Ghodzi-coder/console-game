function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i}:`);
        console.log("You chose:", playerSelection);
        console.log("Computer chose:", computerSelection);
        console.log(result);

        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }

        console.log(`Score: You ${playerScore} - ${computerScore} Computer`);
        console.log("------------------------");
    }

    if (playerScore > computerScore) {
        console.log("Final result: You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Final result: You lose the game!");
    } else {
        console.log("Final result: It's a tie overall!");
    }
}

game();