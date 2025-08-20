"use strict";
// main.ts
// Helper: sembunyikan semua halaman, lalu tampilkan target
function showPageContent(el: HTMLElement | null) {
  document.querySelectorAll("div[id^='page']").forEach(div => {
    (div as HTMLElement).style.display = "none";
  });
  if (el) el.style.display = "block";
}

// Handler utama untuk ganti halaman
async function handleNavigation(state: any) {
  switch (state.page) {
    case "detail-pengumuman": {
      const id = state.announcementId || state.id;
      if (id) {
        showPageContent(document.getElementById("page9"));
        // fungsi ini harus sudah ada di project-mu
        await showAnnouncementDetailById(id);
      }
      break;
    }

    case "masukan":
      showPageContent(document.getElementById("page7"));
      await loadFeedback().catch(console.error);
      break;

    case "forum":
      showPageContent(document.getElementById("page8"));
      break;

    case "sejarah":
      showPageContent(document.getElementById("page10"));
      break;

    default:
      showPageContent(document.getElementById("page1"));
  }
}

// Fungsi untuk pindah halaman via klik
async function navigateTo(page: string, extra: any = {}) {
  const state = { page, ...extra };
  window.history.pushState(state, "", window.location.pathname);
  await handleNavigation(state);
}

// Tombol back/forward browser
window.addEventListener("popstate", async (event) => {
  if (event.state) {
    await handleNavigation(event.state);
  } else {
    showPageContent(document.getElementById("page1"));
  }
});

// Auto binding tombol navigasi
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      const page = (btn as HTMLElement).dataset.page;
      if (page) navigateTo(page);
    });
  });
});
