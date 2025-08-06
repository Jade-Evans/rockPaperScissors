

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
        let humanAnswer = prompt("Choose rock, paper or scissors").toLowerCase();
        return humanAnswer;
    };
  
    

//4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
let humanScore = 0;
let computerScore = 0;

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
    // your code here!
};

//STORES THE ANSWERS FROM EARLIER AS VARIABLES TO BE USED IN PLAYROUND PARAMETERS. 
const humanSelection = getHumanChoice();
const computerSelection = getcomputerAnswer();


//CALLS THE FUNCTION TO PLAY ONE ROUND
playRound(humanSelection, computerSelection);


