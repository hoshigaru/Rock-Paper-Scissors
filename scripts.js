function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let roundResult; // 1 means won, 2 means lost

    const outcome = document.createElement('p');

    if (playerSelection == computerSelection) {
        outcome.textContent = "You've tied!";
        roundResult = 0;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        outcome.textContent = "You win! Rock beats Scissors";
        roundResult = 1;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        outcome.textContent = "You lose! Paper beats Rock";
        roundResult = 2;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        outcome.textContent = "You win! Paper beats Rock";
        roundResult = 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        outcome.textContent = "You lose! Scissors beat Paper";
        roundResult = 2;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        outcome.textContent = "You lose! Rock beats Scissors";
        roundResult = 2;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        outcome.textContent = "You win! Scissors beats Paper";
        roundResult = 1;
    }

    resultsDiv.appendChild(outcome);
    updateScore(roundResult);
} 

let playerScore = 0;
let computerScore = 0;

// 1 = player win, 2 = computer win
function updateScore(roundResult) {
    if (roundResult === 1) {
        playerScore++;
    }
    else if (roundResult === 2) {
        computerScore++;
    }

    if (playerScore >= 5) {
        endGame(1);
    }
    else if (computerScore >= 5) {
        endGame(2);
    }
}

function endGame(finalResult) {
    const finalMsg = document.createElement('p');

    if (finalResult == 1) {
        finalMsg.innerHTML = `Your Score: ${playerScore}<br>
                                Computer Score: ${computerScore}<br>
                                You win!`;
    }
    else if (finalResult == 2) {
        finalMsg.innerHTML = `Your Score: ${playerScore}<br>
                               Computer Score: ${computerScore}<br>
                               The Computer wins!`;
    }

    resultsDiv.appendChild(finalMsg);
}

const buttons = document.querySelectorAll('button');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));

const resultsDiv = document.createElement('div');
const body = document.querySelector('body');

body.appendChild(resultsDiv);