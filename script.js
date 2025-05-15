// Hamburger menu logic
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebar = document.getElementById('closeSidebar'); // This element might not exist on all pages
const mobileHeader = document.getElementById('mobileHeader');

function openSidebar() {
  if (sidebar) sidebar.classList.add('active');
  if (sidebarOverlay) {
    sidebarOverlay.classList.remove('hidden');
    setTimeout(() => sidebarOverlay.classList.add('sidebar-overlay'), 10); // For transition
  }
  if (mobileHeader) mobileHeader.style.display = 'none';
}

function closeSidebarFn() {
  if (sidebar) sidebar.classList.remove('active');
  if (sidebarOverlay) {
    sidebarOverlay.classList.add('hidden');
    sidebarOverlay.classList.remove('sidebar-overlay');
  }
  if (mobileHeader) mobileHeader.style.display = ''; // Re-show header
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', openSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeSidebarFn);
}

// Event listener for a dedicated close button within the sidebar (if it exists on the page)
if (closeSidebar) {
  closeSidebar.addEventListener('click', closeSidebarFn);
}

// Responsive: show/hide sidebar and mobile header based on screen size
function handleResize() {
  if (window.innerWidth >= 768) { // md breakpoint (768px)
    if (sidebar) sidebar.classList.add('active'); 
    if (sidebarOverlay) sidebarOverlay.classList.add('hidden'); 
    if (mobileHeader) mobileHeader.style.display = 'none'; 
  } else {
    // On smaller screens, the sidebar state ('active' class) is primarily managed by hamburger interactions.
    // This function ensures the mobile header visibility is correct based on the sidebar's state.
    if (mobileHeader) {
        if (sidebar && sidebar.classList.contains('active')) {
            mobileHeader.style.display = 'none'; // Hide header if sidebar is open
        } else {
            mobileHeader.style.display = ''; // Show header if sidebar is closed
        }
    }
    // If sidebar is not active (closed) on mobile, ensure overlay is hidden.
    if (sidebar && !sidebar.classList.contains('active') && sidebarOverlay) {
        sidebarOverlay.classList.add('hidden');
    }
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', () => {
  handleResize(); // Initial check on load to set correct states

  // Specifically for mobile view on initial load:
  // If the sidebar is not meant to be initially active (e.g. no 'active' class set by default HTML),
  // ensure it's visually closed and the mobile header is visible.
  if (window.innerWidth < 768) {
    if (sidebar && !sidebar.classList.contains('active')) {
        sidebar.classList.remove('active'); // Explicitly ensure it's closed
        if (sidebarOverlay) sidebarOverlay.classList.add('hidden');
        if (mobileHeader) mobileHeader.style.display = '';
    } else if (sidebar && sidebar.classList.contains('active')) {
        // If sidebar IS active on mobile load (e.g. due to prior interaction or specific setup),
        // ensure mobile header is hidden.
        if (mobileHeader) mobileHeader.style.display = 'none';
    }
  }
});
