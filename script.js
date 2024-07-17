let roundCount = 0;
let humanScore = 0;
let computerScore = 0; 

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const roundCountSpan = document.querySelector("#roundCountSpan");

const result = document.querySelector("#result");
result.textContent = `${humanScore}:${computerScore}`

const roundResult = document.createElement("p");
result.append(roundResult);

roundCountSpan.textContent = `${String(roundCount)}`

const messageDiv = document.querySelector("#messageDiv");
const message = document.createElement("p");
messageDiv.append(message);

function getComputerChoice () {
        
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];

}

let computerChoice;

    function playRound (humanChoice) {
    
        computerChoice = getComputerChoice();
        console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);
    
        if (humanChoice === computerChoice) {
            humanScore = humanScore + 1;
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `Draw! You said ${humanChoice} and computer said ${computerChoice} too. Result is ${humanScore}:${computerScore}.`;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`;
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`;
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
            roundCountSpan.textContent = `${String(roundCount)}`
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = `You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`;
        } else {
            message.textContent = "Wrong input! Try again.";
            playRound(humanChoice, computerChoice);
        }
        
        if (roundCount === 5) {
            if (humanScore > computerScore) {
                message.textContent = `You won! Final result is ${humanScore}:${computerScore}`;
            } else if (humanScore < computerScore) {
                message.textContent = `You lost! Final result is ${humanScore}:${computerScore}`;
            } else {
                message.textContent = `It's a draw! Final result is ${humanScore}:${computerScore}`;
            }
            setTimeout(resetGame, 3000);
        }

        }

        function resetGame() {
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
            roundCountSpan.textContent = `${String(roundCount)}`;
            result.textContent = `${humanScore}:${computerScore}`
            message.textContent = '';
        }

rockButton.addEventListener("click", () => {
    playRound("rock");
});
paperButton.addEventListener("click", () => {
    playRound("paper");
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});