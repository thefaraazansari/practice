const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const value = document.getElementById("count");
let count = 0;

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)

function increment() {
    count = count + 1;
    value.innerText = count;
}

function decrement() {
    count = count - 1;
    value.innerText = count;
}