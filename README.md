
# Terminal Tic-Tac-Toe --> With emojis

## Introduction

This is a very basic two-player **Tic Tac Toe** game you can play right in your terminal.  
Built using **Node.js**, this fun little project allows players to:

- Enter their names
- Choose an emoji to represent them on the board
- Take turns choosing board positions to place their emojis
- Compete for three in a row!

The game uses simple input prompts to keep the interaction fun and intuitive.

## Purpose

This project was created to:

- Practice **basic JavaScript** (functions, arrays, conditionals, loops, etc.)
- Learn how to interact with users via the terminal using `prompt-sync`
- Make something simple and fun!

Perfect for beginners looking to strengthen their JavaScript fundamentals.

## How to Play

1. **Install Node.js** if you haven't already:  
   [https://nodejs.org](https://nodejs.org)

2. **Install `prompt-sync`** in your project folder (if it's not already there):

   ```bash
   npm install prompt-sync
   ```

3. **Run the game**:

   ```bash
   node tictactoe.js
   ```

4. **Game Flow**:
   - Player 1 enters their name
   - Player 2 enters their name
   - A list of 6 emojis will appear
   - Player 1 picks an emoji by entering the number next to it
   - Player 2 picks a different emoji
   - The game board shows positions labeled `0–8`

5. **Making a move**:
   - On your turn, type a number from `0` to `8` to place your emoji in that position.
   - The number will be replaced by your emoji.
   - First to get **three in a row** wins!
   - If all spots are filled without a winner, it’s a draw.

## Notes

- The board updates after each move.
- The game checks for wins and draws after every turn.
- Only one emoji per cell is allowed.
- If attempted to pick the same cell an error message will be created. 

## Built With

- JavaScript
- Node.js
- [prompt-sync](https://www.npmjs.com/package/prompt-sync)

## Future Ideas
- Maybe add like a AI mode or a robot mode so player can play against the computer. 

---
(👉ﾟヮﾟ)👉 Made for fun & practice! 👈(ﾟヮﾟ👈)
