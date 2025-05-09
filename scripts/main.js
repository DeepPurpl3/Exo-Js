//=============================
// Sélection des élémts 🌱
//=============================

const inputCategorie =   document.getElementById('categorie');
const inputMontant =     document.getElementById('montant');
const inputDescription = document.getElementById('description');
const btnAdd =         document.getElementById('btn-add');
const btnDel =         document.getElementById('delete');
const tot =            document.querySelector('.total span');
const depenseList =    document.querySelector('depense-list')
//=============================
//🧠 Variables Globales
//=============================
const depense =[];
let total = 0;
//=============================
// Fonctionnalités
//=============================

//fonction pour reset les champs du formulaire
function resetForm() {
    descriptionInput.value= '';
    montanttInput.value=    '';
    categorieInput.value=   '';
    descriptionInput.focus();
}

//Fonction pour ajouter une dépense 
function addDepense(description, montant, categorie){
    depense.push([description,montant,categorie]);
    total += parseFloat(montant);
    tot.textContent = `${total}`;
    resetForm();
}

// Fonction pour afficher les dépenses
function displayDepenses(){
    depenseList.innerHtml = ''; // vide la lise avant d'afficher 
    if (depense.length === 0) {
        depenseList = '<p>Aucune dépense enregistrée.</p>';
    }
    else {
        depense.forEach((depense,index) =>{
            const div = document.createElement('div');
            div.className = 'depense-item';
            div.innerHTML = `
            ${depense[0]} | ${depense[1]} | ${depense[2]}
            <button class="delete bouton" data-index="${index}" title="Supprimer ${depense[0]}">❌</button>`;
            depenseList.appendChild(div);
        })
    }
}
// Fonction pour supprimer une dépense
function deleteDepense(index){

}

// =================================
// 🧲 Events
// =================================
btnAdd.addEventListener('click', (e) =>{
    e.preventDefault();
    const description = inputDescription.value;
    const montant =     inputMontant.value;
    const categorie =   inputCategorie.value;

    if(description && !isNaN(montant)&& categorie){
        addDepense(description,montant,categorie);
        displayDepenses()
    }
    else(alert('something has gone wrong'))
}) 