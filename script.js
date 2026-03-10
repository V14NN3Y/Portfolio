/* ========================================
   BILL ADJAGBONI — PORTFOLIO SCRIPTS
   ======================================== */

'use strict';

const TRANSLATIONS = {
  fr: {
    'nav.home': `Accueil`,
    'nav.about': `À propos`,
    'nav.skills': `Compétences`,
    'nav.projects': `Projets`,
    'nav.experience': `Expérience`,
    'nav.education': `Formation`,
    'nav.contact': `Contact`,
    'nav.hire': `Me contacter`,
    'hero.badge': `Disponible pour missions / alternance`,
    'hero.desc': `Ingénieur logiciel combinant expertise <strong>Full Stack</strong> et <strong>Systèmes Embarqués</strong>. Je construis des solutions complètes — du hardware (Arduino) aux plateformes web scalables (React, Django).`,
    'hero.cta-work': `Voir mes projets`,
    'hero.cta-contact': `Me contacter`,
    'about.tag': `01. À propos`,
    'about.title': `Qui suis-je<span class="gradient-text"> ?</span>`,
    'about.p1': `Étudiant en fin de 3ème année du <strong>Bachelor en Expertise Informatique</strong> à Epitech Bénin, je suis passionné par la construction de solutions logicielles complètes — de l'interface utilisateur au système embarqué.`,
    'about.p2': `Mon parcours m'a conduit à concevoir des plateformes web full stack, des intelligences artificielles pour des jeux, des systèmes de gestion métier intégrant l'IA, et même des prototypes robotiques. Je crois fermement que les meilleurs ingénieurs sont ceux qui comprennent le problème avant de choisir l'outil.`,
    'about.p3': `En tant que <strong>Assistant Technique (AER)</strong> et <strong>Lead du Pôle Tech du BDE</strong> à Epitech Bénin, j'ai développé un vrai goût pour le partage de connaissances et la coordination d'équipe technique.`,
    'about.stat-projects': `Projets réalisés`,
    'about.stat-exp': `Expériences pro`,
    'about.stat-code': `Ans de code`,
    'about.interests-title': `Centres d'intérêt`,
    'about.interest-chess-title': `Échecs`,
    'about.interest-chess-desc': `Stratégie, anticipation et vision long terme`,
    'about.interest-prog-title': `Competitive Programming`,
    'about.interest-prog-desc': `Coding Game — Résolution de problèmes algorithmiques`,
    'about.interest-music-title': `Musique`,
    'about.interest-music-desc': `Créativité et discipline artistique`,
    'about.interest-sport-title': `Sport en salle`,
    'about.interest-sport-desc': `Rigueur et dépassement de soi`,
    'skills.tag': `02. Compétences`,
    'skills.title': `Stack <span class="gradient-text">Technique</span>`,
    'skills.web': `Web & Frontend`,
    'skills.backend': `Backend & API`,
    'skills.system': `Systèmes & Bas niveau`,
    'skills.hardware': `Hardware & Robotique`,
    'skills.ai': `IA & Algorithmes`,
    'skills.devops': `Outils & DevOps`,
    'projects.tag': `03. Projets`,
    'projects.title': `Réalisations <span class="gradient-text">clés</span>`,
    'projects.filter-all': `Tous`,
    'projects.filter-web': `Web`,
    'projects.filter-system': `Systèmes & IA`,
    'projects.filter-hardware': `Hardware`,
    'projects.staffbar-title': `StaffBar — Plateforme de recrutement`,
    'projects.staffbar-desc': `Plateforme moderne de mise en relation candidats/recruteurs avec système de messagerie en temps réel, filtres avancés et gestion de profils.`,
    'projects.staffbar-h1': `✓ Auth & gestion de profils`,
    'projects.staffbar-h2': `✓ Messagerie intégrée`,
    'projects.staffbar-h3': `✓ Filtres avancés`,
    'projects.stockcontrol-title': `StockControl — Gestion Intelligente pour Artisans`,
    'projects.stockcontrol-desc': `Application web <strong>mobile-first</strong> de gestion de stocks pour artisans du secteur boissons. Intègre l'<strong>IA Google Gemini</strong> pour analyser les données et proposer des conseils d'achat, réduire les pertes et optimiser la rentabilité.`,
    'projects.stockcontrol-h1': `✓ Suivi stocks temps réel`,
    'projects.stockcontrol-h2': `✓ IA Gemini intégrée`,
    'projects.stockcontrol-h3': `✓ Multi-entreprises (RLS)`,
    'projects.stockcontrol-h4': `✓ Alertes péremptions`,
    'projects.vote-title': `Epitech Bénin Vote BDE`,
    'projects.vote-desc': `Plateforme de <strong>vote numérique sécurisée</strong> pour les élections du BDE. Système de vote pondéré, dashboard administrateur temps réel, résultats en graphiques et journalisation d'audit complète pour garantir la transparence.`,
    'projects.vote-h1': `✓ Vote pondéré`,
    'projects.vote-h2': `✓ Dashboard temps réel`,
    'projects.vote-h3': `✓ Audit trail complet`,
    'projects.vote-h4': `✓ Graphiques Recharts`,
    'projects.marketplace-title': `Marketplace Backend`,
    'projects.marketplace-desc': `Backend e-commerce robuste avec système de publication/modification/suppression d'annonces et interface d'administration dynamique pour la gestion de contenu.`,
    'projects.marketplace-h1': `✓ CRUD annonces`,
    'projects.marketplace-h2': `✓ Admin interface`,
    'projects.marketplace-h3': `✓ Gestion utilisateurs`,
    'projects.gomoku-title': `Gomoku AI`,
    'projects.gomoku-desc': `Intelligence artificielle haute performance pour le jeu de Gomoku. Réseau neuronal utilisant l'algorithme <strong>Minimax avec élagage Alpha-Beta</strong> pour une prédiction optimale des coups.`,
    'projects.gomoku-h1': `✓ Minimax + Alpha-Beta`,
    'projects.gomoku-h2': `✓ Haute performance`,
    'projects.zappy-title': `Zappy — Game Server & AI Client`,
    'projects.zappy-desc': `Serveur de jeu temps réel en C et client IA autonome en Python capable de collecte de ressources, communication inter-agents et évolution stratégique dans un environnement multi-agents.`,
    'projects.zappy-h1': `✓ Server temps réel`,
    'projects.zappy-h2': `✓ IA multi-agents`,
    'projects.zappy-h3': `✓ Protocole réseau`,
    'projects.arcade-title': `Arcade Engine — Moteur de jeu modulaire`,
    'projects.arcade-desc': `Moteur de jeu architécturé avec chargement dynamique de bibliothèques graphiques à l'exécution via <code>dlopen</code>, permettant le switch de renderer sans recompilation.`,
    'projects.arcade-h1': `✓ dlopen dynamic libs`,
    'projects.arcade-h2': `✓ Architecture modulaire`,
    'experience.tag': `04. Expérience`,
    'experience.title': `Parcours <span class="gradient-text">professionnel</span>`,
    'experience.bde-title': `Lead du Pôle Tech`,
    'experience.bde-t1': `Direction du département technique, accompagnement et suivi des projets étudiants`,
    'experience.bde-t2': `Coordination du support technique pour des événements du campus`,
    'experience.bde-t3': `Management de toutes les associations tech (Cybersécurité, Robotique, IA, Développement Web, Création de Jeux Vidéos, Blockchain)`,
    'experience.aer-date': `Mars 2025 — Présent`,
    'experience.aer-title': `Assistant Technique — AER`,
    'experience.aer-t1': `Accompagnement des étudiants dans la compréhension et résolution de projets techniques`,
    'experience.aer-t2': `Animation d'ateliers et séances de soutien en programmation et méthodologie de projet`,
    'experience.aer-t3': `Revues de code pour assurer la qualité et les bonnes pratiques`,
    'experience.cerb-date': `Octobre — Décembre 2024`,
    'experience.cerb-title': `Stagiaire en Robotique`,
    'experience.cerb-t1': `Développement de prototypes robotiques et programmation de microcontrôleurs Arduino`,
    'experience.cerb-t2': `Organisation et animation d'ateliers pédagogiques pour collégiens`,
    'experience.cerb-t3': `Initiation à la robotique et à la programmation pour jeunes publics`,
    'education.tag': `05. Formation`,
    'education.title': `Parcours <span class="gradient-text">académique</span>`,
    'education.bachelor-date': `Février 2024 — Présent`,
    'education.badge-current': `En cours`,
    'education.bachelor-title': `Bachelor en Expertise Informatique`,
    'education.bachelor-desc': `Algorithmes avancés, Intelligence Artificielle, Développement Web, Systèmes Embarqués. Architecture logicielle, systèmes Unix/Linux, programmation bas niveau.`,
    'education.badge-obtained': `Obtenu`,
    'education.bac-title': `Baccalauréat Série C`,
    'education.bac-desc': `Spécialité Mathématiques et Physique. Mention obtenue avec de bons résultats.`,
    'education.badge-cert': `Certifications`,
    'education.cert-title': `Certifications en Programmation`,
    'education.cert-desc': `Résolution de défis algorithmiques en C, Python, C++. Rapidité de développement et optimisation de code sous contraintes.`,
    'contact.tag': `06. Contact`,
    'contact.title': `Travaillons <span class="gradient-text">ensemble</span>`,
    'contact.lead': `Disponible pour des missions freelance, stages, alternances ou opportunités full-time. N'hésitez pas à me contacter !`,
    'contact.email-label': `Email`,
    'contact.phone-label': `Téléphone`,
    'contact.loc-label': `Localisation`,
    'contact.loc-value': `Fifadji C/1850, Cotonou, Bénin`,
    'contact.form-name': `Nom complet`,
    'contact.placeholder-name': `Votre nom`,
    'contact.form-email': `Email`,
    'contact.placeholder-email': `votre@email.com`,
    'contact.form-subject': `Sujet`,
    'contact.placeholder-subject': `Opportunité / Collaboration / Question`,
    'contact.form-message': `Message`,
    'contact.placeholder-message': `Décrivez votre projet ou votre demande...`,
    'contact.form-submit': `Envoyer le message`,
    'footer.text': `Conçu & développé par <strong>Bill Adjagboni</strong> — Cotonou, Bénin 🇧🇯`,
    'footer.copy': `© 2026 Bill Adjagboni. Tous droits réservés.`,
  },
  en: {
    'nav.home': `Home`,
    'nav.about': `About`,
    'nav.skills': `Skills`,
    'nav.projects': `Projects`,
    'nav.experience': `Experience`,
    'nav.education': `Education`,
    'nav.contact': `Contact`,
    'nav.hire': `Hire me`,
    'hero.badge': `Available for missions / internship`,
    'hero.desc': `Software Engineer combining <strong>Full Stack</strong> and <strong>Embedded Systems</strong> expertise. I build end-to-end solutions — from hardware (Arduino) to scalable web platforms (React, Django).`,
    'hero.cta-work': `View my work`,
    'hero.cta-contact': `Contact me`,
    'about.tag': `01. About Me`,
    'about.title': `Who am I<span class="gradient-text">?</span>`,
    'about.p1': `An end-of-3rd-year <strong>Bachelor of Computer Science</strong> student at Epitech Benin, I am passionate about building complete software solutions — from user interface to embedded systems.`,
    'about.p2': `My journey has led me to design full stack web platforms, game AIs, business management systems integrating AI, and even robotic prototypes. I firmly believe that the best engineers are those who understand the problem before choosing the tool.`,
    'about.p3': `As a <strong>Technical Assistant (AER)</strong> and <strong>Tech Lead of the Student Union (BDE)</strong> at Epitech Benin, I have developed a real taste for knowledge sharing and technical team coordination.`,
    'about.stat-projects': `Projects completed`,
    'about.stat-exp': `Pro experiences`,
    'about.stat-code': `Years of code`,
    'about.interests-title': `Interests`,
    'about.interest-chess-title': `Chess`,
    'about.interest-chess-desc': `Strategy, anticipation, and long-term vision`,
    'about.interest-prog-title': `Competitive Programming`,
    'about.interest-prog-desc': `Coding Game — Algorithmic problem solving`,
    'about.interest-music-title': `Music`,
    'about.interest-music-desc': `Creativity and artistic discipline`,
    'about.interest-sport-title': `Gym`,
    'about.interest-sport-desc': `Rigor and self-improvement`,
    'skills.tag': `02. Skills`,
    'skills.title': `Technical <span class="gradient-text">Stack</span>`,
    'skills.web': `Web & Frontend`,
    'skills.backend': `Backend & API`,
    'skills.system': `System & Low Level`,
    'skills.hardware': `Hardware & Robotics`,
    'skills.ai': `AI & Algorithms`,
    'skills.devops': `Tools & DevOps`,
    'projects.tag': `03. Projects`,
    'projects.title': `Key <span class="gradient-text">Realizations</span>`,
    'projects.filter-all': `All`,
    'projects.filter-web': `Web`,
    'projects.filter-system': `System & AI`,
    'projects.filter-hardware': `Hardware`,
    'projects.staffbar-title': `StaffBar — Recruitment Platform`,
    'projects.staffbar-desc': `Modern platform connecting candidates/recruiters with real-time messaging system, advanced filters, and profile management.`,
    'projects.staffbar-h1': `✓ Auth & profile management`,
    'projects.staffbar-h2': `✓ Integrated messaging`,
    'projects.staffbar-h3': `✓ Advanced filters`,
    'projects.stockcontrol-title': `StockControl — Intelligent Management for Artisans`,
    'projects.stockcontrol-desc': `<strong>Mobile-first</strong> web app for inventory management in the beverage sector. Integrates <strong>Google Gemini AI</strong> to analyze data and provide purchasing advice, reduce waste, and optimize profitability.`,
    'projects.stockcontrol-h1': `✓ Real-time stock tracking`,
    'projects.stockcontrol-h2': `✓ Google Gemini integrated`,
    'projects.stockcontrol-h3': `✓ Multi-tenant (RLS)`,
    'projects.stockcontrol-h4': `✓ Expiry alerts`,
    'projects.vote-title': `Epitech Benin Student Vote`,
    'projects.vote-desc': `<strong>Secure digital voting</strong> platform for student elections. Weighted voting system, real-time admin dashboard, graphical results, and full audit logs for transparency.`,
    'projects.vote-h1': `✓ Weighted voting`,
    'projects.vote-h2': `✓ Real-time dashboard`,
    'projects.vote-h3': `✓ Full audit trail`,
    'projects.vote-h4': `✓ Recharts graphs`,
    'projects.marketplace-title': `Marketplace Backend`,
    'projects.marketplace-desc': `Robust e-commerce backend with listing publication/edit/delete system and dynamic admin interface for content management.`,
    'projects.marketplace-h1': `✓ Listings CRUD`,
    'projects.marketplace-h2': `✓ Admin interface`,
    'projects.marketplace-h3': `✓ User management`,
    'projects.gomoku-title': `Gomoku AI`,
    'projects.gomoku-desc': `High-performance AI for the Gomoku board game. Neural network using the <strong>Minimax algorithm with Alpha-Beta pruning</strong> for optimal move prediction.`,
    'projects.gomoku-h1': `✓ Minimax + Alpha-Beta`,
    'projects.gomoku-h2': `✓ High performance`,
    'projects.zappy-title': `Zappy — Game Server & AI Client`,
    'projects.zappy-desc': `Real-time game server in C and autonomous AI client in Python capable of resource collection, inter-agent communication, and strategic evolution in a multi-agent environment.`,
    'projects.zappy-h1': `✓ Real-time server`,
    'projects.zappy-h2': `✓ Multi-agent AI`,
    'projects.zappy-h3': `✓ Network protocol`,
    'projects.arcade-title': `Arcade Engine — Modular Game Engine`,
    'projects.arcade-desc': `Game engine architected with dynamic library loading at runtime via <code>dlopen</code>, allowing graphics renderer switching without recompilation.`,
    'projects.arcade-h1': `✓ dlopen dynamic libs`,
    'projects.arcade-h2': `✓ Modular architecture`,
    'experience.tag': `04. Experience`,
    'experience.title': `Professional <span class="gradient-text">Journey</span>`,
    'experience.bde-title': `Tech Lead`,
    'experience.bde-t1': `Direction of the technical department, mentoring and monitoring student projects`,
    'experience.bde-t2': `Coordination of technical support for campus events`,
    'experience.bde-t3': `Management of all tech associations (Cybersecurity, Robotics, AI, Web Dev, Game Dev, Blockchain)`,
    'experience.aer-date': `March 2025 — Present`,
    'experience.aer-title': `Technical Assistant — AER`,
    'experience.aer-t1': `Accompanying students in understanding and solving technical projects`,
    'experience.aer-t2': `Leading workshops and support sessions in programming and project methodology`,
    'experience.aer-t3': `Code reviews to ensure quality and best practices`,
    'experience.cerb-date': `October — December 2024`,
    'experience.cerb-title': `Robotics Intern`,
    'experience.cerb-t1': `Development of robotic prototypes and programming Arduino microcontrollers`,
    'experience.cerb-t2': `Organization and animation of educational workshops for middle schoolers`,
    'experience.cerb-t3': `Introduction to robotics and programming for young audiences`,
    'education.tag': `05. Education`,
    'education.title': `Academic <span class="gradient-text">Background</span>`,
    'education.bachelor-date': `February 2024 — Present`,
    'education.badge-current': `Current`,
    'education.bachelor-title': `Bachelor of Computer Science`,
    'education.bachelor-desc': `Advanced Algorithms, Artificial Intelligence, Web Development, Embedded Systems. Software Architecture, Unix/Linux systems, low-level programming.`,
    'education.badge-obtained': `Obtained`,
    'education.bac-title': `Scientific Baccalaureate (C)`,
    'education.bac-desc': `Mathematics and Physics specialty. Obtained with honors.`,
    'education.badge-cert': `Certifications`,
    'education.cert-title': `Programming Certifications`,
    'education.cert-desc': `Algorithmic challenges on Coding Game. High performance and optimization under constraints.`,
    'contact.tag': `06. Contact`,
    'contact.title': `Let's work <span class="gradient-text">together</span>`,
    'contact.lead': `Available for freelance missions, internships, or full-time opportunities. Feel free to contact me!`,
    'contact.email-label': `Email`,
    'contact.phone-label': `Phone`,
    'contact.loc-label': `Location`,
    'contact.loc-value': `Fifadji C/1850, Cotonou, Benin`,
    'contact.form-name': `Full name`,
    'contact.placeholder-name': `Your name`,
    'contact.form-email': `Email`,
    'contact.placeholder-email': `your@email.com`,
    'contact.form-subject': `Subject`,
    'contact.placeholder-subject': `Opportunity / Collaboration / Question`,
    'contact.form-message': `Message`,
    'contact.placeholder-message': `Describe your project or request...`,
    'contact.form-submit': `Send Message`,
    'footer.text': `Designed & developed by <strong>Bill Adjagboni</strong> — Cotonou, Benin 🇧🇯`,
    'footer.copy': `© 2026 Bill Adjagboni. All rights reserved.`,
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function updateTexts() {
  // Update normal texts
  document.querySelectorAll('[data-t9n]').forEach(el => {
    const key = el.getAttribute('data-t9n');
    if (TRANSLATIONS[currentLang][key]) {
      el.innerHTML = TRANSLATIONS[currentLang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-t9n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-t9n-placeholder');
    if (TRANSLATIONS[currentLang][key]) {
      el.placeholder = TRANSLATIONS[currentLang][key];
    }
  });

  // Update language button
  const langBtnText = document.getElementById('lang-text');
  const langFlag = document.getElementById('lang-flag-container');
  if (currentLang === 'fr') {
    langBtnText.textContent = 'EN';
    langFlag.textContent = '🇺🇸';
  } else {
    langBtnText.textContent = 'FR';
    langFlag.textContent = '🇫🇷';
  }

  // Update typewriter TITLES
  TITLES_LIST = currentLang === 'fr' ? TITLES_FR : TITLES_EN;
  // Reset typewriter if language changed to avoid mess
  titleIdx = 0;
  charIdx = 0;
  isDeleting = false;
}

const langBtn = document.getElementById('lang-btn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('portfolio-lang', currentLang);
    updateTexts();
  });
}

const TITLES_FR = [
  'Ingénieur Logiciel',
  'Développeur Full Stack',
  'Passionné de Robotique',
  'Assistant Technique (AER)',
  'Problem Solver'
];

const TITLES_EN = [
  'Software Engineer',
  'Full Stack Developer',
  'Robotics Enthusiast',
  'Technical Mentor',
  'Problem Solver'
];

let TITLES_LIST = currentLang === 'fr' ? TITLES_FR : TITLES_EN;

/* ---- Typewriter Effect ---- */
let titleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typewrite() {
  const current = TITLES_LIST[titleIdx];
  if (!current) return;
  if (isDeleting) {
    typeEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typeEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }

  if (!isDeleting && charIdx === current.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    titleIdx = (titleIdx + 1) % TITLES_LIST.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typewrite, speed);
}
setTimeout(typewrite, 600);
updateTexts(); // Initialize texts on load


/* ---- Particle Canvas ---- */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const PARTICLE_COUNT = 70;
const particles = [];

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '108,99,255' : '0,212,255';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

let animRAF;
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  animRAF = requestAnimationFrame(animateParticles);
}
animateParticles();

// Stop particles when hero is not visible
const heroSection = document.getElementById('hero');
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!animRAF) animateParticles();
    } else {
      cancelAnimationFrame(animRAF);
      animRAF = null;
    }
  });
});
heroObserver.observe(heroSection);


/* ---- Scroll Reveal ---- */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.style.getPropertyValue('--delay') || '0s';
      entry.target.style.transitionDelay = delay;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));


/* ---- Active Nav on Scroll ---- */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateNav() {
  const scrollY = window.scrollY;

  // Scrolled class
  if (scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  // Active link
  let current = 'hero';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();


/* ---- Smooth nav link click ---- */
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    document.body.classList.remove('nav-open');
  });
});


/* ---- Hamburger Menu ---- */
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});


/* ---- Project Filter ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


/* ---- Contact Form ---- */
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;

  // Open mailto
  const mailtoLink = `mailto:bill.adjagboni@epitech.eu?subject=${encodeURIComponent(subject || 'Contact depuis portfolio')}&body=${encodeURIComponent(`Bonjour Bill,\n\nJe m'appelle ${name} (${email}).\n\n${message}`)}`;
  window.open(mailtoLink);

  // Feedback
  submitBtn.querySelector('span').textContent = 'Message envoyé ✓';
  submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  setTimeout(() => {
    submitBtn.querySelector('span').textContent = 'Envoyer le message';
    submitBtn.style.background = '';
    form.reset();
  }, 3000);
});


/* ---- Cursor glow effect (desktop) ---- */
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
    top: -300px; left: -300px;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}


/* ---- Stagger reveal on skill tags ---- */
document.querySelectorAll('.skill-category').forEach((cat, i) => {
  cat.querySelectorAll('.skill-tag').forEach((tag, j) => {
    tag.style.transitionDelay = `${j * 0.05}s`;
  });
});


/* ---- Number counter animation for stats ---- */
function animateCounter(el, target) {
  let current = 0;
  const increment = target / 40;
  const step = () => {
    current += increment;
    if (current < target) {
      el.textContent = Math.floor(current) + (el.dataset.suffix || '+');
      requestAnimationFrame(step);
    } else {
      el.textContent = target + (el.dataset.suffix || '+');
    }
  };
  step();
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const val = parseInt(el.textContent);
      if (!isNaN(val)) animateCounter(el, val);
      statsObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => statsObserver.observe(el));
