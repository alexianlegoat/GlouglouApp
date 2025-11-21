document.addEventListener('DOMContentLoaded', () => {

    // ELEMENTS DOM
    const pageAccueil = document.getElementById('page-accueil');
    const pageJoueurs = document.getElementById('page-joueurs');
    const pagePacks = document.getElementById('page-packs');
    const pageEditor = document.getElementById('page-editor');
    const globalLogo = document.getElementById('global-logo');
    
    const btnPret = document.getElementById('btnPret');
    const btnEditor = document.getElementById('btnEditor');
    const btnRetourEditor = document.getElementById('btnRetourEditor');
    
    const inputNom = document.getElementById('inputNom');
    const btnAjouterInline = document.getElementById('btnAjouterInline');
    const listeDesJoueurs = document.getElementById('listeDesJoueurs');
    const btnSuivant = document.getElementById('btnSuivant');
    const btnRetourJoueurs = document.getElementById('btnRetourJoueurs');
    
    const btnCommencerJeu = document.getElementById('btnCommencerJeu');
    const btnRetourPacks = document.getElementById('btnRetourPacks');
    
    const alertModal = document.getElementById('alertModal');
    const modalBtnOK = document.getElementById('modalBtnOK');

    // ELEMENTS EDITEUR
    const btnAddCustom = document.getElementById('btnAddCustom');
    const customPack = document.getElementById('customPack');
    const customSips = document.getElementById('customSips');
    const customType = document.getElementById('customType');
    
    const formSimple = document.getElementById('form-simple');
    const formRegle = document.getElementById('form-regle');
    const formChut = document.getElementById('form-chut');
    
    const textSimple = document.getElementById('textSimple');
    const regleTitre = document.getElementById('regleTitre');
    const regleDesc = document.getElementById('regleDesc');
    const regleDuree = document.getElementById('regleDuree');
    const chutPublic = document.getElementById('chutPublic');
    const chutSecret = document.getElementById('chutSecret');

    const listCustom = document.getElementById('listeCustomCards');
    const customCountLabel = document.getElementById('customCount');

    let mesCartes = JSON.parse(localStorage.getItem('mesCartesPerso')) || [];

    // --- AMBIANCE ---
    function createStars() {
        if (document.getElementById('background-stars')) return;
        const container = document.createElement('div'); container.id = 'background-stars'; document.body.prepend(container);
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div'); star.className = 'star';
            const size = Math.random() * 3 + 1; 
            star.style.left = `${Math.random() * 100}%`; star.style.width = `${size}px`; star.style.height = `${size}px`; star.style.bottom = `-${size}px`; 
            star.style.setProperty('--duration', `${Math.random() * 10 + 5}s`); star.style.setProperty('--delay', `${Math.random() * 10}s`); star.style.setProperty('--opacity', Math.random() * 0.7 + 0.3);
            container.appendChild(star);
        }
    }
    function createOrbs() {
        if (document.getElementById('background-orbs')) return;
        const container = document.createElement('div'); container.id = 'background-orbs';
        const orb1 = document.createElement('div'); orb1.className = 'orb orb-1';
        const orb2 = document.createElement('div'); orb2.className = 'orb orb-2';
        container.appendChild(orb1); container.appendChild(orb2); document.body.prepend(container);
    }
    createStars(); createOrbs();

    // --- NAVIGATION ---
    function showPage(pageToShow, direction = 'forward') {
        const currentPage = document.querySelector('.page.active');
        if (pageToShow === pageAccueil) { globalLogo.classList.remove('logo-top'); globalLogo.classList.add('logo-accueil'); }
        else { globalLogo.classList.remove('logo-accueil'); globalLogo.classList.add('logo-top'); }

        const outClass = direction === 'forward' ? 'anim-out-forward' : 'anim-out-backward';
        const inClass = direction === 'forward' ? 'anim-in-forward-prepare' : 'anim-in-backward-prepare';

        if (currentPage) {
            currentPage.classList.add(outClass); currentPage.classList.remove('active');
            setTimeout(() => { currentPage.classList.remove(outClass); currentPage.style.display = 'none'; }, 400);
        }
        if (pageToShow) {
            pageToShow.style.display = 'flex'; pageToShow.classList.add(inClass);
            requestAnimationFrame(() => { requestAnimationFrame(() => { pageToShow.classList.remove(inClass); pageToShow.classList.add('active'); }); });
        }
    }

    // --- ALERTES ---
    function showAlert(message, titre = "Oups !") {
        const modalText = document.querySelector('#alertModal p');
        const modalTitle = document.querySelector('#alertModal h4');
        if (message && modalText) modalText.textContent = message;
        if (titre && modalTitle) modalTitle.textContent = titre;
        if(alertModal) { alertModal.style.display = 'flex'; requestAnimationFrame(() => alertModal.classList.add('visible')); } else { alert(message); }
    }
    if (modalBtnOK) modalBtnOK.addEventListener('click', () => { alertModal.classList.remove('visible'); setTimeout(() => alertModal.style.display = 'none', 300); });

    // --- INIT ---
    const hash = window.location.hash;
    const playersExist = localStorage.getItem('listeDesJoueurs');
    if (hash === '#packs' && playersExist) {
        globalLogo.classList.remove('logo-accueil'); globalLogo.classList.add('logo-top');
        if(pageAccueil) { pageAccueil.classList.remove('active'); pageAccueil.style.display = 'none'; }
        if(pagePacks) { pagePacks.classList.add('active'); pagePacks.style.display = 'flex'; }
    } else {
        globalLogo.classList.add('logo-accueil');
        if(pageAccueil) { pageAccueil.classList.add('active'); pageAccueil.style.display = 'flex'; }
        if(pageJoueurs) pageJoueurs.style.display = 'none'; if(pagePacks) pagePacks.style.display = 'none'; if(pageEditor) pageEditor.style.display = 'none';
        if(hash) history.replaceState(null, null, ' ');
    }

    if (btnPret) btnPret.addEventListener('click', () => showPage(pageJoueurs, 'forward'));

    // --- JOUEURS ---
    function ajouterJoueur() {
        const nom = inputNom.value.trim();
        if (nom !== "") {
            const li = document.createElement('li');
            li.innerHTML = `<span>${nom}</span> <button class="btn-supprimer">✕</button>`;
            li.querySelector('.btn-supprimer').addEventListener('click', () => { li.style.opacity = '0'; setTimeout(() => li.remove(), 300); });
            listeDesJoueurs.appendChild(li); inputNom.value = ""; inputNom.focus();
        }
    }
    if (btnAjouterInline) btnAjouterInline.addEventListener('click', ajouterJoueur);
    if (inputNom) inputNom.addEventListener('keypress', (e) => { if (e.key === 'Enter') ajouterJoueur(); });
    if (btnSuivant) btnSuivant.addEventListener('click', () => {
        const joueurs = Array.from(document.querySelectorAll('#listeDesJoueurs li span')).map(s => s.textContent);
        if (joueurs.length === 0) { showAlert("Ajoutez au moins un joueur !"); return; }
        localStorage.setItem('listeDesJoueurs', JSON.stringify(joueurs.sort(() => Math.random() - 0.5)));
        showPage(pagePacks, 'forward');
    });
    if (btnRetourJoueurs) btnRetourJoueurs.addEventListener('click', () => showPage(pageAccueil, 'backward'));

    // --- PACKS ---
    if (btnCommencerJeu) btnCommencerJeu.addEventListener('click', () => {
        const checkedBoxes = document.querySelectorAll('.pack-grid input[type="checkbox"]:checked');
        if (checkedBoxes.length === 0) { showAlert("Sélectionnez au moins un pack !"); return; }
        const packs = Array.from(checkedBoxes).map(cb => cb.value);
        localStorage.setItem('packsDeJeu', JSON.stringify(packs));
        const currentPage = document.querySelector('.page.active');
        if(currentPage) currentPage.classList.add('anim-out-forward');
        globalLogo.style.opacity = '0';
        setTimeout(() => { window.location.href = 'game.html'; }, 400);
    });
    if (btnRetourPacks) btnRetourPacks.addEventListener('click', () => showPage(pageJoueurs, 'backward'));

    // --- EDITEUR : GESTION DES TYPES ---
    if (customType) {
        customType.addEventListener('change', () => {
            const val = customType.value;
            formSimple.style.display = 'none'; formRegle.style.display = 'none'; formChut.style.display = 'none';
            if (val === 'question' || val === 'action') formSimple.style.display = 'block';
            else if (val === 'regle') formRegle.style.display = 'block';
            else if (val === 'chut') formChut.style.display = 'block';
        });
    }

    // --- EDITEUR : LISTE DES CARTES (MODIFIÉ POUR EMOJIS) ---
    function updateCustomList() {
        if (!listCustom) return;
        listCustom.innerHTML = '';
        if(customCountLabel) customCountLabel.textContent = mesCartes.length;

        mesCartes.forEach((carte, index) => {
            const li = document.createElement('li');
            
            // 1. Définition de l'Emoji en fonction du type
            let emojiIcon = '❔'; // Par défaut (Question)
            if (carte.type === 'action') emojiIcon = '⚡';
            if (carte.type === 'regle') emojiIcon = '⚠️';
            if (carte.type === 'chut') emojiIcon = '🤫';

            // 2. Texte à afficher
            let texteAffiche = carte.texte;
            if (carte.type === 'regle') texteAffiche = `[Règle] ${carte.titre}`;
            if (carte.type === 'chut') texteAffiche = `[Secret] ${carte.texte_C}`;

            // 3. Création du HTML (Avec l'emoji à la place du rond de couleur)
            li.innerHTML = `
                <div style="display:flex; flex-direction:column; width:85%;">
                    <div style="display:flex; align-items:center; margin-bottom:4px;">
                        <span style="font-size:1.2em; margin-right:8px;">${emojiIcon}</span>
                        <span style="font-weight:700; font-size:0.8em;">${carte.gorgees} 🍺</span>
                        <span class="pack-tag">${carte.pack}</span>
                    </div>
                    <span style="word-break:break-word; font-size:0.9em;">${texteAffiche}</span>
                </div>
                <button class="btn-supprimer">✕</button>
            `;
            
            li.querySelector('.btn-supprimer').addEventListener('click', () => {
                mesCartes.splice(index, 1);
                localStorage.setItem('mesCartesPerso', JSON.stringify(mesCartes));
                updateCustomList();
            });
            
            listCustom.appendChild(li);
        });
    }

    if (btnEditor) btnEditor.addEventListener('click', () => { updateCustomList(); showPage(pageEditor, 'forward'); });
    if (btnRetourEditor) btnRetourEditor.addEventListener('click', () => showPage(pageAccueil, 'backward'));

    // --- AJOUT DE CARTE ---
    if (btnAddCustom) btnAddCustom.addEventListener('click', () => {
        const type = customType.value; 
        const pack = customPack.value; 
        const gorgees = customSips.value === "" ? 0 : customSips.value;

        let newCard = { type: type, pack: pack, gorgees: gorgees };
        let isValid = false;

        if (type === 'question' || type === 'action') {
            if (textSimple.value.trim() !== "") { newCard.texte = textSimple.value.trim(); isValid = true; }
        } else if (type === 'regle') {
            if (regleTitre.value.trim() !== "" && regleDesc.value.trim() !== "") { 
                newCard.titre = regleTitre.value.trim(); newCard.texte = regleDesc.value.trim(); newCard.duree = regleDuree.value || 3; isValid = true; 
            }
        } else if (type === 'chut') {
            if (chutPublic.value.trim() !== "" && chutSecret.value.trim() !== "") { 
                newCard.texte_B = chutPublic.value.trim(); newCard.texte_C = chutSecret.value.trim(); isValid = true; 
            }
        }

        if (isValid) {
            mesCartes.push(newCard); localStorage.setItem('mesCartesPerso', JSON.stringify(mesCartes));
            textSimple.value = ""; regleTitre.value = ""; regleDesc.value = ""; chutPublic.value = ""; chutSecret.value = ""; customSips.value = "";
            showAlert("Carte ajoutée !", "Super !"); 
            updateCustomList();
        } else { 
            showAlert("Remplissez tous les champs !"); 
        }
    });

    // --- MENUS DÉROULANTS ---
    function setupCustomSelect(wrapperSelector, realSelectId, triggerId, optionsId) {
        const wrapper = document.querySelector(wrapperSelector);
        const realSelect = document.getElementById(realSelectId);
        const trigger = document.getElementById(triggerId);
        const optionsContainer = document.getElementById(optionsId);
        if(!wrapper || !realSelect || !trigger || !optionsContainer) return;
        const options = optionsContainer.querySelectorAll('.custom-option');
        const triggerSpan = trigger.querySelector('span');

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.custom-select-wrapper').forEach(w => { if (w !== wrapper) w.classList.remove('open'); });
            wrapper.classList.toggle('open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected')); option.classList.add('selected');
                triggerSpan.textContent = option.textContent;
                wrapper.classList.remove('open');
                realSelect.value = option.dataset.value;
                const event = new Event('change'); realSelect.dispatchEvent(event);
            });
        });

        document.addEventListener('click', (e) => { if (!wrapper.contains(e.target)) { wrapper.classList.remove('open'); } });
    }

    setupCustomSelect('.custom-select-wrapper.col-wide', 'customPack', 'triggerPack', 'optionsPack');
    setupCustomSelect('.custom-select-wrapper.full-width', 'customType', 'triggerType', 'optionsType');
});
