    const contentContainer = document.querySelector("#contentContainer");
    const mainTitle = document.querySelector(".mainTitle");
    const welcomeToHeader = document.querySelector("#welcomeToHeader");
    const gameIcon = document.querySelector("#gameIcon");
    const enterNameForm = document.querySelector("#enterNameForm");
    const submitPlayerNameButton = document.querySelector("#submitPlayerNameButton");
    const inputPlayerName = document.querySelector("#inputPlayerName");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error: please enter name to continue";
    errorMessage.style.color = "#630909";
    const themeOptionsContainer = document.querySelector("#themeOptionsContainer");
    const playTheme = document.querySelectorAll(".playTheme");
    const resultsAnnouncement = document.querySelector("#resultsAnnouncement");
    let playerName;
    let currentTheme;
    
    let choiceSubmitButton;
    let humanChoice = null;
    let humanChoiceImage = null;
    const getPCChoice = document.createElement("button");
    
    let humanScore = 0;//has to be declared globally or there's nothing to increment each round. //
    let PCScore = 0; //as above //
    
    const playerVsPCPage = function(){
        contentContainer.innerHTML="";
        const playerVsPCTitle=document.createElement("h2");
        playerVsPCTitle.textContent=`${playerName}, You have chosen: ${humanChoice.toUpperCase()}!`;;
        contentContainer.appendChild(playerVsPCTitle); 
        const playerVsPCInstruction = document.createElement("p"); 
        playerVsPCInstruction.textContent="When you're ready, press the button below to get your opponent's choice and see who wins!"
        playerVsPCInstruction.style.margin = "15px";
        contentContainer.appendChild(playerVsPCInstruction); 
        contentContainer.appendChild(getPCChoice);
        getPCChoice.textContent="Get PC Choice";
        
        
        const vsImageContainer = document.createElement("div");
        contentContainer.appendChild(vsImageContainer);
        vsImageContainer.classList.add("vsImageContainer");
        vsImageContainer.appendChild(humanChoiceImage);
        humanChoiceImage.classList.add("humanChoiceImage");
        const vs = document.createElement("p");
        vs.textContent="VS";
        vsImageContainer.appendChild(vs);
       
        const PCChoiceImage = document.createElement("img");
        PCChoiceImage.src = "imgs/questionMark.png";
        vsImageContainer.appendChild(PCChoiceImage);
        PCChoiceImage.classList.add("PCChoiceImage");
    };
    const getPCAnswer = function(){
        let num = Math.ceil(Math.random()*3);
        let PCAnswer;
        switch(num){
        case 1: 
            PCAnswer = document.querySelector(`.${currentTheme}.choice1`);
            console.log(`PCAnswer:${PCAnswer}`);
            break;
        case 2:
            PCAnswer = document.querySelector(`.${currentTheme}.choice2`);
            console.log(`PCAnswer:${PCAnswer}`);
            break; 
        case 3:
        PCAnswer = document.querySelector(`.${currentTheme}.choice3`);
            console.log(`PCAnswer:${PCAnswer}`);
            break;
        default:
            PCAnswer = "unknown";
        }
        return PCAnswer;
    };
    
    const chooseAThemePage = function(){
        contentContainer.innerHTML="";
            const welcomeText = document.createElement("p");
            welcomeText.textContent = `✨🌸Hi, ${playerName}!✨🌸`;
            welcomeText.style.fontSize = "38px";
            const chooseThemePrompt = document.createElement("p");
            chooseThemePrompt.innerHTML = "Ready to get started? <br>Great! Please choose a theme from the options below:";
            contentContainer.appendChild(welcomeText);
            contentContainer.appendChild(chooseThemePrompt);
            contentContainer.appendChild(themeOptionsContainer);
            themeOptionsContainer.style.display="block";
            const allThemeButtons = document.querySelectorAll(".themeButton");
            allThemeButtons.forEach((button)=>{
                button.addEventListener("click", ()=>{
                    contentContainer.innerHTML = "";
                    const backButton = document.createElement("button");
                    backButton.textContent = "Return to Theme Options";
                    backButton.classList.add("returnToThemeButton");
                    backButton.addEventListener("click",()=>{chooseAThemePage()});
                    contentContainer.insertBefore(backButton, contentContainer.firstChild);
                    choiceSubmitButton = document.createElement("input");
                    contentContainer.appendChild(welcomeToHeader);
                    const clonedThemeButton = button.cloneNode(true);
                    clonedThemeButton.alt=button.alt;
                    clonedThemeButton.style.width = "150px";
                    clonedThemeButton.style.height = "150px";
                    console.log(`The alt for ${clonedThemeButton.alt} is ${button.alt}`);
                    if(button.alt==="classic"){
                        contentContainer.style.backgroundColor = "blue";
                        }
                        else if(button.alt==="magic"){
                            contentContainer.style.backgroundColor = "pink"; 
                        }
                        else if(button.alt==="dino"){
                            contentContainer.style.backgroundColor = "green";   
                        }
                        else if(button.alt==="hero"){
                            contentContainer.style.backgroundColor = "red";  
                        }
                    contentContainer.appendChild(clonedThemeButton);
                    const clickToBegin = document.createElement("p");
                    clickToBegin.textContent = "(Click above to start your adventure!👆👆✨)";
                    clickToBegin.style.fontSize="16px";
                    contentContainer.appendChild(clickToBegin);
                    contentContainer.style.gap= "0px";
                    welcomeToHeader.style.fontSize = "16px";
                    welcomeToHeader.style.marginTop ="20px";
                    clonedThemeButton.addEventListener("click",()=>{
                        choiceSubmitButton.type = "submit";
                        choiceSubmitButton.value = "SUBMIT"; // Optional label
                        choiceSubmitButton.classList.add("choiceSubmitButton");
                        choiceSubmitButton.disabled=true;//only enables submit later after an icon is chosen. 
                        choiceSubmitButton.addEventListener("click",()=>{
                            console.log("submit button clicked");
                            playerVsPCPage();
                        }
                    ); 
                   
                    currentTheme = clonedThemeButton.alt;
                    let displayedTheme = document.querySelector(`#${currentTheme}Play`);
                    playTheme.forEach(container =>{
                        container.style.display = "none";
                    });
                    displayedTheme.style.display="block";
                    contentContainer.appendChild(displayedTheme);
                    clonedThemeButton.style.width="80px";
                    clonedThemeButton.style.height="80px";
                    clickToBegin.remove();
                    welcomeToHeader.remove();
                    contentContainer.appendChild(choiceSubmitButton);
                });    
                const possibleChoices = document.querySelectorAll(".choiceOptionsContainer img");
                possibleChoices.forEach((choice)=>{
                    choice.addEventListener("click", ()=>{
                        humanChoice = choice.id;
                        humanChoiceImage = choice.cloneNode(true);
                        console.log(humanChoice);
                        choiceSubmitButton.disabled=false;
                        choiceSubmitButton.style.border="5px solid black";
                    });
                });
                                                             
            });
    })
}
submitPlayerNameButton.addEventListener("click",(event)=>{
        event.preventDefault();//required to stop form default refreshing the page and losing welcome message//
    if(!inputPlayerName.value){
    contentContainer.appendChild(errorMessage);
    }
    else{
        playerName = inputPlayerName.value;
        contentContainer.innerHTML="";
        chooseAThemePage();
    }
});      
getPCChoice.addEventListener("click",()=>{
    let PCChoice = getPCAnswer();
    if(!PCChoice){
        console.log("warning no PC answer generated")
    }
    const announcePCSelection = document.createElement("p");
    announcePCSelection.textContent = "PC Chose...";
    contentContainer.appendChild(announcePCSelection);

});      

const playRound = function(humanChoice, PCChoice) {
        header2Information.textContent = "The results are in!";
        let playerFinalChoices = document.createElement("p");
        playerFinalChoices.textContent = `Human: ${humanChoice},PC: ${PCChoice}`;
        let result = document.createElement("p");
        if(humanChoice === PCChoice){
            
            result.textContent = `It's a draw: both players chose ${humanChoice}`;
            
            }
        else if(humanChoice=="rock" && PCChoice == "scissors" || 
                humanChoice == "paper" && PCChoice == "rock" || 
                humanChoice == "scissors" && PCChoice == "paper")
                {
                result.textContent = `Human choice is ${humanChoice} & PC choice is ${PCChoice}: Human wins`;
                 humanScore +=1;
                }
        else{result.textContent = `Human choice is ${humanChoice} & PC choice is ${PCChoice}: PC wins`;
            PCScore +=1;
            }
        resultsAnnouncement.appendChild(result);
        let scoreSummary = document.createElement("p");
        scoreSummary.textContent = `The scores a the end of this round: human score is ${humanScore}, pc score is ${PCScore}`;
        resultsAnnouncement.appendChild(scoreSummary);    
        let playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        let exit = document.createElement("button");
        exit.textContent = "Exit";
        resultsAnnouncement.appendChild(playAgain); 
        resultsAnnouncement.appendChild(exit); 
    };  

            
                            
              
        
    
        
  
    
    
    
    
//     //4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
//     
//   
//     let header2Information = document.querySelector("h2");
//     






// let humanChoice = "";
// const choiceButton = document.querySelectorAll(".choiceButton");
// const rockButton = document.querySelector("#rockButton");
// const paperButton = document.querySelector("#paperButton");
// const scissorsButton = document.querySelector("#scissorsButton");
// const announceSelections = document.querySelector("#announceSelections");

