let rps = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    let choice = Math.floor(Math.random()*3);  // index between 0 and 2 inclusive
    return choice; //returns either 0=R or 1=P or 2=S
}

function playRound(playerSelection, computerSelection){
    let roundResult = 0;
    switch(playerSelection){
        case 0:
            switch(computerSelection){
                case 0:
                    roundResult = 0; //0 for tie
                    break;
                case 1:
                    roundResult = -1; //-1 for loss
                    break;
                case 2:
                    roundResult = 1; //+1 for win
                    break;
            }
            break;
        case 1:
            switch(computerSelection){
                case 0:
                    roundResult = 1;
                    break;
                case 1:
                    roundResult = 0;
                    break;
                case 2:
                    roundResult = -1;
                    break;
            }
            break;
        case 2:
            switch(computerSelection){
                case 0:
                    roundResult = -1;
                    break;
                case 1:
                    roundResult = 1;
                    break;
                case 2:
                    roundResult = 0;
                    break;
            }
            break;
    }
    
    switch(roundResult){
        case -1:
            resultElem.textContent = `You Lose! ${rps[computerSelection]} beats ${rps[playerSelection]}.`;
            computerScore += 1;
            break;
        case 0:
            resultElem.textContent = `Tie!`;
            break;
        case 1:
            resultElem.textContent = `You Win! ${rps[playerSelection]} beats ${rps[computerSelection]}.`;
            playerScore += 1;
            break;
    }

    scoreElem.textContent = `Player ${playerScore}:${computerScore} Computer`;
    if(playerScore === 5 && computerScore < 5){
        resultElem.textContent = `Player Wins! Press a button to play again!`;
        playerScore = 0;
        computerScore = 0;
    }else if(computerScore === 5 && playerScore < 5){
        resultElem.textContent = `Computer Wins! Press a button to play again!`;
        playerScore = 0;
        computerScore = 0;
    }
}


let rockB = document.querySelector("#rock");
let paperB = document.querySelector("#paper");
let scissorsB = document.querySelector("#scissors");

let resultElem = document.querySelector(".result");
let scoreElem = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

rockB.addEventListener("click", ()=>{
    let cpChoice = computerPlay();
    playRound(0, cpChoice);
});
paperB.addEventListener("click", ()=>{
    let cpChoice = computerPlay();
    playRound(1, cpChoice);
});
scissorsB.addEventListener("click", ()=>{
    let cpChoice = computerPlay();
    playRound(2, cpChoice);
});
