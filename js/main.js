/**
 * Main Application Logic & Micro-Interactions Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Dynamic Theme & Global Shell Components
  ComponentRenderer.initTheme();
  ComponentRenderer.renderNavigation();
  ComponentRenderer.renderFooter();

  // 2. Mobile Drawer Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });
  }

  // 3. Header Glass Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 4. Scroll Reveal Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 5. Interactive Menu Filtering Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const category = e.target.getAttribute('data-filter');
      ComponentRenderer.renderMenuGrid('menu-grid-target', category);
      
      // Re-initialize observer for new elements
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    });
  });

  // 6. FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });

  // 7. Interactive Reservation Form Validation & WhatsApp Direct Integration
  const reservationForm = document.getElementById('reservation-form');
  const formFeedback = document.getElementById('form-feedback');

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form Field Values
      const name = document.getElementById('res-name').value.trim();
      const email = document.getElementById('res-email').value.trim();
      const phone = document.getElementById('res-phone').value.trim();
      const guests = document.getElementById('res-guests').value;
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;

      // Basic Validation
      if (!name || !email || !phone || !date || !time) {
        showFeedback("Please complete all required fields.", "error");
        return;
      }

      // Success State Simulation
      showFeedback(`Thank you, ${name}! Your reservation request for ${guests} guest(s) on ${date} at ${time} has been submitted. We will confirm shortly.`, "success");

      // Optional: Form Redirect to WhatsApp for instant confirmation
      const waMsg = encodeURIComponent(`Hello ${SITE_CONFIG.brandName}, I would like to reserve a table for ${guests} guest(s) on ${date} at ${time}. Name: ${name}.`);
      setTimeout(() => {
        window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMsg}`, '_blank');
      }, 1500);

      reservationForm.reset();
    });
  }

  function showFeedback(message, type) {
    if (!formFeedback) return;
    formFeedback.textContent = message;
    formFeedback.className = `form-feedback ${type}`;
  }

  // 8. Back to top button logic
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});