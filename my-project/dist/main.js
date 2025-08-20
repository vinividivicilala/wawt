"use strict";
// main.ts
document.addEventListener("DOMContentLoaded", () => {
    // Buat elemen baru
    const newText = document.createElement("h2");
    newText.innerText = "Halo, teks ini ditambahkan dari TypeScript!";
    // Styling sederhana
    newText.style.color = "white";
    newText.style.textAlign = "center";
    newText.style.marginTop = "40px";
    newText.style.fontWeight = "600";
    // Sisipkan ke body (atau bisa ke section tertentu)
    document.body.appendChild(newText);
});
