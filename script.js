// Hamburger menu logic (shared for all pages)
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const closeSidebar = document.getElementById("closeSidebar");
  const mobileHeader = document.getElementById("mobileHeader");

  function openSidebar() {
    if (sidebar) sidebar.classList.add("active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("hidden");
    if (mobileHeader) mobileHeader.style.display = "none";
    setTimeout(() => {
      if (sidebarOverlay) sidebarOverlay.classList.add("sidebar-overlay");
    }, 10);
  }
  function closeSidebarFn() {
    if (sidebar) sidebar.classList.remove("active");
    if (sidebarOverlay) {
      sidebarOverlay.classList.add("hidden");
      sidebarOverlay.classList.remove("sidebar-overlay");
    }
    if (mobileHeader) mobileHeader.style.display = "";
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebarFn);
  if (closeSidebar) closeSidebar.addEventListener("click", closeSidebarFn);

  // Responsive: menampilkan sidebar secara default pada md+
  function handleResize() {
    if (window.innerWidth >= 768) {
      if (sidebar) sidebar.classList.add("active");
      if (sidebarOverlay) sidebarOverlay.classList.add("hidden");
      if (mobileHeader) mobileHeader.style.display = "none";
    } else {
      if (sidebar) sidebar.classList.remove("active");
      if (sidebarOverlay) sidebarOverlay.classList.add("hidden");
      if (mobileHeader) mobileHeader.style.display = "";
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();

  // Page loader logic
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", function () {
      loader.style.display = "none";
    });
  }
});
