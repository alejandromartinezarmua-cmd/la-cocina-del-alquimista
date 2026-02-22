/* ========================================
   LA COCINA DEL ALQUIMISTA - JavaScript
   Dynamic Content & Interactions
   ======================================== */

// ========================================
// PRODUCT DATA - MENÚ OFICIAL
// ========================================

const products = {
  tartas: [
    { name: "Lemon Pie", size: "23cm", price: "$1500", image: "foto5.png" },
    { name: "Tarta de durazno", size: "23cm", price: "$1100", image: null },
    { name: "Tarta dulce de leche y coco", size: "23cm", price: "$1300", image: null },
    { name: "Tarta tofi", size: "23cm", price: "$1600", image: null }
  ],
  
  hechizos: [
    { name: "Hechizo Bariloche (negro)", size: "26cm", price: "$2400", image: null },
    { name: "Encanto de frutillas", size: "26cm", price: "$2500", image: null },
    { name: "Ritual de frutos rojos", size: "26cm", price: "$2300", image: null },
    { name: "Hechizo Bariloche (blanco)", size: "26cm", price: "$2200", image: null }
  ],
  
  tortas: [
    { name: "Carrot Cake", size: "23cm / 18cm", price: "$2000 / $1300", image: null },
    { name: "Cheesecake", size: "23cm / 18cm", price: "$2100 / $1600", image: null },
    { name: "Red Velvet", size: "23cm / 18cm", price: "$2000 / $1500", image: "foto7.avif" },
    { name: "Torta Brownie", size: "23cm / 18cm", price: "$1300 / $980", image: null }
  ],
  
  bombas: [
    { name: "Bombas x6", size: "6 unidades", price: "$550", image: null },
    { name: "Bombas x12", size: "12 unidades", price: "$1100", image: null },
    { name: "Brownie porción", size: "1 porción", price: "$140", image: null },
    { name: "Brownie x6", size: "6 unidades", price: "$800", image: null },
    { name: "Brownie x12", size: "12 unidades", price: "$1600", image: null },
    { name: "Combo Chico (3+3)", size: "3 bombas + 3 brownies", price: "$650", image: null },
    { name: "Combo Mediano (6+6)", size: "6 bombas + 6 brownies", price: "$1400", image: null },
    { name: "Combo Grande (12+12)", size: "12 bombas + 12 brownies", price: "$2600", image: null }
  ],
  
  raciones: [
    { name: "Magic Missile / Brioche", size: "6x$225 / 12x$420", price: "", image: null },
    { name: "Charm Person / Pan 3 colores", size: "6x$148 / 12x$290", price: "", image: "foto6.png" },
    { name: "Firebolt / Pan ajo y queso", size: "6x$200 / 12x$370", price: "", image: null },
    { name: "Magic Weapon / Palitos de queso", size: "6x$220 / 12x$370", price: "", image: null },
    { name: "Detect Magic / Chipa", size: "6x$230 / 12x$390", price: "", image: null },
    { name: "Tenser's Floating Disk / Bagels", size: "6x$270 / 12x$420", price: "", image: null },
    { name: "Feather Fall / Focaccia", size: "Entera $500 / Porción $100", price: "", image: "foto4.png" }
  ],
  
  kits: [
    { name: "Taberna de Pueblo", size: "", price: "$600", image: null },
    { name: "Banquete Medieval", size: "", price: "$1200", image: null },
    { name: "Ritual de Colores", size: "", price: "$550", image: null },
    { name: "Maestro Viajero", size: "", price: "$700", image: null },
    { name: "Fuego y Queso", size: "", price: "$750", image: null },
    { name: "Prueba del Aprendiz", size: "", price: "$200", image: null }
  ]
};

// ========================================
// RENDER PRODUCT CARDS
// ========================================

function createProductCard(product) {
  const price = product.price || product.size;
  const size = product.price ? product.size : '';
  
  return `
    <article class="product-card">
      <div class="product-card-decoration"></div>
      <div class="product-card-inner">
        <h3 class="product-name">${product.name}</h3>
        ${size ? `<p class="product-size">${size}</p>` : ''}
        ${price ? `<p class="product-price">${price}</p>` : ''}
      </div>
    </article>
  `;
}

function renderProducts() {
  document.getElementById('tartas-grid').innerHTML = products.tartas.map(createProductCard).join('');
  document.getElementById('hechizos-grid').innerHTML = products.hechizos.map(createProductCard).join('');
  document.getElementById('tortas-grid').innerHTML = products.tortas.map(createProductCard).join('');
  document.getElementById('bombas-grid').innerHTML = products.bombas.map(createProductCard).join('');
  document.getElementById('raciones-grid').innerHTML = products.raciones.map(createProductCard).join('');
  document.getElementById('kits-grid').innerHTML = products.kits.map(createProductCard).join('');
}

// ========================================
// CANVAS PARTICLES BACKGROUND
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
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
  }
  
  function drawParticle(particle) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.globalAlpha = particle.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.1;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function connectToMouse(particle) {
    if (mouse.x === null || mouse.y === null) return;
    
    const dx = particle.x - mouse.x;
    const dy = particle.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < mouseDistance) {
      const opacity = (1 - distance / mouseDistance) * 0.25;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  }
  
  function updateParticles() {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      connectToMouse(particle);
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(drawParticle);
    drawConnections();
    updateParticles();
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticlesArray();
  });
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  resizeCanvas();
  initParticlesArray();
  animate();
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

function initScrollReveal() {
  const sections = document.querySelectorAll('.products-section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        const cards = entry.target.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ========================================
// 3D CARD TILT EFFECT
// ========================================

function initCardTilt() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    let rect = null;
    let rafId = null;
    let mouseX = 0;
    let mouseY = 0;

    function update() {
      if (!rect) return;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (mouseY - centerY) / 20;
      const rotateY = (centerX - mouseX) / 20;

      card.style.transform = `perspective(1400px) translateZ(30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      rafId = null;
    }

    function onPointerMove(e) {
      rect = rect || card.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (!rafId) rafId = requestAnimationFrame(update);
    }

    function onPointerEnter() {
      rect = card.getBoundingClientRect();
      card.style.willChange = 'transform';
    }

    function onPointerLeave() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      rect = null;
      card.style.transform = 'perspective(1400px) translateZ(0) rotateX(0) rotateY(0)';
      card.style.willChange = 'auto';
    }

    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerenter', onPointerEnter);
    card.addEventListener('pointerleave', onPointerLeave);
    card.addEventListener('pointercancel', onPointerLeave);
  });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ========================================
// INITIALIZE ALL
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Render products first
  renderProducts();
  
  // Initialize all features
  initParticles();
  initNavigation();
  initScrollReveal();
  initCardTilt();
  initNavbarScroll();
  
  // NAVBAR SCROLL BLUR
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.background = 'rgba(0,0,0,0.9)';
      navbar.style.backdropFilter = 'blur(10px)';
    }
  });
});
