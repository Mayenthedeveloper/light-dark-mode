const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Dark or Light Images
// Dark Mode Styles
// Light Mode Styles
// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);
