/* 
    Additional game functions used in previous iteration
*/

/*
    One game round
*/
function playGame(){
    computerOne = getComputerChoice();
    playerOne = getPlayerChoice();
    compareHands(playerOne, computerOne);
}

/*
    Return true if player wants to play again, otherwise false
*/
let wantToPlay = false;
wantToPlay = function playAgainPrompt(){
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
    Prompt player for rock, paper, or scissors
    Return userChoice
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