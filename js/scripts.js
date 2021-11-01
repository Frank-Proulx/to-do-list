function Task(description) {
  this.description = description;
  this.complete = false;
}

Task.prototype.completeTask = function() {
  this.complete = true;
};

function ToDoList() {
  this.tasks = {};
}

