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
    const themeButton = document.querySelector(".themeButtonList");
    const playTheme = document.querySelectorAll("#playTheme");
    let submitIconChoice;
    const chooseAThemePage = function(){
        contentContainer.innerHTML="";
            const welcomeText = document.createElement("p");
            welcomeText.textContent = `✨🌸Hi, ${inputPlayerName.value}!✨🌸`;
            welcomeText.style.fontSize = "38px";
            const chooseThemePrompt = document.createElement("p");
            chooseThemePrompt.innerHTML = "Ready to get started? <br>Great! Please choose a theme from the options below:";
            contentContainer.appendChild(welcomeText);
            contentContainer.appendChild(chooseThemePrompt);
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
            contentContainer.appendChild(classicTheme);
            contentContainer.appendChild(magicalTheme);
            contentContainer.appendChild(dinosaurTheme);
            contentContainer.appendChild(heroTheme);
            const allThemeButtons = document.querySelectorAll(".themeButton");
            allThemeButtons.forEach((button)=>{
                //this EL is what happens when a theme is chosen initially from 4 theme options//
                //aka contentContainer goes to the clone button and the prompt message//
                button.addEventListener("click", ()=>{
                    contentContainer.innerHTML = "";
                    const backButton = document.createElement("button");
                    backButton.textContent = "Return to Theme Options";
                    backButton.classList.add("returnToThemeButton");
                    backButton.addEventListener("click",()=>{chooseAThemePage()});
                    contentContainer.insertBefore(backButton, contentContainer.firstChild);
                    submitIconChoice = document.createElement("input");
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
                            
                            submitIconChoice.type = "submit";
                            submitIconChoice.value = "SUBMIT"; // Optional label
                            submitIconChoice.classList.add("submitIconChoice");
                            submitIconChoice.disabled=true;//only enables submit later after an icon is chosen. 
                            submitIconChoice.addEventListener("click",()=>{
                                console.log("submit button clicked");
                                contentContainer.innerHTML="";
                            }
                        ); 
                            let themeSelection;
                            if(clonedThemeButton.alt==="classic"){
                                console.log("clone theme alt is classic");
                                themeSelection = document.querySelector("#classicPlay");
                            }
                            else if(clonedThemeButton.alt==="magic"){
                                    themeSelection = document.querySelector("#magicPlay");
                            }
                            else if(clonedThemeButton.alt==="dino"){
                                    themeSelection= document.querySelector("#dinoPlay");
                            }
                            else if(clonedThemeButton.alt==="hero"){
                                    themeSelection= document.querySelector("#heroPlay");
                            }
                            document.querySelectorAll(".playTheme").forEach(container => {
                                container.style.display = "none";
                            });

                            themeSelection.style.display="block";
                            contentContainer.appendChild(themeSelection);
                            clonedThemeButton.style.width="80px";
                            clonedThemeButton.style.height="80px";
                            clickToBegin.remove();
                            welcomeToHeader.remove();

                            
                            contentContainer.appendChild(submitIconChoice);
                        });    
                            
                            let humanChoice = null;
                        
                            const possibleChoices = document.querySelectorAll(".choiceOptionsContainer img");
                            possibleChoices.forEach((choice)=>{
                                choice.addEventListener("click", ()=>{
                                    humanChoice = choice.id;
                                    console.log(humanChoice);
                                    submitIconChoice.disabled=false;
                                    submitIconChoice.style.border="5px solid black";
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
            contentContainer.innerHTML="";
            chooseAThemePage();
        }
    });                          
              
      
   
// const choice1 = document.querySelector(".choice1");
//                                     const choice2 = document.querySelector(".choice2");
//                                     const choice3 = document.querySelector(".choice3");
        
    
        
  
    
    
    
    
//     //4. DEFINE VARIABLES FOR THE TWO PLAYERS' SCORES (IN GLOBAL SCOPE) AND SET INITIAL VALUES TO 0. 
//     let humanScore = 0;//has to be declared before the round or there's nothing to increment. 
//     let computerScore = 0; //has to be declared before the round or there's nothing to increment. 
//     // const humanChoice = getHumanAnswer();
//     let header2Information = document.querySelector("h2");
//     const resultsAnnouncement = document.querySelector("#resultsAnnouncement");
//     const playRound = function(humanChoice, computerChoice) {
//         header2Information.textContent = "The results are in!";
//         let playerFinalChoices = document.createElement("p");
//         playerFinalChoices.textContent = `Human: ${humanChoice},PC: ${computerChoice}`;
//         let result = document.createElement("p");
//         if(humanChoice === computerChoice){
            
//             result.textContent = `It's a draw: both players chose ${humanChoice}`;
            
//             }
//         else if(humanChoice=="rock" && computerChoice == "scissors" || 
//                 humanChoice == "paper" && computerChoice == "rock" || 
//                 humanChoice == "scissors" && computerChoice == "paper")
//                 {
//                 result.textContent = `Human choice is ${humanChoice} & PC choice is ${computerChoice}: Human wins`;
//                  humanScore +=1;
//                 }
//         else{result.textContent = `Human choice is ${humanChoice} & PC choice is ${computerChoice}: PC wins`;
//             computerScore +=1;
//             }
//         resultsAnnouncement.appendChild(result);
//         let scoreSummary = document.createElement("p");
//         scoreSummary.textContent = `The scores a the end of this round: human score is ${humanScore}, pc score is ${computerScore}`;
//         resultsAnnouncement.appendChild(scoreSummary);    
//         let playAgain = document.createElement("button");
//         playAgain.textContent = "Play Again";
//         let exit = document.createElement("button");
//         exit.textContent = "Exit";
//         resultsAnnouncement.appendChild(playAgain); 
//         resultsAnnouncement.appendChild(exit); 
//     };  




// const getComputerAnswer = function(){
//     let num = Math.ceil(Math.random()*3);
//     let computerAnswer;
//     switch(num){
//     case 1: 
//         computerAnswer = "rock";
//         break;
//     case 2:
//         computerAnswer = "paper"; 
//         break; 
//     case 3:
//         computerAnswer = "scissors";
//         break;
//     default:
//         computerAnswer = "unknown";
//     }
//     return computerAnswer;
// };

// let humanChoice = "";
// const choiceButton = document.querySelectorAll(".choiceButton");
// const rockButton = document.querySelector("#rockButton");
// const paperButton = document.querySelector("#paperButton");
// const scissorsButton = document.querySelector("#scissorsButton");
// const announceSelections = document.querySelector("#announceSelections");

// function humanChoiceFunction(button, choice){

// button.addEventListener("click", ()=>{
//     announceSelections.innerHTML = "";
//     button.style.backgroundColor = "blue";
//     const para = document.createElement("p");
//     para.textContent = "";
//     para.textContent = `You chose: ${choice} - Are you happy with this choice?`;
//     announceSelections.appendChild(para);
//    const yesButton = document.createElement("button");
//     const noButton = document.createElement("button");
//     yesButton.textContent = "👍Yes";
//     noButton.textContent = "👎No";
//     announceSelections.appendChild(para);
//     announceSelections.appendChild(yesButton);
//     announceSelections.appendChild(noButton);
//     yesButton.addEventListener("click",()=>{
//     let confirmSelection = document.createElement("p");
//     confirmSelection.textContent = `Great! Your final choice is ${choice} - Press the button when you're ready to go!`;
//     announceSelections.appendChild(confirmSelection);
//     para.textContent = "";
//     yesButton.remove();
//     noButton.remove();
//     let playButton = document.createElement("button");
//     playButton.textContent = "Play round";
//     announceSelections.appendChild(playButton);
//     humanChoice = choice;
//     playButton.addEventListener("click",()=>{
//         playButton.remove();
//         choiceButton.forEach(button => button.style.display="none");
//         confirmSelection.remove();
//         playRound(humanChoice,getComputerAnswer());

//     })
//     ;
//     });
//     noButton.addEventListener("click",()=>{
//         button.style.backgroundColor = "";
//         para.textContent = "Ok, please pick again";
//         yesButton.remove();
//         noButton.remove();

//     } )

// })};
// humanChoiceFunction(rockButton, "rock");
// humanChoiceFunction(paperButton, "paper");
// humanChoiceFunction(scissorsButton, "scissors");

