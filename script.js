let retVals = ["Rock","Paper","Scissors"];
function computerPlay(){
    let choice = Math.floor(Math.random()*3);  // index between 0 and 2 inclusive
    return retVals[choice]; //returns either R or P or S
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection.toLowerCase()){
        case "rock":
            switch(computerSelection.toLowerCase()){
                case "rock":
                    return "Tie";
                case "paper":
                    return "You Lose! Paper beats Rock.";
                case "scissors":
                    return "You Win! Rock beats Scissors";
            }
        case "paper":
            switch(computerSelection.toLowerCase()){
                case "rock":
                    return "You Win! Paper beats Rock.";
                case "paper":
                    return "Tie";
                case "scissors":
                    return "You Lose! Scissors beat Paper.";
            }
        case "scissors":
            switch(computerSelection.toLowerCase()){
                case "rock":
                    return "You Lose! Rock beats Scissors";
                case "paper":
                    return "You Win! Scissors beat Paper.";
                case "scissors":
                    return "Tie";
            }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors ?");
        switch(playRound(playerSelection, computerPlay()).slice(0, 8)){
            case "You Win!":
                playerScore++;
                break;
            case "You Lose":
                computerScore++;
                break;
            default:
                break;
        }
    }

    if(playerScore > computerScore){
        console.log(`You Win! ${playerScore}:${computerScore}`);
    }else if(playerScore < computerScore){
        console.log(`You Lose! ${playerScore}:${computerScore}`);
    }else{
        console.log(`Tie! ${playerScore}:${computerScore}`);
    }
}