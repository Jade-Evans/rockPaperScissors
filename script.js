
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
const humanChoice = "";
const choiceButton = document.querySelectorAll("button");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const announceSelections = document.querySelector("#announceSelections");


rockButton.addEventListener("click", ()=>{
    rockButton.style.backgroundColor = "blue";
    const para = document.createElement("p");
    para.textContent = "You chose: ROCK";
    announceSelections.appendChild(para);
    humanChoice = "rock";
    playRound();
});
paperButton.addEventListener("click", ()=>{
    paperButton.style.backgroundColor = "blue";
    const para = document.createElement("p");
    para.textContent = "You chose: PAPER";
    announceSelections.appendChild(para);
    humanChoice = "paper";
    playRound();
});
scissorsButton.addEventListener("click", ()=>{
    scissorsButton.style.backgroundColor = "blue";
    const para = document.createElement("p");
    para.textContent = "You chose: SCISSORS";
    announceSelections.appendChild(para);
    humanChoice = "scissors";
    playRound();
});
    

  
    

    //4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
    let humanScore = 0;//has to be declared before the round or there's nothing to increment. 
    let computerScore = 0; //has to be declared before the round or there's nothing to increment. 
    // const humanChoice = getHumanAnswer();
    const computerChoice = getComputerAnswer();
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
        

          
// const playGame = function(){
    
    // playRound(humanChoice, computerChoice);
    // let playAgain = prompt("would you like to play again?: yes/no");
    //     if(playAgain ==="yes"){playGame()}
    //     else {
    //         alert(`Thanks for playing!The final scores were: Human = ${humanScore}, PC = ${computerScore}`)
    //         if(humanScore > computerScore){
    //             alert("Congratulation - you win the game!")
    //         }
    //         else if(humanScore < computerScore){
    //             alert("Better luck next time - PC win this one!")
    //         }
    //         else{
    //             alert("Not bad - it's a draw!")
    //         }
    //     };
    
   

// };

// playGame();

