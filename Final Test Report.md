# 🧪 Final Group Test Report Template — Word Puzzle Game Plus

**Level:** Intermediate QA | **Week 5:** Test Management

**Course:** Software Testing & Quality Assurance  
**Module:** Test Management (Week 5)  
**Project Type:** Group Assessment  
**Submission Date:** 2025-10-26

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
- ### What We Tested (and Didn't Test)

**We Tested:**
- All three new features (Reset, Leaderboard, Bonus Round)
- The scoring system and how points get calculated
- Whether the leaderboard actually saves data when you close the browser
- What happens when you try to break things (negative testing)
- Edge cases like having exactly 3 scores vs. more than 3
- Basic usability - is it confusing to use?


**Out of Scope:**
- *We Didn't Test:**
- Mobile phones or tablets (only had time for desktop Chrome)
- Other browsers like Firefox or Safari
-  if it can handle lots of users
- Security stuff or hacking attempts
- Screen readers or accessibility features
- The old features that already existed before these updates


### Tools & Resources
### Tools We Used

- **Chrome Browser** - for running the game
- **Chrome DevTools** - to look at localStorage and check for errors
- **Screenshot tool** - to capture evidence of bugs
- **GitHub Issues** - to log defects
- **Google Sheets** - to track our test cases and calculate metrics
- **WhatsApp group chat** - to stay coordinated during testing

- 

### Schedule

| Phase | Planned Duration | Actual Duration | Status |
|-------|------------------|-----------------|--------|
| 1|5hours |12 hours | |

## Risk Analysis
Cindy led this part. We spent about 45 minutes brainstorming what could go wrong and how bad it would be if it did.

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

| R-03| Leaderboard |The top 3 list might not sort correctly| |Medium  | High |**HIGH** |Try different score combinations including ties   |

| R-04|Reset Game |Reset button might not actually clear everything  |Medium | Medium |**MEDIUM**| Try solving puzzles as quickly as possible|

| R-05| Bonus Round|Weird timing issue if you solve a puzzle really fast  |Low | Medium |**MEDIUM** | Try solving puzzles as quickly as possible||

| R-06 Bonus Round|  Leaderboard|The display might not update right away after getting a new high score|Medium | Low |**LOW** |Check if the leaderboard refreshes immediately|

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
| | | | | | | |

## Defects

| ID | Issue Title | Severity | Risk ID | Status | GitHub Link |
|----|-------------|----------|---------|--------|-------------|
| | | | | | |

## Metrics

- Test Case Pass Percent: 
- Defect Density: 
- Risk Coverage Percent: 
- Regression Success Rate: 

### Defect Summary

- Total Defects Logged: 
- Critical High: 
- Fix Rate: 

## Test Control & Project Management

### Phases

| Phase | Deliverable | Actual Output | Variance | Owner |
|-------|-------------|---------------|----------|-------|
| | | | | |

**Progress Tracking Method:**  
**Change Control Notes:**

## Lessons Learned

- Most Defect Prone Feature: 
- Risk Analysis Impact: 
- Team Communication Effectiveness: 
- Improvements for Next Cycle: 

## Attachments

- 

## Sign Off

| Name | Role | Initials | Date |
|------|------|-----------|------|
| | Test Manager | | |
| | Risk Analyst | | |
| | Test Executor | | |

## Overall Summary

**Statement:** 

**Test Status:** ☐ Completed / ☐ In Progress / ☐ Deferred
