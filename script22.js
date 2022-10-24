const button = document.querySelectorAll(".btn");

const rock = button[0];
const paper = button[1];
const scissors = button[2];

rock.addEventListener("click", pla1);
function tarr (e) {

        let player = "";
    if (e.target === button[0]) {
        player = "rock";
    }
    else if (e.target === button[1]) {
        player = "paper";

    }
    else if (e.target === button[2]) {
        player = "scissors";
    }
    else {
        return "choose one";
    }
    
console.log(player);
return player;
    
}
// create two randoms? rock paper scicsors
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
function pla1 (e) {
    let hoo = addEventListener("click", e => e.target);
   if (hoo ===  paper){ 
    console.log("yeees");
   }
   paper.addEventListener("click", e => e.target);
   scissors.addEventListener("click", e => e.target);
    
}
function playRound (playerSelection, computerSelection) {
    // const player = playerSelection.toLowerCase();
//    const play1 =  button.forEach = addEventListener("click", alaa);
//    const player = playerSelection = play1;
    // playerSelection = pla1;
    computerSelection = getComputerChoice();

    let result  = "";

    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "Rock Draw!";
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        result = "Paper Draw!";
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Scissors Draw!";
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lost!";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result =  "You Won!";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        result =  "You Won!";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        result =  "You Lost!";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You Lost!";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You Won!";
    }
    console.log(result);
    console.log(computerSelection);
    console.log(playerSelection);
    return result;


}