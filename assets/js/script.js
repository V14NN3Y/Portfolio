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
        'nav.cv': `Download CV`,
        'nav.hire': `Hire me`,
        'hero.badge': `Available for missions / internship`,
        'hero.desc': `Software Engineer combining <strong>Full Stack</strong> and <strong>Embedded Systems</strong> expertise. I build end-to-end solutions — from hardware (Arduino) to scalable web platforms (React, Django).`,
        'hero.cta-work': `View my work`,
        'hero.cta-contact': `Contact me`,
        /* Additional English translations omitted for brevity */
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

    // Theme toggle (simple)
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const root = document.documentElement;
            const isLight = root.getAttribute('data-theme') === 'light';
            root.setAttribute('data-theme', isLight ? 'dark' : 'light');
        });
    }

    // Simple reveal on scroll
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    revealEls.forEach(el => obs.observe(el));
});

