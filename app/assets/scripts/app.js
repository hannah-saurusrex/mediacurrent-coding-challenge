function darkMode() {
    var x = document.getElementById("dark-mode");
    if (x.innerHTML === "Dark Mode") {
        x.innerHTML = "Light Mode";
    } else {
        x.innerHTML = "Dark Mode";
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// function classToggle() {
//     this.classList.toggle('.light-mode');
//     this.classList.toggle('.dark-mode');
// }

// document.getElementById('theme').addEventListener('click', classToggle);

// document.getElementById("theme").addEventListener('click', function(e) {
//     (event.target.checked) ? document.html.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
// });

// const toggleSwitch = document.querySelector('.theme-change input[type="checkbox"');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);