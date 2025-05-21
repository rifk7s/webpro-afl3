document.addEventListener("DOMContentLoaded", () => {
  initSidebarMenu();
  initThemeToggle();
  initLoader();
  initResponsiveSidebar();
});

function initSidebarMenu() {
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
}

function initThemeToggle() {
  const themeToggleButtons = document.querySelectorAll("#theme-toggle-mobile, #theme-toggle-desktop");
  const moonIcon = "fa-moon";
  const sunIcon = "fa-sun";

  function updateThemeButton(button, isDark) {
    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.toggle(moonIcon, !isDark);
      icon.classList.toggle(sunIcon, isDark);
    }
    if (button.id === 'theme-toggle-desktop') {
      const span = button.querySelector('span');
      if (span) span.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
  }

  function applyTheme() {
    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = userTheme === "dark" || (!userTheme && systemPrefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    themeToggleButtons.forEach(button => updateThemeButton(button, isDark));
  }

  function toggleTheme() {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    applyTheme();
  }

  themeToggleButtons.forEach(button => {
    button.addEventListener("click", toggleTheme);
  });

  applyTheme();
}

function initLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.display = "none";
    });
  }
}

function initResponsiveSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const mobileHeader = document.getElementById("mobileHeader");

  function handleResize() {
    if (window.innerWidth >= 768) {
      if (sidebar) sidebar.classList.add("active");
      if (sidebarOverlay) sidebarOverlay.classList.add("hidden");
      if (mobileHeader) mobileHeader.style.display = "none";
      return;
    }
    if (sidebar) sidebar.classList.remove("active");
    if (sidebarOverlay) sidebarOverlay.classList.add("hidden");
    if (mobileHeader) mobileHeader.style.display = "";
  }

  window.addEventListener("resize", handleResize);
  handleResize();
}
