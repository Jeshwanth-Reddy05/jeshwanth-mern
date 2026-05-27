# Week 1: JavaScript Fundamentals

This folder contains assignments covering core JavaScript programming constructs. The goal of this week's assignments was to build solid fundamentals in basic operations, conditional workflows, array data structures, functional array operations (map, filter, reduce), and object-oriented dynamic attributes.

---

## Folder Roadmap

| Subdirectory | Core Objective | Key Files |
| :--- | :--- | :--- |
| **operators** | Mathematics and fundamental assignment operations | `amount.js` |
| **controlStatements** | Boolean evaluation and complex routing conditionals | `enrollment.js`, `price-tag.js`, `smart-login.js` |
| **arrayOperations** | Basic Array manipulation & core queries | `course.js`, `student.js`, `temperature.js` |
| **arrayAdvOperations**| Advanced array methods (Map, Filter, Reduce, etc.) | `bank-transaction.js`, `employee-payroll.js`, `movie-streaming.js`, `performance.js`, `shopping.js` |
| **objectOperations**   | Creating, parsing, and modifying objects | `Object-operation-simple(1).js`, `Object-operation-simple(2).js`, `application-controller.js` |

---

## Topic Analysis & Explanations

### 1. Mathematical & Assignment Operators (operators)
* Focuses on standard arithmetic, increments, and composite assignments.
* **amount.js**: Calculates total costs based on unit items and basic arithmetic expressions.

### 2. Logic Flow & Conditionals (controlStatements)
Conditional logic structures routing actions using if, else if, else, and logical AND (&&) / OR (||) operators:
* **smart-login.js**: Orchestrates nested status check flows. Ensures user credentials AND profile flags are verified before outputting greetings.
* **price-tag.js**: Tier-based pricing discount workflows using nested conditions.
* **enrollment.js**: Validates eligibility criteria constraints based on course availability.

### 3. Basic Arrays (arrayOperations)
Handling linear indexed datasets using basic operations:
* **course.js**: Tracking lists of active courses.
* **temperature.js**: Processing thermal registers and identifying hot/cold ranges.
* **student.js**: Performing foundational array traversals to isolate grade boundaries.

### 4. Advanced Array Methods (arrayAdvOperations)
Harnessing functional utility methods to write declarative, side-effect-free code instead of procedural for loops.

#### The Functional Toolkit:
```javascript
// 1. FILTER: Isolate entries meeting a criteria
const highPerformers = students.filter(student => student.score >= 90);

// 2. MAP: Transform data entries seamlessly
const boostedScores = scores.map(score => score + 5);

// 3. REDUCE: Aggregate/accumulate into a single output value
const totalPayroll = salaries.reduce((total, salary) => total + salary, 0);

// 4. FIND: Fetch the first matching element
const firstDebtor = accounts.find(acc => acc.balance < 0);

// 5. FINDINDEX: Locate the precise position index of a match
const idxOfSpecialItem = stock.findIndex(item => item.id === "SP4");
```
* **bank-transaction.js**: Extracts debit transactions, sums up net credit amounts, and finds critical value indexes.
* **employee-payroll.js**: Calculates cumulative company wages and dynamically updates payroll tax thresholds.
* **movie-streaming.js**: Sorts, filters, and slices media items based on runtime and rating values.
* **performance.js**: High-performance dataset analysis using chaining operations.
* **shopping.js**: Sums total shopping cart values using .reduce().

### 5. Objects & Structuring (objectOperations)
Manipulating JavaScript key-value records dynamically.
* **Object-operation-simple(1).js** & **(2).js**: Covers object literal instantiation, adding key-value properties dynamically, checking key existence using the in keyword, and parsing nested elements.
* **application-controller.js**: Managing operational application states dynamically.

---

## Running Locally

To execute any file in this week's assignments, simply use Node.js from the command line:

```bash
# Running array operations
node JS-ASSIGNMENTS/week-1/arrayOperations/student.js

# Running advanced bank transaction operations
node JS-ASSIGNMENTS/week-1/arrayAdvOperations/bank-transaction.js
```
