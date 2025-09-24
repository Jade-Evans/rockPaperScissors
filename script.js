    //4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
    let humanScore = 0;//has to be declared before the round or there's nothing to increment. 
    let computerScore = 0; //has to be declared before the round or there's nothing to increment. 
    // const humanChoice = getHumanAnswer();
    let header2Information = document.querySelector("h2");
    const resultsAnnouncement = document.querySelector("#resultsAnnouncement");
    const playRound = function(humanChoice, computerChoice) {
        header2Information.textContent = "The results are in!";
        let playerFinalChoices = document.createElement("p");
        playerFinalChoices.textContent = `Human: ${humanChoice},PC: ${computerChoice}`;
        let result = document.createElement("p");
        if(humanChoice === computerChoice){
            
            result.textContent = `It's a draw: both players chose ${humanChoice}`;
            
            }
        else if(humanChoice=="rock" && computerChoice == "scissors" || 
                humanChoice == "paper" && computerChoice == "rock" || 
                humanChoice == "scissors" && computerChoice == "paper")
                {
                result.textContent = `Human choice is ${humanChoice} & PC choice is ${computerChoice}: Human wins`;
                 humanScore +=1;
                }
        else{result.textContent = `Human choice is ${humanChoice} & PC choice is ${computerChoice}: PC wins`;
            computerScore +=1;
            }
        resultsAnnouncement.appendChild(result);
        let scoreSummary = document.createElement("p");
        scoreSummary.textContent = `The scores a the end of this round: human score is ${humanScore}, pc score is ${computerScore}`;
        resultsAnnouncement.appendChild(scoreSummary);       
    };  




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

let humanChoice = "";
const choiceButton = document.querySelectorAll(".choiceButton");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const announceSelections = document.querySelector("#announceSelections");

function humanChoiceFunction(button, choice){

button.addEventListener("click", ()=>{
    announceSelections.innerHTML = "";
    button.style.backgroundColor = "blue";
    const para = document.createElement("p");
    para.textContent = "";
    para.textContent = `You chose: ${choice} - Are you happy with this choice?`;
    announceSelections.appendChild(para);
   const yesButton = document.createElement("button");
    const noButton = document.createElement("button");
    yesButton.textContent = "👍Yes";
    noButton.textContent = "👎No";
    announceSelections.appendChild(para);
    announceSelections.appendChild(yesButton);
    announceSelections.appendChild(noButton);
    yesButton.addEventListener("click",()=>{
    let confirmSelection = document.createElement("p");
    confirmSelection.textContent = `Great! Your final choice is ${choice} - Press the button when you're ready to go!`;
    announceSelections.appendChild(confirmSelection);
    para.textContent = "";
    yesButton.remove();
    noButton.remove();
    let playButton = document.createElement("button");
    playButton.textContent = "Play round";
    announceSelections.appendChild(playButton);
    humanChoice = choice;
    playButton.addEventListener("click",()=>{
        playButton.remove();
        choiceButton.forEach(button => button.style.display="none");
        confirmSelection.remove();
        playRound(humanChoice,getComputerAnswer());

    })
    ;
    });
    noButton.addEventListener("click",()=>{
        button.style.backgroundColor = "";
        para.textContent = "Ok, please pick again";
        yesButton.remove();
        noButton.remove();

    } )

})};
humanChoiceFunction(rockButton, "rock");
humanChoiceFunction(paperButton, "paper");
humanChoiceFunction(scissorsButton, "scissors");

