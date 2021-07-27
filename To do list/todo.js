let idCount = 0;
document.querySelector("#add-btn").addEventListener("click", addCheckList);

function addCheckList() {
    idCount += 1;
    document.querySelector(".text-msg").classList.add("hide");
    document.querySelector(".task-container").insertAdjacentHTML("beforeend",
        `<div class="task-info">
            <input type="checkbox" name="checkbox" id="task${idCount}">
            <label for="task${idCount}">
                <div class="unchecked"></div>
                <div class="checked"></div>
            </label>
            <div contenteditable="true"></div>
            <button class="clear" onClick="clearBtnClicked(event)"></button>
        </div>`);
    document.querySelector(`.task-info #task${idCount}~div`).focus();
    updateTaskCount();
}

function clearBtnClicked(event) {
    document.querySelector(".task-container").removeChild(event.target.parentElement);
    idCount -= 1;
    updateTaskCount();
}

function updateTaskCount() {
    document.querySelector(".user-heading span").innerText = idCount + " Tasks";
    let userValue = {
        count: idCount,
        name: "Faraaz"
    }
    localStorage.setItem("Names", JSON.stringify(userValue));
    console.log(localStorage.getItem("Names"));
    console.log(JSON.parse(localStorage.getItem("Names")));
}