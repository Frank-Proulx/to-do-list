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

ToDoList.prototype.removeTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

ToDoList.prototype.getTask = function(id) {
  if (this.tasks[id] != undefined) {
    return this.tasks[id];
  }
  return false;
}