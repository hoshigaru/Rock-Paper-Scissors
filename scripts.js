function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerSelection() {
    return prompt("Rock, Paper or Scissors?");
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("You've tied!");
        return 0;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("You win! Rock beats Scissors");
        return 1;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("You lose! Paper beats Rock");
        return 2;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("You win! Paper beats Rock");
        return 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("You lose! Scissors beat Paper");
        return 2;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("You lose! Rock beats Scissors");
        return 2;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("You win! Scissors beats Paper");
        return 1;
    }
    else {
        return 3;
    }
} 

function game() {

    let rounds = 0;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    while (rounds < 5) {
        result = playRound(getPlayerSelection(), getComputerChoice());

        if (result == 1) {
            playerScore++;
        }
        else if (result == 2) {
            computerScore++;
        }
        else if (result == 3) {
            console.log("Unknown error 3");
            break;
        }
        rounds++;
    }

    if (playerScore > computerScore) {
        return `Your Score: ${playerScore}\nComputer Score: ${computerScore}\nYou win!`;
    }
    else if (computerScore > playerScore) {
        return `Your Score: ${playerScore}\nComputer Score: ${computerScore}\nThe Computer won!`;
    }
    else {
        return `Your Score: ${playerScore}\nComputer Score: ${computerScore}\nYou tied!`;
    }
}

console.log(game());