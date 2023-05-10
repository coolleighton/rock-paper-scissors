// declaring variables and selecting HTML elements

const container = document.querySelector("#container")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const playerMessage = document.querySelector("#player-message")
const playerScoreText = document.querySelector("#player-score")
const ComputerScoreText = document.querySelector("#computer-score")


let playerScore = 0
let computerScore = 0

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

// function that will contain the logic for a single round and update the HTML with scores //

function singleRound(playerSelection, computerSelection) {

    if 
    (playerSelection === "rock" && computerSelection === "scissors")
    {
        playerScore ++
        playerMessage.textContent = "Rock beats scissors, you win!"
    }

    if
    (playerSelection === "paper" && computerSelection === "rock")
    {
        playerScore ++
        playerMessage.textContent = "Paper beats rock, you win!"
    }

    if
    (playerSelection === "scissors" && computerSelection === "paper")
    {
        playerScore ++
        playerMessage.textContent = "Scissors beats paper, you win!"
    }

    if 
    (playerSelection === "paper" && computerSelection === "scissors")
    {
        computerScore ++
        playerMessage.textContent = "Scissors beats paper, you lose!"
    }

    if
    (playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore ++
        playerMessage.textContent = "Rock beats scissors, you lose!"
    }

    if
    (playerSelection === "rock" && computerSelection === "paper")
    {
        computerScore ++
        playerMessage.textContent = "Paper beats rock, you lose!"
    }

    if 
    (playerSelection === computerSelection)
    { 
        playerMessage.textContent = "Tie game!"
    }

    ComputerScoreText.textContent = computerScore
    playerScoreText.textContent = playerScore
    
}

// ends game and displays a winner or loser screen when computer or player reaches 5 points //

function endGame() {
    if (playerScore === 5) {
        container.innerHTML = `
        
            <h2 class="win-text">Congratulations, you win! Your computer is now free of viruses.</h2>
            <button onClick="window.location.reload();">Play again?</button>
        `
    }

    if (computerScore === 5) {
        container.innerHTML = `
        
            <h2 class="win-text">Unfortunatly, you lose! Your computer is still full of viruses.</h2>
            <button onClick="window.location.reload();">Play again?</button>
        `
    }
}

// event listeners that runs a single round and takes the users input on click. also checks for when a player reaches 5 points //

rockBtn.addEventListener("click", function() {
    singleRound("rock", getComputerChoice())
    endGame()
})

paperBtn.addEventListener("click", function() {
    singleRound("paper", getComputerChoice())
    endGame()
})

scissorsBtn.addEventListener("click", function() {
    singleRound("scissors", getComputerChoice())
    endGame()
})



