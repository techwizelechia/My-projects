// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please add task!");
    return;
  }

  // Create a list item
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  // Add a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.addEventListener("click", () => taskItem.remove());

  // Add the task and delete button to the list
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = "";
};

// Add a task when clicking the button
addTaskBtn.addEventListener("click", addTask);

// Add a task when you press Enter
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

  // Toggle completion when clicking on task
  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });
