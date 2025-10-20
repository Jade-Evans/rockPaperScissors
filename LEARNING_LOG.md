# 📚 Learning Log: Rock Paper Scissors — Debugging, Refactoring & Growth

## 🧠 Core Concepts & Breakthroughs

- `preventDefault()` stops form submission from refreshing the page and wiping welcome messages.
- `cloneNode(true)` creates a full copy of an element, preserving children — perfect for theme buttons and reusable icons.
- `innerHTML = ""` clears everything inside a container — including elements you might want to keep.
- `DOMContentLoaded` only applies to static elements present at page load — not dynamically created ones.
- Requerying (`document.querySelector(...)`) ensures you’re grabbing fresh DOM elements after changes.
- Cloning lets you reuse HTML-defined elements safely across rounds.
- Dynamic selectors like `document.querySelector(\`#${currentTheme}Play\`)` reduce repetition and improve scalability.
- Passing DOM elements as parameters avoids stale globals and improves modularity.

---

## 🐛 Common Errors & Fixes

| Issue | Fix |
|------|-----|
| Variables undefined due to scope | Declare outside function blocks |
| NodeList vs Array confusion | Use `Array.from()` or `[...nodeList]` |
| Wrong selector type (`id` vs `class`) | Double-check `#` vs `.` usage |
| Assignment `=` instead of comparison `===` | Use `===` in conditionals |
| Referencing elements before they exist | Use `defer` or wrap in `DOMContentLoaded` |
| Appending strings instead of DOM nodes | Use actual element references |
| Appending in wrong direction | Always `parent.appendChild(child)` |

---

## 🔍 Debugging Diary

### 🦕 2 Oct — Dino & Hero Instructions Not Revealing
- **Issue**: `#dinoPlay` and `#heroPlay` were nested inside hidden `#magicPlay`.
- **Fix**: Moved them outside to match sibling structure.
- **Lesson**: Hidden parents keep children hidden — inspect DOM nesting carefully.

### 🧭 6 Oct — Theme Selection Flow
- **Challenge**: Re-selecting themes didn’t fully reset state.
- **Decision**: Prioritized core game logic; left reset logic for future polish.

### 🧠 8 Oct — Dynamic Theme Selection
- Replaced repetitive `if` blocks with:
  ```js
  themeSelection = document.querySelector(`#${currentTheme}Play`);
  - Renamed chosenTheme → displayedTheme for clarity.
🧠 Refactoring getPCAnswer
- Original plan: query .choice1, .choice2, .choice3 from DOM.
- Problem: Timing issues — elements weren’t present when needed.
- Solution: Switched to theme-based arrays:
const classicArray = ["rock", "paper", "scissors"];
const pcChoice = classicArray[randomIndex];
const pcChoiceImage = document.getElementById(pcChoice);


🧠 Image Logic Simplification
- Used:
PCChoiceImage.src = `imgs/${PCChoice}.png`;
- Filenames matched IDs — avoided extra DOM queries.

🧠 Theme-Based Choice Containers
- Challenge: Decoupling icon display broke old selection logic.
- Fix: Added unique IDs like classicChoices, heroChoices, etc.
const availableChoicesForTheme = document.querySelector(`#${currentTheme}Choices`);
contentContainer.appendChild(availableChoicesForTheme);
availableChoicesForTheme.style.display = "block";
- Reflection: Mapping gameflow before refactoring prevents selector chaos.

🧠 Requerying & Cloning — 10 Oct
- Requery fresh DOM elements after changes:
const themeIcons = document.querySelector(`#${currentTheme}ChoiceIcons`);
- Clone before clearing containers:
const iconsClone = originalIcons.cloneNode(true);
contentContainer.appendChild(iconsClone);
- Requery from clone, not stale globals:
const possibleChoices = iconsClone.querySelectorAll("img");



💡 Reflections & Growth
- Confidence Boost: Debugged DOM structure and event timing from 10am–4pm — stuck with it and cracked it.
- Scope Creep Awareness: Adding themes seemed simple but introduced deep structural challenges.
- Modularity Mindset: Learned to pass DOM elements as parameters and avoid stale references.
- Design Insight: Sketching flow and dependencies upfront saves time and confusion later.
- Emotional Milestone: Trusted my instincts, asked smart questions, and documented trade-offs.
- Structural Stretch: Learned why requerying, cloning, and modular logic matter — even if I don’t fully grasp every nuance yet.
- Simplicity Reminder: Stick to core requirements first. Enhancements can unravel into deeper challenges if the foundation isn’t solid.
PLEASE NOTE:
✍️ This log was drafted with AI support to help structure and capture my learning. All insights and experiences are my own, and I plan to refine the tone over time



