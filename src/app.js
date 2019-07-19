let userScore = 0
let compScore = 0

const getComputerChoice = () => {
    let computerPlay = Math.random();
    if (computerPlay < 0.34) {
        computerPlay = `ROCK`;
    } else if(computerPlay <= 0.67) {
        computerPlay = `PAPER`
    } else {
        computerPlay = `SCISSORS`
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
        compScore++
    } else {
        showResult = `YOU WIN!`
        userScore++
    }
    let displayChoice = document.getElementById("player-option")
    displayChoice.innerHTML = `${playerChoice}`
    let displayComputer = document.getElementById("computer-option")
    displayComputer.innerHTML = `${computerChoice}`
    let displayResult = document.getElementById("result-display")
    displayResult.innerHTML = `${showResult}`
    let displayScore = document.getElementById("score")
    displayScore.innerHTML = `${userScore} - ${compScore}`
}

const playPaper = () => {
    let playerChoice = `PAPER`
    let computerChoice = getComputerChoice()
    let showResult
    if (computerChoice == `ROCK`){
        showResult = `YOU WIN!`
        userScore++
    } else if (computerChoice == `PAPER`){
        showResult = `IT'S A TIE!`
    } else {
        showResult = `YOU LOSE!`
        compScore++
    }
    let displayChoice = document.getElementById("player-option")
    displayChoice.innerHTML = `${playerChoice}`
    let displayComputer = document.getElementById("computer-option")
    displayComputer.innerHTML = `${computerChoice}`
    let displayResult = document.getElementById("result-display")
    displayResult.innerHTML = `${showResult}`
    let displayScore = document.getElementById("score")
    displayScore.innerHTML = `${userScore} - ${compScore}`
}

const playScissors = () => {
    let playerChoice = `SCISSORS`
    let computerChoice = getComputerChoice()
    let showResult
    if (computerChoice == `ROCK`){
        showResult = `YOU LOSE!`
        compScore++
    } else if (computerChoice == `PAPER`){
        showResult = `YOU WIN!`
        userScore++
    } else {
        showResult = `IT'S A TIE!`
    }
    let displayChoice = document.getElementById("player-option")
    displayChoice.innerHTML = `${playerChoice}`
    let displayComputer = document.getElementById("computer-option")
    displayComputer.innerHTML = `${computerChoice}`
    let displayResult = document.getElementById("result-display")
    displayResult.innerHTML = `${showResult}`
    let displayScore = document.getElementById("score")
    displayScore.innerHTML = `${userScore} - ${compScore}`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);