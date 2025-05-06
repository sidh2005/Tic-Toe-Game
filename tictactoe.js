const prompt = require('prompt-sync')();

let gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let gameActive = true;

const availableEmojis = ['🦆', '🤑', '👽', '🍁', '🌸', '🦋'];

const player1Name = prompt("Enter Player 1's name: ");
const player2Name = prompt("Enter Player 2's name: ");

console.log("\nAvailable emojis:");
availableEmojis.forEach((emoji, index) => {
  console.log(`${index + 1}. ${emoji}`);
});

let player1Emoji;
while (true) {
  const choice = parseInt(prompt(`${player1Name}, pick your emoji (1-${availableEmojis.length}): `), 10);
  if (choice >= 1 && choice <= availableEmojis.length) {
    player1Emoji = availableEmojis[choice - 1];
    break;
  }
  console.log("Invalid choice. Pick a number from the list.");
}

let player2Emoji;
while (true) {
  const choice = parseInt(prompt(`${player2Name}, pick your emoji (1-${availableEmojis.length}, not ${player1Emoji}): `), 10);
  const selected = availableEmojis[choice - 1];
  if (choice >= 1 && choice <= availableEmojis.length && selected !== player1Emoji) {
    player2Emoji = selected;
    break;
  }
  console.log("Invalid or duplicate choice. Pick a different number from the list.");
}

let currentPlayer = {
  name: player1Name,
  emoji: player1Emoji
};

let otherPlayer = {
  name: player2Name,
  emoji: player2Emoji
};

function printBoard() {
  console.log(`
   ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
  ---------
   ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
  ---------
   ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
  `);
}

function checkWin() {
  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return conditions.some(([a, b, c]) =>
    gameBoard[a] === currentPlayer.emoji &&
    gameBoard[b] === currentPlayer.emoji &&
    gameBoard[c] === currentPlayer.emoji
  );
}

function handleMove(position) {
  if (
    gameBoard[position] !== player1Emoji &&
    gameBoard[position] !== player2Emoji
  ) {
    gameBoard[position] = currentPlayer.emoji;
  } else {
    console.log("Cell already taken, choose another one.");
    return false;
  }

  if (checkWin()) {
    printBoard();
    console.log(`🎉 ${currentPlayer.name} wins!`);
    gameActive = false;
    return true;
  }

  if (gameBoard.every(cell => cell === player1Emoji || cell === player2Emoji)) {
    printBoard();
    console.log("It's a draw!");
    gameActive = false;
    return true;
  }

  [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
  return true;
}

// Main game loop
while (gameActive) {
  printBoard();
  const input = prompt(`${currentPlayer.name} (${currentPlayer.emoji}), enter your move (0-8): `);
  const position = parseInt(input, 10);

  if (position >= 0 && position <= 8) {
    handleMove(position);
  } else {
    console.log("Invalid position, enter a number between 0 and 8.");
  }
}
