document.addEventListener('DOMContentLoaded', () => {
  console.log('LUCAT homepage loaded.');

  // Toggle mobile menu
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});

