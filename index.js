const handChoices = ["rock", "paper", "scissors"];
let wantToPlay = false;
let computerOne;   
let playerOne;

/*
    Return number 0-2
*/
function getRandomNumber(){
    return Math.floor((Math.random() * 3));
}

/*
    return computer's random choice
*/
function getComputerChoice(){
    return handChoices[getRandomNumber()];
}

/*
    prompt player for rock, paper, or scissors
    return userChoice
*/
function getPlayerChoice(){
    let userChoice;
    do{ 
        userChoice = prompt("Please choose rock, paper, or scissors");
        userChoice = userChoice.toLowerCase();
    }while( (userChoice !== handChoices[0]) &&
            (userChoice !== handChoices[1]) &&
            (userChoice !== handChoices[2]) );
            
    return userChoice;
}

/*
    compare player and computer to determine winner
*/
function compareHands(playerHand, computerHand){
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
    return true if player wants to play again, otherwise false
*/
function playAgainPrompt(){
    let userInput = "";

    do{
        userInput = prompt("Would you like to play again? y/n")
    }while((userInput !== "y") && (userInput !== "n"));

    if(userInput === "y"){
        return true;
    }
    else{
        return false;
    }
}

/*
    One game round
*/
function playGame(){
    computerOne = getComputerChoice();
    playerOne = getPlayerChoice();
    compareHands(playerOne, computerOne);
}

do{
    playGame();
    wantToPlay = playAgainPrompt();
}while(wantToPlay)
