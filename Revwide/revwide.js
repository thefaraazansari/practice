const teamNavLinks = document.getElementsByClassName("link");

[...teamNavLinks].forEach(link => {
    link.addEventListener("click", activeSelected);
});

function activeSelected(event) {
    const active = event.target;

    [...teamNavLinks].forEach(link => {
        link.classList.remove("active");
    });

    active.classList.add("active");
}