/**
 * @jest-environment jsdom
 */
const Script = require("../script");

describe("showHint()", () => {
  let script;
  let mockDOM;

  beforeEach(() => {
    // Mock DOM elements to simulate HTML environment
    mockDOM = {
      scrambledWordEl: document.createElement("div"),
      hintEl: document.createElement("div"),
      messageEl: document.createElement("div"),
      guessInput: document.createElement("input"),
      scoreEl: document.createElement("div"),
      solvedEl: document.createElement("div"),
      nextBonusEl: document.createElement("div"),
      leaderboardListEl: document.createElement("ul")
    };

    // Initialize Script instance
    script = new Script({ dom: mockDOM });
    script.currentHint = "This is a test hint";
    script.currentWord = "javascript";
    script.score = 10;
  });

  test("should show hint, deduct 2 points, and mark hintUsed", () => {
    const result = script.showHint();

    // Expect the hint to appear and points deducted
    expect(result.hint).toBe("This is a test hint");
    expect(result.message).toContain("Hint shown");
    expect(script.hintUsed).toBe(true);
    expect(script.score).toBe(8); // 10 - 2 = 8

    // DOM should reflect changes
    expect(mockDOM.hintEl.textContent).toBe("This is a test hint");
    console.log(mockDOM.hintEl.textContent);
    expect(mockDOM.scoreEl.textContent).toBe("8");
  });

  test("should not allow hint to be used twice in one puzzle", () => {
    // First call — sets hintUsed = true
    script.showHint();
    const result = script.showHint();

    expect(result.hint).toBeNull();
    expect(result.message).toContain("already used");
    expect(script.score).toBe(8); // no further deduction
  });

  test("should not deduct below zero", () => {
    script.score = 1;
    const result = script.showHint();

    expect(script.score).toBe(0); // Math.max(0, 1 - 2)
    expect(result.hint).toBe("This is a test hint");
  });
});
