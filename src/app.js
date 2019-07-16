const playRock = () => {
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED ROCK!`
}

const playPaper = () => {
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED PAPER!`
}

const playScissors = () => {
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `YOU PICKED SCISSORS!`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);