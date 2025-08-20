function updateClock() {
    var clockEl = document.getElementById("digitalClock");
    if (!clockEl)
        return;
    var now = new Date();
    var pad = function (num) { return (num < 10 ? "0" + num : num.toString()); };
    var hours = pad(now.getHours());
    var minutes = pad(now.getMinutes());
    var seconds = pad(now.getSeconds());
    clockEl.textContent = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
// langsung tampil saat pertama load
updateClock();
// update setiap 1 detik
setInterval(updateClock, 1000);
