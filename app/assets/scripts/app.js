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