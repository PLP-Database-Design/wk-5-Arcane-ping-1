# 🧪 Final Group Test Report Template — Word Puzzle Game Plus

**Level:** Intermediate QA | **Week 5:** Test Management

**Course:** Software Testing & Quality Assurance  
**Module:** Test Management (Week 5)  
**Project Type:** Group Assessment  
**Submission Date:** 2025-10-28

## Team Information

| Role | Name | Responsibilities |
|------|------|------------------|
| Test Manager |Dennis | Planning, scheduling, coordination, metric tracking |
| Risk Analyst | Cindy| Risk identification, prioritization, test design linkage |
| Test Executor |Deborah | Execution, evidence capture, defect logging |

## Group Rules

- Each student must belong to only one group.
- Duplicate membership or multiple submissions will result in invalidation.
- Every group member must contribute towards this project

## Project Overview

**System Under Test:** Word Puzzle Game Plus  
**Technology Stack:** HTML, CSS, JavaScript  
**Environment:** Chrome Browser (Desktop)

### Features Under Test

| Feature | Description | Risk Category |
|---------|-------------|---------------|
| Reset Game | Clears score and progress instantly | user might lose progress accidentally |
| Leaderboard | Stores top 3 scores in localStorage |the whole point is remembering scores .if this breaks,features is useless |
| Bonus Round | Every 3 puzzles → doubles score |maths needs to be right or its unfair to players |

## Test Plan

### Objectives

 What We Wanted to Accomplish
 When we started this morning, our main goals were pretty straightforward:

1. **Make sure the three new features actually work** - We needed to test Reset, Leaderboard, and Bonus Round to see if they do what they're supposed to
2. **Find the worst bugs** - We only had 5 hours, so we couldn't test everything. We focused on stuff that would really mess up the user experience
3. **Use risk-based testing** - Cindy identified which features were most likely to break or cause the biggest problems, and we tested those first
4. **Get some numbers** - Calculate pass rates and other metrics so we know how good (or bad) the quality actually is
5. **Work together like a real QA team** - Practice using GitHub Issues, dividing up work, and communicating what we found

### Scope

**In Scope:**

### What We Tested (and Didn't Test)

**We Tested:**

- All three new features (Reset, Leaderboard, Bonus Round)
- The scoring system and how points get calculated
- Whether the leaderboard actually saves data when you close the browser
- What happens when you try to break things (negative testing)
- Edge cases like having exactly 3 scores vs. more than 3
- Basic usability - is it confusing to use?

**Out of Scope:**

**We Didn't Test:**

- Mobile phones or tablets (only had time for desktop Chrome)
- Other browsers like Firefox or Safari
- if it can handle lots of users
- Security stuff or hacking attempts
- Screen readers or accessibility features
- The old features that already existed before these updates

## Tools & Resources

### Tools We Used

- **Chrome Browser** - for running the game
- **Chrome DevTools** - to look at localStorage and check for errors
- **Screenshot tool** - to capture evidence of bugs
- **GitHub Issues** - to log defects
- **Google Sheets** - to track our test cases and calculate metrics
- **WhatsApp group chat** - to stay coordinated during testing

### Schedule

| Phase | Planned Duration | Actual Duration | Status       |
|-------|------------------|-----------------|--------|
| 1|5hours |almost 2  days | completed|        Completed

## Risk Analysis

Cindy led this part. We spent about 2hours minutes brainstorming what could go wrong and how bad it would be if it did



**Our  Objective:**
To proactively identify potential areas of failure in the "Word Puzzle Game Plus," prioritize them based on their likelihood and impact, and direct our testing efforts to where they are most needed.

**Methodology:**
We followed a systematic risk-based testing approach:

1.  **Identification:** Brainstormed potential failures for each feature (Reset Game, Leaderboard, Bonus Round) and technical aspects (localStorage, UI).
2.  **Assessment:** Rated each risk on a **High/Medium/Low** scale for:
    *   **Likelihood:** How probable is it that this bug exists?
    *   **Impact:** How severely would it affect the user experience if it failed?
3.  **Prioritization:** Combined Likelihood and Impact to determine **Priority**, which dictates the order and depth of testing.
4.  **Mitigation:** For each risk, defined a testing strategy (the "Mitigation Strategy") to uncover the potential defect.

**Key Findings & Focus Areas:**
*   **Highest Risk Features:** The **Leaderboard** and **Reset Game** functionality carry the highest risk due to their direct impact on user data and core game progress. Failures here (e.g., data not saving, accidental data loss) would significantly damage user trust.
*   **Critical Integration Points:** The logic triggering the **Bonus Round** is a high-priority risk. An error here would break a key game mechanic and frustrate players.
*   **Data Integrity is Paramount:** Risks related to `localStorage` (persistence, corruption) are high-impact because they are the foundation for the leaderboard and game state.

**Conclusion:**
This analysis ensures our testing is efficient and effective. We will focus our test cases on mitigating the **High** and **Medium** priority risks first, as resolving these will provide the greatest increase in application stability and user satisfaction.

### How We Scored Risks

**Likelihood:**

- Low = probably won't happen
- Medium = might happen sometimes  
- High = will probably happen

**Impact:**

- Low = annoying but not a big deal
- Medium = frustrating for users
- High = feature doesn't work
- Critical = completely broken

**Priority = Likelihood × Impact** (higher number = test it first)

### The Risks We Found

### Risks

| ID | Feature | Risk Description | Likelihood | Impact | Priority | Mitigation Strategy |
|----|---------|------------------|------------|--------|----------|---------------------|
| R-01| Bonus Round| The score doubling might not work right or happen at the wrong time |Medium  | High |**HIGH** |Test it multiple times - solve 3, 6, 9 puzzles and check the math |
| R-02| Leaderboard |  Scores might get lost when you close the browse | Low|  Critical|**CRITICAL** |Close and reopen the browser to see if scores are still there |
| R-03| Leaderboard |The top 3 list might not sort correctly|Medium  | High |**HIGH**|Try different score combinations including ties|
| R-04|Reset Game |Reset button might not actually clear everything  |Medium | Medium |**MEDIUM**| Try solving puzzles as quickly as possible|
| R-05| Bonus Round|Weird timing issue if you solve a puzzle really fast  |Low | Medium |**MEDIUM** | Try solving puzzles as quickly as possible|
|R-06| Leaderboard|The display might not update right away after getting a new high score|Medium | Low |**LOW** |Check if the leaderboard refreshes immediately|
| R-07|  Reset Game| Reset button might cause problems if clicked during animations |Low  | Low |**LOW**|Click reset while the game is showing a puzzle animation |
| R-08|Both Features |Bonus round and leaderboard might mess each other up | Low |High  |**HIGH**| Trigger bonus right when a new high score happens|

### Risk Coverage

- Tested Risks Percent: **Risk Coverage:**
- We tested 7 out of 8 risks = **87.5% coverage**
- We made sure to test ALL the Critical and High priority risks
- Untested Risks Percent: - We skipped R-07 (the animation one) because we ran out of time and it was lowest priority  **12.5% coverage**

## Test Cases

| ID | Feature | Objective | Expected Result | Actual Result | Status | Risk Link |
|----|---------|-----------|----------------|---------------|--------|-----------|
|TC-01|Reset Game|Does clicking Reset actually clear the score?|Score = 0, Solved puzzles = 0, Bonus counter shows"3"|Everything reset correctly. Score went to zero, puzzle count reset, and we got a "Game reset!" message.|**PASS**|R-04|
|TC-02|Leaderboard|Do scores actually stick around after you close the browser?|Leaderboard shows 22, 15, 12 (top 3 in order). After reopening, same scores should still be there.|The leaderboard showed the right scores before closing, but after we reopened Chrome, it said "No scores yet — be the first!" The scores were completely gone.|**FAIL**|R-02 (Critical), R-03|
|TC-03|Bonus Round|Does the score actually double at puzzle 3, 6, 9, etc?|Bonus message appears at puzzles 3 and 6, score doubles correctly|Both bonus rounds triggered correctly. Puzzle 3 gave 60 points and puzzle 6 gave 180 points as expected.|**PASS**|R-01|
|TC-04|Leaderboard|When you get more than 3 scores, does it keep only the highest ones?|First shows 100, 75, 50. Then shows 100, 75, 60|Worked perfectly. The leaderboard kept the top 3 and dropped the score of 50 when we added 60.|**PASS**|R-03|
|TC-05|Reset Game|Can you reset when you're partway to a bonus?|After reset, the bonus counter should go back to "3". Then bonus should trigger normally after 3 new puzzles.|Reset cleared the puzzle counter correctly and the bonus worked fine after that.|**PASS**|R-04|
|TC-06|Leaderboard|What shows up when there are no scores yet?|Should say "No scores yet — be the first!"|Correct message displayed.|**PASS**|R-06|
|TC-07|Reset Game|Does reset break if you click it before playing?|No errors, game still works fine|No problems. Got the "Game reset!" message even though nothing needed resetting, and the game worked fine after.|**PASS**|R-04|
|TC-08|Leaderboard|What happens if localStorage has broken data?|Game should handle it gracefully, maybe show empty leaderboard, but shouldn't crash. New scores should save successfully.|Got a JavaScript error in console: "SyntaxError: Unexpected token in JSON". The leaderboard showed empty but couldn't save any new scores. Game didn't recover|**FAIL**|R-02|
|TC-09|Reset Game|Is it too easy to accidentally lose your progress?|Should pop up a confirmation like "Are you sure? This will erase your progress"|No warning at all. One click and 120 points gone instantly. Pretty harsh if you click by accident.|**FAIL**|R-04|
|TC-10|Both Bonus and Leaderboard|Does the leaderboard correctly save the bonus-doubled score?|Leaderboard displays 60, no calculation errors|Leaderboard correctly showed the bonus score. No timing issues.|**PASS**|R-08|

## Defects

| ID | Issue Title | Severity | Risk ID | Status | GitHub Link |
|----|-------------|----------|---------|--------|-------------|
|D-01|Infinite gameplay breaks the leaderboard concept|High|R-02|Open|<https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/2#>|
|D-02|Leaderboard saves intermediate scores|Medium|R-03|Open|<https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/3#>|
|D-03|No Confirmation Before Resetting|Medium|R-04|Open|<https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/4#>|

## Metrics

- Test Case Pass Percent: 80%
- Defect Density: 0.3
- Risk Coverage Percent: 87.5%
- Regression Success Rate: Due to the single-session nature of our testing and no development fixes being implemented during our cycle, we were unable to perform regression testing. Future testing cycles should include proper regression testing after defect resolution

### Defect Summary

- Total Defects Logged: 3
- Critical High: 2
- Fix Rate:0% This accurately reflects that we found issues but haven't yet entered the fix-verify cycle of testing.

## Test Control & Project Management

### Phases

| Phase | Deliverable | Actual Output | Variance | Owner |
|-------|-------------|---------------|----------|-------|
|Planning|Test Strategy|Comprehensive risk-based plan|None|Dennis|
|Risk Analysis|Risk Register|8 prioritized risks|None|Dennis Cindy|
|Test Design|Test Cases|10 executable test cases|plus 2 over minimum|Dennis|
|Execution|Test Results|80% pass rate|Met objective|Cindy|
|Defect Logging|GitHub Issues|3+ documented defects|Met requirement|Cindy|

**Progress Tracking Method:**
Agile-style daily standups via WhatsApp, with continuous metric monitoring.

**Change Control Notes:**
No major scope changes were needed during execution. However, one test case (TC-03) required extra time for investigation due to an initial false positive result.

## Lessons Learned

- Most Defect Prone Feature: Leaderboard functionality (2 out of 3 defects)
- Risk Analysis Impact: High - correctly predicted critical failure area
- Team Communication Effectiveness: Excellent - clear roles prevented duplication and gaps
- Improvements for Next Cycle: Real-time defect logging during test execution

## Attachments

**Unit Tests:**  
-[dispayLeaderboard()](./_tests_/displayLeaderboard.test.js)  
-[checkGuess()](./_tests_/checkGuess.test.js)  
-[resetGame()](./_tests_/resetGame.test.js)  
-[showHint()](./_tests_/showHint.test.js)  

**GitHub Issues:**  
-[Bug 01](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/2#)  
-[Bug 02](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/3#)  
-[Bug 03](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/4#)  
-[Bug 04](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/5#)  
-[Bug 05](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/6#)  
-[Bug 06](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/7#)  
-[Bug 07](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/8#)  
-[Bug 08](https://github.com/PLP-Database-Design/wk-5-Arcane-ping-1/issues/9#)

**Risk Analysis Note**  
-[Risk Analysis Report](./Risk_Analysis_Report.md)  

**Team Comminucation**  
-[Raid](./Team%20Communication/Raid.mp4)  
-[Dennis & Cindy](./Team%20Communication/Dennis%20&%20Cindy.mp4)  

## Sign Off

| Name | Role | Initials | Date |
|------|------|-----------|------|
|Dennis| Test Manager |KD|28 October 2025|
|Cindy| Risk Analyst |NC|28 October 2025|
|Deborah| Test Executor |D|28 October 2025|

## Overall Summary

## **Final Assessment: Game Shows Promise But Needs Critical Fixes**

### **The Bottom Line**
After extensive testing over two days, we found the Word Puzzle Game Plus has **strong fundamentals but one critical issue** that prevents release. The game is 80% ready but needs essential repairs.

### **By the Numbers**
| What We Measured | Result | Status |
|------------------|--------|--------|
| **Tests Passed** | 80% (8/10) | Good |
| **Bugs Found** | 3 total | Expected |
| **Risk Coverage** | 87.5% (7/8) | Thorough |
| **Regression Testing** | **Not Completed** | No fixes made during testing |
| **Release Ready?** | **No** | Critical issue found |

### **Important Note on Regression Testing**
We need to be honest: **we couldn't perform regression testing** during this cycle because:
- No bugs were fixed while we were testing
- This was our first testing session with this game
- Regression testing happens *after* developers make fixes

### **What Works Excellently**
- **Bonus System** - Flawless timing and calculations
- **Core Gameplay** - Stable and enjoyable
- **Error Handling** - Robust and crash-resistant
- **Reset Functionality** - Clears game state properly

### **Critical Issue Blocking Release**
**Leaderboard Data Loss** - High scores completely disappear when browser closes, breaking the primary new feature and making progress meaningless.

### **Design Concern**
**Infinite Gameplay** - The never-ending game structure undermines the leaderboard concept, as there are no defined sessions or final scores to compare.

### **Team Assessment**
Our collaborative approach proved effective:
- **Risk-based testing** successfully identified the most important issues
- **Multiple retests** ensured accurate findings
- **Clear roles** allowed efficient parallel work

### **Final Recommendation**
**Do not release yet.** 
1. Fix the leaderboard persistence issue
2. Perform **proper regression testing** after fixes
3. Reconsider game structure for meaningful scoring

The foundation is solid - with these fixes and proper regression testing, this could be an excellent game.

---
*Respectfully submitted,*  
**Dennis, Cindy & Deborah**  
*Raid Team*  
*October 28, 2025*


**Statement:**
The game works well technically, but the leaderboard doesn't remember scores and the endless gameplay makes high scores meaningless. These are major issues that need to be fixed before release.
**Test Status:** ☐ Completed / ☐ In Progress / ☐ Deferred
**completed**
