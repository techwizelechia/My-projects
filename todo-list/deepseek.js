// Get references to the DOM elements
const taskInput = document.getElementById('taskInput'); // Input field
const addTaskBtn = document.getElementById('addTaskBtn'); // Add task button
const taskList = document.getElementById('taskList'); // Task list

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get the task text and remove extra spaces

  if (taskText !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText; // Set the task text

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li); // Remove the task when the delete button is clicked
    });

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  } else {
    alert('Please enter a task!'); // Show an alert if the input is empty
  }
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});