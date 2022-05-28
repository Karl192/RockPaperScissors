console.log("Are you ready for a game of Rock, Paper, Scissors?");

let playerScore = 0;
let computerScore = 0;

function computerPlay(){ 
    let selections = ["rock", "paper", "scissors"];
    return selections[Math.floor(Math.random()*selections.length)];
}

function capitalize(str) { 
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function playerPlay(){
    return prompt("What will you choose? Rock, Paper or Scissors?", "Rock").toLowerCase();
}

function playRound(){  

    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    
    if( 
        (computerSelection == "rock") && (playerSelection == "paper") ||
        (computerSelection == "paper") && (playerSelection == "scissors") ||
        (computerSelection == "scissors") && (playerSelection == "rock")
    ){ 
        console.log(`You chose ${capitalize(playerSelection)}.`);
        console.log(`Computer chose ${capitalize(computerSelection)}.`);
        console.log(`You win the round! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`)
        return playerScore = ++playerScore;

    } else if (computerSelection == playerSelection) {
        console.log(`You chose ${capitalize(playerSelection)}.`);
        console.log(`Computer chose ${capitalize(computerSelection)}.`);
        console.log("It's a draw! Play the round again!")
        return playRound();

    } else if(
        (computerSelection == "paper") && (playerSelection == "rock") ||
        (computerSelection == "scissors") && (playerSelection == "paper") ||
        (computerSelection == "rock") && (playerSelection == "scissors")
        ){
        console.log(`You chose ${capitalize(playerSelection)}.`);
        console.log(`Computer chose ${capitalize(computerSelection)}.`);        
        console.log(`You lose the round! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`)
        return computerScore = ++computerScore;

    } else {
        console.log("Please make a valid selection.")
        return playRound();
    }
}


function resetGame(){
    playerScore = 0;
    computerScore= 0;
    game(); 
}

function game(){

    for ( let i = 0; playerScore<=5 && computerScore<= 5; i++) {

        if ((playerScore == 0) && (computerScore == 0)) {        
            console.log("Alright, let's play!");
            playRound();
    
        }else if (computerScore == 5){
            console.log(`Your score is, ${playerScore} to ${computerScore}. Ahhh that's too bad, you've lost the game!`);
            console.log("Let's go again!");
            resetGame();
        
        } else if (playerScore == 5) {
            console.log(`Your score is, ${playerScore} to ${computerScore}. Congratulations, you've won the game!`);
            console.log("Let's go again!");
            resetGame();        

        }else if (playerScore > computerScore) {        
            console.log(`You are winning, ${playerScore} to ${computerScore}!`);
            playRound();

        }else if (playerScore == computerScore) {       
            console.log(`The game is tied, ${playerScore} to ${computerScore}!`);
            playRound();        
        
        }else if (computerScore > playerScore) {
            console.log(`You are losing, ${playerScore} to ${computerScore}!`);
            playRound();                
        }
    }   
}
game();
