// ══════════════════════════════════════════════════════
// 1. NAVBAR SCROLL & ACTIVE STATE (FIXED)
// ══════════════════════════════════════════════════════
const navbar = document.getElementById('mainNavbar');
// FIX: Hanya pilih .nav-link yang ada di dalam #mainNavbar agar tidak merusak tombol katalog
const navLinks = document.querySelectorAll('#mainNavbar .nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  // Shadow on scroll
  if (window.scrollY > 20) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }

  // Active state update berdasarkan section scroll
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

// ══════════════════════════════════════════════════════
// 2. FADE UP ANIMATION
// ══════════════════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ══════════════════════════════════════════════════════
// 3. LOGIKA POP-UP / MODAL DETAIL PRODUK
// ══════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function() {
  const productModal = document.getElementById('productModal');
  
  if (productModal) {
    productModal.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget;
      const title = button.getAttribute('data-title');
      const imgSrc = button.getAttribute('data-img');
      const fullDesc = button.getAttribute('data-fulldesc');
      
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalImg').src = imgSrc;
      document.getElementById('modalDesc').textContent = fullDesc;
    });
  }
});

// ══════════════════════════════════════════════════════
// 4. CLEAN RESET TABS USING NATIVE BOOTSTRAP HOOKS (FIXED ANTI-LAG)
// ══════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function () {
  const catalogTabs = document.querySelectorAll('.catalog-tab');
  
  catalogTabs.forEach(tab => {
    // Menggunakan event resmi 'show.bs.tab' bawaan Bootstrap agar seirama dengan jalannya framework
    tab.addEventListener('show.bs.tab', function () {
      // Begitu tombol diklik, bersihkan instan seluruh pane lain sebelum animasi berjalan
      document.querySelectorAll('.tab-content .tab-pane').forEach(pane => {
        pane.classList.remove('active', 'show');
      });
    });
  });
});

// ══════════════════════════════════════════════════════
// 5. STRUCTURED DATA FOR SEO
// ══════════════════════════════════════════════════════
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CV Adhigana Tri Perkasa",
  "url": "https://adhiganatriperkasa.com/"
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);