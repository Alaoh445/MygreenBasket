// Javascript for handling the mobile menu toggle functionality in the MygreenBasket website for better user experience.
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer1 = document.querySelector('.nav-links-container1');
  const closeIcon = document.querySelector('.close-icon');
  const menuIcon = document.querySelector('.menu-icon');
  const body = document.body;

  function openMenu() {
    navLinksContainer1.classList.add('active');
    body.classList.add('menu-open');
    closeIcon.style.display = 'inline';
    menuIcon.style.display = 'none';
  }

  function closeMenu() {
    navLinksContainer1.classList.remove('active');
    body.classList.remove('menu-open');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'inline';
  }

  if (menuToggle && navLinksContainer1 && closeIcon && menuIcon) {
    menuToggle.addEventListener('click', function() {
      if (!navLinksContainer1.classList.contains('active')) {
        openMenu();
      }
    });
    closeIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      closeMenu();
    });
  }
  // End of the menu toggle code in javascript

  // Begining of Hero Section 
  const FreshGroceries = document.querySelector('.hero-image');
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      FreshGroceries.classList.add('scrolled');
    } else {
      FreshGroceries.classList.remove('scrolled');
    }
  });
  // End of Hero Section
});

// Javascript for handling the product carousel functionality in the MygreenBasket website for better user experience.
  const carousel = document.getElementById('carousel');
  const indicatorsContainer = document.getElementById('indicators');

  function scrollCarousel(direction) {
    const scrollAmount = 320;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  const cards = carousel.querySelectorAll('.product-card');
  const totalDots = Math.ceil(cards.length / 1);

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
  }

  carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const index = Math.round(scrollLeft / 320);
    indicatorsContainer.querySelectorAll('span').forEach((dot, i) =>
      dot.classList.toggle('active', i === index)
    );
  });

  // Example: Only show 5 indicators, rest as "more"
  const indicators = document.querySelectorAll('.carousel-indicators span');
  indicators.forEach((indicator, idx) => {
    if (idx < 5) {
      indicator.style.display = 'inline-block';
    } else {
      indicator.style.display = 'none';
    }
  });

  // Optionally, show a "..." or special indicator for more
  if (indicators.length > 5) {
    const more = document.createElement('span');
    more.textContent = '...';
    more.style.background = 'transparent';
    more.style.color = '#1d3c34';
    document.querySelector('.carousel-indicators').appendChild(more);
  }
  
  // Initialize international telephone input
    var input = document.querySelector("#phone");
    var errorMsg = document.querySelector("#phone-error");
    var iti = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch('https://ipapi.co/json')
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback('NG'));
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
    });

    function validatePhone() {
        if (input.value.trim()) {
            if (iti.isValidNumber()) {
                errorMsg.style.display = "none";
                input.style.borderColor = "#ccc";
            } else {
                errorMsg.style.display = "block";
                input.style.borderColor = "red";
            }
        } else {
            errorMsg.style.display = "none";
            input.style.borderColor = "#ccc";
        }
    }

    input.addEventListener('blur', validatePhone);
    input.addEventListener('change', validatePhone);
    input.addEventListener('keyup', validatePhone);

    // Optional: Prevent form submission if invalid
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        if (!iti.isValidNumber()) {
            e.preventDefault();
            errorMsg.style.display = "block";
            input.style.borderColor = "red";
            input.focus();
        }
    });
     // Back to Top button functionality
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


