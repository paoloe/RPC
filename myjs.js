// get computer choice 
// get user choice
// output winner

function getComputerChoice(){
    var choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getUserChoice(){
    const input = prompt("Rock Paper Scissors?");
    return input;
}

function playRound(playerSelection, compSelection){
    // how many scenarios? 
    // paper beats rock
    // rock beats scissors
    // scissors beat paper

    if(playerSelection == compSelection){
        return 'draw';
    } else if(playerSelection == 'rock'){
        if(compSelection == 'paper'){
            return 'Computer Wins';
        }
        else{
            return 'User Wins';
        }
    } else if(playerSelection == 'paper'){
        if(compSelection == 'rock'){
            return 'user wins';
        }else{
            return 'computer wins';
        }
    } else if(playerSelection == 'scissors'){
        if(compSelection == 'paper'){
            return 'user wins';
        }
        else{
            return 'computer wins';
        }
    }
}

function game(){
    var winner;
    for(let i = 0; i < 5; i++){
        winner = playRound(playerSelection, computerSelection);
    }
}