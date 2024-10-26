console.log(
  "Welcome to Rock-Paper-Scissor game! Your computer is your opponent."
);
// console.log("Choose wisely: \n 1 - Rock \n 2- Paper \n 3 - Scissor");

// Make a function to get computer's response.
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3) + 1;
  return x;
}
// console.log(getComputerChoice());

// Make a function to get human's response.
function getHumanChoice() {
  // Take an input from the user
  let x = prompt(
    "Choose wisely: \n 1 - Rock \n 2- Paper \n 3 - Scissor "
  );
  return x;
}
// console.log(getHumanChoice());

// Make 2 global variables i.e. "humanScore" and "computerScore" to track scores and initialize the value with 0
let humanSore = 0;
let computerScore = 0;

// Logic to play a single roud
// Make a function "playRound()" that takes 2 parameters "humanChoice" and "computerChoice" as arguements.
function playRound(humanChoice, computerChoice){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

}

// Code to comapre the arguement
// Increment the score
// Write a function "playGame()" that calls "playRound()" 5X
