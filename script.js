// 🖼️ DOM Elements: Main UI
const contentContainer = document.querySelector("#contentContainer");
const mainTitle = document.querySelector(".mainTitle");
const welcomeToHeader = document.querySelector("#welcomeToHeader");
const gameIcon = document.querySelector("#gameIcon");

// 🧑‍🎓 DOM Elements: Player Name Input
const enterNameForm = document.querySelector("#enterNameForm");
const submitPlayerNameButton = document.querySelector("#submitPlayerNameButton");
const inputPlayerName = document.querySelector("#inputPlayerName");

// ⚠️ DOM Elements: Error Message
const errorMessage = document.createElement("p");
errorMessage.textContent = "Error: please enter name to continue";
errorMessage.style.color = "#630909";

// 🎨 DOM Elements: Theme Selection
const themeOptionsContainer = document.querySelector("#themeOptionsContainer");
const playTheme = document.querySelectorAll(".playTheme");

// 📣 DOM Elements: Results Display
const resultsAnnouncement = document.querySelector("#resultsAnnouncement");

// 🎮 Game State Variables
let playerName;
let currentTheme;
let PCAnswer;
let PCChoice;
let randomIndex;
let humanChoice = null;

// 🖼️ Image Elements
let humanChoiceImage = null;
const PCChoiceImage = document.createElement("img");
PCChoiceImage.classList.add("PCChoiceImage");

// 🕹️ DOM Elements: Choice Submission
let choiceSubmitButton;
    
const getPCChoiceButton = document.createElement("button");
getPCChoiceButton.classList.add("getPCChoiceButton");

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
    contentContainer.appendChild(getPCChoiceButton);
    getPCChoiceButton.textContent="Get PC Choice";
    
    const vsImageContainer = document.createElement("div");
    contentContainer.appendChild(vsImageContainer);
    vsImageContainer.classList.add("vsImageContainer");
    vsImageContainer.appendChild(humanChoiceImage);
    humanChoiceImage.classList.add("humanChoiceImage");
    const vs = document.createElement("p");
    vs.textContent="VS";
    vsImageContainer.appendChild(vs);
    
    PCChoiceImage.src = "imgs/questionMark.png";
    PCChoiceImage.style.opacity="50%";
    vsImageContainer.appendChild(PCChoiceImage);
    
};

const classicArray = ["rock", "paper","scissors"];
const magicArray = ["wand","potion","crystalball"];
const dinoArray = ["trex", "triceratops", "pterodactyl"];
const heroArray = ["strength", "smarts", "speed"];

const getPCAnswer = function(){
    let themeChoiceOptions;
    switch(currentTheme){
        case "classic":
            themeChoiceOptions = classicArray;
            break;
        case "magic":
            themeChoiceOptions = magicArray;
            break;
        case "dino":
            themeChoiceOptions = dinoArray;
            break;
        case "hero":
            themeChoiceOptions = heroArray;
            break;
        default:
            console.log("WARNING: No theme or unknown theme detected!")
            return null;
    }
    randomIndex = Math.floor(Math.random()*themeChoiceOptions.length);//or times themeChoiceOptions.length() if varying options in future//
    PCAnswer = themeChoiceOptions[randomIndex];
    console.log("PCAnswer:", PCAnswer)
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
                        console.log("button to generate PC choice was clicked");
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


getPCChoiceButton.addEventListener("click",()=>{
    console.log("Get computer choice button was clicked.")
    playRound(humanChoice,PCChoice);
   
});      

const playRound = function(humanChoice, PCChoice) {
    PCChoice = getPCAnswer();
    if(!PCChoice){
        console.log("warning no PC answer generated");
        return;
    }
    const announcePCSelection = document.createElement("h2");
    announcePCSelection.textContent = `PC has chosen... ${PCChoice.toUpperCase()}!`;
    contentContainer.appendChild(announcePCSelection);
    PCChoiceImage.src = `imgs/${PCChoice}.png`;
    PCChoiceImage.alt = PCAnswer;
    PCChoiceImage.style.opacity="100%";
    PCChoiceImage.classList.add(`choice${randomIndex + 1}`); // choice1, choice2, choice3
    getPCChoiceButton.disabled=true;
    let result = document.createElement("p");
    contentContainer.appendChild(result);
    const humanClass = [...humanChoiceImage.classList].find(cls => cls.startsWith("choice"));
    const PCClass = [...PCChoiceImage.classList].find(cls=>cls.startsWith("choice"));
    
    if (humanClass === PCClass) {
    result.textContent = `It's a draw - you each win ONE POINT! `;
    console.log("Draw");
    humanScore += 1;
    PCScore += 1;
    humanChoiceImage.style.border ="4px gold solid";
    humanChoiceImage.style.boxShadow = "0 0 14px gold";
    PCChoiceImage.style.border ="4px gold solid";
    PCChoiceImage.style.boxShadow = "0 0 14px gold";
    }

    else if (
        humanClass === "choice1" && PCClass === "choice3" ||
        humanClass === "choice2" && PCClass === "choice1" ||
        humanClass === "choice3" && PCClass === "choice2"
        ) {
        result.textContent = ` ${humanChoice} beats ${PCChoice} - Congratulations ${playerName}! You win this round and gain ONE POINT!`;
        humanScore += 1;
        console.log("Human wins");
        humanChoiceImage.style.border ="4px gold solid";
        humanChoiceImage.style.boxShadow = "0 0 14px gold";
        PCChoiceImage.style.border ="4px red solid";
        PCChoiceImage.style.boxShadow = "0 0 14px red";
        PCChoiceImage.style.opacity="40%";
    }
    else {
        result.textContent = `${PCChoice} beats ${humanChoice} - commiserations, ${playerName}, the PC wins this round and earns ONE POINT!`;
        PCScore += 1;
        console.log("PC Wins");
        humanChoiceImage.style.border ="4px red solid";
        humanChoiceImage.style.boxShadow = "0 0 14px red";
        humanChoiceImage.style.opacity="40%";
        PCChoiceImage.style.border ="4px gold solid";
        PCChoiceImage.style.boxShadow = "0 0 14px gold";
    }

};
//         resultsAnnouncement.appendChild(result);
//         let scoreSummary = document.createElement("p");
//         scoreSummary.textContent = `The scores a the end of this round: human score is ${humanScore}, PC score is ${PCScore}`;
//         resultsAnnouncement.appendChild(scoreSummary);    
//         let playAgain = document.createElement("button");
//         playAgain.textContent = "Play Again";
//         let exit = document.createElement("button");
//         exit.textContent = "Exit";
//         resultsAnnouncement.appendChild(playAgain); 
//         resultsAnnouncement.appendChild(exit); 
//     };  

