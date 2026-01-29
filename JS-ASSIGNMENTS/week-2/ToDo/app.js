// TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
import { addTask,getAllTasks,completeTask } from './task.js';

// 1. Add some tasks
addTask("task1","medium","2026-01-26");
addTask("task2","high","2026-01-25");
addTask("task3","low","2026-01-23");

// 2. Display all tasks
console.log(getAllTasks());

// 3. Complete a task
completeTask("task1");
// 4. Display all tasks again
console.log(getAllTasks());