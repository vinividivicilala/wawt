document.addEventListener("DOMContentLoaded", () => {
  const newText = document.createElement("h2");
  newText.innerText = "Halo, teks ini ditambahkan dari TypeScript!";
  
  // Styling khusus
  newText.style.color = "white";
  newText.style.textAlign = "center";
  newText.style.marginTop = "40px";
  newText.style.fontWeight = "600";

  // Taruh di dalam <main id="app"> supaya tidak ganggu layout lain
  const app = document.getElementById("app");
  app?.appendChild(newText);
});
