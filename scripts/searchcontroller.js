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
  filtreFactory.generateOption(resultatRecherche.filtresDispo.ingredient, resultatRecherche.filtresDispo.appliance, resultatRecherche.filtresDispo.ustensils);
}

inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();

filtreFactory.selectAppareils.addEventListener("change", () => {
  const selectedAppliance = filtreFactory.selectAppareils.value;
  filtresSelectionnes.appliance.push(selectedAppliance);
  genererEtAfficherRecettes();
});

filtreFactory.selectIngredients.addEventListener("change", () => {
  const selectIngredients = filtreFactory.selectIngredients.value;
  filtresSelectionnes.ingredient.push(selectIngredients);
  genererEtAfficherRecettes();
});

filtreFactory.selectIngredients.addEventListener("change", () => {
  const selectIngredients = filtreFactory.selectIngredients.value;
  filtresSelectionnes.ingredient.push(selectIngredients);
  genererEtAfficherRecettes();
});

const select = document.querySelector(".select");

filtreFactory.selectUstensiles.addEventListener("change", () => {
  const selectedUstensils = filtreFactory.selectUstensiles.value;
  filtresSelectionnes.ustensils.push(selectedUstensils);
  afficherOptions(selectedUstensils); // Passer l'ustensile sélectionné comme argument
});

function afficherOptions(selectedUstensil){
  const newDiv = document.createElement("div"); // Créer une nouvelle div
  newDiv.textContent = selectedUstensil; // Définir le texte de la nouvelle div
  select.appendChild(newDiv); // Ajouter la nouvelle div au conteneur

  newDiv.addEventListener("click", () => { // Ajouter un gestionnaire d'événement de clic à la nouvelle div
    const index = filtresSelectionnes.ustensils.indexOf(selectedUstensil);
    if (index !== -1) {
      filtresSelectionnes.ustensils.splice(index, 1); // Supprimer l'ustensile du tableau des filtres sélectionnés
      select.removeChild(newDiv); // Supprimer la div du conteneur
      genererEtAfficherRecettes();
    }
  });

  genererEtAfficherRecettes();
}
