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
        'nav.cv': `Télécharger CV`,
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
        'about.soft-skills-title': `Compétences Humaines`,
        'about.ss-leadership-title': `Leadership Collaboratif`,
        'about.ss-leadership-desc': `Écoute active et consensus d'équipe.`,
        'about.ss-mentoring-title': `Pédagogie & Mentorat`,
        'about.ss-mentoring-desc': `Animation de workshops et support technique.`,
        'about.ss-organization-title': `Organisation Agile`,
        'about.ss-organization-desc': `Gestion avec Trello/Notion et itération rapide.`,
        'about.ss-teamwork-title': `Esprit d'Équipe`,
        'about.ss-teamwork-desc': `Flexibilité et facilitation collective.`,
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
        'projects.role-web-fullstack': `Développeur Full Stack`,
        'projects.role-web-fullstack-ai': `Développeur Full Stack & IA`,
        'projects.role-frontend': `Développeur Frontend`,
        'projects.role-backend': `Développeur Backend`,
        'projects.role-ai': `Ingénieur IA`,
        'projects.role-systems': `Développeur Systèmes & Réseaux`,
        'projects.role-cpp': `Développeur Systèmes C++`,
        'projects.staffbar-title': `StaffBar`,
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
        'nav.cv': `Download CV`,
        'hero.badge': `Available for missions / internship`,
        'hero.desc': `Software Engineer combining <strong>Full Stack</strong> and <strong>Embedded Systems</strong> expertise. I build end-to-end solutions — from hardware (Arduino) to scalable web platforms (React, Django).`,
        'hero.cta-work': `View my work`,
        'hero.cta-contact': `Contact me`,
        'about.tag': `01. About`,
        'about.title': `Who am I<span class="gradient-text">?</span>`,
        'about.p1': `Final-year student in the <strong>Bachelor's in Computer Expertise</strong> at Epitech Bénin, I am passionate about building complete software solutions — from user interfaces to embedded systems.`,
        'about.p2': `My journey has led me to design full-stack web platforms, AI for games, business management systems integrating AI, and even robotics prototypes. I firmly believe the best engineers understand the problem before choosing the tool.`,
        'about.p3': `As a <strong>Technical Assistant (AER)</strong> and <strong>Tech Lead of the Student Office (BDE)</strong> at Epitech Bénin, I have developed a real taste for knowledge sharing and technical team coordination.`,
        'about.stat-projects': `Projects completed`,
        'about.stat-exp': `Work experiences`,
        'about.stat-code': `Years coding`,
        'about.interests-title': `Interests`,
        'about.soft-skills-title': `Soft Skills`,
        'about.ss-leadership-title': `Collaborative Leadership`,
        'about.ss-leadership-desc': `Active listening and team consensus.`,
        'about.ss-mentoring-title': `Teaching & Mentoring`,
        'about.ss-mentoring-desc': `Workshop facilitation and technical support.`,
        'about.ss-organization-title': `Agile Organization`,
        'about.ss-organization-desc': `Trello/Notion management and rapid iteration.`,
        'about.ss-teamwork-title': `Team Spirit`,
        'about.ss-teamwork-desc': `Flexibility and collective facilitation.`,
        'about.interest-chess-title': `Chess`,
        'about.interest-chess-desc': `Strategy, anticipation and long-term vision`,
        'about.interest-prog-title': `Competitive Programming`,
        'about.interest-prog-desc': `Coding Game — Algorithmic problem solving`,
        'about.interest-music-title': `Music`,
        'about.interest-music-desc': `Creativity and artistic discipline`,
        'about.interest-sport-title': `Gym`,
        'about.interest-sport-desc': `Discipline and self-improvement`,
        'skills.tag': `02. Skills`,
        'skills.title': `Tech <span class="gradient-text">Stack</span>`,
        'skills.web': `Web & Frontend`,
        'skills.backend': `Backend & API`,
        'skills.system': `Systems & Low-level`,
        'skills.hardware': `Hardware & Robotics`,
        'skills.ai': `AI & Algorithms`,
        'skills.devops': `Tools & DevOps`,
        'projects.tag': `03. Projects`,
        'projects.title': `Key <span class="gradient-text">Projects</span>`,
        'projects.filter-all': `All`,
        'projects.filter-web': `Web`,
        'projects.filter-system': `Systems & AI`,
        'projects.filter-hardware': `Hardware`,
        'projects.role-web-fullstack': `Full Stack Developer`,
        'projects.role-web-fullstack-ai': `Full Stack & AI Developer`,
        'projects.role-frontend': `Frontend Developer`,
        'projects.role-backend': `Backend Developer`,
        'projects.role-ai': `AI Engineer`,
        'projects.role-systems': `Systems & Network Developer`,
        'projects.role-cpp': `C++ Systems Developer`,
        'projects.staffbar-title': `StaffBar`,
        'projects.staffbar-desc': `Modern recruitment platform with real-time messaging, advanced filters and profile management.`,
        'projects.staffbar-h1': `✓ Auth & profile management`,
        'projects.staffbar-h2': `✓ Built-in messaging`,
        'projects.staffbar-h3': `✓ Advanced filters`,
        'projects.stockcontrol-title': `StockControl — Smart Inventory for Artisans`,
        'projects.stockcontrol-desc': `<strong>Mobile-first</strong> inventory management web app for beverage artisans. Integrates <strong>Google Gemini AI</strong> to analyze data and provide purchasing recommendations, reduce waste and optimize profitability.`,
        'projects.stockcontrol-h1': `✓ Real-time stock tracking`,
        'projects.stockcontrol-h2': `✓ Gemini AI integration`,
        'projects.stockcontrol-h3': `✓ Multi-company (RLS)`,
        'projects.stockcontrol-h4': `✓ Expiry alerts`,
        'projects.vote-title': `Epitech Bénin Vote BDE`,
        'projects.vote-desc': `<strong>Secure digital voting</strong> platform for student office elections. Weighted voting system, real-time admin dashboard, chart results and complete audit trail for transparency.`,
        'projects.vote-h1': `✓ Weighted voting`,
        'projects.vote-h2': `✓ Real-time dashboard`,
        'projects.vote-h3': `✓ Full audit trail`,
        'projects.vote-h4': `✓ Recharts graphs`,
        'projects.marketplace-title': `Marketplace Backend`,
        'projects.marketplace-desc': `Robust e-commerce backend with ad CRUD system and dynamic admin interface for content management.`,
        'projects.marketplace-h1': `✓ Ad CRUD`,
        'projects.marketplace-h2': `✓ Admin interface`,
        'projects.marketplace-h3': `✓ User management`,
        'projects.gomoku-title': `Gomoku AI`,
        'projects.gomoku-desc': `High-performance AI for Gomoku. Neural network using the <strong>Minimax algorithm with Alpha-Beta pruning</strong> for optimal move prediction.`,
        'projects.gomoku-h1': `✓ Minimax + Alpha-Beta`,
        'projects.gomoku-h2': `✓ High performance`,
        'projects.zappy-title': `Zappy — Game Server & AI Client`,
        'projects.zappy-desc': `Real-time game server in C and autonomous Python AI client capable of resource gathering, inter-agent communication and strategic evolution in a multi-agent environment.`,
        'projects.zappy-h1': `✓ Real-time server`,
        'projects.zappy-h2': `✓ Multi-agent AI`,
        'projects.zappy-h3': `✓ Network protocol`,
        'projects.arcade-title': `Arcade Engine — Modular Game Engine`,
        'projects.arcade-desc': `Game engine with dynamic graphic library loading at runtime via <code>dlopen</code>, allowing renderer switching without recompilation.`,
        'projects.arcade-h1': `✓ dlopen dynamic libs`,
        'projects.arcade-h2': `✓ Modular architecture`,
        'experience.tag': `04. Experience`,
        'experience.title': `Professional <span class="gradient-text">Journey</span>`,
        'experience.bde-title': `Tech Lead`,
        'experience.bde-t1': `Leading the technical department, supporting and monitoring student projects`,
        'experience.bde-t2': `Coordinating technical support for campus events`,
        'experience.bde-t3': `Managing all tech associations (Cybersecurity, Robotics, AI, Web Development, Game Development, Blockchain)`,
        'experience.aer-date': `March 2025 — Present`,
        'experience.aer-title': `Technical Assistant — AER`,
        'experience.aer-t1': `Guiding students in understanding and solving technical projects`,
        'experience.aer-t2': `Leading workshops and support sessions in programming and project methodology`,
        'experience.aer-t3': `Code reviews to ensure quality and best practices`,
        'experience.cerb-date': `October — December 2024`,
        'experience.cerb-title': `Robotics Intern`,
        'experience.cerb-t1': `Developing robotics prototypes and programming Arduino microcontrollers`,
        'experience.cerb-t2': `Organizing and leading educational workshops for middle school students`,
        'experience.cerb-t3': `Introducing young audiences to robotics and programming`,
        'education.tag': `05. Education`,
        'education.title': `Academic <span class="gradient-text">Background</span>`,
        'education.bachelor-date': `February 2024 — Present`,
        'education.badge-current': `In progress`,
        'education.bachelor-title': `Bachelor's in Computer Expertise`,
        'education.bachelor-desc': `Advanced algorithms, Artificial Intelligence, Web Development, Embedded Systems. Software architecture, Unix/Linux systems, low-level programming.`,
        'education.badge-obtained': `Completed`,
        'education.bac-title': `Baccalaureate Series C`,
        'education.bac-desc': `Specialization in Mathematics and Physics. Graduated with honors.`,
        'education.badge-cert': `Certifications`,
        'education.cert-title': `Programming Certifications`,
        'education.cert-desc': `Solving algorithmic challenges in C, Python, C++. Development speed and code optimization under constraints.`,
        'contact.tag': `06. Contact`,
        'contact.title': `Let's work <span class="gradient-text">together</span>`,
        'contact.lead': `Available for freelance missions, internships, apprenticeships or full-time opportunities. Feel free to reach out!`,
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
        'contact.placeholder-message': `Describe your project or inquiry...`,
        'contact.form-submit': `Send message`,
        'footer.text': `Designed & developed by <strong>Bill Adjagboni</strong> — Cotonou, Benin 🇧🇯`,
        'footer.copy': `© 2026 Bill Adjagboni. All rights reserved.`,
    }
};

/* ---- State & Language ---- */
const TITLES_FR = [
    `Ingénieur Logiciel`,
    `Développeur Full Stack`,
    `Passionné de Robotique`,
    `Assistant Technique (AER)`,
    `Problem Solver`
];

const TITLES_EN = [
    `Software Engineer`,
    `Full Stack Developer`,
    `Robotics Enthusiast`,
    `Technical Mentor`,
    `Problem Solver`
];

let currentLang = 'fr';
try {
    currentLang = localStorage.getItem('portfolio-lang') || 'fr';
} catch (e) {
    console.warn('LocalStorage is not accessible:', e);
}

let TITLES_LIST = currentLang === 'fr' ? TITLES_FR : TITLES_EN;
let titleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function updateTexts() {
    document.querySelectorAll('[data-t9n]').forEach(el => {
        const key = el.getAttribute('data-t9n');
        if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
            el.innerHTML = TRANSLATIONS[currentLang][key];
        }
    });

    document.querySelectorAll('[data-t9n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-t9n-placeholder');
        if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
            el.placeholder = TRANSLATIONS[currentLang][key];
        }
    });

    const langBtnText = document.getElementById('lang-text');
    const langFlag = document.getElementById('lang-flag-container');
    if (langBtnText && langFlag) {
        if (currentLang === 'fr') {
            langBtnText.textContent = 'EN';
            langFlag.textContent = '🇺🇸';
        } else {
            langBtnText.textContent = 'FR';
            langFlag.textContent = '🇫🇷';
        }
    }

    TITLES_LIST = currentLang === 'fr' ? TITLES_FR : TITLES_EN;
    titleIdx = 0;
    charIdx = 0;
    isDeleting = false;
}

const typeEl = document.getElementById('typewriter');

function typewrite() {
    if (!typeEl) return;
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

/* ========================================
   PARTICLES CANVAS
   ======================================== */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');
    let particles = [];
    let mouse = { x: null, y: null };
    let animId;

    function resize() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }

    function create(count) {
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 0.5
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const baseColor = isLight ? '108, 99, 255' : '108, 99, 255';

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            if (mouse.x !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    const force = (100 - dist) / 100;
                    p.vx += (dx / (dist || 1)) * force * 0.02;
                    p.vy += (dy / (dist || 1)) * force * 0.02;
                }
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${baseColor}, 0.5)`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    const alpha = (1 - dist / 150) * 0.3;
                    ctx.strokeStyle = `rgba(${baseColor}, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        animId = requestAnimationFrame(draw);
    }

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    resize();
    create(Math.min(Math.floor((canvas.width * canvas.height) / 8000), 80));
    draw();
    window.addEventListener('resize', () => { resize(); create(60); });
}

/* ========================================
   HAMBURGER MENU
   ======================================== */
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    if (!hamburger || !navbar) return;

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('nav-open');
            hamburger.classList.remove('active');
        });
    });
}

/* ========================================
   PROJECT FILTERS
   ======================================== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                card.classList.toggle('hidden', filter !== 'all' && card.getAttribute('data-category') !== filter);
            });
        });
    });
}

/* ========================================
   CONTACT FORM
   ======================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailto = `mailto:bill.adjagboni@epitech.eu?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    });
}

/* ========================================
   MOUSE PARALLAX — HERO
   ======================================== */
function initMouseParallax() {
    const hero = document.getElementById('hero');
    const avatar = document.querySelector('.hero-avatar');
    const tags = document.querySelectorAll('.floating-tag');
    const orbits = document.querySelectorAll('.avatar-orbit');
    if (!hero || !avatar) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        avatar.style.transform = `translate(${x * -20}px, ${y * -20}px)`;

        tags.forEach((tag, i) => {
            const speed = 30 + i * 10;
            tag.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });

        orbits.forEach((orbit, i) => {
            const rot = i === 0 ? x * 5 : -x * 3;
            orbit.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        avatar.style.transform = '';
        tags.forEach(tag => tag.style.transform = '');
        orbits.forEach(orbit => orbit.style.transform = '');
    });
}

/* ========================================
   SCROLL PARALLAX — content shift
   ======================================== */
function initScrollParallax() {
    const containers = document.querySelectorAll('section > .container');
    if (!containers.length) return;

    function apply() {
        containers.forEach(el => {
            const rect = el.parentElement.getBoundingClientRect();
            const speed = 0.04;
            const raw = rect.top * speed;
            const clamped = Math.max(-25, Math.min(25, raw));
            el.style.transform = clamped !== 0 ? `translateY(${clamped}px)` : '';
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => { apply(); ticking = false; });
            ticking = true;
        }
    }, { passive: true });

    apply();
}

/* ========================================
   ACTIVE NAV LINK
   ======================================== */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

/* ========================================
   NAVBAR SCROLL EFFECT
   ======================================== */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ========================================
   THEME TOGGLE WITH PERSISTENCE
   ======================================== */
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;

    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    } catch (e) { /* ignore */ }

    const root = document.documentElement;
    root.setAttribute('data-theme', savedTheme);

    themeBtn.addEventListener('click', () => {
        const isLight = root.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try {
            localStorage.setItem('portfolio-theme', next);
        } catch (e) { /* ignore */ }
    });
}

/* ========================================
   SCROLL REVEAL — staggered cascade
   ======================================== */
function initReveal() {
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if (!revealEls.length) return;

    document.querySelectorAll('section').forEach(section => {
        const els = section.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        els.forEach((el, i) => {
            const delay = Math.min(i * 0.07, 0.5);
            el.style.setProperty('--delay', `${delay}s`);
        });
    });

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => obs.observe(el));
}

/* ========================================
   INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            try {
                localStorage.setItem('portfolio-lang', currentLang);
            } catch (e) {
                console.error('Could not save language preference:', e);
            }
            updateTexts();
        });
    }

    updateTexts();
    typewrite();
    initThemeToggle();
    initReveal();
    if (!window.__threeActive) { initParticles(); }
    initHamburger();
    initProjectFilters();
    initContactForm();
    initMouseParallax();
    initScrollParallax();
    initActiveNav();
    initNavbarScroll();
});
