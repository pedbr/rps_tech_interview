const playRock = () => {
    let playerChoice = `ROCK`
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ${playerChoice}!`
}

const playPaper = () => {
    let playerChoice = `PAPER`
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ${playerChoice}!`
}

const playScissors = () => {
    let playerChoice = `SCISSORS`
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ${playerChoice}!`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);