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
    alert(`Your selection is ${input}`);
}

function playRound(playerSelection, userSelection){

}

function game(){
    var winner;
    for(let i = 0; i < 5; i++){
        winner = playRound(playerSelection, computerSelection);
    }
}