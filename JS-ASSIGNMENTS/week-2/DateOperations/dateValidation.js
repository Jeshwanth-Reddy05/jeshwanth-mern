// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"




//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid


// 1. Enrollment Deadline Check
let enrollmentDeadline = new Date("2026-01-20");
let currDate = new Date();
// Remove time part for fair comparison
enrollmentDeadline.setHours(0,0,0,0);
currDate.setHours(0,0,0,0);

if (currDate <= enrollmentDeadline) {
    console.log("Enrollment Open");
} else {
    console.log("Enrollment Closed");
}

// Validate User Input Date
let input = "2026-02-30"; 
let parts = input.split("-");

let year = parseInt(parts[0]);
let month = parseInt(parts[1]) - 1;
let day = parseInt(parts[2]);

let date = new Date(year, month, day);

if (date.getFullYear() === year && 
    date.getMonth() === month && 
    date.getDate() === day) {
    console.log("Valid Date");
} else {
    console.log("Invalid Date");
}