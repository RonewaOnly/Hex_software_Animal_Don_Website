  // Responsive Navigation Menu
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Search Bar Toggle
  const searchBar = document.querySelector('.search-bar');
  const searchInput = searchBar.querySelector('input');

  searchBar.addEventListener('click', () => {
    searchInput.focus();
    searchInput.style.backgroundColor = '#f0f0f0';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.style.backgroundColor = 'white';
  });

  // Smooth Scroll for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Highlight Active Section in Navigation
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach((item) => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  function toggleMenuIcon() {
    var barIcon = document.getElementById('bar-icon');
    var closeIcon = document.getElementById('close-icon');
  
    // Toggle between showing the bar icon and the close icon
    if (barIcon.style.display === 'none') {
      barIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
    } else {
      barIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
    }
  }
  