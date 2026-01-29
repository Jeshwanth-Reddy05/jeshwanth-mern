import { roles } from "./data.js";
//MODULE 4: ROLE & PERMISSION ENGINE
//-> Get all role names
let roleNames = Object.keys(roles);
console.log(roleNames);
//-> Check if student can delete
let canDelete = roles.student.includes("delete");
console.log(canDelete);
//-> Create a flat list of all unique permissions

//-> Add new role moderator immutably
let updatedRoles = { ...roles, moderator: ["create", "update"] };
console.log(updatedRoles);