// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90


// Create an object 'marks' with subject names as keys and scores as values
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum=0;
// Loop through each property in the 'marks' object and add its value to 'sum'
for(let i in marks){
     sum+=marks[i];
     
}
console.log(sum);
console.log(sum/4);
//find the highest marks
for(let i in marks){
    let hs=0
    if(marks[i]>hs){
        hs=marks[i];
        
        
    }
     
}
// Add a new subject 'computer' with marks 90 to the object
marks.computer=90;