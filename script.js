console.log(
  "Welcome to Rock-Paper-Scissor game! Your computer is your opponent."
);

// Make a function to get computer's response.
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3) + 1;
  return x;
}

// Make a function to get human's response.
function getHumanChoice() {
  // Take an input from the user.
  let x = prompt("Choose wisely: \n 1 - Rock \n 2- Paper \n 3 - Scissor ");
  return x;
}

// Make a flag and initialize it with 1. If flag is 0, it's a draw. If flag is 1, user wins. If flag = 2, computer wins.
let flag = 0;

// Make 2 global variables i.e. "humanScore" and "computerScore" to track scores and initialize the value with 0.
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
// Make a function "playRound()" that takes 2 parameters "humanChoice" and "computerChoice" as arguements.
function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  // Code to comapare the arguments and incrementing the score.
  if (humanChoice == 1 && computerChoice == 1) {
    console.log("It's a draw!");
    flag = 0;
  } else if (humanChoice == 1 && computerChoice == 2) {
    console.log("You lose! Paper defeats Rock.");
    flag = 2;
  } else if (humanChoice == 1 && computerChoice == 3) {
    console.log("You win! Rock defeats Scissor.");
    flag = 1;
  } else if (humanChoice == 2 && computerChoice == 1) {
    console.log("You win! Paper defeats Rock.");
    flag = 1;
  } else if (humanChoice == 2 && computerChoice == 2) {
    console.log("It's a draw!");
    flag = 0;
  } else if (humanChoice == 2 && computerChoice == 3) {
    console.log("You lose! Scissor defeats Paper.");
    flag = 2;
  } else if (humanChoice == 3 && computerChoice == 1) {
    console.log("You lose! Rock defeats Scissor.");
    flag = 2;
  } else if (humanChoice == 3 && computerChoice == 2) {
    console.log("You win! Scissor defeats Paper.");
    flag = 1;
  } else if (humanChoice == 3 && computerChoice == 3) {
    console.log("It's a draw!");
    flag = 0;
  }
  return flag;
}

// Write a function "playGame()" that calls "playRound()" 5X
function playGame() {
  let turnsLeft = 5;
  let start = 0;

  while (start < turnsLeft) {
    playRound();
    if (flag == 0) {
    } else if (flag == 1) {
      humanScore++;
    } else if (flag == 2) {
      computerScore++;
    }
    start++;
  }

  if (humanScore > computerScore) {
    console.log(
      "User wins with the score of " + humanScore + ". The game has ended."
    );
  } else if (humanScore < computerScore) {
    console.log(
      "Computer wins with the score of " +
        computerScore +
        ". The game has ended."
    );
  } else {
    console.log("It's a draw. The game has ended.");
  }
}
playGame();
