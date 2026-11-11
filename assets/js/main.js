(() => {
  'use strict';
  const links = window.FLOAMEN_LINKS || {};
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
    if (url) { activate(link, url); link.textContent = 'Shop on Etsy'; }
    else { link.textContent = 'Etsy Store — Coming Soon'; link.setAttribute('aria-disabled', 'true'); link.removeAttribute('href'); }
  });
  document.querySelectorAll('[data-link]').forEach(link => {
    const url = safeURL(links[link.dataset.link]);
    if (url) activate(link, url);
    else { link.removeAttribute('href'); link.setAttribute('aria-disabled', 'true'); }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
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
    player.textContent = 'Installation video is currently unavailable.';
  }
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('is-pending'); observer.unobserve(entry.target); }
    }), { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('is-pending'); observer.observe(element); });
  }
})();
