import { users } from "./data.js";

//MODULE-1 :USER PROCESSING ENGINE

//-> Get only active users
let activeUsers = users.filter((user) => user.active);

console.log("Active Users are:", activeUsers);

//-> Extract names of active users
let activeUserNames = users
  .filter((user) => user.active)
  .map((user) => user.name);

console.log("Active User Names are:", activeUserNames);

//-> Check if any admin exists
let adminExists = users.find((user) => user.role === "admin");

console.log("admin ", adminExists !== undefined ? "exits" : "not exists");

//-> Find user by id
let userById = users.find((obj) => obj.id === 2);

console.log("User with ID 2 is:", userById);

//-> Deactivate a user immutably
let updatedUsers = users.map((user) => {
  if (user.id === 1) {
    return { ...user, active: false };
  }
  return user;
});
console.log("Updated Users:", updatedUsers);