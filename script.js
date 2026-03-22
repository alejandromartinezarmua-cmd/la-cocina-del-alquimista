/* ========================================
   LA COCINA DEL ALQUIMISTA - JavaScript
   ======================================== */

const telefonoWhatsApp = "59894805487";

// Descripción por defecto
const defaultDesc = "Un antiguo secreto de la taberna, preparado con ingredientes místicos y amasado con paciencia. Para aventureros exigentes.";

// ========================================
// PRODUCT DATA
// ========================================
const allProducts = [
  // --- TARTAS ---
  { name: "Lemon Pie", size: "23cm", price: "$1500", image: "tarta.png",         category: "tartas", desc: "Cremosa, ácida y con merengue tostado. La clásica con alma de hechizo." },
  { name: "Tarta de Durazno",          size: "23cm", price: "$1100", image: null,          category: "tartas", desc: "Fruta de temporada sobre base crocante. Dulce y liviana." },
  { name: "Dulce de Leche y Coco",     size: "23cm", price: "$1300", image: null,          category: "tartas", desc: "Combinación irresistible: caramelo profundo con toque tropical." },
  { name: "Tarta Tofi",                size: "23cm", price: "$1600", image: null,          category: "tartas", desc: "Toffee casero, base de galletita y crema batida. Adictiva." },

  // --- HECHIZOS (también aparecen en tartas) ---
  { name: "Hechizo Bariloche (negro)", size: "26cm", price: "$2400", image: null, category: "tartas", desc: "Mousse de chocolate negro sobre base húmeda. Oscuro e intenso." },
  { name: "Encanto de Frutillas",      size: "26cm", price: "$2500", image: null, category: "tartas", desc: "Frutillas frescas con crema pastelera. Delicado y aromático." },
  { name: "Ritual de Frutos Rojos",    size: "26cm", price: "$2300", image: null, category: "tartas", desc: "Mezcla de frutos del bosque con gelatina brillante. Visualmente mágico." },
  { name: "Hechizo Bariloche (blanco)",size: "26cm", price: "$2200", image: null, category: "tartas", desc: "Mousse de chocolate blanco, suave y envolvente." },

  // --- TORTAS ---
  { name: "Carrot Cake",   size: "23cm / 18cm", price: "$2000 / $1300", image: null,              category: "tartas", desc: "Húmeda, especiada y con frosting de queso crema. Un clásico reinventado." },
  { name: "Cheesecake",    size: "23cm / 18cm", price: "$2100 / $1600", image: null,              category: "tartas", desc: "Base de galletita, relleno cremoso y suave. Sin complicaciones." },
  { name: "Red Velvet",    size: "23cm / 18cm", price: "$2000 / $1500", image: "torta roja.avif", category: "tartas", desc: "Terciopelo rojo con frosting blanco. Dramática y deliciosa." },
  { name: "Torta Brownie", size: "23cm / 18cm", price: "$1300 / $980",  image: null,              category: "tartas", desc: "Densa, fudgy y con corazón de chocolate puro. Para los devotos del cacao." },

  // --- BOMBAS & BROWNIE ---
  { name: "Bombas x6",          size: "6 unidades",          price: "$550",  image: null, category: "tartas", desc: "Pequeñas esferas de chocolate rellenas. Una por bocado." },
  { name: "Bombas x12",         size: "12 unidades",         price: "$1100", image: null, category: "tartas", desc: "El doble de felicidad. Perfectas para compartir (o no)." },
  { name: "Brownie porción",    size: "1 porción",           price: "$140",  image: null, category: "tartas", desc: "Cortado a mano, crocante por fuera y fundente por dentro." },
  { name: "Brownie x6",         size: "6 unidades",          price: "$800",  image: null, category: "tartas", desc: "Seis porciones artesanales. Ideales para el mate de la tarde." },
  { name: "Brownie x12",        size: "12 unidades",         price: "$1600", image: null, category: "tartas", desc: "La caja grande. Nadie resiste." },
  { name: "Combo Chico (3+3)",  size: "3 bombas + 3 brownie",price: "$650",  image: null, category: "tartas", desc: "El mejor de los dos mundos en una sola caja." },
  { name: "Combo Mediano (6+6)",size: "6 bombas + 6 brownie",price: "$1400", image: null, category: "tartas", desc: "Para una reunión pequeña o un antojo serio." },
  { name: "Combo Grande (12+12)",size:"12 bombas + 12 brownie",price:"$2600",image: null, category: "tartas", desc: "El pack del Alquimista. Para eventos o regalos especiales." },

  // --- PANES (Raciones del Viajero) ---
  { name: "Brioche",              size: "6x$225 / 12x$420",      price: "", image: null,                 category: "panes", desc: "Esponjoso, mantequilloso, con miga aérea. El pan de los reyes." },
  { name: "Pan 3 Colores",        size: "6x$148 / 12x$290",      price: "", image: "pan de colores.png", category: "panes", desc: "Trenzado con espinaca, tomate y harina blanca. Tan lindo como rico." },
  { name: "Pan Ajo y Queso",      size: "6x$200 / 12x$370",      price: "", image: null,                 category: "panes", desc: "Ajo confitado, queso derretido. El favorito de la taberna." },
  { name: "Palitos de Queso",     size: "6x$220 / 12x$370",      price: "", image: null,                 category: "panes", desc: "Crocantes, dorados y adictivos. Perfectos para picar." },
  { name: "Chipa",                size: "6x$230 / 12x$390",      price: "", image: null,                 category: "panes", desc: "Chipá de almidón. Esponjosa por dentro, dorada por fuera." },
  { name: "Bagels",               size: "6x$270 / 12x$420",      price: "", image: null,                 category: "panes", desc: "Densos y sabrosos. Para rellenar a gusto del aventurero." },
  { name: "Focaccia",             size: "Entera $500 / Porción $100", price: "", image: "focaccia.png",  category: "panes", desc: "Con aceite de oliva, romero y sal gruesa. Rústica y generosa." },

  // --- KITS ---
  { name: "Taberna de Pueblo",   size: "", price: "$600",  image: null, category: "panes", desc: "Pan, queso y algo dulce. Un kit para compartir sin complicaciones." },
  { name: "Banquete Medieval",   size: "", price: "$1200", image: null, category: "panes", desc: "Variedad de panes y dulces. Para una reunión memorable." },
  { name: "Ritual de Colores",   size: "", price: "$550",  image: null, category: "panes", desc: "Pan de colores + chipá. Vistoso y delicioso." },
  { name: "Maestro Viajero",     size: "", price: "$700",  image: null, category: "panes", desc: "Focaccia + palitos de queso. El kit del explorador." },
  { name: "Fuego y Queso",       size: "", price: "$750",  image: null, category: "panes", desc: "Pan de ajo, queso extra y algo para untar. Intenso." },
  { name: "Prueba del Aprendiz", size: "", price: "$200",  image: null, category: "panes", desc: "Un pequeño surtido para probar antes de encargar en grande." },

  // --- PASCUA ---
  { name: "Mini Huevitos (Pociones Dulces)", size: "6 / 12 / 24 unid.", price: "$220 / $380 / $700", image: null, category: "pascua", desc: "Rellenos: Ganache, dulce de leche, Marroc y Kinder. ¡Producción limitada!" },
  { name: "Huevos Encantados (12 cm)",       size: "Unidad",            price: "$450",               image: null, category: "pascua", desc: "Huevos con sorpresa: Rocklets, gomitas o mini huevitos." },
  { name: "Rituales Dulces (Mitades)",       size: "Oreo / Brownie",    price: "$550",               image: null, category: "pascua", desc: "Mitades rellenas clásicas con ganache." },
  { name: "Rituales Dulces Premium",         size: "Kinder/Marroc/Franui", price: "$650",            image: null, category: "pascua", desc: "Mitades rellenas premium." },
  { name: "Box Encantada",                   size: "Sorpresa + 6 o 12 mini", price: "$650 / $800",   image: null, category: "pascua", desc: "Huevo con sorpresa especial y mini huevitos." },
  { name: "Box Ritual Clásica",              size: "Relleno + 6 o 12 mini", price: "$800 / $950",    image: null, category: "pascua", desc: "Huevo relleno clásico acompañado de mini huevitos. ¡Producción limitada!" },
  { name: "Box Ritual Premium",              size: "Relleno + 6 o 12 mini", price: "$900 / $1050",   image: null, category: "pascua", desc: "Huevo relleno premium acompañado de mini huevitos. ¡Producción limitada!" }
];

// ========================================
// RENDER PRODUCTS
// ========================================
function renderProducts() {
  const container = document.querySelector('.catalog-container');
  if (!container) return;

  const sectionsData = [
    { id: 'tartas', title: 'Alquimia Dulce', subtitle: 'Tartas y postres con encanto', cat: 'tartas' },
    { id: 'panes', title: 'Raciones del Viajero', subtitle: 'Panes recién salidos del horno mágico', cat: 'panes' },
    { id: 'pascua', title: 'Especial de Pascua', subtitle: 'Ediciones limitadas para la festividad', cat: 'pascua' }
  ];

  let html = '';

  sectionsData.forEach(section => {
    const products = allProducts.filter(p => p.category === section.cat);
    if (products.length === 0) return;

    const withImage = products.filter(p => p.image);
    const withoutImage = products.filter(p => !p.image);

    html += `
      <section id="${section.id}" class="catalog-section">
        <div class="section-header">
          <h2 class="section-title">${section.title}</h2>
          <p class="section-subtitle">${section.subtitle}</p>
          <div class="section-divider"></div>
        </div>
    `;

    // Visual Grid for images
    if (withImage.length > 0) {
      html += '<div class="products-grid">';
      withImage.forEach(p => {
        const desc = p.desc || defaultDesc;
        const img = p.image;
        const idx = allProducts.indexOf(p);
        html += `
          <article class="product-card" data-index="${idx}">
            <div class="product-image-container">
              <img src="${img}" loading="lazy" alt="${p.name}" class="product-image">
            </div>
            <div class="product-info">
              <h3 class="product-name">${p.name}</h3>
              <button class="consult-btn">Ver más</button>
            </div>
          </article>
        `;
      });
      html += '</div>';
    }

    // Mystic list for without images
    if (withoutImage.length > 0) {
      html += '<div class="mystic-list">';
      withoutImage.forEach(p => {
        const desc = p.desc || defaultDesc;
        const idx = allProducts.indexOf(p);
        html += `
          <div class="mystic-list-item" data-index="${idx}">
            <div class="mystic-item-main">
              <div class="mystic-item-header">
                <span class="mystic-item-icon">✦</span>
                <span class="mystic-item-name">${p.name} ${p.size ? `(${p.size})` : ''}</span>
              </div>
              <p class="mystic-item-desc">${desc}</p>
            </div>
            <div class="mystic-item-price">${p.price}</div>
          </div>
        `;
      });
      html += '</div>';
    }

    html += '</section>';
  });

  container.innerHTML = html;

  // Add event listeners (avoids VS Code inline onclick template literal errors)
  container.querySelectorAll('.product-card, .mystic-list-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.consult-btn')) return;
      openModalForIndex(item.getAttribute('data-index'));
    });
  });

  container.querySelectorAll('.consult-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = e.target.closest('.product-card');
      openModalForIndex(card.getAttribute('data-index'));
    });
  });
}

function openModalForIndex(idx) {
  const p = allProducts[idx];
  const desc = p.desc || defaultDesc;
  const img = p.image ? p.image : 'caldero tapado.webp';
  abrirModal(p.name, p.size, desc, img, p.price);
}

// ========================================
// MODAL
// ========================================
function abrirModal(nombre, size, desc, img, price) {
  const modal = document.getElementById('modal-producto');
  const imgEl = document.getElementById('modalImage');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDescription');
  const sizeEl = document.getElementById('modalSize');
  const priceEl = document.getElementById('modalPrice');
  const waBtn = document.getElementById('modalWaBtn');

  titleEl.textContent = nombre;
  descEl.textContent = desc;
  sizeEl.textContent = size || '';
  priceEl.textContent = price || '';

  imgEl.src = img;
  imgEl.style.opacity = img.includes('caldero tapado') ? '0.5' : '1';
  if (img.includes('caldero tapado')) {
    imgEl.classList.add('placeholder-img');
  } else {
    imgEl.classList.remove('placeholder-img');
  }

  const message = encodeURIComponent(`¡Hola Alquimista! Me interesa: ${nombre}. ¿Me das más info?`);
  waBtn.href = "#";
  waBtn.onclick = function(e) {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${telefonoWhatsApp}&text=${message}`, '_blank');
  };

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModal() {
  const modal = document.getElementById('modal-producto');
  const closeBtn = document.getElementById('modalClose');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// ========================================
// CANVAS PARTICLES
// ========================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  let particles = [];
  const particleCount = 60;
  const connectionDistance = 120;
  const mouseDistance = 150;
  let mouse = { x: null, y: null };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.7 ? '#d4af37' : (Math.random() > 0.5 ? '#8b0000' : '#f5f5f5')
    };
  }

  function initParticlesArray() {
    particles = [];
    for (let i = 0; i < particleCount; i++) particles.push(createParticle());
  }

  function drawParticle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.1;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212,175,55,${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function connectToMouse(p) {
    if (mouse.x === null) return;
    const dx = p.x - mouse.x, dy = p.y - mouse.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < mouseDistance) {
      const opacity = (1 - dist / mouseDistance) * 0.25;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(212,175,55,${opacity})`;
      ctx.lineWidth = 1;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      connectToMouse(p);
      drawParticle(p);
    });
    drawConnections();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resizeCanvas(); initParticlesArray(); });
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

  resizeCanvas();
  initParticlesArray();
  animate();
}

// ========================================
// SCROLL REVEAL
// ========================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
}

// ========================================
// NAVBAR SCROLL
// ========================================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.style.background = 'rgba(0,0,0,0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.background = '';
      navbar.style.backdropFilter = '';
    }
  });
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initModal();
  initParticles();
  initNavigation();
  initScrollReveal();
  initNavbarScroll();
});
