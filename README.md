# Typing Game

Typing Game is an iteractive application built with React that chanllenges users to type words correctly within a limited time. Test your skills and mental speed as your progress through of blocks of words!

## Features

- ⏰ **Timer**: You have 60 seconds to type as many words as possible.
- 📚 **Word Blocks**: Words are displayed in blokcs of 10. Once you complete a block, the next one appears.
- 🏆 **Scoring System**: Each correct word increase your score.
- 🎮 **Minimalist and Responsive Interface**: Designed with a clean, modern UI using Tailwindcss.

## Technologies Used

- **React**: For building the user interface.
- **Typescript**: To add static typing and robustness to the code.
- **Tailwindcss**: A CSS framework fo fast and modern design.

## Installation

Follow these steps to run the project locally:

1. Clone the repositiry:

  ```bash
   git clone https://github.com/your-username/typing-game.git
   cd typingGame
  ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the project:

   ```bash
   npm run dev
   ```

4. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

## Key Files
- **src/TypingWord.tsx**: Main game componet.
- **src/Typing**: Contains the array of words used in the game.
- **tailwindcss**: Tailwindcss configuration file.

## How to play

1. Click the Start Game button.
2. Type the words displayed on the screen in the input field.
3. Once you complete all the words in a block, the next block will appear.
4. Earn points and improve your typing speed before the timer runs out!

## Customization

Adjust the game timer

You can modify INITIAL_TIME constant in the TypingWord.tsx file to change the availble time:

   ```tsx
   const INITIAL_TIME = 60;
   ```
Change the number of words per block

Modify the WORDS_PER_BLOCK constant to adjust the number of words per block.

   ```tsx
   const WORDS_PER_BLOCK = 10;
   ```
 