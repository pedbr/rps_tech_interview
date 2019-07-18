var scores = {player: 0, comp: 0,}

let displayResult = document.getElementById("score")
displayResult.innerHTML = `${scores.player} - ${scores.comp}`

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
    let scores = {
        player: 0, 
        comp: 0,
    }
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

    if (computerChoice == `SCISSORS`) {
        scores.player ++
    } else if (computerChoice == `PAPER`){
        scores.comp ++
    }
    let displayScore = document.getElementById("score")
    displayScore.innerHTML = `${scores.player} - ${scores.comp}`
}

const playPaper = () => {
    let playerChoice = `PAPER`
    let computerChoice = getComputerChoice()
    let scores = {
        player: 0, 
        comp: 0,
    }
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

    if (computerChoice == `ROCK`) {
        scores.player ++
    } else if (computerChoice == `SCISSORS`){
        scores.comp ++
    }

    let displayScore = document.getElementById("score")
    displayScore.innerHTML = `${scores.player} - ${scores.comp}`
}

const playScissors = () => {
    let playerChoice = `SCISSORS`
    let computerChoice = getComputerChoice()
    let scores = {
        player: 0, 
        comp: 0,
    }
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

    if (computerChoice == `PAPER`) {
        scores.player ++
    } else if (computerChoice == `ROCK`){
        scores.comp ++
    }
    
    let displayScore = document.getElementById("score")
    displayScore.innerHTML = `${scores.player} - ${scores.comp}`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);