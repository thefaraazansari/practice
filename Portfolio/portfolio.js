const navMenu = document.getElementsByClassName("link");

[...navMenu].forEach(link => {
    link.addEventListener("click", getSelected);
});

function getSelected(event) {
    const active = event.target;

    [...navMenu].forEach(link => {
        link.classList.remove("active");
    });

    active.classList.add("active");
}