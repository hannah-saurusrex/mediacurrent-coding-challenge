function darkMode() {
    var x = document.getElementById("dark-mode");
    if (x.innerHTML === "Dark Mode") {
        x.innerHTML = "Light Mode"; // change text to read Light Mode on click
    } else {
        x.innerHTML = "Dark Mode";
    }
    var element = document.body;
    element.classList.toggle("dark-mode"); // on click, toggle on the Dark Mode class styles
}