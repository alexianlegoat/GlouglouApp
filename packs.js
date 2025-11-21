/* ================================================== */
/* FICHIER : packs.js                             */
/* ================================================== */

const packsDeQuestions = {
    
    // ===============================================
    // PACK 1 : DÉBUT DE SOIRÉE (MIS À JOUR)
    // ===============================================
    debutSoiree: {
        questions: [
            // Tes 20 questions
            { texte: "Si tu devais manger la même chose pendant un an, ce serait quoi ?", gorgees: 2 },
            { texte: "Quel est le plat que tu cuisines le mieux (ou le moins mal) ?", gorgees: 2 },
            { texte: "Raconte la blague la plus nulle que tu connaisses", gorgees: 3 },
            { texte: "Quel super-pouvoir complètement inutile aimerais-tu avoir ?", gorgees: 1 },
            { texte: "Cite 3 choses que tu emporterais sur une île déserte.", gorgees: 2 },
            { texte: "Si tu étais un animal, tu serais lequel et pourquoi ?", gorgees: 2 },
            { texte: "Quelle est la première chose que tu ferais si tu gagnais au loto ?", gorgees: 2 },
            { texte: "C'est quoi ta plus grosse phobie ?", gorgees: 3 },
            { texte: "Si tu pouvais échanger ta vie avec quelqu'un autour de cette table pendant 24h, qui choisirais-tu ?", gorgees: 4 },
            { texte: "Quel est ton «plaisir coupable» en matière de musique ?", gorgees: 2 },
            { texte: "Raconte le rêve le plus étrange dont tu te souviens.", gorgees: 2 },
            { texte: "Quel est le dernier mensonge que tu as raconté ?", gorgees: 3 },
            { texte: "Si tu devais inventer une nouvelle fête, ce serait pour célébrer quoi ?", gorgees: 1 },
            { texte: "Quelle est la chose la plus bizarre que tu aies jamais mangée ?", gorgees: 3 },
            { texte: "Quel est le talent caché que personne (ou presque) ne te connaît ?", gorgees: 2 },
            { texte: "Si tu pouvais te téléporter n'importe où, là, tout de suite, tu irais où ?", gorgees: 2 },
            { texte: "Quel objet représente le mieux ta personnalité ?", gorgees: 2 },
            { texte: "Quelle est ta citation de film préférée ?", gorgees: 2 },
            { texte: "Si tu devais rejoindre un cirque, quel serait ton numéro ?", gorgees: 3 },
            { texte: "Quel est le pire cadeau que tu aies jamais reçu ?", gorgees: 3 }
        ],
        actions: [
            // Tes 20 actions
            { texte: "Imite ton emoji préféré.", gorgees: 2 },
            { texte: "Fais ton meilleur cri de Tarzan.", gorgees: 3 },
            { texte: "Parle sans montrer les dents jusqu'à ton prochain tour.", gorgees: 4 },
            { texte: "Tu as 10 secondes pour trouver 3 objets bleus autour de toi.", gorgees: 2 },
            { texte: "Invente une petite danse de 5 secondes et fais-la maintenant.", gorgees: 3 },
            { texte: "Imite la démarche d'un robot (ou juste les bras si tu es assis).", gorgees: 2 },
            { texte: "Nomme tous les joueurs présents en moins de 5 secondes.", gorgees: 3 },
            { texte: "Chante le refrain de la première chanson qui te vient en tête.", gorgees: 3 },
            { texte: "Fais le tour de ton siège à cloche-pied.", gorgees: 2 },
            { texte: "Le joueur le plus jeune doit parler avec un accent (belge, québécois, marseillais...) jusqu'au prochain tour.", gorgees: 3 },
            { texte: "Ramène un objet de la même couleur que le haut du joueur à ta gauche.", gorgees: 2 },
            { texte: "Si tu portes des lacets, attache-les ensemble ! Si tu n'en as pas, touche tes orteils 5 fois.", gorgees: 3 },
            { texte: "Règle ! Personne n'a le droit de dire de gros mots pendant les 3 prochains tours. Le premier qui oublie a un gage.", gorgees: 4 },
            { texte: "Si quelqu'un fête son anniversaire ce mois-ci, le joueur désigné par cette personne doit lui offrir un McDo.", gorgees: 3 },
            { texte: "Le joueur le plus âgé doit parler avec un langage (très) soutenu jusqu'à son prochain tour.", gorgees: 3 },
            { texte: "Tu as 5 secondes pour crier les 3 premiers mots qui te viennent à l'esprit.", gorgees: 2 },
            { texte: "Choisis une «victime». Cette personne devra faire le prochain défi, quoi qu'il arrive.", gorgees: 3 },
            { texte: "Les deux joueurs qui se connaissent le moins doivent se regarder dans les yeux. Le premier qui rit ou détourne le regard a un gage.", gorgees: 4 },
            { texte: "Le groupe désigne deux joueurs pour un duel de Pierre-Feuille-Ciseaux.", gorgees: 3 },
            { texte: "Le groupe désigne un joueur. Il doit montrer la dernière photo de sa galerie.", gorgees: 5 }
        ],
        chut: [
            // Tes 6 cartes chut
            {
                texte_B: "Passe ce téléphone à la personne que tu trouves la plus belle ici.",
                texte_C: "La personne qui t'a donné le téléphone pense que tu es la plus belle personne ici.",
                gorgees: 5
            },
            {
                texte_B: "Passe ce téléphone au joueur le plus susceptible de finir aux urgences ce soir.",
                texte_C: "Tu as été désigné(e) comme la personne la plus susceptible de finir aux urgences ce soir.",
                gorgees: 4
            },
            {
                texte_B: "Passe ce téléphone à la personne la plus drôle de la soirée.",
                texte_C: "Tu as été désigné(e) 'personne la plus drôle' par celui qui t'a donné le téléphone. Ne le déçois pas.",
                gorgees: 3
            },
            {
                texte_B: "Passe ce téléphone à la personne qui a les pires goûts musicaux.",
                texte_C: "Félicitations, tu as été élu(e) 'Pires Goûts Musicaux' par la personne qui t'a donné le téléphone.",
                gorgees: 3
            },
            {
                texte_B: "Passe ce téléphone à la personne à qui tu confierais ta vie.",
                texte_C: "La personne qui t'a donné le téléphone te fait assez confiance pour te confier sa vie.",
                gorgees: 2
            },
            {
                texte_B: "Passe ce téléphone à la personne qui te semble la plus mystérieuse.",
                texte_C: "Tu as été désigné(e) 'personne la plus mystérieuse'. Garde tes secrets.",
                gorgees: 3
            }
        ],
        regles: [
            // Tes 6 règles
            { 
              titre: "Le Surnom", 
              texte: "{{JOUEUR}} lance ! Tout le monde doit se donner un surnom et l'utiliser pour parler aux autres.",
              duree: 4,
              gorgees: 2
            },
            {
              titre: "Narcisse",
              texte: "Interdit de dire 'Je' ou 'Moi'. Celui qui oublie boit.",
              duree: 3,
              gorgees: 2
            },
            {
              titre: "L'Orchestre",
              texte: "La fin de chaque phrase doit être dite sur une note plus aiguë que le début. Oubli = gorgées.",
              duree: 3,
              gorgees: 2
            },
            {
              titre: "L'Antonyme",
              texte: "Interdit de parler normalement ! Tout le monde doit dire le contraire de ce qu'il pense.",
              duree: 3,
              gorgees: 3
            },
            {
              titre: "Jeu des Couleurs",
              texte: "Quand {{JOUEUR}} dit une couleur, tout le monde doit toucher un objet de cette couleur. Le dernier boit.",
              duree: 3,
              gorgees: 3
            },
            {
              titre: "Le Poète",
              texte: "Chaque joueur doit faire rimer sa phrase avec celle de son voisin de droite. Si tu casses la rime, tu bois.",
              duree: 3,
              gorgees: 2
            }
        ]
    },
    
    // ===============================================
    // PACK 2 : ÇA CHAUFFE (INCHANGÉ)
    // ===============================================
    caChauffe: {
        questions: [
            // Tes 20 questions
            { texte: "Qui dans cette pièce aimerais-tu voir en sous-vêtement ?", gorgees: 3 },
            { texte: "As-tu déjà fantasmé sur quelqu'un dans cette pièce ?, Si oui, qui?", gorgees: 5 },
            { texte: "Quel est le fantasme que tu aimerais bien réaliser ce soir ?", gorgees: 4 },
            { texte: "Tu préfères dominer ou être dominé(e) ? Et par qui dans cette pièce ?", gorgees: 6 },
            { texte: "Qui est la personne la plus susceptible de faire un plan à 3 ce soir ?", gorgees: 3 },
            { texte: "Qui seraient les 2 personnes ici avec qui tu serais susceptible de faire un plan à 3 ?", gorgees: 6 },
            { texte: "Comment imagine tu une nuit avec la personne à ta droite ?", gorgees: 4 },
            { texte: "Si tu pouvais changer de sexe 1 journée, que ferais tu en 1er ?", gorgees: 2 },
            { texte: "Comment tu décrirais tes compétences au lit ?", gorgees: 2 },
            { texte: "Pourquoi tu ferais de bons films pornos ?", gorgees: 2 },
            { texte: "À ton avis, qui embrasse le mieux ici ?", gorgees: 1 },
            { texte: "As-tu déjà songé à ouvrir un compte MYM ou OnlyFans ?", gorgees: 4 },
            { texte: "Quelle est la personne que tu souhaiterais embrasser ce soir ?", gorgees: 4 },
            { texte: "T'es tu déjà masturbé(e) en pensant à quelqu'un ici ? Si oui qui ?", gorgees: 6 },
            { texte: "Note sur 10 ton dernier rapport sexuel et justifie toi", gorgees: 5 },
            { texte: "Quel est le lieu le plus insolite où tu aies fait l'amour ?", gorgees: 2 },
            { texte: "Quelle est la taille de ton pénis/ta poitrine ?", gorgees: 3 },
            { texte: "De combien est ton bodycount ?", gorgees: 2 },
            { texte: "As-tu déjà craqué une capote pendant un rapport sexuel ?", gorgees: 2 },
            { texte: "Si tu pouvais déshabiller quelqu'un ici, qui serait-ce ?", gorgees: 5 }
        ],
        actions: [
            // Tes 20 actions
            { texte: "Embrasse la personne à ta droite", gorgees: 3 },
            { texte: "Enlève un vêtement (hors chaussure et chaussettes)", gorgees: 4 },
            { texte: "Embrasse sensuellement le cou de la personne désignée par les autres joueurs", gorgees: 5 },
            { texte: "Touche la partie du corps de ton choix de la personne à ta gauche", gorgees: 7 },
            { texte: "Fais des papouilles à la personne designée par les autres jusqu'à ton prochain tour", gorgees: 5 },
            { texte: "Choisis la personne avec qui tu vas partager ton lit. En cas de refus 10 gorgées chacun ", gorgees: 10 },
            { texte: "Fais un suçon à la personne en face de toi, en cas de refus 5 gorgées ", gorgees: 5 },
            { texte: "Ferme les yeux, à tour de role chaque joueur touche une partie de ton corps", gorgees: 4 },
            { texte: "Tout le monde désigne une personne qui devra aller avec toi dans la salle de bain pendant 2 minutes. Le jeu continue pendant ce temps", gorgees: 6 },
            { texte: "Désigne une personne qui devra lécher de sa boisson sur une partie de ton corps", gorgees: 5 },
            { texte: "Mords la lèvre inferieur de la personne que tu trouve la plus sexy", gorgees: 4 },
            { texte: "Échange un vetement avec la personne en face de toi", gorgees: 4 },
            { texte: "Met un doigt dans la bouche de la personne que tu trouve la plus sexy", gorgees: 3 },
            { texte: "Met toi à 4 pattes, le joueur de ton choix te caresse comme son animal", gorgees: 7 },
            { texte: "Tiens la main de la personne à ta droite pendant 3 tours", gorgees: 2 },
            { texte: "Si t'es en couple, envoie “Je t'aime” à ton ta partenaire, sinon envoie “Tu me manques” à ton/ta crush", gorgees: 3 },
            { texte: "Caresse sensuellement la personne designée par les autres", gorgees: 4 },
            { texte: "Dessine un coeur sur la main de la personne de ton choix", gorgees: 4 },
            { texte: "Si t'as encore ton haut, enlève le, sinon choisis une personne qui doit l'enlever", gorgees: 4 },
            { texte: "Chuchote ce que tu veux à la personne de ton choix", gorgees: 2 }
        ],
        chut: [
            // Tes 6 cartes chut
            {
                texte_B: "Passe le tel à la personne qui t'attire le plus (partenaire interdit)",
                texte_C: "T'es la personne qui attire le plus celui/celle qui t'a passé le tel",
                gorgees: 3
            },
            {
                texte_B: "Passe le tel à la personne que tu voudrais embrasser",
                texte_C: "La personne qui t'a passé le tel veux t'embrasser",
                gorgees: 4
            },
            {
                texte_B: "Passe le tel à la personne à qui tu pourrais penser en te masturbant",
                texte_C: "La personne qui t'a passé le tel pourrait se masturber en pensant à toi",
                gorgees: 5
            },
            {
                texte_B: "Passe le tel à la personne avec qui tu pourrais avoir un date",
                texte_C: "Cette personne voudrait avoir un date avec toi, c'est mignon, non ?",
                gorgees: 3
            },
            {
                texte_B: "Passe le tel à la personne avec qui tu voudrais partager ta nuit",
                texte_C: "Cette personne veut partager sa nuit avec toi !",
                gorgees: 4
            },
            {
                texte_B: "Passe le tel à la personne avec qui tu pourrais tromper ton/ta partenaire (actuel ou futur)",
                texte_C: "Tu es le 1er choix de la personne de la personne qui t'a donné le tel si elle venait à etre infidèle",
                gorgees: 5
            }
        ],
        regles: [
            // Tes 6 règles
            { 
              titre: "La pute", 
              texte: "{{JOUEUR}} est la pute du groupe. Quand quelqu'un le désire, il/elle lui claque le cul",
              duree: 6,
              gorgees: 5
            },
            {
              titre: "Caresse tétons",
              texte: "Tous les joueurs caressent le téton du joueur à droite dès qu'ils boivent",
              duree: 3,
              gorgees: 5
            },
            {
              titre: "La main baladeuse",
              texte: "{{JOUEUR}} choisis 1 personne, il devra garder sa main sur la cuisse de son voisin de droite. INTERDIT DE LA LEVER !",
              duree: 3,
              gorgees: 5
            },
            {
              titre: "Lucky Luke",
              texte: "{{JOUEUR}} quand tu fais un clin d'œil (discretement) à un autre joueur, il doit dire “TOUCHÉ” et boire 2 gorgées. Si tu te fais voir par un autre joueur c'est toi qui bois ",
              duree: 5,
              gorgees: 2
            },
            {
              titre: "L'appel du corps",
              texte: "Avant de prendre la parole, vous devez toucher sensuellement la personne à qui vous vous adressez",
              duree: 5,
              gorgees: 3
            },
            {
              titre: "Le radar",
              texte: "Si quelqu'un voit un joueur en mater un autre (ou échanger des regards insistants) il crie “PERVERS” et le ou les joueurs surpris boivent",
              duree: 3,
              gorgees: 3
            }
        ]
    },
    
    // ===============================================
    // PACK 3 : PROBLÈMES
    // ===============================================
    problemes: {
questions: [
            // Tes 20 questions
            { texte: "Si tu devais voler quelque chose à quelqu'un ici, ce serait quoi et qui?", gorgees: 2 },
            { texte: "As-tu déjà fantasmé sur le/la partenaire de quelqu'un ici (actuel ou passé) ?", gorgees: 3 },
            { texte: "Qui selon toi a les pires idées politiques ?", gorgees: 4 },
            { texte: "As-tu déjà menti à quelqu'un ici ?", gorgees: 2 },
            { texte: "Pour qui as-tu voté aux dernières élections et pourquoi ?", gorgees: 5 },
            { texte: "Qui est le plus jaloux ici selon toi ?", gorgees: 2 },
            { texte: "Qui manque le plus de maturité et pourquoi ?", gorgees: 4 },
            { texte: "As-tu déjà souhaité la fin du couple de quelqu'un ici ?", gorgees: 3 },
            { texte: "C'est quoi le secret le plus embarrassant que tu connaisses sur quelqu'un ici. Raconte ou Bois", gorgees: 15 },
            { texte: "Qui est le/la plus “Fake” ici", gorgees: 3 },
            { texte: "Si tu devais choisir une personne de à bannir dans cette soirée, ce serait qui ?", gorgees: 5 },
            { texte: "Qui ici pouvais tu dénoncer pour sauver ta peau ou recevoir de l'argent ?", gorgees: 4 },
            { texte: "A ton avis, qui a des arrières pensées ce soir ?", gorgees: 4 },
            { texte: "Si tu devais échanger ton/ta partenaire (actuel ou passé) avec quelqu'un ici, qui ce serait ?", gorgees: 5 },
            { texte: "Qui ici va le plus souvent sur des sites porno?", gorgees: 3 },
            { texte: "Si tu devais choisir quelqu'un ici pour aller voter à ta place, qui choisirais tu?", gorgees: 3 },
            { texte: "Comment trouve tu le style vestimentaire de chacun en 1 seul mot ?", gorgees: 4 },
            { texte: "Comment te trouve tu physiquement", gorgees: 2 },
            { texte: "Qui ici depense le moins bien son argent ?", gorgees: 3 },
            { texte: "Penses tu que la personne à ta gauche fait bien l'amour ? Pourquoi ?", gorgees: 5 }
        ],
        actions: [
            // Tes 20 actions
            { texte: "Laisse ton telephone dévérouillé et accessibles à tous les joueurs pendant 2 minutes. Sinon bois", gorgees: 6 },
            { texte: "Envoie “Tu me manques” à ton ex. Sinon bois", gorgees: 5 },
            { texte: "Prends 3 personnes dans la pièce : une que tu tues, une avec qui tu couches, une avec qui tu te marie et en plus tu bois. Pas d'échappatoire possible", gorgees: 2 },
            { texte: "Envoies un message à une personne a qui tu t'es embrouillé(e)“Tu avais raison au final”. Sinon bois", gorgees: 6 },
            { texte: "Le groupe prend une photo de toi maintenant, tu dois la mettre en photo de profil insta pendant 24h. Sinon bois", gorgees: 5 },
            { texte: "Tu deviens le larbin de la personne à ta droite, elle peut te forcer à ce qu'elle veut. 1 gorgée pour chaque refus", gorgees: 1 },
            { texte: "Choisis un joueur et imite une de ses habitudes ou tics de langage insupportables jusqu'à ce que tout le monde devine de qui il s'agit. 3 gorgées pour cette personne", gorgees: 3 },
            { texte: "Tu n'as plus le droit de parler pendant 5 tours. Si tu dois repondre à une question, tu dois mimer à la place. Chaque parole = 2 gorgées", gorgees: 2 },
            { texte: "Plus personne doit t'écouter quand tu parles pendant 3 tours. 4 gorgées ooir tout ceux qui te repondent", gorgees: 4 },
            { texte: "Décoiffe qui tu veux maintenant. Si elle se recoiffe avant son tour, elle boit 3 gorgées", gorgees: 3 },
            { texte: "Tu dois garder dans ta main un dechet qui sort tout droit de la poubelle pendant 3 tours. Si tu le jettes ou le poses, 5 gorgées", gorgees: 5 },
            { texte: "Tout le monde te donne un surnom hyper honteux. Pour que cça s'arrête, tu dois boire 5 gorgées", gorgees: 5 },
            { texte: "T'as le doit de dire 3 fois “On s'en fou ta gueule” quand tu veux, cette personne devra boire 2 gorgées", gorgees: 2 },
            { texte: "Tout le monde change de place! Tu décides de ou tout le monde doit s'assoir. 3 gorgées pour chaque refus", gorgees: 3 },
            { texte: "Prends un marqueur et écrit ce que tu veux sur le front de qui tu veux. Si cette personne refuse, elle boit.", gorgees: 5 },
            { texte: "Sens les chaussures du joueur désigné par les autres. Si tu refuses, tu bois", gorgees: 7 },
            { texte: "Tu fais autant de pompes que tu veux. Chaque pompe = 1 gorgée à distribuer à qui tu veux", gorgees: 1 },
            { texte: "Un peu de gentillesse. Tout le monde te dit un compliment sincère", gorgees: 0 },
            { texte: "Pointe sans rien dire la personne qui s'habille la moins bien. Cette personne boit", gorgees: 4 },
            { texte: "Pointe sans rien dire la personne la moins drôle. Cette personne boit", gorgees: 4 }
        ],
        chut: [
            // Tes 6 cartes chut
            {
                texte_B: "Passe ce téléphone à la personne avec qui tu coucherais tout de suite s:il n'y avait aucune conséquence (couple ou pas).",
                texte_C: "Regarde la personne qui t'a donné le téléphone. Sache qu'elle a très envie de coucher avec toi ce soir.",
                gorgees: 2
            },
            {
                texte_B: "Passe ce téléphone à la personne sur qui tu connais le plus gros dossier ou secret inavouable",
                texte_C: "Cette personne connaît un dossier très sale sur toi. Tu devrais être gentil(le) avec elle pour qu'elle se taise",
                gorgees: 4
            },
            {
                texte_B: "Passe ce téléphone à la personne qui, selon toi, n'a toujours pas oublié son ex.",
                texte_C: "Cette personne pense que tu fais pitié et que tu n'as toujours pas tourné la page avec ton ex.",
                gorgees: 3
            },
            {
                texte_B: "Passe ce téléphone à la personne la plus susceptible de tromper son/sa partenaire ce soir (ou qui l'a déjà fait).",
                texte_C: "Regarde la personne qui t'a donné le téléphone. Elle est persuadée que tu es incapable d'être fidèle.",
                gorgees: 3
            },
            {
                texte_B: "Passe ce téléphone à la personne qui a le moins de chances de réussir sa vie professionnelle selon toi.",
                texte_C: "Cette personne pense que tu es un(e) raté(e) et que tu n'iras nulle part dans la vie.",
                gorgees: 2
            },
            {
                texte_B: "Passe ce téléphone à la personne qui doit être le coup le plus mauvais au lit.",
                texte_C: "Désolé, mais cette personne imagine que tu es très mauvais(e) au lit et que tu dois être ennuyeux(se) sous la couette.",
                gorgees: 3
            }
        ],
        regles: [
            // Tes 6 règles
            { 
              titre: "à haute voix", 
              texte: "Tout le monde pose son téléphone sur la table. Chaque notification reçue doit etre lue à haute voix, en cas de refus, cette personne boit.",
              duree: 4,
              gorgees: 5
            },
            {
              titre: "Le Majordome",
              texte: "{{JOUEUR}} devient le majordome de la soirée. Il est le seul autorisé à servir à boire aux autres ou à aller chercher des choses (eau, mouchoirs). Personne d'autre ne doit se lever.",
              duree: 5,
              gorgees: 5
            },
            {
              titre: "Le Sans-Chaise",
              texte: "{{JOUEUR}} a perdu le droit au confort. Il doit jouer debout (ou assis par terre, au choix du groupe) jusqu'à ce que la règle s'arrête.",
              duree: 5,
              gorgees: 4
            },
            {
              titre: "T-Rex",
              texte: "Plus personne ne peut boire avec sa main, vous devez trouver une autre alternative.",
              duree: 3,
              gorgees: 3
            },
            {
              titre: "L'Idiot du Village",
              texte: "{{JOUEUR}} est considéré comme “trop bête pour être compris”. Il n'a pas le droit de s'adresser directement au groupe. Il doit chuchoter à son voisin, qui répétera ses propos aux autres (en les déformant s'il veut).",
              duree: 3,
              gorgees: 3
            },
            {
              titre: "L'Écho",
              texte: "À chaque fois que {{JOUEUR}} finit une phrase, le joueur à sa droite doit répéter ses deux derniers mots avec une voix de débile.",
              duree: 3,
              gorgees: 2
            }
        ]
    },
    
    // ===============================================
    // PACK 4 : GLOUGLOU (INCHANGÉ)
    // ===============================================
    glouglou: {
questions: [
            // Tes 20 questions
            { texte: "T'es tu déjà pissé dessus après avoir trop bu ? Si oui, bois", gorgees: 5 },
            { texte: "As-tu déjà vomi sur quelqu'un ici ? Si oui, bois", gorgees: 5 },
            { texte: "Quelle est la capitale du Kirghizistan ?", gorgees: 6 },
            { texte: "Raconte brièvement ta plus grosse cuite", gorgees: 3 },
            { texte: "T'es tu déjà retrouvé nu en soirée mais pas pour le sex ? Si oui, bois", gorgees: 6 },
            { texte: "T'es tu déjà fait virer de bar ou de boîte ? Si oui, bois", gorgees: 5 },
            { texte: "Tu as déjà vomi ce soir ? Si oui bois", gorgees: 3 },
            { texte: "Combien as-tu en ce moment sur ton compte en banque ? Si c'est en dessous de 4 chiffres, tu bois", gorgees: 5 },
            { texte: "Est ce que t'as déjà eu un coup d'un soir ? Si oui bois", gorgees: 6 },
            { texte: "Quelle est la plus grosse connerie que tu aies faite à cause de l'alcool ?", gorgees: 3 },
            { texte: "Si tu as déjà embrassé une personne ici, bois", gorgees: 4 },
            { texte: "44+66 ?", gorgees: 7 },
            { texte: "Qui pourrait mourir dès la 1ere minute sur une île déserte. La personne que tu désignes boit", gorgees: 4 },
            { texte: "Combien de personnes as-tu vu nu ici ? Le nombre de personne = nombre de gorgée + 4 ", gorgees: 4 },
      
        ],
        actions: [
            // Tes 20 actions
            { texte: "Bois 5 gorgées, c'est tout, c'est le jeu", gorgees: 5 },
            { texte: "Défie un joueur au pierre feuille Pierre-Feuille-Ciseaux. Si tu gagnes il boit, s'il gagne, tu bois double", gorgees: 3 },
            { texte: "Échange ton verre avec ton voisin de gauche", gorgees: 4 },
            { texte: "Désigne le joueur le plus sobre, il boit 5 gorgées pour rattraper le train.", gorgees: 5 },
            { texte: "Désigne le joueur le plus ivre, il boit 2 gorgées pour la forme", gorgees: 2 },
            { texte: "Si ton verre est rempli à plus de la moitié, 3 gorgées, sinon cul sec", gorgees: 3 },
            { texte: "Joker! Garde cette carte pour faire boire quelqu'un d'autre à ta place ! Sinon répartie 10 gorgées comme tu veux", gorgees: 10 },
            { texte: "Combien de verres as-tu bu, si tu te rappelles tu es tranquille, sinon bois", gorgees: 6 },
            { texte: "Tous tes voisins doivent boire 3 gorgées, c'est la vie", gorgees: 3 },
            { texte: "Regarde un joueur dans les yeux, sans detourner le regard, celui qui rigole bois", gorgees: 3 },
            { texte: "La personne qui joue après toi bois. Prepare toi !", gorgees: 4 },
            { texte: "La personne qui à joué avant toi bois, juste pour avoir finit son tour", gorgees: 4 },
            { texte: "Reste sur un pied jusqu'à ton prochain tour, si tu tombes tu bois", gorgees: 4 },
            { texte: "Nomme tous les joueurs de cette table en 5 secondes. Chaque erreur = 3 gorgées", gorgees: 3 },
            { texte: "Fais rire au moins la moitié des joueurs en 1 minute, sinon bois.", gorgees: 3 },
            { texte: "Tu dois tout mimer jusqu'à ton prochain tour, si tu parles, tu bois. Maintenant ta gueule", gorgees: 3 },
            { texte: "Trouve 3 objets jaunes autour de toi en 10 secondes, si tu échoues, tu bois", gorgees: 4 },
            { texte: "Regarde l'heure actuelle, le dernier chiffre est le nombre de gorgée que tu dois boire", gorgees: 1 },
            { texte: "Si t'as 69% de batterie tout pile, cul sec, sinon 5 gorgées", gorgees: 5 },
            { texte: "Recopie la 1ere story que tu vois en ouvrant insta et poste la, sinon tu bois", gorgees: 7 }
        ],
        chut: [
            // Tes 6 cartes
            {
                texte_B: "Passe le tel à la personne qui pourrait envoyer un message à son ex ce soir",
                texte_C: "Cette personne pense que tu vas envoyer un “Tu me manques” à 3h du mat",
                gorgees: 5
            },
            {
                texte_B: "Passe le tel à ton/ta partenaire de boisson, après lui donner le tel, trinquez et buvez 3 gorgées ! ",
                texte_C: "Tu es le/la partenaire de boisson de cette personne, trinquez et buvez 3 gorgées !",
                gorgees: 3
            },
            {
                texte_B: "Passe le tel à la personne qui va blackout ce soir",
                texte_C: "Cette personne pense que tu vas blackout ce soir ! Montre lui que tu vaux mieux que ça !",
                gorgees: 3
            },
            {
                texte_B: "Passe le tel à la personne qui finira bourrée en 1er",
                texte_C: "Cette personne pense que tu vas être la 1ere personne bourrée ce soir !",
                gorgees: 3
            },
            {
                texte_B: "Passe le tel à la personne qui doit boire un coup maintenant",
                texte_C: "Tu dois boire 3 gorgées, c'est le jeu, commence pas a râler",
                gorgees: 3
            },
            {
                texte_B: "Passe le tel à la personne qui pourrait finir nu parce-que cest drôle",
                texte_C: "Cette personne pense que tu vas finir nu ce soir car c'est juste drôle",
                gorgees: 3
            }
        ],
        regles: [
            // Tes 6 règles
            { 
              titre: "La falaise", 
              texte: "Vous devez poser votre verre à minimum 1 doigt du bord de la table",
              duree: 6,
              gorgees: 8
            },
            {
              titre: "Main Faible",
              texte: "Vous devez porter votre verre avec votre main faible",
              duree: 5,
              gorgees: 5
            },
            {
              titre: "Maitre du pouce",
              texte: "{{JOUEUR}} Tu es le maitre du pouce. Dès que tu poses ton pouce sur la table, le dernier à le faire bois.",
              duree: 5,
              gorgees: 5
            },
            {
              titre: "Non à la technologie",
              texte: "Tout le monde doit poser son téléphone (sauf le maitre du jeu), si quelqu'un le touche, gorgée",
              duree: 8,
              gorgees: 6
            },
            {
              titre: "Le verbe interdit",
              texte: "Plus le droit de dire le verbe “Boire”, en cas d'oubli, ça s'abreuve",
              duree: 4,
              gorgees: 6
            },
            {
              titre: "Tout dans le partage",
              texte: "Quand un joueur doit boire, il peut donner la moitié de ces gorgées à qui il veut",
              duree: 5,
              gorgees: 2
            }
        ]
    },
};
