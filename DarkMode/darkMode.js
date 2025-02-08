// Get the toggle button element
const toggleButton = document.getElementById('darkModeToggle');

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

// Add event listener to the button
toggleButton.addEventListener('click', () => {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark-mode');

  // Save the current mode to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});
