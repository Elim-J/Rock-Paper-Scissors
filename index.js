const handChoices = ["rock", "paper", "scissors"];
let playAgain = false;
let computerOne;   
let playerOne;

//Return number 0-2
function random(){
    return Math.floor((Math.random() * 3));
}

//computer chooses a random hand
function computerChoice(){
    return handChoices[random()];
}

function playerChoice(){
    let userChoice;
    
    do{
        
        userChoice = prompt("Please choose rock, paper, or scissors");
        userChoice = userChoice.toLowerCase();
    }while( (userChoice !== handChoices[0]) &&
            (userChoice !== handChoices[1]) &&
            (userChoice !== handChoices[2]) );
            
    return userChoice;
}

function comparison(playerHand, computerHand){

    if(playerHand === computerHand){
        console.log("Tie.");
    }
    else if ((playerHand === "rock" && computerHand === "scissors") || 
             (playerHand === "paper" && computerHand === "rock")    || 
             (playerHand === "scissors" && computerHand === "paper")  )
    {
        console.log("Player wins.");
    }
    else{
        console.log("Player lost finally.");
    }
}




/*
function comparison() determines if player wins or not
function playAgainPrompt() asks user if player would like to play again

ask player if they want to play again -> play function and prompt inside of do-while loop?

function playGame():
    computer chooses option
    player chooses option
    determine end result


playAgainPrompt()

*/
