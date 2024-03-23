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

  let resultat = searchService.search(motRecherche, filtresSelectionnes);
  if (resultat.length > 0) {
    noResultsMessage.style.display = "none";
    cardFactory.generate(resultat);
  } else {
    noResultsMessage.style.display = "block";
    cardFactory.generate(resultat);
  }
  const nomsIngredients = new Set (resultat.flatMap((recette) =>recette.ingredients.map((ingredient) => ingredient.ingredient)));
  const appliances = new Set (resultat.flatMap((recette) => recette.appliance));
  const ustensils = new Set (resultat.flatMap((recette) => recette.ustensils));
  filtreFactory.generateOption(nomsIngredients, appliances, ustensils);
}

inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();

filtreFactory.selectAppareils.addEventListener("change", () => {
  const selectedAppliance = filtreFactory.selectAppareils.value;
  filtresSelectionnes.appliance = [];
  filtresSelectionnes.appliance.push(selectedAppliance);
  genererEtAfficherRecettes();
});

filtreFactory.selectIngredients.addEventListener("change", () => {
  const selectIngredients = filtreFactory.selectIngredients.value;
  filtresSelectionnes.ingredient = [];
  filtresSelectionnes.ingredient.push(selectIngredients);
  genererEtAfficherRecettes();
})

  const select = document.querySelector(".select");  
  const text = document.createElement("div");
filtreFactory.selectUstensiles.addEventListener("change", () => {
  const selectedUstensils = filtreFactory.selectUstensiles.value;
  filtresSelectionnes.ustensils = [];
  filtresSelectionnes.ustensils.push(selectedUstensils);
  text.textContent = selectedUstensils
  select.appendChild(text);
  genererEtAfficherRecettes();
});

text.addEventListener("click", () => {
  filtresSelectionnes.ustensils.pop()
  text.textContent = '';
  genererEtAfficherRecettes(); 
});