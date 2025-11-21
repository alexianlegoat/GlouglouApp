// On attend que le HTML soit prêt
const divNomJoueur = document.getElementById('nom-joueur-actuel');
const divActionJeu = document.getElementById('action-de-jeu');
const zoneDeJeu = document.getElementById('zone-de-jeu');
const btnTourSuivant = document.getElementById('btnTourSuivant');
const jeuContainer = document.getElementById('jeu-container');
const ecranFin = document.getElementById('ecran-fin');
const btnReplay = document.getElementById('btnReplay');
const btnChangeModeEnd = document.getElementById('btnChangeModeEnd');
const btnManagePlayers = document.getElementById('btnManagePlayers');
const btnChangePack = document.getElementById('btnChangePack');
const confirmModal = document.getElementById('confirmModal');
const modalBtnYes = document.getElementById('modalBtnYes');
const modalBtnNo = document.getElementById('modalBtnNo');
const managePlayersModal = document.getElementById('managePlayersModal');
const modalPlayerList = document.getElementById('modalPlayerList');
const modalAddPlayerInput = document.getElementById('modalAddPlayerInput');
const modalAddPlayerBtn = document.getElementById('modalAddPlayerBtnInline');
const modalBtnClose = document.getElementById('modalBtnClose');

// --- ELEMENT DES RÈGLES ---
const chutModal = document.getElementById('passerelleModal');
const modalBtnChutDone = document.getElementById('modalBtnCestFait');
const passerelleText = document.getElementById('passerelleText');

const ruleBannerList = document.getElementById('regle-active-liste');
const ruleDetailModal = document.getElementById('ruleDetailModal');
const ruleDetailTitle = document.getElementById('modalRuleTitle');
const ruleDetailText = document.getElementById('modalRuleText');
const modalBtnRuleOK = document.getElementById('modalBtnCompris');

// IDs pour le badge de gorgées
const gorgeesCount = document.getElementById('gorgees-count');
const gorgeesBadge = document.getElementById('gorgees-badge');


// --- VARIABLES GLOBALES ---
let questionsDisponibles = []; 
let reglesDisponibles = []; 
let packsActifs = []; 
let joueursEnJeu = [];
let tourActuel = 0;
let activeRules = [];
let wakeLock = null;
let nombreDeCartesJouees = 0;

// --- FONCTION WAKE LOCK ---
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) { console.log("Wake Lock Error", err); }
}
document.addEventListener('visibilitychange', async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') { await requestWakeLock(); }
});

// --- FONCTION : Mélanger un tableau ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// --- RECHARGER QUESTIONS ---
function rechargerQuestions() { 
    questionsDisponibles = []; 
    reglesDisponibles = []; 
    
    // 1. Chargement des cartes persos
    const mesCartesPerso = JSON.parse(localStorage.getItem('mesCartesPerso')) || [];

    if (typeof packsDeQuestions === 'undefined' || packsActifs.length === 0) {
        console.error("Erreur packs.");
        return;
    }

    packsActifs.forEach(nomPack => {
        
        // A. On ajoute les cartes du pack officiel
        if (packsDeQuestions[nomPack]) {
            const pack = packsDeQuestions[nomPack];
            if (pack.questions) pack.questions.forEach(c => questionsDisponibles.push({ type: 'question', carte: c }));
            if (pack.actions) pack.actions.forEach(c => questionsDisponibles.push({ type: 'action', carte: c }));
            if (pack.chut) pack.chut.forEach(c => questionsDisponibles.push({ type: 'chut', carte: c }));
            if (pack.regles) pack.regles.forEach(r => reglesDisponibles.push(r));
        }

        // B. On injecte les cartes PERSO qui appartiennent à ce pack
        // On filtre celles dont le 'pack' correspond au 'nomPack' actuel
        const cartesAInjecter = mesCartesPerso.filter(c => c.pack === nomPack);
        
        cartesAInjecter.forEach(c => {
            if (c.type === 'regle') {
                // Structure spécifique pour les règles
                reglesDisponibles.push({
                    titre: c.titre,
                    texte: c.texte,
                    duree: parseInt(c.duree),
                    gorgees: parseInt(c.gorgees)
                });
            } 
            else if (c.type === 'chut') {
                // Structure spécifique pour Chut
                questionsDisponibles.push({
                    type: 'chut',
                    carte: {
                        texte_B: c.texte_B,
                        texte_C: c.texte_C,
                        gorgees: parseInt(c.gorgees)
                    }
                });
            } 
            else {
                // Question ou Action classique
                questionsDisponibles.push({
                    type: c.type, // 'question' ou 'action'
                    carte: {
                        texte: c.texte,
                        gorgees: parseInt(c.gorgees)
                    }
                });
            }
        });

    });

    questionsDisponibles = shuffleArray(questionsDisponibles);
    reglesDisponibles = shuffleArray(reglesDisponibles);
}


// --- RENDER BANNIÈRES DE RÈGLES (MODIFIÉ POUR GORGÉES) ---
function renderRuleBanners() {
    if (!ruleBannerList) return;
    
    const bannerContainer = document.getElementById('regle-active-bar');
    if (!bannerContainer) return;

    ruleBannerList.innerHTML = '';
    
    if (activeRules.length === 0) {
        bannerContainer.style.display = 'none'; 
        return;
    }
    bannerContainer.style.display = 'block'; 
    
    activeRules.forEach((rule, index) => {
        // Création de l'élément de liste (Le bandeau)
        const banner = document.createElement('li'); 
        banner.className = 'rule-banner'; 
        
        // On stocke les infos directement sur l'élément pour le clic
        banner.dataset.title = rule.titre;
        banner.dataset.text = rule.texte; 
        
        // Titre de la règle
        const title = document.createElement('span');
        title.className = 'rule-banner-title';
        title.textContent = rule.titre;
        
        // 1. Badge Gorgées (NOUVEAU)
        // On réutilise la classe .rule-banner-turns pour avoir la même forme,
        // mais on change la couleur en bleu via JS.
        const sips = document.createElement('span');
        sips.className = 'rule-banner-turns'; 
        sips.style.backgroundColor = '#3b82f6'; // Bleu
        sips.style.marginRight = '6px'; // Espace entre les badges
        sips.textContent = rule.gorgees + "🍺";
        
        // 2. Compteur de tours
        const turns = document.createElement('span');
        turns.className = 'rule-banner-turns';
        turns.style.backgroundColor = '#ff2b2b'; // <--- MODIFICATION : Rouge vif
        
        if(rule.turnsLeft > 1) {
            turns.textContent = rule.turnsLeft + " tours";
        } else {
            turns.textContent = "Dernier tour";
        }
        
        banner.appendChild(title);
        banner.appendChild(sips);  // Ajout du badge gorgées
        banner.appendChild(turns); // Ajout du badge tours
        
        // Ajout au DOM
        ruleBannerList.appendChild(banner);
    });
}

// --- GESTION DU BADGE GORGÉES ---
function showGorgees(gorgees) {
    if (!gorgeesBadge || !gorgeesCount) return;

    const numGorgees = parseInt(gorgees);
    
    if (numGorgees > 0) {
        gorgeesCount.textContent = numGorgees;
        gorgeesBadge.style.display = 'block';
        
        gorgeesBadge.classList.remove('anim-pop');
        void gorgeesBadge.offsetWidth; 
        gorgeesBadge.classList.add('anim-pop');
        
        setTimeout(() => {
            gorgeesBadge.classList.remove('anim-pop');
        }, 300);
        
    } else {
        gorgeesBadge.style.display = 'none';
        gorgeesCount.textContent = '?';
    }
}


// --- JEU ---
function chargerJeu() {
    if(jeuContainer) jeuContainer.style.display = 'block';
    if(ecranFin) ecranFin.style.display = 'none';

    const joueursSauvegardes = localStorage.getItem('listeDesJoueurs');
    const packsSauvegardes = localStorage.getItem('packsDeJeu'); 
    
    if (!joueursSauvegardes || !packsSauvegardes) {
        afficherErreur("Erreur de chargement. Données de jeu manquantes.");
        if(btnTourSuivant) btnTourSuivant.style.display = 'none';
        return;
    }
    
    requestWakeLock();
    joueursEnJeu = JSON.parse(joueursSauvegardes);
    packsActifs = JSON.parse(packsSauvegardes); 

    activeRules = [];
    nombreDeCartesJouees = 0;
    renderRuleBanners();
    rechargerQuestions(); 
    demarrerNouveauTour();
}

function demarrerNouveauTour() {
    if (joueursEnJeu.length === 0) { afficherErreur("Plus de joueurs !"); return; }
    if (questionsDisponibles.length === 0 && reglesDisponibles.length === 0 && activeRules.length === 0) { 
        terminerPartie(); return; 
    }

    // Gestion des règles actives (décrémentation)
    if (activeRules.length > 0) {
        activeRules.forEach(rule => { rule.turnsLeft--; });
        // On ne garde que celles qui ont encore des tours > 0
        activeRules = activeRules.filter(rule => rule.turnsLeft > 0);
        renderRuleBanners();
    }

    if (tourActuel >= joueursEnJeu.length) { tourActuel = 0; }
    
    if(btnTourSuivant) {
        btnTourSuivant.textContent = "Tour Suivant";
        btnTourSuivant.dataset.state = 'default';
        btnTourSuivant.style.display = 'block';
    }
    afficherQuestionAleatoire();
}

function afficherQuestionAleatoire() {
    // 1. Vérification si le jeu est fini
    if (questionsDisponibles.length === 0 && reglesDisponibles.length === 0 && activeRules.length === 0) {
        terminerPartie(); return;
    }

    // 2. LANCEMENT ANIMATION DE SORTIE
    // On ajoute la classe qui fait partir la carte vers le haut
    if (zoneDeJeu) zoneDeJeu.classList.add('anim-sortie');

    // SÉCURITÉ : On désactive le bouton pour éviter les clics multiples pendant l'animation
    if (btnTourSuivant) btnTourSuivant.disabled = true;

    // 3. ON ATTEND 300ms (Temps que la carte disparaisse)
    setTimeout(() => {
        if(divNomJoueur) divNomJoueur.textContent = joueursEnJeu[tourActuel];

        if(zoneDeJeu) {
            // On nettoie les anciennes couleurs
            zoneDeJeu.classList.remove('carte-type-question', 'carte-type-action', 'carte-type-chut', 'carte-type-regle');
        }
    
        // --- LOGIQUE DE SÉLECTION DE CARTE (Ton code original conservé) ---
        const estDebutDePartie = nombreDeCartesJouees < 7;
        const veutPiocherRegle = !estDebutDePartie && (Math.random() < 0.125); 
        
        // CAS 1 : C'est une RÈGLE
        if (veutPiocherRegle && reglesDisponibles.length > 0) {
            const regleChoisie = reglesDisponibles.splice(Math.floor(Math.random() * reglesDisponibles.length), 1)[0];
            const nomDuJoueur = joueursEnJeu[tourActuel];
            const texteDeLaRegle = regleChoisie.texte.replace(/{{JOUEUR}}/g, nomDuJoueur);
            
            activeRules.push({ 
                titre: regleChoisie.titre, 
                texte: texteDeLaRegle, 
                turnsLeft: regleChoisie.duree,
                gorgees: regleChoisie.gorgees 
            });
            
            if(zoneDeJeu) zoneDeJeu.classList.add('carte-type-regle');
            if(divNomJoueur) divNomJoueur.textContent = regleChoisie.titre; 
            if(divActionJeu) divActionJeu.textContent = texteDeLaRegle;
            
            showGorgees(regleChoisie.gorgees);
            renderRuleBanners();
            if(btnTourSuivant) { btnTourSuivant.textContent = "Compris !"; btnTourSuivant.dataset.state = 'new-rule'; }
            
        } 
        // CAS 2 : C'est une QUESTION ou ACTION
        else if (questionsDisponibles.length > 0) {
            let indexAleatoire;
            
            if (estDebutDePartie) {
                const indicesSurs = questionsDisponibles
                    .map((q, index) => q.type !== 'chut' ? index : -1)
                    .filter(index => index !== -1);

                if (indicesSurs.length > 0) {
                    const rand = Math.floor(Math.random() * indicesSurs.length);
                    indexAleatoire = indicesSurs[rand];
                } else {
                    indexAleatoire = Math.floor(Math.random() * questionsDisponibles.length);
                }
            } else {
                indexAleatoire = Math.floor(Math.random() * questionsDisponibles.length);
            }

            const carteChoisie = questionsDisponibles.splice(indexAleatoire, 1)[0];
            
            if(zoneDeJeu) zoneDeJeu.classList.add('carte-type-' + carteChoisie.type);
            showGorgees(carteChoisie.carte.gorgees);
    
            if (carteChoisie.type === 'chut') {
                if (divActionJeu) divActionJeu.textContent = "🤫 CARTE SECRÈTE 🤫"; 
                if (btnTourSuivant) btnTourSuivant.style.display = 'none'; 
                showGorgees(0); 
                const nextPlayerIndex = (tourActuel + 1) % joueursEnJeu.length;
                const nomJoueur_B = joueursEnJeu[nextPlayerIndex];
                if (passerelleText) passerelleText.textContent = "Passe le téléphone à " + nomJoueur_B + ".";
                if (modalBtnChutDone) {
                    modalBtnChutDone.dataset.nomJoueur_B = nomJoueur_B;
                    modalBtnChutDone.dataset.texte_B = carteChoisie.carte.texte_B;
                    modalBtnChutDone.dataset.texte_C = carteChoisie.carte.texte_C;
                    modalBtnChutDone.dataset.gorgees = carteChoisie.carte.gorgees || 0;
                }
                setTimeout(() => showModal(chutModal, true), 350); 

            } else {
                if (divActionJeu) divActionJeu.textContent = carteChoisie.carte.texte;
                if (btnTourSuivant) {
                    btnTourSuivant.textContent = "Tour Suivant";
                    btnTourSuivant.style.display = 'block';
                    btnTourSuivant.dataset.state = 'default';
                }
            }
        } 
        // CAS 3 : Plus de cartes mais reste des règles
        else if (activeRules.length > 0) {
             divActionJeu.textContent = "Plus de cartes ! Respectez les règles...";
             showGorgees(0); 
             btnTourSuivant.textContent = "Tour Suivant";
             btnTourSuivant.dataset.state = 'default';
        } else {
            terminerPartie();
            return;
        }
        
        nombreDeCartesJouees++;
        
        // 4. LANCEMENT ANIMATION D'ENTRÉE (Carte arrive du bas)
        if (zoneDeJeu) {
            zoneDeJeu.classList.remove('anim-sortie'); // On enlève l'ancienne classe
            zoneDeJeu.classList.add('anim-entree');    // On met la nouvelle
            
            // 5. FIN DE L'ANIMATION (400ms)
            setTimeout(() => {
                zoneDeJeu.classList.remove('anim-entree');
                // SÉCURITÉ : On réactive le bouton une fois tout fini
                if (btnTourSuivant) btnTourSuivant.disabled = false;
            }, 400);
        }

    }, 300); // Fin du timeout principal (300ms)
}

function passerAuTourSuivant() {
    tourActuel = (tourActuel + 1) % joueursEnJeu.length; 
    demarrerNouveauTour();
}

function terminerPartie() {
    if(wakeLock !== null) { wakeLock.release().then(() => { wakeLock = null; }); }
    if(jeuContainer) jeuContainer.style.display = 'none';
    if(ecranFin) ecranFin.style.display = 'block';
}

function afficherErreur(message) {
    if(divNomJoueur) divNomJoueur.textContent = "";
    if(divActionJeu) divActionJeu.textContent = message;
    if(zoneDeJeu) zoneDeJeu.classList.remove('carte-type-question', 'carte-type-action', 'carte-type-chut', 'carte-type-regle');
    showGorgees(0); 
}

 function showModal(modalElement, show) {
    if (!modalElement) return;
    if (show) {
        modalElement.style.display = 'flex';
        requestAnimationFrame(() => { modalElement.classList.add('visible'); });
    } else {
        modalElement.classList.remove('visible');
        setTimeout(() => { modalElement.style.display = 'none'; }, 300);
    }
}

function showAlertModal(message) {
    const alertModal = document.getElementById('alertModalGame');
    const alertText = document.querySelector('#alertModalGame p');
    const alertBtn = document.getElementById('modalBtnOKGame');
    
    if (alertModal && alertText && alertBtn) {
        alertText.textContent = message;
        showModal(alertModal, true);
        alertBtn.onclick = () => showModal(alertModal, false);
    } else {
        alert(message);
    }
}


function openManagePlayersModal() {
    if (!modalPlayerList) return;
    modalPlayerList.innerHTML = '';
    joueursEnJeu.forEach((nom, index) => {
        const li = document.createElement('li');
        const spanNom = document.createElement('span');
        spanNom.textContent = nom;
        spanNom.className = 'modal-player-name';
        li.appendChild(spanNom);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'modal-delete-btn';
        deleteBtn.ariaLabel = "Supprimer " + nom;
        deleteBtn.onclick = () => { deletePlayer(index); };
        li.appendChild(deleteBtn);
        modalPlayerList.appendChild(li);
    });
    showModal(managePlayersModal, true);
}

function addPlayerInGame() {
    if (!modalAddPlayerInput) return;
    const nom = modalAddPlayerInput.value.trim();
    if (nom !== "") {
        joueursEnJeu.push(nom); 
        localStorage.setItem('listeDesJoueurs', JSON.stringify(joueursEnJeu)); 
        modalAddPlayerInput.value = ""; 
        openManagePlayersModal(); 
    }
}

function deletePlayer(index) {
    if (joueursEnJeu.length <= 1) { 
        showAlertModal("Impossible de supprimer le dernier joueur !"); 
        return; 
    }
    if (index < tourActuel) { tourActuel--; } 
    joueursEnJeu.splice(index, 1); 
    localStorage.setItem('listeDesJoueurs', JSON.stringify(joueursEnJeu)); 
    openManagePlayersModal(); 
    if (tourActuel >= joueursEnJeu.length) { tourActuel = 0; }
    if (btnTourSuivant.dataset.state === 'default') { divNomJoueur.textContent = joueursEnJeu[tourActuel]; }
}

// --- ÉCOUTEURS ---
chargerJeu();

if(btnTourSuivant) {
    btnTourSuivant.addEventListener('click', () => {
        const state = btnTourSuivant.dataset.state;
        
        if (state === 'new-rule') {
            passerAuTourSuivant();
        }
        else if (state === 'chut-B') {
            const texte_C = btnTourSuivant.dataset.texte_C;
            const gorgees_C = btnTourSuivant.dataset.gorgees_C; 
            
            divNomJoueur.textContent = "Garde ça secret..."; 
            divActionJeu.textContent = texte_C;
            showGorgees(gorgees_C); 
            
            btnTourSuivant.textContent = "Tour Suivant";
            btnTourSuivant.dataset.state = 'chut-C';
        } else { 
            passerAuTourSuivant(); 
        }
    });
}

if (modalBtnChutDone) {
    modalBtnChutDone.addEventListener('click', () => {
        showModal(chutModal, false);
        const nomJoueur_B = modalBtnChutDone.dataset.nomJoueur_B;
        const texte_B = modalBtnChutDone.dataset.texte_B;
        const texte_C = modalBtnChutDone.dataset.texte_C;
        const gorgees = modalBtnChutDone.dataset.gorgees; 
        
        divNomJoueur.textContent = nomJoueur_B; 
        divActionJeu.textContent = texte_B; 
        showGorgees(gorgees); 
        
        btnTourSuivant.style.display = 'block';
        btnTourSuivant.textContent = "Téléphone transmis";
        btnTourSuivant.dataset.state = 'chut-B'; 
        btnTourSuivant.dataset.texte_C = texte_C; 
        btnTourSuivant.dataset.gorgees_C = gorgees; 
    });
}

if (modalBtnRuleOK) {
    modalBtnRuleOK.addEventListener('click', () => { showModal(ruleDetailModal, false); });
}

// Écouteur d'événements sur la LISTE pour gérer le clic sur n'importe quel bandeau
if (ruleBannerList) {
    ruleBannerList.addEventListener('click', (event) => {
        // On cherche l'élément li.rule-banner le plus proche du clic
        const clickedBanner = event.target.closest('.rule-banner'); 
        
        if (clickedBanner) {
            if (ruleDetailTitle) ruleDetailTitle.textContent = clickedBanner.dataset.title;
            if (ruleDetailText) ruleDetailText.textContent = clickedBanner.dataset.text;
            showModal(ruleDetailModal, true);
        }
    });
}

if(btnReplay) btnReplay.addEventListener('click', chargerJeu);
if(btnChangeModeEnd) btnChangeModeEnd.addEventListener('click', () => { window.location.href = 'index.html#packs'; });
if (btnChangePack) btnChangePack.addEventListener('click', () => { showModal(confirmModal, true); });
if (modalBtnYes) modalBtnYes.addEventListener('click', () => { showModal(confirmModal, false); window.location.href = 'index.html#packs'; });
if (modalBtnNo) modalBtnNo.addEventListener('click', () => { showModal(confirmModal, false); });
if (btnManagePlayers) btnManagePlayers.addEventListener('click', openManagePlayersModal);
if (modalBtnClose) modalBtnClose.addEventListener('click', () => { showModal(managePlayersModal, false); });
if (modalAddPlayerBtn) modalAddPlayerBtn.addEventListener('click', addPlayerInGame);
if (modalAddPlayerInput) modalAddPlayerInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addPlayerInGame(); });

// ==========================================
// SÉCURITÉ BOUTON RETOUR (ANTI-Fermeture)
// ==========================================
history.pushState(null, null, location.href);

window.addEventListener('popstate', (event) => {
    history.pushState(null, null, location.href);
    if (confirmModal) {
        showModal(confirmModal, true);
    }
});

// --- GÉNÉRATION DES ÉTOILES EN ARRIÈRE-PLAN ---
function createStars() {
    const container = document.createElement('div');
    container.id = 'background-stars';
    document.body.prepend(container);

    const starCount = 50; // Nombre d'étoiles

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Position aléatoire
        const x = Math.random() * 100;
        const size = Math.random() * 3 + 1; // Taille entre 1px et 4px
        
        // Animation aléatoire
        const duration = Math.random() * 10 + 5; // Entre 5s et 15s
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.7 + 0.3;

        star.style.left = `${x}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.bottom = `-${size}px`; // Part du bas
        
        // Variables CSS pour l'animation
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        star.style.setProperty('--opacity', opacity);

        container.appendChild(star);
    }
}
// Lancer la création des étoiles
createStars();

// --- GÉNÉRATION DES ORBES D'AMBIANCE ---
function createOrbs() {
    // Sécurité : on vérifie si ça existe déjà pour ne pas les créer en double
    if (document.getElementById('background-orbs')) return;

    const container = document.createElement('div');
    container.id = 'background-orbs';
    
    const orb1 = document.createElement('div'); orb1.className = 'orb orb-1';
    const orb2 = document.createElement('div'); orb2.className = 'orb orb-2';
    const orb3 = document.createElement('div'); orb3.className = 'orb orb-3';
    
    container.appendChild(orb1);
    container.appendChild(orb2);
    container.appendChild(orb3);
    
    // On l'ajoute au tout début du body
    document.body.prepend(container);
}

createOrbs();
