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

# Step 6: Write the logic to play the entire game (5 rounds in total) #
- Creat a function named playGame.
- Make sure the playRound function and scores are inside playGame().
- Use a for loop to call playRound 5 times, starting at 1 and condition is i less than or equal to 5. 
OPTIONAL:
- Use if...else to declare who is the winner at the end of the five rounds. 
- Use a prompt to ask the player if they want to play again.
- Use an alert within the loop to announce each round (spaces it out a bit pace-wise).

LEARNING LOG:
- preventDefault() to stop the submit automatically refreshing the page and removing the welcome message instantly. 
- cloneNode(true) - creates a full clone of an element including any children without interfering with the original element. Used with my enlarged game theme buttons. 

🦕 Real Dinosaur Trio
- Triceratops — the horned herbivore with a protective frill. Great for a “defender” archetype.
- Velociraptor — small, fast, and clever. Perfect for a “trickster” or “speedster” role.
- Stegosaurus — the spiky-backed tank with a tiny brain but serious tail power. Ideal for a “brute” or “wild card.”
You could build a loop like:
- Velociraptor outsmarts Stegosaurus
- Stegosaurus overpowers Triceratops
- Triceratops defends against Velociraptor
🦸‍♀️🦸‍♂️ Marvel Trio Ideas
Here are a few themed trio sets with circular logic built in:
💥 Strength vs Speed vs Strategy
- Hulk — raw power
- Spider-Man — agility and reflexes
- Iron Man — tech and tactics
Loop logic:
- Hulk smashes Spider-Man
- Spider-Man outmaneuvers Iron Man
- Iron Man outsmarts Hulk

- Refactor repetitive logic for theme selection and gameplay flow  
  _→ explore cleaner patterns using arrays, mapping, or reusable functions_
- Update colour palettes for improved aesthetic harmony and accessibility
- Add magical animations (e.g. glow, sparkle, bounce) to enhance interactivity
- Include option for players to randomly generate their avatar instead of choosing manually
- Allow players to select number of rounds before starting the game
- Add a back button to let players change their theme or avatar choice
- Animate “Please click above 👆” prompt for visual guidance
- Introduce overarching title (“The Power of Three”) with optional intro animation

# 🐛 Common Errors/Areas for improvement

- **Wrong scope → undefined variables**  
  Variables declared inside functions or blocks may not be accessible where you expect them. Console errors like `undefined` or `cannot read property of undefined` often point to this.

- **NodeList vs Array confusion**  
  `document.querySelectorAll()` returns a NodeList, not a true array — so methods like `.map()` or `.filter()` won’t work unless you convert it using `Array.from()` or spread syntax (`[...nodeList]`).

- **Mixing up `id` vs `class` selectors**  
  In CSS and JS, `#` targets an `id`, while `.` targets a `class`. Using the wrong one can silently break your styling or DOM selection.

- **Accidental assignment (`=`) instead of comparison (`===`)**  
  A single `=` sets a value, while `===` checks it. Using `=` in an `if` statement will always evaluate truthy and cause unexpected behavior.

- **Referencing elements before they exist**  
  If your script runs before the DOM is fully loaded, `document.querySelector()` might return `null`. Use `defer` in your `<script>` tag or wrap your code in a `DOMContentLoaded` event.

- **Typos in variable names or selectors**  
  A small typo can break your logic — the console is your friend here!

## 🧠 Learning Process

Throughout this project, I've become more confident in debugging independently — relying less on AI assistance and more on reading console errors and tracing issues myself. I’ve noticed that many bugs stem from scope issues or undefined variables, and I’m learning to spot these patterns more quickly. This has helped me build trust in my own problem-solving process and deepen my understanding of how JavaScript behaves in different contexts.