
 const randomNum = function(){
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
randomNum();