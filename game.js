    let choices=["Rock", "Paper", "Scissors"]; //The array containing the three choices
function getComputerChoice() // function to get the computer choice
{
    return choices[Math.floor(Math.random()*choices.length)];
}
    
    var cwon=0, pwon=0;
function playRound(playerSelection) {//Create function that gets result
    let a=playerSelection;
    let b=getComputerChoice();
    if(cwon==0&&pwon==0)
    {
        final.textContent='';
    }
    if(a==b) { 
    result.textContent='It\'s a draw!';
    }
    else if((a=='Rock'&&b=='Paper')||(a=='Paper'&&b=='Scissors')||(a=='Scissors'&&b=='Rock'))
    {result.textContent= `You lose! ${b} beats ${a}!`;
    cwon++;
    }
    else {
    result.textContent=`You won! ${a} beats ${b}!`;
    pwon++;
    }
    Players.textContent=`Your score is: ${pwon}`;
    Computers.textContent=`Computer\'s score is: ${cwon}`;
    if(cwon==5||pwon==5)
    {
          if(pwon==cwon)
          final.textContent='It\'s a draw! No one won the game...';
      else
           if(pwon>cwon)
         final.textContent='Congratulation! You won the game!';
      else
         final.textContent='Sorry.. You lost the game...';
      
      cwon=0, pwon=0;
    }
      
  }

  

  const buttons=document.querySelectorAll('button');
  const result=document.querySelector('#result');
  const Players=document.querySelector('#Players');
  const Computers=document.querySelector('#Computers');
  const final=document.querySelector('#final');

  

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        playRound(button.value);
    })
})