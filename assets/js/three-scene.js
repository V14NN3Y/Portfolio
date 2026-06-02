/* ========================================
   3D SCENE — Hero Three.js
   ======================================== */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.module.js';

export function initThreeScene() {
  const hero = document.getElementById('hero');
  const canvas = document.getElementById('particles-canvas');
  if (!hero || !canvas) return false;

  const isLight = () => document.documentElement.getAttribute('data-theme') === 'light';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, hero.offsetWidth / hero.offsetHeight, 0.1, 100);
  camera.position.set(0, 0.5, 8);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(hero.offsetWidth, hero.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  /* ---- Lights ---- */
  const ambient = new THREE.AmbientLight(0x404060, 0.4);
  scene.add(ambient);

  const mainLight = new THREE.DirectionalLight(0x6c63ff, 3);
  mainLight.position.set(2, 3, 4);
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x00d4ff, 1.5);
  fillLight.position.set(-3, -1, 2);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xff6b9d, 0.8);
  rimLight.position.set(0, -2, -3);
  scene.add(rimLight);

  /* ---- Core: Geometric Head (Icosahedron) ---- */
  const coreGeo = new THREE.IcosahedronGeometry(0.9, 1);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x6c63ff,
    metalness: 0.2,
    roughness: 0.3,
    clearcoat: 0.3,
    transparent: true,
    opacity: 0.9,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.y = 0.3;
  scene.add(core);

  /* Wireframe overlay */
  const wireGeo = new THREE.IcosahedronGeometry(1.0, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });
  const wireframe = new THREE.Mesh(wireGeo, wireMat);
  wireframe.position.y = 0.3;
  scene.add(wireframe);

  /* Inner glow */
  const glowGeo = new THREE.IcosahedronGeometry(0.5, 0);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x6c63ff,
    transparent: true,
    opacity: 0.15,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.y = 0.3;
  scene.add(glow);

  /* ---- Orbiting Rings ---- */
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x6c63ff,
    transparent: true,
    opacity: 0.4,
  });
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.025, 24, 64), ringMat1);
  ring1.rotation.x = Math.PI / 3;
  ring1.rotation.z = Math.PI / 4;
  ring1.position.y = 0.3;
  scene.add(ring1);

  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.3,
  });
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.02, 16, 64), ringMat2);
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.y = Math.PI / 3;
  ring2.position.y = 0.3;
  scene.add(ring2);

  const knotMat = new THREE.MeshPhysicalMaterial({
    color: 0xff6b9d,
    metalness: 0.6,
    roughness: 0.2,
    transparent: true,
    opacity: 0.15,
  });
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.3, 0.12, 48, 6, 2, 3), knotMat);
  knot.rotation.x = Math.PI / 2;
  knot.position.y = 0.3;
  scene.add(knot);

  /* ---- Floating Shapes (different Z depths for parallax) ---- */
  const floaters = [];
  const colors = [0x6c63ff, 0x00d4ff, 0xff6b9d, 0x9d96ff, 0x5ee7ff];
  const geos = [
    new THREE.OctahedronGeometry(0.12),
    new THREE.TetrahedronGeometry(0.1),
    new THREE.DodecahedronGeometry(0.08),
    new THREE.BoxGeometry(0.08, 0.08, 0.08),
  ];

  for (let i = 0; i < 20; i++) {
    const g = geos[i % geos.length];
    const m = new THREE.MeshPhysicalMaterial({
      color: colors[i % colors.length],
      metalness: 0.3,
      roughness: 0.5,
    });
    const mesh = new THREE.Mesh(g, m);

    const depth = (Math.random() - 0.5) * 6;
    const radius = 1.5 + Math.random() * 3;
    const angle = Math.random() * Math.PI * 2;
    const height = (Math.random() - 0.5) * 4;

    mesh.position.set(
      Math.cos(angle) * radius,
      height + 0.3,
      Math.sin(angle) * radius * 0.5 + depth * 0.3
    );

    mesh.userData = {
      basePos: mesh.position.clone(),
      speed: 0.2 + Math.random() * 0.4,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      floatSpeed: 0.5 + Math.random() * 0.5,
      floatAmp: 0.1 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
    };
    scene.add(mesh);
    floaters.push(mesh);
  }

  /* ---- Particles ---- */
  const pCount = 600;
  const pGeo = new THREE.BufferGeometry();
  const pos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i++) {
    pos[i] = (Math.random() - 0.5) * 30;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0x6c63ff,
    size: 0.025,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(pGeo, pMat);
  particles.position.y = 0.3;
  scene.add(particles);

  /* ---- Mouse Parallax ---- */
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width - 0.5;
    targetY = (e.clientY - rect.top) / rect.height - 0.5;
  });

  hero.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

  /* ---- Touch support ---- */
  hero.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const rect = hero.getBoundingClientRect();
    targetX = (touch.clientX - rect.left) / rect.width - 0.5;
    targetY = (touch.clientY - rect.top) / rect.height - 0.5;
  }, { passive: true });

  hero.addEventListener('touchend', () => { targetX = 0; targetY = 0; });

  /* ---- Theme adaptation ---- */
  const themeObserver = new MutationObserver(() => {
    const light = isLight();
    const pColor = light ? '#6c63ff' : '#6c63ff';
    coreMat.color.set(light ? 0x6c63ff : 0x6c63ff);
    coreMat.opacity = light ? 0.7 : 0.9;
    pMat.color.set(light ? 0x6c63ff : 0x6c63ff);
    pMat.opacity = light ? 0.25 : 0.4;
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  /* ---- Animation Loop ---- */
  let time = 0;

  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    core.rotation.x += 0.004;
    core.rotation.y += 0.006;
    wireframe.rotation.x += 0.004;
    wireframe.rotation.y += 0.006;
    glow.rotation.x += 0.002;
    glow.rotation.y += 0.004;

    ring1.rotation.y += 0.01;
    ring1.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.1;
    ring2.rotation.y += 0.006;
    ring2.rotation.x = -Math.PI / 4 + Math.cos(time * 0.3) * 0.1;
    knot.rotation.y += 0.012;
    knot.rotation.x = Math.PI / 2 + Math.sin(time * 0.8) * 0.15;

    floaters.forEach((f) => {
      const d = f.userData;
      f.rotation.x += d.rotSpeed;
      f.rotation.y += d.rotSpeed * 1.5;
      f.position.x = d.basePos.x + Math.sin(time * d.speed + d.phase) * 0.3;
      f.position.y = d.basePos.y + Math.sin(time * d.floatSpeed + d.phase) * d.floatAmp;
      f.position.z = d.basePos.z + Math.cos(time * d.speed * 0.7 + d.phase) * 0.2;
    });

    particles.rotation.y += 0.0002;

    camera.position.x += (currentX * 2.5 - camera.position.x) * 0.03;
    camera.position.y += (-currentY * 2 + 0.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0.3, 0);

    renderer.render(scene, camera);
  }

  animate();

  /* ---- Resize ---- */
  const onResize = () => {
    const w = hero.offsetWidth;
    const h = hero.offsetHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('resize', onResize);
    themeObserver.disconnect();
    renderer.dispose();
  };
}
