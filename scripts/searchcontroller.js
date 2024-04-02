// Création des instances de SearchService et CardFactory
const searchService = new SearchService();
const cardFactory = new CardFactory();
const filtreFactory = new FiltreFactory();

// Initialisation des filtres sélectionnés
let filtresSelectionnes = {
  appliance: [],
  ingredient: [],
  ustensils: [],
};

const inputElement = document.querySelector("input");
const noResultsMessage = document.getElementById("noResultsMessage");

function genererEtAfficherRecettes() {
  const motRecherche = inputElement.value.trim().toLowerCase();

  let resultatRecherche = searchService.search(motRecherche, filtresSelectionnes);
  if (resultatRecherche.resultats.length > 0) {
    noResultsMessage.style.display = "none";
    cardFactory.generate(resultatRecherche.resultats);
  } else {
    noResultsMessage.style.display = "block";
    cardFactory.generate(resultatRecherche.resultats);
  }
  filtreFactory.generateOption(
    resultatRecherche.filtresDispo.ingredient,
    resultatRecherche.filtresDispo.appliance,
    resultatRecherche.filtresDispo.ustensils
  );
}

inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();

filtreFactory.selectUstensiles.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedUstensil = target.textContent.trim();
    filtresSelectionnes.ustensils.push(selectedUstensil);
    afficherOptions(select, selectedUstensil, filtresSelectionnes.ustensils);
  }
});

filtreFactory.selectIngredients.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedIngredient = target.textContent.trim();
    filtresSelectionnes.ingredient.push(selectedIngredient);
    afficherOptions(select, selectedIngredient, filtresSelectionnes.ingredient);
  }
});

filtreFactory.selectAppareils.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedAppliance = target.textContent.trim();
    filtresSelectionnes.appliance.push(selectedAppliance);
    afficherOptions(select, selectedAppliance, filtresSelectionnes.appliance);
   
  }
});

const select = document.querySelector(".select");

function afficherOptions(a,b,c){
  const newDiv = document.createElement("div"); // Créer une nouvelle div
  newDiv.textContent = b; // Définir le texte de la nouvelle div
  a.appendChild(newDiv); // Ajouter la nouvelle div au conteneur

  newDiv.addEventListener("click", () => { // Ajouter un gestionnaire d'événement de clic à la nouvelle div
    const index = c.indexOf(b);
    if (index !== -1) {
      c.splice(index, 1); // Supprimer l'ustensile du tableau des filtres sélectionnés
      select.removeChild(newDiv); // Supprimer la div du conteneur
      genererEtAfficherRecettes();
    }
  });

  genererEtAfficherRecettes();
}