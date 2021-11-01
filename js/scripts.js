//Business Logic

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
};

//UI Logic
let toDoList = new ToDoList();

function updateDisplay(toDoList) {
  $("#results").empty();
  //replace all elements
  for (let i = 1; i < toDoList.currentId + 1; i++) {
    const cardTitle = "<div class='card'><div class='card-body'><h5 class='card-title'>" + toDoList.getTask(i).description + "</h5><button class='submit remove'>Remove</button></div></div>"
    $("button.remove").click(function() {
      toDoList.removeTask(i); 
      updateDisplay();     
    });
    $("#results").append(cardTitle);
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    const newTask = new Task($("#task1").val());
    toDoList.addTask(newTask);
    updateDisplay(toDoList);
  });

});