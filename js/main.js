document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     Fade / Scroll Animation
  ========================= */
  const targets = document.querySelectorAll('.fade, .fade-up');

  // アニメーションを減らす設定のユーザー配慮
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    targets.forEach(el => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px'
  });

  targets.forEach(el => observer.observe(el));


  /* =========================
     Smooth Scroll（アンカー）
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });


  /* =========================
     Header Scroll Effect
  ========================= */
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    if (currentY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    lastScrollY = currentY;
  });


  /* =========================
     CTA Button Micro Interaction
  ========================= */
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

});
