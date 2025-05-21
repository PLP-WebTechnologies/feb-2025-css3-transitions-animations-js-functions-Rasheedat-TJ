// Load theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.body.classList.add("dark");
});

// Toggle Dark Mode and Store Preference
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
});

// Animate Box on Click
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.toggle("animate");
});
