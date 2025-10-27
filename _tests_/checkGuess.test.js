/**
 * @jest-environment jsdom
 */
const Script = require('../script'); // adjust path if needed

describe('checkGuess() - Bonus Round Score Doubling', () => {
  let game;
  let mockDOM;

  beforeEach(() => {
    // Mock DOM elements expected by the class
    mockDOM = {
      scoreEl: { textContent: 0 },
      solvedEl: { textContent: 0 },
      scrambledWordEl: { textContent: '', style: {} },
      hintEl: { textContent: '' },
      guessInput: { value: '', focus: jest.fn(), select: jest.fn() },
      messageEl: { textContent: '', className: '' }
    };

    // Create a game instance with mock DOM
    game = new Script({ dom: mockDOM });

    // Mock showMessage to prevent actual DOM updates
    game.showMessage = jest.fn();
  });

  test('score doubles correctly on every 3rd correct puzzle', () => {
    const testWord = 'javascript';
    game.currentWord = testWord; // Set the current word
    game.hintUsed = false;

    // 1st correct guess
    game.checkGuess(testWord);
    expect(game.score).toBe(10); // +10 points, no doubling
    expect(game.puzzlesSolved).toBe(1);

    // 2nd correct guess
    game.checkGuess(testWord);
    expect(game.score).toBe(20); // +10 points again, no doubling
    expect(game.puzzlesSolved).toBe(2);

    // 3rd correct guess -> bonus round, score doubles
    game.checkGuess(testWord);
    // Before doubling: 30 (10 + 10 + 10)
    // After doubling: 60
    expect(game.score).toBe(60);
    expect(game.puzzlesSolved).toBe(3);

    // 4th correct guess
    game.checkGuess(testWord);
    expect(game.score).toBe(70); // +10 points, no doubling
    expect(game.puzzlesSolved).toBe(4);

    // 5th correct guess
    game.checkGuess(testWord);
    expect(game.score).toBe(80);
    expect(game.puzzlesSolved).toBe(5);

    // 6th correct guess -> bonus round, score doubles
    game.checkGuess(testWord);
    // Before doubling: 90
    // After doubling: 180
    expect(game.score).toBe(180);
    expect(game.puzzlesSolved).toBe(6);

    // 7th, 8th correct guesses
    game.checkGuess(testWord);
    game.checkGuess(testWord);
    expect(game.score).toBe(200);
    expect(game.puzzlesSolved).toBe(8);

    // 9th correct guess -> bonus round, score doubles
    game.checkGuess(testWord);
    expect(game.score).toBe(420); // 210*2
    expect(game.puzzlesSolved).toBe(9);
  });
});

