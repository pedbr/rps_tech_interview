const getComputerChoice = () => {
    let computerPlay = Math.random();
    if (computerPlay < 0.34) {
        computerPlay = "ROCK";
    } else if(computerPlay <= 0.67) {
        computerPlay = "PAPER";
    } else {
        computerPlay = "SCISSORS";
    }
    return computerPlay
}

const playRock = () => {
    let playerChoice = `ROCK`
    let computerChoice = getComputerChoice()
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ${playerChoice} AND COMPUTER CHOSE ${computerChoice}!`
}

const playPaper = () => {
    let playerChoice = `PAPER`
    let computerChoice = getComputerChoice()
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ${playerChoice} AND COMPUTER CHOSE ${computerChoice}!`
}

const playScissors = () => {
    let playerChoice = `SCISSORS`
    let computerChoice = getComputerChoice()
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ${playerChoice} AND COMPUTER CHOSE ${computerChoice}!`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);