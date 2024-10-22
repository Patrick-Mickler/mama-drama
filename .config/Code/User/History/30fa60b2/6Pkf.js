
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
    let humanScoreCounter = document.getElementById('pscore')
    let computerScoreCounter = document.getElementById('gscore')
    
    let pScore = 0;
    let gScore = 0;

    
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
        pScore++  
    return("Player");
    
    }
    else{
        gScore++
       return("Computer");
       
    }

    

    document.getElementById('pscore').innerText=`You're Score: ${pScore}`;
    document.getElementById('gscore').innerText=`Computer Score:${gScore}`;



}


function playRound(playerChoice, computerChoice ){
    
    const result = checkWinner(playerChoice,computerChoice);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score:${computerScore}`)
    if (result === 'Tie'){
        console.log("It's a Tie!")
    }
    else if (result === 'Player'){
        
       
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    }
    else if (result == 'Computer') {
        
       
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
       
    }

    

    
}




      
    
   


    
   
 
    
    
    
   





//playGame();