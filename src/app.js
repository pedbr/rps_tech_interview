const getComputerChoice = () => {
    let computerPlay = Math.random();
    if (computerPlay < 0.34) {
        computerPlay = `ROCK`;
    } else if(computerPlay <= 0.67) {
        computerPlay = `PAPER`;
    } else {
        computerPlay = `SCISSORS`;
    }
    return computerPlay
}

const playRock = () => {
    let playerChoice = `ROCK`
    let computerChoice = getComputerChoice()
    let showResult
    if (computerChoice == `ROCK`){
        showResult = `IT'S A TIE!`
    } else if (computerChoice == `PAPER`){
        showResult = `YOU LOSE!`
    } else {
        showResult = `YOU WIN!`
    }
    let displayChoice = document.getElementById("player-option")
    displayChoice.innerHTML = `${playerChoice}`
    let displayComputer = document.getElementById("computer-option")
    displayComputer.innerHTML = `${computerChoice}`
    let displayResult = document.getElementById("result-display")
    displayResult.innerHTML = `${showResult}`
}

const playPaper = () => {
    let playerChoice = `PAPER`
    let computerChoice = getComputerChoice()
    let showResult
    if (computerChoice == `ROCK`){
        showResult = `YOU WIN!`
    } else if (computerChoice == `PAPER`){
        showResult = `IT'S A TIE!`
    } else {
        showResult = `YOU LOSE!`
    }
    let displayChoice = document.getElementById("player-option")
    displayChoice.innerHTML = `${playerChoice}`
    let displayComputer = document.getElementById("computer-option")
    displayComputer.innerHTML = `${computerChoice}`
    let displayResult = document.getElementById("result-display")
    displayResult.innerHTML = `${showResult}`
}

const playScissors = () => {
    let playerChoice = `SCISSORS`
    let computerChoice = getComputerChoice()
    let showResult
    if (computerChoice == `ROCK`){
        showResult = `YOU LOSE!`
    } else if (computerChoice == `PAPER`){
        showResult = `YOU WIN!`
    } else {
        showResult = `IT'S A TIE!`
    }
    let displayChoice = document.getElementById("player-option")
    displayChoice.innerHTML = `${playerChoice}`
    let displayComputer = document.getElementById("computer-option")
    displayComputer.innerHTML = `${computerChoice}`
    let displayResult = document.getElementById("result-display")
    displayResult.innerHTML = `${showResult}`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);