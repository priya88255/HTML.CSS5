const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", toggleTheme);

function toggleTheme() {
    body.classList.toggle("dark-mode");
}

// You can add more JavaScript functionality as needed

