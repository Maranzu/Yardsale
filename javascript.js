const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    // Ensure button exists before trying to set its text content
    if (darkModeToggle && currentTheme === 'dark') {
        darkModeToggle.textContent = 'Toggle Light Mode';
    } else if (darkModeToggle) { // If theme is light or button exists for other reasons
        darkModeToggle.textContent = 'Toggle Dark Mode';
    }
} else {
    // Default to light theme if no preference is saved
    body.setAttribute('data-theme', 'light');
    if (darkModeToggle) {
        darkModeToggle.textContent = 'Toggle Dark Mode';
    }
}

// Ensure button exists before adding event listener
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        let newTheme;
        if (body.getAttribute('data-theme') === 'dark') {
            newTheme = 'light';
            darkModeToggle.textContent = 'Toggle Dark Mode';
        } else {
            newTheme = 'dark';
            darkModeToggle.textContent = 'Toggle Light Mode';
        }
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}
