# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* Create and/or navigate to the directory you would like to contain this project on your computer.
* Initialize a git repository by typing **git init** in the terminal.
* Type **git clone https://github.com/Frank-Proulx/insert_name_here** to clone the repository to your local machine.
* Open the file "index.html" in the newly created "portfolio-landing" folder using either the GUI in your finder window, or typing **cd insert_name_here** and pressing return to navigate into the project folder, and then typing **open index.html** in the terminal from within the **insert_name_here** folder.  

## Link to [GitHub Pages](https://frank-proulx.github.io//)

## Known Bugs

* _Any known issues_
* _should go here_

## License

[MIT](https://opensource.org/licenses/MIT)

If you have any issues, questions, ideas or concerns, please reach out to me at my email and/or make a contribution to the code via GitHub.

Copyright (c) 2021 Frank Proulx

## Tests

Objects


ToDoList
  Properties
    Array of tasks
  Methods
    assignId()
    addTask()
    removeTask()
    getAllTasks()
    getCompletedTasks()
    getUncompletedTasks()
Task
  Properties
    Complete (bool)
    Description (string)
    id (int)

  Methods
    completeTask()

### Describe: Task()
Test: It should return an object with properties of complete (bool), description (string)
Code: 
    let task1 = new Task("ToDo");
    task1.description;
Result: "ToDo"

### Describe Task.prototype.completeTask()
Test: It should update the status of complete from a bool of false to a bool of true
Code: 
    task1.completeTask()
    task1.complete;
Result: "true"

### Describe: ToDoList()
Test: It should return an object with a single property of "tasks" containing an empty object
Code:
    let todo = new ToDoList();
    todo.tasks;
Result: {}

### Describe: ToDoList.prototype.assignId()
Test: It should assign a unique ID to each task added to the to do list
Code: 
    let todo = new ToDoList();
    todo.addTask("task1");
    task1.id;
Result: 1

### Describe: ToDoList.prototype.addTask()
Test: It should add the given task to the to do list
Code: 
    let todo = new ToDoList();
    todo.addTask("task1");
    todo.tasks;
Result: {id: task}

### Describe: ToDoList.prototype.removeTask()
Test: It should remove the task from the to do list
Code:
    todo.removeTask("task1");
    todo.tasks;
Result: {}