// Navbar Scroll & Active State
const navbar = document.getElementById('mainNavbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  // Shadow on scroll
  if (window.scrollY > 20) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }

  // Active state update
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) {
      current = sec.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Fade Up Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── LOGIKA POP-UP / MODAL DETAIL PRODUK ── */
document.addEventListener("DOMContentLoaded", function() {
  const productModal = document.getElementById('productModal');
  
  if (productModal) {
    productModal.addEventListener('show.bs.modal', function (event) {
      // Menangkap tombol yang diklik
      const button = event.relatedTarget;
      
      // Mengambil data dari atribut "data-" di tombol HTML
      const title = button.getAttribute('data-title');
      const imgSrc = button.getAttribute('data-img');
      const fullDesc = button.getAttribute('data-fulldesc');
      
      // Memasukkan data ke dalam Pop-Up Modal
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalImg').src = imgSrc;
      document.getElementById('modalDesc').textContent = fullDesc;
    });
  }
});

// Membuat objek structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CV Adhigana Tri Perkasa",
  "url": "https://adhiganatriperkasa.com/"
};

// Membuat elemen <script> baru
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(structuredData);

// Memasukkan elemen script tersebut ke dalam <head>
document.head.appendChild(script);
