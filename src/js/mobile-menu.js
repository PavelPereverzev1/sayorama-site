const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', event => {
  event.stopPropagation();
  dropdown.classList.toggle('show');
  menuBtn.classList.toggle('active');
});

document.addEventListener('click', event => {
  if (!dropdown.contains(event.target) && !menuBtn.contains(event.target)) {
    dropdown.classList.remove('show');
    menuBtn.classList.remove('active');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdown.classList.remove('show');
    menuBtn.classList.remove('active');
  });
});
