const header = document.getElementById('header');
const floatingNav = document.getElementById('floating-nav');

let lastScroll = 0;
let timeoutId = null;
const DELAY = 50;

function isHeaderVisible() {
  const rect = header.getBoundingClientRect();
  return rect.bottom > 0;
}

function showFloatingNav() {
  floatingNav.classList.add('visible');
  floatingNav.classList.remove('hidden');
}

function hideFloatingNav() {
  floatingNav.classList.remove('visible');
  floatingNav.classList.add('hidden');
}

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (isHeaderVisible()) {
    hideFloatingNav();
    lastScroll = currentScroll;
    return;
  }

  const scrollingUp = currentScroll < lastScroll;

  clearTimeout(timeoutId);

  if (scrollingUp) {
    showFloatingNav();
  } else {
    hideFloatingNav();
  }

  lastScroll = currentScroll;
});
