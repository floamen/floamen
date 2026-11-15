(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const links = window.FLOAMEN_LINKS || {};
  const isGerman = (root.lang || '').toLowerCase().startsWith('de');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Links (all read from assets/js/links.js) ---------- */
  const safeURL = value => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
    catch { return null; }
  };
  function activate(link, url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
    link.removeAttribute('role');
  }
  document.querySelectorAll('[data-etsy]').forEach(link => {
    const url = safeURL(links.etsy);
    if (url) activate(link, url); // button text stays as written in the HTML (EN / DE)
    else {
      link.textContent = isGerman ? 'Etsy-Shop — demnächst' : 'Etsy Store — Coming Soon';
      link.setAttribute('aria-disabled', 'true');
      link.removeAttribute('href');
    }
  });
  document.querySelectorAll('[data-link]').forEach(link => {
    const url = safeURL(links[link.dataset.link]);
    if (url) activate(link, url);
    else { link.removeAttribute('href'); link.setAttribute('aria-disabled', 'true'); }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Installation video (YouTube address from links.js) ---------- */
  function youtubeID(value) {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
      const host = url.hostname.toLowerCase();
      const parts = url.pathname.split('/').filter(Boolean);
      let id = null;
      if (host === 'youtu.be') id = parts[0];
      else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
        if (url.pathname === '/watch') id = url.searchParams.get('v');
        else if (['shorts', 'embed', 'live'].includes(parts[0])) id = parts[1];
      }
      return /^[a-zA-Z0-9_-]{11}$/.test(id || '') ? id : null;
    } catch { return null; }
  }
  const videoID = youtubeID(links.installationVideo);
  const player = document.getElementById('video-player');
  if (player && videoID) {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${videoID}?playsinline=1&rel=0`;
    frame.title = 'Floamen refill and installation video';
    frame.loading = 'eager';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    player.replaceChildren(frame);
  } else if (player) {
    player.textContent = isGerman ? 'Das Installationsvideo ist derzeit nicht verfügbar.' : 'Installation video is currently unavailable.';
  }

  /* ---------- Scroll reveals ---------- */
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('is-pending'); observer.unobserve(entry.target); }
    }), { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('is-pending'); observer.observe(element); });
  }

  /* ---------- Header state, progress bar, hero parallax ---------- */
  const header = document.querySelector('.header');
  const heroImage = document.querySelector('.hero-image');
  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 40);
    const max = root.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    if (heroImage && !reducedMotion && y < window.innerHeight * 1.2) {
      heroImage.style.setProperty('--py', `${Math.min(y * 0.18, window.innerHeight * 0.07)}px`);
    }
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---------- Marquee: duplicate the items so the loop is seamless ---------- */
  const track = document.querySelector('.marquee-track');
  if (track && !reducedMotion) {
    const items = Array.from(track.children);
    const copies = Math.max(2, Math.ceil((window.innerWidth * 2) / Math.max(track.scrollWidth, 1)));
    const total = copies % 2 ? copies + 1 : copies; // even count, so -50% lands on an identical frame
    for (let i = 1; i < total; i++) items.forEach(item => track.append(item.cloneNode(true)));
    track.classList.add('is-ready');
  }

  /* ---------- Subtle 3D tilt on product photos (mouse only) ---------- */
  if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.split .photo').forEach(photo => {
      photo.addEventListener('pointermove', event => {
        const box = photo.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        photo.style.transform = `perspective(1100px) rotateY(${(x * 5).toFixed(2)}deg) rotateX(${(-y * 5).toFixed(2)}deg)`;
      });
      photo.addEventListener('pointerleave', () => { photo.style.transform = ''; });
    });
  }
})();
