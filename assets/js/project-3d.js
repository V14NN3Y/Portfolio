/* ========================================
   PROJECT 3D EFFECTS — Mouse Tilt
   ======================================== */

export function initProject3D() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.project-card');
  if (!cards.length) return;

  const section = document.getElementById('projects');
  if (section) section.style.perspective = '1200px';

  let tiltEnabled = window.innerWidth > 768;

  grid.addEventListener('mousemove', (e) => {
    if (!tiltEnabled) return;
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    });
  });

  grid.addEventListener('mouseleave', () => {
    cards.forEach((card) => card.style.transform = '');
  });

  const ro = new ResizeObserver(() => {
    tiltEnabled = window.innerWidth > 768;
  });
  ro.observe(grid);
}
