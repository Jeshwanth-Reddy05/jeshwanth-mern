// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields

// Create a user object with initial properties
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log(user.name,user.email);
// Add a new property 'lastLogin' to the user object
user.lastLogin="2026-01-01";
// Update the 'role' property from "student" to "admin"
user.role="admin"
delete user.isActive;
console.log(Object.keys(user));
console.log(user)