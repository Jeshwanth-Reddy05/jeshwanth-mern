//Assignment 2: Online Course Name Processor

const courses = ["javascript", "react", "node", "mongodb", "express"];
let r1=courses.filter(ele => ele.length>5)
console.log(r1)

let r2=courses.map(ele => ele.toUpperCase(ele))
console.log(r2)

let r3=courses.find(ele =>ele ==="react")
console.log(r3)

let r4=courses.findIndex(ele =>ele ==="node")
console.log(r4)