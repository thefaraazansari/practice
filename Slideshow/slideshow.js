const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const images = [...document.getElementsByClassName("slide")];
let count = 0;

prevBtn.addEventListener("click", prevBtnClicked);
nextBtn.addEventListener("click", nextBtnClicked);

function changeImageSlide() {
    images.forEach(slide => {
        slide.classList.remove("visible");
    });

    images[count % images.length].classList.add("visible");
}

function prevBtnClicked() {
    --count;
    changeImageSlide();
}

function nextBtnClicked() {
    ++count;
    changeImageSlide();
}