function Task(description) {
  this.description = description;
  this.complete = false;
}

Task.prototype.completeTask = function() {
  this.complete = true;
};

function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};