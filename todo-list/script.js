// sellecting elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// function to add new task
const addTask = () => {
const taskText = taskInput.value.trim();
if (taskText === ""){
   alert("Please add task!")
   return
}

// create a new list item
const taskItem = document.createElement("li");
taskItem.textContent = taskText;

// add a delete button
const deleteButton = document.createElement("button");
deleteButton.textContent ="delete";
deleteButton.addEventListener(
  "click" ,() => taskItem.remove()
)

// add the task and delete button to the list
taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem);

// clear the input field
taskInput.value = ""
};

// add a task when clicking the button
addTaskButton.addEventListener(
"click", addTask
)

// add a task when pressing enter
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
      addTask();
    }
  }
);
