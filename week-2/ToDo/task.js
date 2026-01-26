import { validateTitle,validatePriority,validateDueDate } from './validator.js';
const tasks = [];
class Task{
    title;
    priority;
    dueDate;
    isCompleted;
    constructor(title,priority,dueDate){
        this.title=title;
        this.priority=priority;
        this.dueDate=dueDate;
        this.isCompleted=false;
    }
}
// 1. Add new task. 
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    // If valid, add to tasks array
    if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
        tasks.push(new Task(title,priority,dueDate));
        return "successfully added";
    }else{
        return "failed to add";
    }
}

// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks;
}
// 3. Mark task as complete
function completeTask(taskId) {
  // Find task and mark as complete
  for(let t of tasks){
    if(t.title===taskId){
        t.isCompleted=true;
    }
  }
}

// Export functions
export {addTask,getAllTasks,completeTask};