/**
 * @jest-environment jsdom
 */
const Script = require('../script'); // Import your class
// If your module exports as `module.exports = Script;` (the class itself),
// then `Script` here refers directly to the class definition.

describe('resetGame()', () => {
  let game;
  let mockDOM;

  beforeEach(() => {
    // Mock DOM elements that the class expects
    mockDOM = {
      scoreEl: { textContent: '' },
      solvedEl: { textContent: '' },
      scrambledWordEl: { textContent: '' },
      hintEl: { textContent: '' },
      guessInput: { value: 'something', focus: jest.fn() },
    };

    // Create instance of the class
    game = new Script({ dom: mockDOM });

    // Give it some non-default state to verify reset behavior
    game.score = 100;
    game.puzzlesSolved = 5;
    game.hintUsed = true;

    // Mock helper functions to avoid actual UI updates
    game.showMessage = jest.fn();
    game.updateNextBonusIndicator = jest.fn();
  });

  test('resets internal state to defaults', () => {
    game.resetGame();

    expect(game.score).toBe(0);
    expect(game.puzzlesSolved).toBe(0);
    expect(game.hintUsed).toBe(false);
  });

  test('updates DOM elements correctly', () => {
    game.resetGame();

    expect(mockDOM.scoreEl.textContent).toBe(0);
    expect(mockDOM.solvedEl.textContent).toBe(0);
    expect(mockDOM.scrambledWordEl.textContent).toBe('');
    expect(mockDOM.hintEl.textContent).toBe('');
    expect(mockDOM.guessInput.value).toBe('');
    expect(mockDOM.guessInput.focus).toHaveBeenCalledTimes(1);
  });

  test('calls helper methods', () => {
    game.resetGame();

    expect(game.updateNextBonusIndicator).toHaveBeenCalledTimes(1);
    expect(game.showMessage).toHaveBeenCalledWith('Game reset!', 'success');
  });

  test('returns the expected result object', () => {
    const result = game.resetGame();
    expect(result).toEqual({ message: 'Game reset!' });
  });
});
