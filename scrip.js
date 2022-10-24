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
function getPlayerChoice () { //random for player 1
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
const button = document.querySelectorAll(".btn");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
rock.addEventListener("click", playRound("rock", getComputerChoice()));


// Rounds function
function playRound (playerSelection, computerSelection) {
    // const player = playerSelection.toLowerCase();
//    const play1 =  button.forEach = addEventListener("click", alaa);
//    const player = playerSelection = play1;

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
    console.log(playerSelection);
    console.log(computerSelection);
    return result;


}
// Run the game!
function game () {
    let rounds = 0;
    let p1 = 0; // player 1 wins
    let p2 = 0; // player 2 wins
    let draw = 0; // draw

    // for (let i = 0; i < 5; i++){    // 1 i = 1 round
        
        let playerSelection =  rock;

        // let playerSelection = prompt("Choose: Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();

        const newFunc = playRound(playerSelection, computerSelection);

        if (newFunc == "You Won!") {
        p1++;
        rounds++;
        console.log("You Won!");


    }
      else if (newFunc == "You Lost!") {
        p2++;
        rounds++;
        console.log("You Lost!");

    }
       else if (newFunc ==  "Rock Draw!" || newFunc ==  "Paper Draw!" || newFunc ==  "Scissors Draw!") {
        draw++;
        rounds++;
        console.log("Draw!");
    }
    else {
        console.log("Please, choose a real answer");
        // i--;    // Round will not increase if you dont use rock, paper or scissors
    }

        console.log(newFunc);

    

        console.log(p1);
        console.log(p2);
        console.log(draw);
    console.log(rounds);

    if (p1 > p2) {
        console.log("You Win");
    }
    else if (p1 < p2) {
        console.log("You Lose");
    }
    else if (p1 == p2) {
        console.log("No winners");
    }
}


// game();

// button.forEach = addEventListener("click", alaa);

function alaa (e) {
    let player = "";
if (e.target === rock) {
    player = "rock";
    rock.textContent = "hola";
}
if (e.target === paper) {
    player = "paper";

}
if (e.target === scissors) {
    player = "scissors";
}

console.log(player);
return player;

}
    // game();
    function onon () {
        if (button) {
            game();
        }
    }
    game ();