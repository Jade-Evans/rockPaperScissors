    const contentContainer = document.querySelector("#contentContainer");
    const firstContainer = document.querySelector("#firstContainer");
    const mainTitle = document.querySelector(".mainTitle");
    const welcomeToHeader = document.querySelector("#welcomeToHeader");
    const gameIcon = document.querySelector("#gameIcon");
    const enterNameForm = document.querySelector("#enterNameForm");
    const submitPlayerNameButton = document.querySelector("#submitPlayerNameButton");
    const inputPlayerName = document.querySelector("#inputPlayerName");
    const welcomeChooseThemeContainer = document.querySelector(".welcomeChooseThemeContainer");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error: please enter name to continue";
    errorMessage.style.color = "red";
    const themeButton = document.querySelector(".themeButtonList");
    submitPlayerNameButton.addEventListener("click",(event)=>{
        event.preventDefault();//required to stop form default refreshing the page and losing welcome message//
        if(!inputPlayerName.value){
            
            welcomeChooseThemeContainer.appendChild(errorMessage);
        }
        else{
            firstContainer.innerHTML="";
            const welcomeText = document.createElement("p");
            welcomeText.textContent = `✨🌸Hi, ${inputPlayerName.value}!✨🌸`;
            welcomeText.style.fontSize = "38px";
            const chooseThemePrompt = document.createElement("p");
            chooseThemePrompt.textContent = "Please choose a theme from the options below:";
            welcomeChooseThemeContainer.appendChild(welcomeText);
            welcomeChooseThemeContainer.appendChild(chooseThemePrompt);
            const classicTheme = document.createElement("img");
            const magicalTheme = document.createElement("img");
            const dinosaurTheme = document.createElement("img");
            const heroTheme = document.createElement("img");
            classicTheme.src = "imgs/classicIcon.png";
            magicalTheme.src = "imgs/magicIcon.png";
            dinosaurTheme.src = "imgs/dinoIcon.png";
            heroTheme.src = "imgs/heroIcon.png"; 
            classicTheme.alt="classic";
            magicalTheme.alt="magic";
            dinosaurTheme.alt = "dino";
            heroTheme.alt="hero";
            classicTheme.classList.add("themeButton");
            magicalTheme.classList.add("themeButton");
            dinosaurTheme.classList.add("themeButton");
            heroTheme.classList.add("themeButton");
            welcomeChooseThemeContainer.appendChild(classicTheme);
            welcomeChooseThemeContainer.appendChild(magicalTheme);
            welcomeChooseThemeContainer.appendChild(dinosaurTheme);
            welcomeChooseThemeContainer.appendChild(heroTheme);
            //WHAT HAPPENS WHEN A THEME IS SELECTED//
            //ADD CLICK EVENT LISTENER TO ALL THEMBBUTTONS//
            const allThemeButtons = document.querySelectorAll(".themeButton");
            allThemeButtons.forEach((button)=>{
                button.addEventListener("click", ()=>{
                    contentContainer.innerHTML = "";
                   contentContainer.appendChild(welcomeToHeader);
                    if(button.alt==="classic"){
                        welcomeChooseThemeContainer.appendChild(classicTheme);
                        contentContainer.style.backgroundColor = "blue"; 
                    }
                    else if(button.alt==="magic"){
                        contentContainer.appendChild(magicalTheme);
                        contentContainer.style.backgroundColor = "pink"; 
                    }
                    else if(button.alt==="dino"){
                        contentContainer.appendChild(dinosaurTheme);
                        contentContainer.style.backgroundColor = "green";   
                       
                    }
                    else if(button.alt==="hero"){
                        contentContainer.appendChild(heroTheme);
                        heroTheme.style.width = "120px";
                        heroTheme.style.height = "120px";
                        contentContainer.style.backgroundColor = "red";  
                    }
                });    
            })
        };
        
    });
    
        
  
    
    
    
    
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
        let playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        let exit = document.createElement("button");
        exit.textContent = "Exit";
        resultsAnnouncement.appendChild(playAgain); 
        resultsAnnouncement.appendChild(exit); 
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

