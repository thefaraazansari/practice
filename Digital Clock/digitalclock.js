function showTime() {
    const today = new Date();
    const timeToShow = ('0' + today.getHours()).slice(-2) + ":" +
        ('0' + today.getMinutes()).slice(-2) + ":" +
        ('0' + today.getSeconds()).slice(-2);
    document.querySelector("h1").innerText = timeToShow;
}
setInterval(showTime, 1000);