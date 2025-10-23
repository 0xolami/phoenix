const toggle = document.getElementById('themeToggle');
const body = document.body;
let darkMode = true;


toggle.addEventListener('click', () => {
darkMode = !darkMode;
if (darkMode) {
body.classList.remove('light');
body.classList.add('dark');
toggle.src = 'toggle-dark.png';
} else {
body.classList.remove('dark');
body.classList.add('light');
toggle.src = 'toggle-light.png';
}
});