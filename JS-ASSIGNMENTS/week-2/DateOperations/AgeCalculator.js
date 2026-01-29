// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years

let dob=new Date("2000-05-15")


let d1=new Date();
//find years
let year=d1.getFullYear()-dob.getFullYear()
let day=d1.getDate()-dob.getDate()

console.log(year)