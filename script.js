
 const getComputerChoice = function(){
    let num = Math.ceil(Math.random()*3);
    if(num === 1){
        console.log("PC choice is rock");
    }
    else if(num ===2){
       console.log("PC choice is paper");  
    }
    else if(num === 3){
        console.log("PC choice is scissors")
    }
 };
getComputerChoice();

const getHumanChoice = function(){
    let humanChoice = prompt("Choose rock, paper or scissors");
    console.log(`The human choice is: ${humanChoice}`);
};
getHumanChoice();