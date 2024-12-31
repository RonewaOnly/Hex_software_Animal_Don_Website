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

  // Dynamic Button Text Animation
  const donateBtn = document.querySelector('.donate-btn');

  donateBtn.addEventListener('mouseover', () => {
    donateBtn.textContent = 'Click to Donate!';
  });

  donateBtn.addEventListener('mouseout', () => {
    donateBtn.textContent = 'Donate Now';
  });


  function openDonationModal() {
    document.getElementById('donation-modal').style.display = 'flex';
  }

  function openVolunteerModal() {
    document.getElementById('volunteer-modal').style.display = 'flex';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  function nextStep(currentStep, nextStep) {
    document.getElementById(currentStep).style.display = 'none';
    document.getElementById(nextStep).style.display = 'block';
  }

  // Slideshow
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function changeSlide(direction) {
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  showSlide(currentSlideIndex);