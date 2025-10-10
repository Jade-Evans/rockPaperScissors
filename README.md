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
- Include avatars for the player and computer and allow player to select themselves and their opponent
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

## SPECIFIC DEBUGGING EXAMPLES ##
- hich was accidentally deleting the instruction blocks that lived inside it
- Fix: Moved instruction blocks outside #contentContainer so they wouldn’t be wiped
- Bonus fix: Attached the click listener to clonedThemeButton immediately after creating it, instead of inside a DOMContentLoaded block (which only runs once)

✨ What I Learned
- innerHTML = "" clears everything inside a container — including elements I might want to keep
- DOMContentLoaded is only useful for static elements present at page load — not for dynamically created ones
- Always check whether an element is being removed before trying to access it
- Debugging without errors requires careful DOM inspection and console logging

💪 Reflection
I worked on this from 10am to 4pm and hit a real wall — but I kept going, asked the right questions, and finally cracked it. This was a huge confidence boost in understanding DOM structure, event timing, and dynamic element handling. I’m proud of how I stuck with it and documented the journey

2nd October:
🧠 Bug Summary: Dino and Hero Instructions Not Revealing
Issue:
The #dinoPlay and #heroPlay instruction blocks weren’t appearing when their cloned theme buttons were clicked.
Root Cause:
They were accidentally nested inside #magicPlay in the HTML. Since #magicPlay is hidden by default (display: none), any content inside it — including #dinoPlay and #heroPlay — was also hidden, even when display: block was applied to them.
How I Diagnosed It:
- Used DevTools to inspect the DOM structure after clicking the theme buttons.
- Noticed that #dinoPlay and #heroPlay were children of #magicPlay, instead of being siblings like #classicPlay.
Fix:
Moved #dinoPlay and #heroPlay outside of #magicPlay in the HTML so they sit at the same level as the other .playTheme sections.
Lesson Learned:
Always check the DOM nesting when elements aren’t behaving as expected. Even if display: block is applied, a hidden parent will keep its children hidden.

Key Takeaway: DevTools is a lot easier to spot layout issues than looking on html/VSC.

Bug: Struggling to append the playThemes to the contentContainer:
This line is causing the crash:
contentContainer.appendChild("themeSelection");
You're trying to append the string "themeSelection" instead of the actual DOM node stored in the variable themeSelection.


Small Mistakes = big problems
When appending be sure to make sure you have the parent and child the right way around; I missed this when trying to append a submit button to contentContainer and instead tried to append my entire content to a submit button, causing the whole content to disappear!:
contentContainer.appendChild(submitIconChoice);
NOT
submitIconChoice.appendChild(contentContainer);

6th October:
🧭 Theme Selection Flow (Return to Theme Option Button)
- Users can choose a theme and return to the selection screen if they want to choose a different theme.
- Re-selecting the same theme works in most cases, but may not fully reset all elements.
- I chose to focus on completing the core game logic and left this area partially implemented for now.
- Future improvements could include resetting state more cleanly and adding animations for smoother transitions.

🧠 Learning Observation — 8th October
I’m beginning to use variable interpolation to streamline my code and reduce repetition. For example, instead of writing multiple if statements to select a theme container,like:
else if(currentTheme==="magic"){
                            themeSelection = document.querySelector("#magicPlay");
                    }
                    else if(currentTheme==="dino"){
                            themeSelection= document.querySelector("#dinoPlay");
                    }
  now use:
themeSelection = document.querySelector(`#${currentTheme}Play`);

This approach dynamically builds the selector string using the value of currentTheme, making the code more scalable and easier to maintain. 

🧠 Naming Reflection — 8th October
I renamed chosenTheme to displayedTheme to better reflect its role in my game flow. This variable holds the DOM element for the currently visible theme instructions and choices. The name helps me distinguish it from currentTheme
🧠 Learning Log: Refactoring getPCAnswer Logic
I originally tried to reuse the .choice1, .choice2, .choice3 class-based elements from the DOM to generate the PC’s answer. My plan was to dynamically query them using:
document.querySelector(`#${currentTheme}Play .choice${num}`);


This worked in theory, but in practice I ran into DOM timing issues — the elements were often cleared or not present when I needed them. Debugging this became foggy and time-consuming, and I realized I was spending more energy untangling structure than progressing the game.
So I made a pragmatic decision: I refactored my getPCAnswer() logic to use simple theme-based arrays instead. For example:
const classicArray = ["rock", "paper", "scissors"];


Then I used a random index to select a choice and retrieved the matching image by ID:
const pcChoice = classicArray[randomIndex];
const pcChoiceImage = document.getElementById(pcChoice);


This approach is cleaner for my current level and avoids DOM dependency issues. I can always refactor later to reuse DOM nodes more elegantly — but for now, this keeps my logic readable, reliable, and fun to build on.

🧠 Optional learning log entry
I simplified my PC image logic by dynamically assigning the image source using:
PCChoiceImage.src = `imgs/${PCChoice}.png`;


This works because my filenames match the choice IDs. It avoids DOM queries and keeps the flow clean and readable.



🧠 Dynamic Element Selection: Theme-Based Choice Containers
Overview
Each game theme (e.g., Classic, Hero, Magic) presents a unique set of choice icons — like Rock, Paper, Scissors for Classic, or themed equivalents for others. These icons are now revealed at a later stage in the game to improve flow and clarity.
Refactor Context
Originally, the choice icons were displayed immediately when a theme was selected. This worked fine, but as the game logic evolved, I moved the icon reveal into a separate function to better control pacing and user experience. This change introduced confusion: my previous selection logic relied on DOM proximity and structure, which broke once the display logic was decoupled.
Challenge
After the refactor, I struggled to reliably identify and display the correct set of choice icons. My early logic used generic class selectors and nested queries, but these became fragile and hard to debug once the icons were no longer directly tied to the theme selection flow.
Solution
To simplify and clarify the selection process, I added specific HTML identifiers for each theme’s choice container:
- classicChoices
- heroChoices
- magicChoices
- etc.
This allowed me to use a clean, readable JavaScript selector:
const availableChoicesForTheme = document.querySelector(`#${currentTheme}Choices`);
contentContainer.appendChild(availableChoicesForTheme);
availableChoicesForTheme.style.display = "block";


Reflection
This experience reminded me how important it is to pause and think through the overall gameflow and design before diving into implementation. The muddle I hit wasn’t just about selectors — it was about shifting logic without fully mapping how elements would be accessed later. In future refactors, I want to spend more time sketching the flow and dependencies so I can anticipate these breakages and design around them. It’s helping me build a more thoughtful, scalable mindset.
Why This Matters
At this stage in my learning, reducing ambiguity is key. Adding unique IDs gave me confidence in my logic and made the code easier to read, debug, and extend. It also fits my trio-based design style: each theme has its own distinct set of choices, and now each one is easy to grab and display — even when revealed later in the game.
Next Steps
As I grow more comfortable with dynamic DOM manipulation, I may refactor this into a reusable function or explore more scalable patterns. For now, this solution supports clarity, momentum, and modularity — exactly what I need.

Would you like a matching commit message like refactor: add theme-specific choice IDs for clearer selection logic? I can help you phrase it with your usual flair.
📝 README Update: Gameflow Refactor
🎮 Refactor Overview
To support smoother gameplay and prepare for a best-of-three round system, I refactored the gameflow to merge the round logic — including human choice, PC choice, and result — into a single unified view. Previously, these elements were handled in separate stages, which made the experience feel fragmented and harder to extend.
🔄 What Changed
- Moved the display of choice icons into a later stage of the game, triggered after theme selection and instruction reveal.
- Began merging round logic (player choice, PC choice, result display) into one cohesive function to streamline repeated rounds.
- Introduced theme-specific IDs (e.g., classicChoices, heroChoices) to simplify dynamic selection now that the display logic is decoupled.
🧠 Reflection
This refactor surfaced a key insight: when restructuring gameflow, it’s important to map out how elements will be accessed and reused. I got muddled trying to dynamically select containers that were no longer in the same place — a problem that didn’t exist before the refactor. Adding specific identifiers helped, but I’ve learned to spend more time upfront thinking through the overall design and dependencies before diving into implementation.
🚧 Next Steps
- Finalize the best-of-three round logic with score tracking and round transitions.
- Consider modularizing the round display logic for clarity and reuse.
- Continue documenting trade-offs and partial solutions to support maintainability.

Would you like help drafting a roundLogic.js module or a visual flow diagram to anchor your next steps? I can also help you write a README snippet for the scoring system once it’s in place.
🧠 Learning Log: Requerying and Cloning DOM Elements
Date: 10 Oct 2025
Focus: Making theme icons reusable across rounds using requerying and cloning

✅ What I learned
- Requerying means using document.querySelector(...) again to grab fresh DOM elements after the page changes.
- Example:
const themeIcons = document.querySelector(`#${currentTheme}ChoiceIcons`);
- This ensures I’m working with the correct theme icons after the user picks a theme.
- Cloning is useful when I want to reuse HTML-defined elements without removing the originals.
- If I append the original icons and then clear the container (contentContainer.innerHTML = ""), they’re gone.
- Cloning preserves the original and gives me a safe copy to use:
const iconsClone = originalIcons.cloneNode(true);
contentContainer.appendChild(iconsClone);
- I must requery possibleChoices from the clone, not from a stale global:
const possibleChoices = iconsClone.querySelectorAll("img");
- Cloning also lets me safely append a selected image to the VS screen without removing it from the choice container:
humanChoiceImage = selectedImage.cloneNode(true);
🧠 Learning Log: Requerying, Cloning & Theme Complexity
Date: 10 Oct 2025
Focus: Refactoring for multi-theme support and reusable DOM elements

Adding multiple themes introduced unexpected complexity to my game logic — especially around DOM reuse across rounds. I didn’t initially realise how this would require requerying theme-specific elements and cloning HTML nodes to avoid stale references and broken interactions.
This section of the project was heavily supported by AI guidance, as I got in over my head with the lifecycle of DOM elements and how clearing containers affects original nodes. That said, I didn’t copy-paste solutions — I explored, tested, and iterated with support, and I now have a much clearer understanding of:
- Why requerying is essential when working with dynamic themes
- How cloning preserves original HTML elements for reuse
- Why passing DOM elements as parameters avoids stale globals
- How modular logic improves round-to-round consistency
I can’t say I fully understand every nuance yet, but this exposure has given me insight into structural considerations I wouldn’t have encountered otherwise. It’s been a valuable stretch, and I feel better equipped to handle more complex UI logic going forward.




