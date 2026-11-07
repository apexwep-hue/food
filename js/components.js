/**
 * Dynamic Component Renderer Engine
 * Injects SITE_CONFIG and SITE_DATA cleanly into designated HTML placeholders.
 */

const ComponentRenderer = {
  // Apply Dynamic Color Palette & Fonts from Configuration
  initTheme() {
    const root = document.documentElement;
    const theme = SITE_CONFIG.theme;

    root.style.setProperty('--primary', theme.primaryColor);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--secondary', theme.secondaryColor);
    root.style.setProperty('--accent', theme.accentColor);
    root.style.setProperty('--bg-dark', theme.backgroundColor);
    root.style.setProperty('--bg-surface', theme.surfaceColor);
    root.style.setProperty('--text-main', theme.textColor);
    root.style.setProperty('--text-muted', theme.textMuted);
    root.style.setProperty('--font-heading', theme.fontHeading);
    root.style.setProperty('--font-body', theme.fontBody);
  },

  // Render Navigation Bar Branding & Dynamic Elements
  renderNavigation() {
    const headerContainer = document.getElementById('main-header-container');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
      <div class="container nav-container">
        <a href="index.html" class="brand-logo" aria-label="Home Page">
          <span class="logo-main">${SITE_CONFIG.logoText}</span>
          <span class="logo-sub">${SITE_CONFIG.logoSubtext}</span>
        </a>

        <ul class="nav-menu" id="nav-menu">
          <li><a href="index.html" class="nav-link">Home</a></li>
          <li><a href="about.html" class="nav-link">About Us</a></li>
          <li><a href="services.html" class="nav-link">Services</a></li>
          <li><a href="portfolio.html" class="nav-link">Culinary Gallery</a></li>
          <li><a href="contact.html" class="nav-link">Reservations</a></li>
        </ul>

        <div class="header-actions">
          <a href="contact.html" class="btn btn-primary" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">Book Table</a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Open Navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;

    // Highlight current menu item
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  },

  // Render Dynamic Menu Card
  createMenuCard(item) {
    return `
      <article class="menu-card reveal" data-category="${item.category}">
        <div class="menu-img-wrapper">
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="600" height="400">
        </div>
        <div class="menu-content">
          <div class="menu-header">
            <h3 class="menu-item-title">${item.name}</h3>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-description">${item.description}</p>
          <div class="menu-tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  },

  // Render Menu Grid
  renderMenuGrid(targetId = 'menu-grid-target', categoryFilter = 'All') {
    const container = document.getElementById(targetId);
    if (!container) return;

    const filteredItems = categoryFilter === 'All' 
      ? SITE_DATA.menuItems 
      : SITE_DATA.menuItems.filter(item => item.category === categoryFilter);

    container.innerHTML = filteredItems.map(item => this.createMenuCard(item)).join('');
  },

  // Render Footer Component dynamically
  renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand-logo" style="margin-bottom: 1.2rem;">
              <span class="logo-main">${SITE_CONFIG.logoText}</span>
              <span class="logo-sub">${SITE_CONFIG.logoSubtext}</span>
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 320px; margin-bottom: 1.5rem;">
              ${SITE_CONFIG.tagline}. Delivering memorable culinary experiences crafted with seasonal mastery.
            </p>
            <div style="display: flex; gap: 1rem;">
              <a href="${SITE_CONFIG.socials.instagram}" aria-label="Instagram" style="color: var(--text-muted);">📷</a>
              <a href="${SITE_CONFIG.socials.facebook}" aria-label="Facebook" style="color: var(--text-muted);">📘</a>
              <a href="${SITE_CONFIG.socials.tripadvisor}" aria-label="TripAdvisor" style="color: var(--text-muted);">🦉</a>
            </div>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); margin-bottom: 1.25rem;">Quick Links</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; color: var(--text-muted); font-size: 0.9rem;">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Chef</a></li>
              <li><a href="services.html">Private Events</a></li>
              <li><a href="portfolio.html">Gallery</a></li>
              <li><a href="contact.html">Bookings</a></li>
            </ul>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); margin-bottom: 1.25rem;">Hours</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; color: var(--text-muted); font-size: 0.85rem;">
              ${SITE_CONFIG.workingHours.map(item => `
                <li><strong>${item.days}:</strong><br>${item.hours}</li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); margin-bottom: 1.25rem;">Location & Contact</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.8rem;">
              📍 ${SITE_CONFIG.address}
            </p>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.8rem;">
              📞 ${SITE_CONFIG.phone}
            </p>
            <p style="color: var(--text-muted); font-size: 0.9rem;">
              ✉️ ${SITE_CONFIG.email}
            </p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ${SITE_CONFIG.brandName}. All Rights Reserved.</p>
          <p>Template customizable for ready client deployment.</p>
        </div>
      </div>
    `;
  }
};