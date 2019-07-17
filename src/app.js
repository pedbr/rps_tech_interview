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

    return showResult
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

    return showResult
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

    return showResult
}

const displayResult = () => {
    let userScore = 0
    let compScore = 0
    let rockResult = playRock()
    let paperResult = playPaper()
    let scissorsResult = playScissors()
    if (rockResult == `YOU WIN!`){
        userScore ++
    } else if (rockResult == `YOU LOSE!`){
        compScore ++
    }
    if (paperResult == `YOU WIN!`){
        userScore ++
    } else if (paperResult == `YOU LOSE!`){
        compScore ++
    }
    if (scissorsResult == `YOU WIN!`){
        userScore ++
    } else if (scissorsResult == `YOU LOSE!`){
        compScore ++
    }
    let displayResult = document.getElementById("score")
    displayResult.innerHTML = `${userScore} - ${compScore}`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);

document.getElementById("play-rock").addEventListener("click", displayResult);
document.getElementById("play-paper").addEventListener("click", displayResult);
document.getElementById("play-scissors").addEventListener("click", displayResult);