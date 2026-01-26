// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

// Assignment 1: Date Creation & Extraction (Beginner)

//1. Create a Date object for current date & time.
let date = new Date();
console.log(date);

//2. Extract and display:
//* Year
let year = date.getFullYear();

//* Month (human readable)
let month = date.getMonth();

//* Date
let day = date.getDate();

//* Day of week
let dayOfW = date.getDay();

//* Hours, minutes, seconds
let hh = date.getHours();

let min = date.getMinutes();

let sec = date.getSeconds();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function addZero(n) {
  n = n.toString();
  if (n.length < 2) {
    return "0" + n;
  }
  return n;
}

console.log("Year:", year);
console.log("Month:", months[month]);
console.log("Date:", day);
console.log("Day:", days[dayOfW]);
console.log("Time:", addZero(hh), ":", addZero(min), ":", addZero(sec));

//3. Display the date in this format:DD-MM-YYYY HH:mm:ss
console.log(
  `date : ${addZero(day)}-${addZero(month + 1)}-${year} ${addZero(hh)}:${addZero(min)}:${addZero(sec)}`,
);

