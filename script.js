// 🖼️ DOM Elements: Main UI
const contentContainer = document.querySelector("#contentContainer");
const possibleChoices = document.querySelectorAll(".choiceOptionsContainer img");
const mainTitle = document.querySelector(".mainTitle");
const welcomeToHeader = document.querySelector("#welcomeToHeader");
const gameIcon = document.querySelector(".gameIcon");
const gameTitle = document.querySelector(".gameTitle");
let clickToPlayBestOfThree = document.createElement("button");

// let availableChoicesForChosenTheme;

//;
const gameRules = document.querySelector(`.gameRules`);
const choiceOptionsContainer = document.querySelector( `.choiceOptionsContainer`);
const playerVsPCInstruction = document.createElement("p"); 


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
const viewFinalScoreBtn = document.createElement("button");
viewFinalScoreBtn.textContent = "FINAL SCORE";

// 🎮 Game State Variables
let playerName;
let currentTheme;
let PCAnswer;
let PCChoice;
let randomIndex;
let humanChoice = null;
let clonedThemeButton;
let gameName;

// 🖼️ Image Elements
let humanChoiceImage;
const PCChoiceImage = document.createElement("img");
PCChoiceImage.classList.add("PCChoiceImage");

    
const getPCChoiceButton = document.createElement("button");
getPCChoiceButton.classList.add("getPCChoiceButton");

let humanScore = 0;//has to be declared globally or there's nothing to increment each round. //
let PCScore = 0; //as above //  
let roundCounter = 0; 


    
const playerVsPCPage = function(){
    const originalIcons = document.querySelector(`#${currentTheme}ChoiceIcons`);
    if (!originalIcons) {//REQUERIED AVAILABLECHOICEICONS SO NOT STALE, CAN BE CLONED TO RETAIN CURRENT THEME//
        console.error("Missing icons for theme:", currentTheme);
    return;
    }
    
    
    // ✅ Step 2: Clone them//
    const iconsClone = originalIcons.cloneNode(true);
    contentContainer.innerHTML="";
    const playerVsPCTitle=document.createElement("h2");
    playerVsPCTitle.textContent=`Welcome to ${gameName}, ${playerName}!` 
    pleaseSelectOption = document.createElement("p");
    pleaseSelectOption.textContent = "Please select from the options below:";
    contentContainer.appendChild(playerVsPCTitle); 
    contentContainer.appendChild(iconsClone);
    playTheme.forEach(container =>{
        container.style.display = "none";
    })
    
    
    console.log(`${currentTheme}!`);
    // contentContainer.appendChild(availableChoiceIcons);
    // choiceOptionsContainer.style.display="block";
    const confirmChoice = document.createElement("button");
    confirmChoice.textContent = "Confirm Choice";
    contentContainer.appendChild(confirmChoice);
    confirmChoice.disabled=true;
    
    const possibleChoices = iconsClone.querySelectorAll("img");//UPDATES/REQUERIES POSSIBLE CHOICE TO WORK WITH
    //THE REQUERIED ICONS//

    possibleChoices.forEach((choice)=>{
        choice.addEventListener("click", ()=>{
            humanChoice = choice.id;
            humanChoiceImage = choice;
            console.log(`Human chose ${humanChoice}`);
             choice.style.height="120px";
             choice.style.width="120px";
             confirmChoice.disabled=false;
        })
        
    });
    confirmChoice.addEventListener("click", ()=>{
        contentContainer.innerHTML="";
        const yourChoice = document.createElement("h2");
        yourChoice.textContent=`${playerName}, you've chosen... ${humanChoice.toUpperCase()}`;
        yourChoice.classList.add("choiceAnnouncements");
        contentContainer.appendChild(yourChoice);
        let vsImageContainer = document.createElement("div");
        contentContainer.appendChild(vsImageContainer);
        vsImageContainer.classList.add("vsImageContainer");
        vsImageContainer.appendChild(humanChoiceImage);
        humanChoiceImage.classList.add("humanChoiceImage");
        const vs = document.createElement("p");
        vs.textContent="VS";
        vsImageContainer.appendChild(vs);
        
        PCChoiceImage.src = "imgs/questionMark.png";
        PCChoiceImage.style.opacity="50%";
        const clonedPCChoiceImage = PCChoiceImage.cloneNode(true);
        vsImageContainer.appendChild(clonedPCChoiceImage);
        playerVsPCInstruction.textContent="When you're ready, press the button below to get your opponent's choice and see who wins!"
        playerVsPCInstruction.style.margin = "15px";
        contentContainer.appendChild(playerVsPCInstruction); 
        const clonedgetPCChoiceButton = getPCChoiceButton.cloneNode(true);
        contentContainer.appendChild(clonedgetPCChoiceButton);
        clonedgetPCChoiceButton.addEventListener("click",()=>{
            console.log("Get computer choice button was clicked.")
            playRound(humanChoice,PCChoice,clonedPCChoiceImage, clonedgetPCChoiceButton);
        
        }); 
        clonedgetPCChoiceButton.textContent="Get PC Choice";  
    })
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
            gameName="Magical Kingdom";
            break;
        case "dino":
            themeChoiceOptions = dinoArray;
            gameName="Dinosaur Mountain";
            break;
        case "hero":
            themeChoiceOptions = heroArray;
            gameName="HeroQuest";
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
    console.log("chooseAThemePage executed")
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
                currentTheme=button.alt;
                console.log(`Current theme is: ${currentTheme}`);
                let availableChoiceIcons = document.querySelector(`#${currentTheme}ChoiceIcons`);
                contentContainer.innerHTML = "";
                const backButton = document.createElement("button");
                backButton.textContent = "Return to Theme Options";
                backButton.classList.add("returnToThemeButton");
                backButton.addEventListener("click",()=>{chooseAThemePage()});
                contentContainer.insertBefore(backButton, contentContainer.firstChild);
                clickToPlayBestOfThree = document.createElement("button");
                clickToPlayBestOfThree.textContent="CLICK TO PLAY";
                contentContainer.appendChild(welcomeToHeader);
                clonedThemeButton = button.cloneNode(true);
                clonedThemeButton.alt=button.alt;
                clonedThemeButton.style.width = "150px";
                clonedThemeButton.style.height = "150px";
                console.log(`The alt for ${clonedThemeButton.alt} is ${button.alt}`);
                if(button.alt==="classic"){
                    contentContainer.style.backgroundColor = "blue";
                     gameName="Classic Clash";
                    }
                    else if(button.alt==="magic"){
                        contentContainer.style.backgroundColor = "pink"; 
                         gameName="Magic Kingdom";
                    }
                    else if(button.alt==="dino"){
                        contentContainer.style.backgroundColor = "green";  
                         gameName="Dinosaur Mountain"; 
                    }
                    else if(button.alt==="hero"){
                        contentContainer.style.backgroundColor = "red";  
                         gameName="Hero Quest";
                    }
                // let availableChoicesForChosenTheme = document.querySelector( `${currentTheme}Play .choiceOptionsContainer`);
                // console.log(availableChoicesForChosenTheme);
                contentContainer.appendChild(clonedThemeButton);
                const clickToBegin = document.createElement("p");
                clickToBegin.textContent = "(Click above to start your adventure!👆👆✨)";
                clickToBegin.style.fontSize="16px";
                contentContainer.appendChild(clickToBegin);
                contentContainer.style.gap= "0px";
                welcomeToHeader.style.fontSize = "16px";
                welcomeToHeader.style.marginTop ="20px";
                clonedThemeButton.addEventListener("click",()=>{
                    contentContainer.innerHTML="";
                    contentContainer.appendChild(gameTitle);
                    gameTitle.style.display="block";
                    let rules = document.querySelector(`#${currentTheme}Rules`);
                    contentContainer.appendChild(rules);
                    rules.style.display="block";

                    contentContainer.appendChild(clickToPlayBestOfThree);
                    clickToPlayBestOfThree.value= "PLAY BEST OF THREE"; 
                    clickToPlayBestOfThree.style.margin = "20px";
                    clickToPlayBestOfThree.classList.add("clickToPlayBestOfThree");
                    clickToPlayBestOfThree.addEventListener("click",()=>{

                        
                        playerVsPCPage();
                    })
                }); 
            });
        });
}


    submitPlayerNameButton.addEventListener("click",(event)=>{
        console.log("submitPlayerName executed");
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


     

const playRound = function(humanChoice, PCChoice, PCImageElement, pcChoiceButtonElement) {
    roundCounter++;
    console.log(`this is round ${roundCounter}`);
    getPCChoiceButton.remove();
    playerVsPCInstruction.remove();
    PCChoice = getPCAnswer();
    if(!PCChoice){
        console.log("warning no PC answer generated");
        return;
    }
    const announcePCSelection = document.createElement("h2");
    announcePCSelection.textContent = `PC has chosen... ${PCChoice.toUpperCase()}!`;
    announcePCSelection.classList.add("choiceAnnouncements");
    contentContainer.appendChild(announcePCSelection);
    PCImageElement.src = `imgs/${PCChoice}.png`;
    PCImageElement.alt = PCAnswer;
    PCImageElement.style.opacity="100%";
    PCImageElement.classList.add(`choice${randomIndex + 1}`); // choice1, choice2, choice3
    pcChoiceButtonElement.disabled=true;
    let roundResultContainer = document.createElement("div");
    roundResultContainer.classList.add("roundResultContainer");
    let result = document.createElement("p");
    result.classList.add("result");

    let pointAnnouncement = document.createElement("p");
    pointAnnouncement.classList.add("pointAnnouncement");
    contentContainer.appendChild(roundResultContainer);
    roundResultContainer.appendChild(result);
   roundResultContainer.appendChild(pointAnnouncement);
    const humanClass = [...humanChoiceImage.classList].find(cls => cls.startsWith("choice"));
    const PCClass = [...PCImageElement.classList].find(cls=>cls.startsWith("choice"));
    
    if (humanClass === PCClass) {
    result.textContent = `It's a draw, ${playerName}!`
    pointAnnouncement.textContent = `You each win ONE POINT!`;
    console.log("Draw");
    humanScore += 1;
    PCScore += 1;
    humanChoiceImage.style.border ="4px gold solid";
    humanChoiceImage.style.boxShadow = "0 0 14px gold";
    PCImageElement.style.border ="4px gold solid";
    PCImageElement.style.boxShadow = "0 0 14px gold";
    PCImageElement.style.height="120px";
    PCImageElement.style.width="120px";
    }

    else if (
        humanClass === "choice1" && PCClass === "choice3" ||
        humanClass === "choice2" && PCClass === "choice1" ||
        humanClass === "choice3" && PCClass === "choice2"
        ) {
        result.textContent = ` ${humanChoice.toUpperCase()} beats ${PCChoice.toUpperCase()}!`;
        pointAnnouncement.textContent = `Congratulations ${playerName}! You win this round and gain ONE POINT!`
        humanScore += 1;
        console.log("Human wins");
        humanChoiceImage.style.border ="4px gold solid";
        humanChoiceImage.style.boxShadow = "0 0 14px gold";
        PCImageElement.style.border ="4px red solid";
        PCImageElement.style.boxShadow = "0 0 14px red";
        PCImageElement.style.opacity="40%";
        PCImageElement.style.width="80px";
        PCImageElement.style.height="80px";
    }
    else {
        result.textContent = `${PCChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
        pointAnnouncement.textContent = `Commiserations, ${playerName}, the PC wins this round and earns ONE POINT!`;
        PCScore += 1;
        console.log("PC Wins");
        humanChoiceImage.style.border ="4px red solid";
        humanChoiceImage.style.boxShadow = "0 0 14px red";
        humanChoiceImage.style.opacity="40%";
        PCImageElement.style.border ="4px gold solid";
        PCImageElement.style.boxShadow = "0 0 14px gold";
        humanChoiceImage.style.width="80px";
        humanChoiceImage.style.height="80px";
    }
        let nextRoundBtn = document.createElement("button");
        nextRoundBtn.textContent = "Play Next Round";
        

        nextRoundBtn.addEventListener("click",()=>{
            playerVsPCPage();
            console.log("Current theme before next round:", currentTheme);
        });
        if(roundCounter <3){
        contentContainer.appendChild(nextRoundBtn);
        }
        else{
            
            contentContainer.appendChild(viewFinalScoreBtn);
            viewFinalScoreBtn.addEventListener("click",()=>declareFinalScore());
            
        }
    
    contentContainer.style.gap="20px";
    

};
const playGame = function() {
  humanScore = 0;
  PCScore = 0;
  roundCounter = 0;

  alert("Round 1 begins!");
  playerVsPCPage(); // sets up the first round
};

const declareFinalScore = function() {
    let getPCChoiceButtonReq = document.querySelector(".getPCChoiceButton");
    let vsImageContainerReq = document.querySelector(".vsImageContainer");
    let choiceAnnouncements = document.querySelectorAll(".choiceAnnouncements");
    let roundResultContainerReq = document.querySelector(".roundResultContainer");
    roundResultContainerReq.remove();
    choiceAnnouncements.forEach(announcement=>announcement.remove());
    vsImageContainerReq.remove();
    getPCChoiceButtonReq .remove();
    viewFinalScoreBtn.style.display="none";
    
    const finalMessage = document.createElement("h2");
    if (humanScore > PCScore) {
        finalMessage.textContent = `🎉 ${playerName} wins the game! Final score: ${humanScore} - ${PCScore}`;
    } else if (PCScore > humanScore) {
        finalMessage.textContent = `💻 PC wins the game! Final score: ${PCScore} - ${humanScore}`;
    } else {
        finalMessage.textContent = `🤝 It's a draw! Final score: ${humanScore} - ${PCScore}`;
    }
    contentContainer.appendChild(finalMessage);

  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.addEventListener("click", () => {
    playGame();
  });
  contentContainer.appendChild(playAgainBtn);
};

   


