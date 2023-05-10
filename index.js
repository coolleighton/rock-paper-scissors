const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

let playerScore = 0
let computerScore = 0
let computerSelection = getComputerChoice()

// function to return rock, paper or scissors randomly //

function getComputerChoice() {

   let randomNumber =  Math.floor(Math.random() * 3 + 1)

   if (randomNumber === 1) {
    return "rock"
   }

   else if (randomNumber === 2) {
    return "paper"
   }

   else {
    return "scissors"
   } 

}

// function that plays a single round, will take two parameters. The player selection and computer selection. Will then return a string declaring the winner. Make it case insensitive //

function singleRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase()

    if 
    (playerSelection === "rock" && computerSelection === "scissors")
    {
        playerScore ++
        console.log("congratulations, you win!")
    }

    if
    (playerSelection === "paper" && computerSelection === "rock")
    {
        playerScore ++
        console.log("congratulations, you win!")
    }

    if
    (playerSelection === "scissors" && computerSelection === "paper")
    {
        playerScore ++
        console.log("congratulations, you win!")
    }

    if 
    (playerSelection === "paper" && computerSelection === "scissors")
    {
        computerScore ++
        console.log("unfortunatly, you lose!")
    }

    if
    (playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore ++
        console.log("unfortunatly, you lose!")
    }

    if
    (playerSelection === "rock" && computerSelection === "paper")
    {
        computerScore ++
        console.log("unfortunatly, you lose!")
    }

    if 
    (playerSelection === computerSelection)
    { 
        console.log("tie")
    }

    console.log("player score = " + playerScore + " computer score = " + computerScore)
    
}

// function that plays the game using the previous functions. It will play a 5 round game and report the winner at the end. Use prompt to get user input  //

function game() {

    let playerSelection = window.prompt("enter rock, paper or scissors")

    singleRound(playerSelection, computerSelection)

    playerSelection = window.prompt("enter rock, paper or scissors")

    singleRound(playerSelection, computerSelection)

    playerSelection = window.prompt("enter rock, paper or scissors")

    singleRound(playerSelection, computerSelection)

    playerSelection = window.prompt("enter rock, paper or scissors")

    singleRound(playerSelection, computerSelection)

    playerSelection = window.prompt("enter rock, paper or scissors")

    singleRound(playerSelection, computerSelection)

    if (playerScore === computerScore) {
        console.log("You have tied. refresh the page to play again.")
    }

    if (playerScore > computerScore) {
        console.log("You have Won. refresh the page to play again.")
    }

    if (playerScore < computerScore) {
        console.log("You have lost. refresh the page to play again.")
    }
}

game()