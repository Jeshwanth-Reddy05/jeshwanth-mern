// ASSIGNMENT 
//You are building a shopping cart summary for an e-commerce website.
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let r1=cart.filter(ele => ele.inStock==true)
console.log(r1)

let r2=cart.map(ele => {
  return {
    name:ele.name,
    price:ele.price
  }
})
console.log("after adding :",r2)

let r3=cart.reduce((acc,ele)=>acc+ele.price,0)
console.log("total price :",r3);

let r4=cart.find(ele => ele.name==="Mouse")
  console.log("mouse :",r4)

  let r5=cart.findIndex(ele => ele.name==="Keyboard")
  console.log("index of Monitor :"+r5)