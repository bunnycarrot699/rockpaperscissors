let choices=["rock", "paper", "scissors"]; //The array containing the three choices
function getComputerChoice() // function to get the computer choice
{
    return choices[Math.floor(Math.random()*choices.length)];
}
function playRound(playerSelection, computerSelection) {//Create function that gets result
    let a=playerSelection;
    let b=computerSelection;
    if(a=='rock')
    {
        if(b=='paper')
        return 0;
    else
        return 1;
    }
    else if(a=='paper')
    {
        if(b=='scissors')
       return 0;
    else 
       return 1;
    }
    else if(a=='scissors')
    {
        if(b=='rock')
       return 0;
    else 
       return 1;
    }
  }

  
  //console.log(computerSelection);
  //console.log(playRound(playerSelection, computerSelection));
function game(){//create function that plays game five times in a row 
    
    let cwon=0, pwon=0;//create variable to count who wins
 
for(i=1;i<=5;i++)
{
    const playerSelection = prompt('Insert your choice here').toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
if(playerSelection==computerSelection)//check if it is a draw
console.log('It\'s a draw');
else{
    if(playRound(playerSelection, computerSelection))
{console.log('You Won! '+ playerSelection + ' beats ' + computerSelection)
pwon++;

}
else if(!playRound(playerSelection, computerSelection))
{console.log('You Lose! '+ computerSelection + ' beats ' + playerSelection)
    cwon++;
}

}
}
if(pwon>cwon)
console.log("Congratulations! You won the game!")
else
console.log("You lost the game...")
}
game();
