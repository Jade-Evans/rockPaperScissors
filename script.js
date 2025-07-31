

    const getComputerChoice = function(){
        let num = Math.ceil(Math.random()*3);
        let computerChoice;
        if(num === 1){
            computerChoice = "rock";
        }
        else if(num ===2){
            computerChoice = "paper";  
        }
        else if(num === 3){
            computerChoice = "scissors";
        }
        return computerChoice;
    
    };
    

    const getHumanChoice = function(){
        let humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
        return humanChoice;
    };
  
    

//4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
let humanScore = 0;
let computerScore = 0;

//5. CREATE PLAYROUND FUNCTION. 
const playRound = function(humanMove, pcMove) {
        if(humanMove === pcMove){
            console.log("Its a draw");
        }
        else if(humanMove=="rock" && pcMove == "scissors" || humanMove == "paper" && pcMove == "rock" || humanMove == "scissors" && pcMove == "paper"){
            console.log(`Human choice is ${humanMove} & PC choice is ${computerChoice}: Human wins`);
            humanScore +=1;
        }
        else{
            console.log(`Human choice is ${humanMove} & PC choice is ${pcMove}: PC wins`);
            computerScore +=1;
        }
        console.log(`The score for this round: human score is ${humanScore}, pc score is ${computerScore}`)
    // your code here!
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);


