const headerMax = 80;
const allSection = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.site-nav-links a[href^="#"]');
const backToTopButton = document.getElementById('backToTop');

function setActiveLink(id) {
  allNavLinks.forEach(function(link) {
    const hrefLink = link.getAttribute('href');
    if (hrefLink === '#' + id) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function handleScroll() {
  const currentScrollPosition = window.scrollY;
  
  allSection.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (
      currentScrollPosition >= sectionTop - headerMax - 20 &&
      currentScrollPosition < sectionTop + sectionHeight - headerMax - 20
    ) {
      setActiveLink(sectionId);
    }
  });

  if (backToTopButton) {
    if (window.scrollY > 450) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

if (backToTopButton) {
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
