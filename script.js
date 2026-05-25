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

/* ── 1. LOGIKA MAX 6 PRODUK & TOMBOL LOAD MORE ── */
document.addEventListener("DOMContentLoaded", function() {
  const catalogItems = document.querySelectorAll('.catalog-item');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  let isExpanded = false;
  const MAX_ITEMS = 6;

  // Jika produk lebih dari 6, sembunyikan sisanya dan munculkan tombol
  if (catalogItems.length > MAX_ITEMS) {
    loadMoreBtn.classList.remove('d-none');
    
    // Sembunyikan item ke 7 dan seterusnya
    catalogItems.forEach((item, index) => {
      if (index >= MAX_ITEMS) {
        item.style.display = 'none';
      }
    });

    // Event saat tombol ditekan
    loadMoreBtn.addEventListener('click', function() {
      isExpanded = !isExpanded;
      
      catalogItems.forEach((item, index) => {
        if (index >= MAX_ITEMS) {
          item.style.display = isExpanded ? 'block' : 'none';
        }
      });

      if (isExpanded) {
        loadMoreBtn.innerHTML = 'Tampilkan Lebih Sedikit <i class="bi bi-chevron-up ms-1"></i>';
      } else {
        loadMoreBtn.innerHTML = 'Lihat Semua Katalog <i class="bi bi-chevron-down ms-1"></i>';
        // Scroll kembali ke atas katalog agar tidak bingung
        document.getElementById('katalog').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ── 2. LOGIKA POP-UP / MODAL DETAIL PRODUK ── */
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