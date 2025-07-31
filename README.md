# rockPaperScissors
Practice pseudocode and JS - Odin Project Fdn Exercise. 

## PSEUDOCODE ##

# Step 2: Write the logic to get the computer's choice #

- Define a function called getComputerChoice.
- Generate a random decimal between 0 and 1 using Math.random().
- Multiply this number by 3 to get a value between 0 (inclusive) and 3 (exclusive).
- Use Math.ceil() to round this number up to the nearest whole number (1, 2, or 3).
- Store this value in a variable called num.
- Use if...else if statements to determine the computer's choice:
    - IF num is equal to 1, output "PC chose rock".
    - ELSE IF num is equal to 2, output "PC chose paper".
    - ELSE IF num is equal to 3, output "PC chose scissors".

# Step 3: Write the logic to get the human/user's choice #

- Define a function called getHumanChoice.
- Use the prompt() method with a message requesting user input "rock", "paper" or "scissors" (*do not worry about invalid input for this exercise at this stage*).
- Store the user's input to the prompt as a variable **humanChoice**.
- Use console.log to output a message which automatically inputs the user's response using template literals. 