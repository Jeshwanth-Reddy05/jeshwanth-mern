// Assignment 1: Daily Temperature Analyzer
const temperatures = [32,35, 28, 40, 38, 30, 42];
let r1=temperatures.filter(ele => ele<35)
console.log(r1)

let r2=temperatures.map(ele => (ele *(9/5)+32))
console.log(r2)

let r3=temperatures.reduce((acc,ele)=>acc+ele )
console.log(r3/temperatures.length)

let r4=temperatures.find(ele => ele>40)
console.log(r4)

let r5=temperatures.findIndex(ele => ele===28)
console.log(r5)