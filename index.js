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

// function that plays a single round, will take two parameters. The player selection and computer selection. Will then return a string declaring thew winner. Make it case insensitive //

function SingleRound() {

    let playerInput = "Rock"

    let playerSelection = playerInput.toLowerCase()
    let computerSelection = getComputerChoice()

    console.log(playerSelection)
    console,log(getComputerChoice())

}

// function that plays the game using the previous functions. It will play a 5 round game and report the winner at the end. Use prompt to get user input  //

console.log(SingleRound())