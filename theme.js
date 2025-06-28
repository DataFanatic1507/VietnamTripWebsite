function getSavedTheme() {
  if (localStorage.getItem("theme")) return localStorage.getItem("theme");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").textContent = "🌞";
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").textContent = "🌙";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTheme(getSavedTheme());

  document.getElementById("theme-toggle").onclick = function() {
    const dark = document.body.classList.contains("dark-mode");
    setTheme(dark ? "light" : "dark");
  };
});
