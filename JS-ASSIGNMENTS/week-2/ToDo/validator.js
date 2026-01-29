// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (!title || title.length < 3) {
    return false;
  }
  return true;
}
// 2. Validate priority (must be: low, medium, high).
function validatePriority(priority) {
  if (priority === "low" || priority === "medium" || priority === "high") {
    return true;
  }
  return false;
}
// 3. Validate due date (must be future date)
function validateDueDate(date) {
  let currDate = new Date();
  let dueDate = new Date(date);
  currDate.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  return dueDate > currDate;
}

export { validateTitle, validatePriority, validateDueDate };