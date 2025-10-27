/**
 * @jest-environment jsdom
 */
const Script = require('../script');

describe("displayLeaderboard()", () => {
  let script;
  let leaderboardListEl;

  beforeEach(() => {
    // Create a mock DOM element to act as leaderboard list
    leaderboardListEl = document.createElement("ul");
    document.body.appendChild(leaderboardListEl);

    // Initialize Script instance with the mock DOM
    script = new Script({
      dom: {
        leaderboardListEl
      }
    });
  });

  afterEach(() => {
    document.body.innerHTML = ""; // clean up DOM
  });

  test("should display top 3 scores in descending order with correct medals", () => {
    const mockScores = [50, 10, 0]; // unsorted
    const topThree = [...mockScores].sort((a, b) => b - a).slice(0, 3);

    script.displayLeaderboard(topThree);

    // Get rendered leaderboard items
    const items = leaderboardListEl.querySelectorAll("li");
    expect(items.length).toBe(3);

    // Check that scores are displayed in descending order
    expect(items[0].textContent).toContain(topThree[0].toString());
    console.log(items[0].textContent);
    expect(items[1].textContent).toContain(topThree[1].toString());
    console.log(items[1].textContent);
    expect(items[2].textContent).toContain(topThree[2].toString());
    console.log(items[2].textContent);

    // Check that medals are displayed correctly
    expect(items[0].textContent).toContain("🥇");
    expect(items[1].textContent).toContain("🥈");
    expect(items[2].textContent).toContain("🥉");
  });

  test("should show a message when leaderboard is empty", () => {
    script.displayLeaderboard([]);

    expect(leaderboardListEl.innerHTML).toContain("No scores yet — be the first!");
  });
});
