document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
  
    hamburgerMenu.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  
  