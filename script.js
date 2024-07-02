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
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice.toLowerCase(); 
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// console.log(computerChoice);
// console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
        alert(`Draw! You said ${humanChoice} and computer said ${computerChoice} too. Result is ${humanScore}:${computerScore}.`);
        
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore = humanScore + 1;
        alert(`You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        alert(`You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        alert(`You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        alert(`You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        alert(`You lost! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore + 1;
        alert(`You won! You said ${humanChoice} and computer said ${computerChoice}. Result is ${humanScore}:${computerScore}.`);
    } else {
        alert("Dunno!");
    }

}

playRound(humanChoice, computerChoice);
