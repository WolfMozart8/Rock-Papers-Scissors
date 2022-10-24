const buttons = document.querySelectorAll("button");
const choiceP1 = document.getElementById("choiceP1");
const choiceCPU = document.getElementById("choiceCPU");
const resultDiv = document.getElementById("result");
const p1Score = document.getElementById("scoreP1");
const cpuScore = document.getElementById("scoreCPU");
const div = document.createElement("div");
const main = document.querySelector("main");
div.id = "fff";

let scoreP1 = 0;
let scoreCPU = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button == buttons[0]){
            button.classList.add("selected");
            buttons[1].classList.remove("selected");
            buttons[2].classList.remove("selected");
        }
        if (button == buttons[1]){
            button.classList.add("selected");
            buttons[0].classList.remove("selected");
            buttons[2].classList.remove("selected");
        }
        if (button == buttons[2]){
            button.classList.add("selected");
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
        }
    });
    button.addEventListener("click", playRound)
})

function getComputerChoice () {
    const cpuRandom = Math.floor(Math.random() * 3);
    let cpuRPS = "";
    if (cpuRandom == 0) {
        cpuRPS = "rock";
    }
    if (cpuRandom == 1) {
        cpuRPS = "paper";
    }
    if (cpuRandom == 2) {
        cpuRPS = "scissors";
    }
    return cpuRPS;
}

function playRound (playerSelection, computerSelection) {

    const p1 = document.querySelector(".selected");
    playerSelection = p1.id;
    computerSelection = getComputerChoice();

    let result  = "";

    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "Rock Draw!";
        scoreP1 += 0;
        scoreCPU += 0;
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        result = "Paper Draw!";
        scoreP1 += 0;
        scoreCPU += 0;
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Scissors Draw!";
        scoreP1 += 0;
        scoreCPU += 0;
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lost!";
        scoreP1 += 0;
        scoreCPU += 1;
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result =  "You Won!";
        scoreP1 += 1;
        scoreCPU += 0;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        result =  "You Won!";
        scoreP1 += 1;
        scoreCPU += 0;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        result =  "You Lost!";
        scoreP1 += 0;
        scoreCPU += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You Lost!";
        scoreP1 += 0;
        scoreCPU += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You Won!";
        scoreP1 += 1;
        scoreCPU += 0;
    }
    choiceP1.textContent = `Player choice: ${playerSelection}`;
    choiceCPU.textContent = `CPU choice: ${computerSelection}`;
    p1Score.textContent = scoreP1;
    cpuScore.textContent = scoreCPU;
    resultDiv.textContent = result;

    winner();

    console.log(result);
    console.log(computerSelection);
    console.log(playerSelection);
    return result;
}
function winner () {
    if (scoreP1 === 5) {
        main.appendChild(div);
        main.insertBefore(div, main.children[0]);
        div.textContent = "Winner !!!"
    }
    if (scoreCPU === 5) {
        main.appendChild(div);
        main.insertBefore(div, main.children[0]);
        div.textContent = "Loser !!!"
    }
}