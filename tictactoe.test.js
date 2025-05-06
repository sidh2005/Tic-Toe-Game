const game = require('./tictactoe.js');

describe('Emoji Tic-Tac-Toe Game', () => {
  describe('Game initialization', () => {
    test('Available emojis array should contain expected values', () => {
      expect(game.availableEmojis).toEqual(['🦆', '🤑', '👽', '🍁', '🌸', '🦋']);
      expect(game.availableEmojis.length).toStrictEqual(6);
    });
    
    test('Game state should be properly initialized for test', () => {
      const gameState = game.createTestGameState('Player1', '🦆', 'Player2', '👽');
      expect(gameState.board).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8']);
      expect(gameState.current).toEqual({ name: 'Player1', emoji: '🦆' });
      expect(gameState.other).toEqual({ name: 'Player2', emoji: '👽' });
    });
  });

  describe('Game logic', () => {
    beforeEach(() => {
      game.createTestGameState('Player1', '🦆', 'Player2', '👽');
    });
    
    test('handleMove should place emoji on board and switch players', () => {
      const initialCurrentPlayer = { name: 'Player1', emoji: '🦆' };
      const result = game.handleMove(4);
      expect(result).toStrictEqual(true);
      
      const expectedBoard = ['0', '1', '2', '3', '🦆', '5', '6', '7', '8'];
      expect(game.createTestGameState().board).toEqual(expectedBoard);
      
      const newCurrentPlayer = game.createTestGameState().current;
      expect(newCurrentPlayer.name).toStrictEqual('Player2');
      expect(newCurrentPlayer.emoji).toStrictEqual('👽');
    });
    
    test('handleMove should return false for already occupied position', () => {

      game.handleMove(4);
      const result = game.handleMove(4);
      expect(result).toStrictEqual(false);
      
      const expectedBoard = ['0', '1', '2', '3', '🦆', '5', '6', '7', '8'];
      expect(game.createTestGameState().board).toEqual(expectedBoard);
    });
    
    test('checkWin should detect horizontal win', () => {
      const winningBoard = ['🦆', '🦆', '🦆', '3', '4', '5', '6', '7', '8'];
      game.createTestGameState('Player1', '🦆', 'Player2', '👽', winningBoard);
      
      expect(game.checkWin()).toStrictEqual(true);
    });
    
    test('checkWin should detect vertical win', () => {
      const winningBoard = ['🦆', '1', '2', '🦆', '4', '5', '🦆', '7', '8'];
      game.createTestGameState('Player1', '🦆', 'Player2', '👽', winningBoard);
      
      expect(game.checkWin()).toStrictEqual(true);
    });
    
    test('checkWin should detect diagonal win', () => {
      const winningBoard = ['🦆', '1', '2', '3', '🦆', '5', '6', '7', '🦆'];
      game.createTestGameState('Player1', '🦆', 'Player2', '👽', winningBoard);
      
      expect(game.checkWin()).toStrictEqual(true);
    });
    
    test('checkWin should not detect win when there is none', () => {
      const noWinBoard = ['🦆', '👽', '🦆', '👽', '🦆', '👽', '👽', '🦆', '👽'];
      game.createTestGameState('Player1', '🦆', 'Player2', '👽', noWinBoard);
      
      expect(game.checkWin()).toStrictEqual(false);
    });
  });
});