let roundCount = 1;

function getComputerChoice () {
        
        function getRandomInt() {
        return Math.floor(Math.random() * 3);
        }

        const RandomInt = getRandomInt();
        
        let computerChoice;

        if (RandomInt === 0) {
            computerChoice = "Rock";
        } else if (RandomInt === 1) {
            computerChoice = "Paper";
        } else if (RandomInt === 2){
            computerChoice = "Scissors";
        }

        return computerChoice.toLowerCase();
}

function getHumanChoice () {
    let humanChoice = prompt(`Round ${roundCount} / 5 | Rock, Paper, Scissors. What is your choice?`);
    return humanChoice.toLowerCase(); 
}

let humanChoice;
let computerChoice;

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
    
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            humanScore = humanScore + 1;
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            alert(`Draw! You said ${humanChoice} and computer said ${computerChoice} too. Result is ${humanScore}:${computerScore}.`);
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
            alert(`You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            alert(`You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
            alert(`You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            alert(`You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
            alert(`You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
            alert(`You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
        } else {
            alert("Wrong input! Try again.");
            playRound(humanChoice, computerChoice);
        }
    
    }

    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);

    if (humanScore > computerScore ) {
        alert(`Congrats! You are the winner with the final result of ${humanScore}:${computerScore}.`)
    } else if (humanScore < computerScore ) {
        alert(`Bad luck! You lost with the final result of ${humanScore}:${computerScore}.`)
    } else {
        alert(`No winner! The final result is ${humanScore}:${computerScore}.`)
    }

}

playGame();