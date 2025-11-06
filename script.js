const themeToggle = document.getElementById("themeToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check saved theme in localStorage
let currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light");
} else if (currentTheme === "dark") {
  document.body.classList.remove("light");
} else if (prefersDarkScheme.matches) {
  document.body.classList.remove("light");
} else {
  document.body.classList.add("light");
}

updateButtonText();

// Toggle theme manually
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Save user preference
  const newTheme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);

  updateButtonText();
});

function updateButtonText() {
  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "🌙 Dark Mode";
  } else {
    themeToggle.textContent = "🌞 Light Mode";
  }
}

