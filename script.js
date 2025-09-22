
        const getComputerAnswer = function(){
            let num = Math.ceil(Math.random()*3);
            let computerAnswer;
            switch(num){
            case 1: 
                computerAnswer = "rock";
                break;
            case 2:
                computerAnswer = "paper"; 
                break; 
            case 3:
                computerAnswer = "scissors";
                break;
            default:
                computerAnswer = "unknown";
            }
            return computerAnswer;
    
        };
    

    const getHumanAnswer = function(){
        let humanAnswer = prompt(`Choose rock, paper or scissors`).toLowerCase();
        return humanAnswer;
    };

  
    

    //4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
    let humanScore = 0;//has to be declared before the round or there's nothing to increment. 
    let computerScore = 0; //has to be declared before the round or there's nothing to increment. 
 
    const playRound = function(humanChoice, computerChoice) {
        if(humanChoice === computerChoice){
            alert(`It's a draw: both players chose ${humanChoice}`);
            }
        else if(humanChoice=="rock" && computerChoice == "scissors" || 
                humanChoice == "paper" && computerChoice == "rock" || 
                humanChoice == "scissors" && computerChoice == "paper")
                {
                 alert(`Human choice is ${humanChoice} & PC choice is ${computerChoice}: Human wins`);
                 humanScore +=1;
                }
        else{alert(`Human choice is ${humanChoice} & PC choice is ${computerChoice}: PC wins`);
            computerScore +=1;
            }
        alert(`The scores a the end of this round: human score is ${humanScore}, pc score is ${computerScore}`)       
    };         
        

          
const playGame = function(){
    const humanChoice = getHumanAnswer();
    const computerChoice = getComputerAnswer();
    playRound(humanChoice, computerChoice);
    let playAgain = prompt("would you like to play again?: yes/no");
        if(playAgain ==="yes"){playGame()}
        else {
            alert(`Thanks for playing!The final scores were: Human = ${humanScore}, PC = ${computerScore}`)
            if(humanScore > computerScore){
                alert("Congratulation - you win the game!")
            }
            else if(humanScore < computerScore){
                alert("Better luck next time - PC win this one!")
            }
            else{
                alert("Not bad - it's a draw!")
            }
        };
    
   

};

playGame();

