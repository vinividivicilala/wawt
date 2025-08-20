// main.ts
function showPageContent(el: HTMLElement | null) {
  document.querySelectorAll("div[id^='page']").forEach(div => {
    (div as HTMLElement).style.display = "none";
  });
  if (el) el.style.display = "block";
}

async function handleNavigation(state: any) {
  switch (state.page) {
    case "detail-pengumuman": {
      const id = state.announcementId || state.id;
      if (id) {
        showPageContent(document.getElementById("page9"));
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

async function navigateTo(page: string, extra: any = {}) {
  const state = { page, ...extra };
  window.history.pushState(state, "", window.location.pathname);
  await handleNavigation(state);
}

window.addEventListener("popstate", async (event) => {
  if (event.state) {
    await handleNavigation(event.state);
  } else {
    showPageContent(document.getElementById("page1"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      const page = (btn as HTMLElement).dataset.page;
      if (page) navigateTo(page);
    });
  });
});
