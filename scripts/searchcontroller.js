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
  if (resultat.length  > 0) {
    noResultsMessage.style.display = "none";
    cardFactory.generate(resultat);
  } else {
    noResultsMessage.style.display = "block";
    cardFactory.generate(resultat);
  }

  const nomsIngredients = resultat.map((recette) => recette.ingredients.map((ingredient) => ingredient.ingredient));
  const appliances = resultat.map((recette) => recette.appliance);
  const ustensils = resultat.map((recette) => recette.ustensils);
  filtreFactory.generateOption(nomsIngredients, appliances, ustensils);
}

inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();

this.selectIngredients.addEventListener('change', () => {
      filtresSelectionnes.ingredient = Array.from(this.selectIngredients.selectedOptions).map(option => option.value);
      genererEtAfficherRecettes();
    });

    this.selectAppareils.addEventListener('change', () => {
      filtresSelectionnes.appliance = Array.from(this.selectAppareils.selectedOptions).map(option => option.value);
      genererEtAfficherRecettes();
    });

    this.selectUstensiles.addEventListener('change', () => {
      filtresSelectionnes.ustensils = Array.from(this.selectUstensiles.selectedOptions).map(option => option.value);
      genererEtAfficherRecettes();
    });
  