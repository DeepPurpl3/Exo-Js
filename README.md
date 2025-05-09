Gestion des dépenses
Vous allez concevoir une mini-application web de gestion de dépenses, une sorte de petit outil personnel pour garder une trace des achats du quotidien, savoir combien on dépense, et dans quoi.
Il s’agit de créer une petite application interactive, fonctionnelle et visuellement lisible, en partant de zéro et en manipulant les inputs HTML, les tableaux (et peut-être même la version Inception des tableaux (WTF?!)), le DOM, les événements, de la délégation d’événement et en créant de belles fonctions 😻
Attention, essayez de résoudre 100% de cet exercice sans aucune aide de l’intelligence artificielle. N’oubliez pas que votre évaluation aura lieu sans aucune aide de l’IA.
🧠 Contexte :
Imaginez que vous venez d’avoir un déclic : vos dépenses s’accumulent, et vous n’en avez aucune vue claire. Vous voulez suivre :
ce que vous achetez 
combien ça coûte 
dans quelle catégorie ça rentre (alimentation, divertissement, logement, essence, )
Plutôt que d’utiliser une appli existante, vous décidez de coder votre propre gestionnaire de dépenses ! 💪
💼 Mission :
Vous allez construire une application simple, en HTML + CSS + JavaScript, qui permet :
d’ajouter une dépense
de l’afficher dans un tableau
de pouvoir la supprimer
et d’afficher le total des montants enregistrés.

Cette partie-ci est plutôt réservée aux personnes qui ont besoin encore d’une découpe claire des choses à faire, si les consignes ne suffisent pas donc si vous êtes à l’aise à ce stade-ci de la formation, essayez de vous passer de ce qui suit :-)
🧩 Liste des choses à faire
🔧 HTML :
Créer un formulaire avec :
Un champ texte pour la description
Un champ number pour le montant
Un select pour choisir la catégorie
Un bouton "Ajouter" pour valider
Ajouter un élément (ul ou div) qui accueillera les dépenses enregistrées
Ajouter un élément HTML pour afficher le total des dépenses

🧠 JavaScript :
📥 Récupération des données :
Capter l’événement submit du formulaire
Empêcher le rechargement de la page
Récupérer les valeurs des champs description, montant et catégorie
Vérifier que tout est rempli correctement
Créer une structure de données (ex : un tableau contenant les trois infos)
Ajouter cette dépense à un tableau global


📤 Affichage :
Parcourir le tableau des dépenses et afficher chaque ligne dans le HTML
Utiliser innerHTML ou créer les éléments dynamiquement
Afficher : description, montant formaté en € (avec 2 décimales), catégorie
Ajouter un bouton "Supprimer" à chaque ligne, avec un data-index ou un id
Vider le champ du formulaire après ajout



❌ Suppression :
Ajouter un addEventListener sur le tableau ou la liste pour écouter les clics
Supprimer la bonne dépense du tableau avec splice(index, 1)
Ré-afficher la liste mise à jour
Recalculer le total après suppression


➕ Total :
Parcourir le tableau depenses avec forEach()
Additionner tous les montants
Mettre à jour dynamiquement le contenu de l’élément "total" dans le DOM




