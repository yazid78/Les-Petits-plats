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

const select = document.querySelector(".select");
const text = document.createElement("div");

filtreFactory.selectUstensiles.addEventListener("change", () => {
  const selectedUstensils = filtreFactory.selectUstensiles.value;
  filtresSelectionnes.ustensils.push(selectedUstensils);
  afficherOptions()
});

function afficherOptions(){
filtresSelectionnes.ustensils.forEach(element => {
  text.textContent = element;
  select.appendChild(text);
  genererEtAfficherRecettes();
});

}
text.addEventListener("click", () => {
  filtresSelectionnes.ustensils.pop();
  text.textContent = "";
  genererEtAfficherRecettes();
});
