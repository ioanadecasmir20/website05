document.addEventListener('DOMContentLoaded', () => {
  console.log('LUCAT homepage loaded.');

  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});
