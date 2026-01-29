import { cart, courses } from "./data.js";

//MODULE 3: SHOPPING CART ENGINE

//-> Merge cart with courses to get full course info
let mergedCart = cart.map((item) => {
  let course = courses.find((c) => c.id === item.courseId);
  return {
    ...course,
    qty: item.qty,
  };
});
console.log(mergedCart);
//-> Calculate total cart amount
let totalCartValue = mergedCart.reduce((total, item) => (total += item.qty * item.price),0);
console.log(totalCartValue);
//-> Increase quantity of a course (immutably)

//-> Remove a course from cart