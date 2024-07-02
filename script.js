function getComputerChoice () {
        
        function getRandomInt() {
        return Math.floor(Math.random() * 3);
        }

        const RandomInt = getRandomInt();
        
        let ComputerChoice;

        if (RandomInt === 0) {
            ComputerChoice = "Rock";
        } else if (RandomInt === 1) {
            ComputerChoice = "Paper";
        } else if (RandomInt === 2){
            ComputerChoice = "Scissors";
        }

        return ComputerChoice;
}

console.log(getComputerChoice())

function getHumanChoice () {
    let HumanChoice = prompt("Rock, Paper or Scissors?");
    return HumanChoice; 
}

console.log(getHumanChoice());

