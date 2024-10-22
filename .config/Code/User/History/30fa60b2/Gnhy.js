
const options =["rock" , "paper" , "scissors"]
let humanScore = 0
let computerScore = 0



function getComputerChoice(){
   const computerChoice = options[Math.floor(Math.random()*options.length)];
   console.log(computerChoice);
   return(computerChoice);

}


//function getHumanChoice(){
  //  let playerChoice = prompt("Pick Rock, Paper,or Scissors");
    // console.log(playerChoice);
     //return(playerChoice.toLowerCase());

//}
function checkWinner(playerChoice, computerChoice){
    
    
    if
    ( playerChoice === computerChoice)
    {
        return("Tie");
    }
    
    else if(
    (playerChoice == "rock" && computerChoice == "scissors" )||
    (playerChoice== "paper" && computerChoice == "rock")||
    (playerChoice == "scissors" && computerChoice == "paper")
    )
    {
        
    return("Player");
    
    }
    else{
        
       return("Computer");
       
    }

    





}


function playRound(playerChoice, computerChoice ){
    let humanScoreCounter = document.getElementById('pscore')
    let computerScoreCounter = document.getElementById('gscore')
    
    let pScore = 0;
    let gScore = 0;

    const result = checkWinner(playerChoice,computerChoice);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score:${computerScore}`)
    if (result === 'Tie'){
        console.log("It's a Tie!")
    }
    else if (result === 'Player'){
        pScore++
       
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    }
    else if (result == 'Computer') {
        gScore++
       
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
       
    }

    document.getElementById('pscore').innerText=`You're Score: ${pScore}`;
    document.getElementById('gscore').innerText=`Computer Score:${gScore}`;

    
}




      
    
   


    
   
 
    
    
    
   





//playGame();