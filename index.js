const handChoices = ["rock", "paper", "scissors"];
let computerOne;   
let playerOne;

/*
    Return number 0-2
*/
function getRandomNumber(){
    return Math.floor((Math.random() * 3));
}

/*
    Return computer's random choice
*/
function getComputerChoice(){
    return handChoices[getRandomNumber()];
}

/*
    Compare player and computer to determine winner
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
    BELOW THIS LINE: Follow design given
*/

/* 
    Use classList value as player choice
*/
function getChoiceByBtn(e){
    const playerChoice = e.target.classList.value;
    return playerChoice;
}

function playGame(e){
    computerOne = getComputerChoice();
    playerOne = getChoiceByBtn(e);
    compareHands(playerOne, computerOne);
}

/*
    Create buttons with classes and text content
    Append buttons to root element in html 
*/
const root = document.querySelector("#root");

const btnRock = document.createElement("button");
btnRock.classList.add("rock");
btnRock.textContent = "ROCK";

const btnPaper = document.createElement("button");
btnPaper.classList.add("paper");
btnPaper.textContent = "PAPER";

const btnScissors = document.createElement("button");
btnScissors.classList.add("scissors");
btnScissors.textContent = "SCISSORS";

root.appendChild(btnRock);
root.appendChild(btnPaper);
root.appendChild(btnScissors);
//END of Create and Append buttons


btnRock.addEventListener("click", playGame);
btnPaper.addEventListener("click", playGame);
btnScissors.addEventListener("click", playGame);



