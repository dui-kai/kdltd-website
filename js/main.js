// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Services dropdown on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(dt => {
    dt.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dt.parentElement.classList.toggle('open');
      }
    });
  });

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('form-success');
      if (msg) {
        msg.style.display = 'block';
        form.reset();
        setTimeout(() => { msg.style.display = 'none'; }, 4000);
      }
    });
  }

  // Estimate form
  const estimateForm = document.getElementById('estimate-form');
  if (estimateForm) {
    estimateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('estimate-success');
      if (msg) {
        msg.style.display = 'block';
        estimateForm.reset();
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
      }
    });
  }

  // Cookie consent banner
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    const consent = localStorage.getItem('kdltd-cookie-consent');
    if (!consent) {
      cookieBanner.classList.add('show');
    }

    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('kdltd-cookie-consent', 'accepted');
        cookieBanner.classList.remove('show');
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => {
        localStorage.setItem('kdltd-cookie-consent', 'rejected');
        cookieBanner.classList.remove('show');
      });
    }
  }

  // "Manage Cookies" link resets preference
  const manageCookies = document.getElementById('manage-cookies');
  if (manageCookies) {
    manageCookies.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('kdltd-cookie-consent');
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.classList.add('show');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
