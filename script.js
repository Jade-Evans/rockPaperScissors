
        const getcomputerAnswer = function(){
        let num = Math.ceil(Math.random()*3);
        let computerAnswer;
        if(num === 1){
            computerAnswer = "rock";
        }
        else if(num ===2){
            computerAnswer = "paper";  
        }
        else if(num === 3){
            computerAnswer = "scissors";
        }
        return computerAnswer;
    
    };
    

    const getHumanChoice = function(){
        let humanAnswer = prompt(`Choose rock, paper or scissors`).toLowerCase();
        return humanAnswer;
    };

  
    
const playGame = function(){
    //4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
    let humanScore = 0;//has to be declared before the round or there's nothing to increment. 
    let computerScore = 0; //has to be declared before the round or there's nothing to increment. 
  

    //5. CREATE PLAYROUND FUNCTION. 
    
    
        const playRound = function(humanChoice, computerChoice) {
                if(humanChoice === computerChoice){
                    console.log(`It's a draw: both players chose ${humanChoice}`);
                }
                else if(humanChoice=="rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
                    console.log(`Human choice is ${humanChoice} & PC choice is ${computerChoice}: Human wins`);
                    humanScore +=1;
                }
                else{
                    console.log(`Human choice is ${humanChoice} & PC choice is ${computerChoice}: PC wins`);
                    computerScore +=1;
                }
                console.log(`The score for this round: human score is ${humanScore}, pc score is ${computerScore}`)
           
            
        };
    
        for (let i=1; i<=5; i++){   
            alert(`Ready for ROUND ${i}?`); 
            //STORES THE ANSWERS FROM EARLIER AS VARIABLES TO BE USED IN PLAYROUND PARAMETERS. 
            const humanSelection = getHumanChoice();
            const computerSelection = getcomputerAnswer();
             //CALLS THE FUNCTION TO PLAY ONE ROUND
            
            playRound(humanSelection, computerSelection);
        };

        if(humanScore > computerScore){
            alert(`Human final score:${humanScore}, computer final score: ${computerScore} - Human is the winner!`);
        }
        else if (computerScore > humanScore){
            alert(`Human final score:${humanScore}, computer final score: ${computerScore} - Computer is the winner!`);
        }
        else{
            alert(`Human final score:${humanScore}, computer final score: ${computerScore} - It's a draw!`);
        };

        
        
    let playAgain = prompt("would you like to play again?: yes/no");
    if(playAgain ==="yes"){playGame()}
    else {
        alert("Goodbye!")};
            
};    


playGame();

