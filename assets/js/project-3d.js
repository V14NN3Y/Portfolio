/* ========================================
   PROJECT 3D EFFECTS — Mouse Tilt
   ======================================== */

export function initProject3D() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  let tiltEnabled = window.innerWidth > 768;

  const cards = grid.querySelectorAll('.project-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (!tiltEnabled) return;
    });

    card.addEventListener('mousemove', (e) => {
      if (!tiltEnabled) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  const ro = new ResizeObserver(() => {
    tiltEnabled = window.innerWidth > 768;
  });
  ro.observe(grid);
}
