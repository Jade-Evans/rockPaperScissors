# rockPaperScissors
Practice pseudocode and JS - Odin Project Fdn Exercise. 

## PSEUDOCODE ##

# Step 2: Write the logic to get the computer's choice #

- Define a function called getComputerChoice.
- Declare an empty variable ("") called **computerChoice**.
- Generate a random decimal between 0 and 1 using Math.random().
- Multiply this number by 3 to get a value between 0 (inclusive) and 3 (exclusive).
- Use Math.ceil() to round this number up to the nearest whole number (1, 2, or 3).
- Store this value in a variable called num.
- Use if...else if statements to determine the computer's choice:
    - IF num is equal to 1, the value of computerChoice should equal "rock"(IMPORTANT: ALL LOWER CASE).
    - ELSE IF num is equal to 2, the value of computerChoice should equal "paper"(IMPORTANT: ALL LOWER CASE).
    - ELSE IF num is equal to 3, the value of computerChoice should equal "scissors"(IMPORTANT: ALL LOWER CASE).
- Use console.log function with template literals to output a message declaring the computerChoice. 

# Step 3: Write the logic to get the human/user's choice #

- Define a function called getHumanChoice.
- Use the prompt() method with a message requesting user input "rock", "paper" or "scissors" (*do not worry about invalid input for this exercise at this stage*).
- Store the user's input to the prompt as a variable **humanChoice**.
- use the toLowerCase() function to put all characters into lower case and match the possible selections from computer exactly. 
- Use console.log to output a message which automatically inputs the user's response using template literals. 

# Step 4: Declare variables to track scores #
- Create a variable called **humanScore** with initial value = 0 - *outside of global scope*. 
- Create a variable called **computerScore** with initial value = 0 - *outside of global scope*. 

# Step 5: Write the logic to play a single round #

- Create a new function named playRound.
- The parameters (in brackets after playRound) will be humanChoice and computerChoice.
- Write the code for incrementing the score and outputting an outcome message based on comparison of the two choices:
    - IF the choices match: output it's a draw  message using console.log.
    - ELSE IF the choices result in the human winning (aka human gets rock and pc gets scissors etc.): output a message using console.log to say human wins AND increment humanScore by 1. 
    - ELSE the remaining choices will result in a win for the pc, so output message to declare this AND increment computer score by 1. 
- Use console.log at the end of the function to declare the scores for each player. 