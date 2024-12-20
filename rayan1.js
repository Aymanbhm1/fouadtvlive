
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    openMenu.addEventListener('click', () => {
      sidebar.style.right = '0';
      overlay.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
      sidebar.style.right = '-250px';
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
      sidebar.style.right = '-250px';
      overlay.style.display = 'none';
    });
