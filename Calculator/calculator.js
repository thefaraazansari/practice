let buttons = [...document.querySelectorAll(".btn")];
buttons.forEach(btn => {
    btn.addEventListener("click", buttonValue);
});

function buttonValue(event) {
    performAction(event.target.getAttribute("data-value"));
}

function performAction(nextValue) {
    const displayHistory = document.querySelector("#top");
    let historyValue = displayHistory.innerText;
    let historyText;
    const displayText = document.querySelector("#bottom");
    let previousValue = displayText.innerText;
    let updatedText;
    switch (nextValue) {
        case "C":
            historyText = "";
            updatedText = "";
            break;
        case "backspace":
            historyText = "";
            updatedText = previousValue.slice(0, -1);
            break;
        case "=":
            historyText = previousValue;
            updatedText = Number(eval(previousValue).toFixed(4));
            break;
        case ".":
            if (previousValue.includes(".")) {
                return;
            } else {
                updatedText = previousValue + nextValue;
            }
        case "+":
        case "-":
        case "/":
        case "*":
            if (['+', '-', '/', '*'].includes(previousValue.slice(-1))) {
                updatedText = previousValue.slice(0, -1);
                updatedText += nextValue;
            } else {
                updatedText = previousValue + nextValue;
            }
            break;
        default:
            updatedText = previousValue + nextValue;
            break;
    }
    displayText.innerText = updatedText;
    if (historyText !== undefined)
        displayHistory.innerText = historyText;
}