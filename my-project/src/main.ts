function showHalo() {
  const root = document.getElementById("ts-root");
  if (root) {
    root.innerHTML = `<h1 style="color:white; text-align:center; margin-top:20px;">Halo</h1>`;
  }
}

// jalankan saat halaman selesai load
document.addEventListener("DOMContentLoaded", showHalo);
