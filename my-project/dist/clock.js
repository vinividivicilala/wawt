"use strict";
function updateClock() {
    const clockEl = document.getElementById("digitalClock");
    if (!clockEl)
        return;
    const now = new Date();
    const pad = (num) => (num < 10 ? "0" + num : num.toString());
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}
// langsung tampil saat pertama load
updateClock();
// update setiap 1 detik
setInterval(updateClock, 1000);
