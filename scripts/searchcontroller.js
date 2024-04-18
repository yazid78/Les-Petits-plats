// Création des instances de SearchService et CardFactory
const searchService = new SearchService();
const cardFactory = new CardFactory();
const filtreFactory = new FiltreFactory();

// Initialisation des filtres sélectionnés
let filtresSelectionnes = {
  appliances: [],
  ingredients: [],
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
    resultatRecherche.filtresDispo.ingredients,
    resultatRecherche.filtresDispo.appliances,
    resultatRecherche.filtresDispo.ustensils
  );
}

inputElement.addEventListener("input", () => {
  genererEtAfficherRecettes();
  nombredeRecette();
  rechercheOptionsDansInputs();
});

genererEtAfficherRecettes();

filtreFactory.selectUstensiles.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedUstensil = target.textContent.trim();
    filtresSelectionnes.ustensils.push(selectedUstensil);
    afficherTag(DivTag, selectedUstensil, filtresSelectionnes.ustensils);
    genererEtAfficherRecettes();
    rechercheOptionsDansInputs();
    nombredeRecette();
  }
});

filtreFactory.selectIngredients.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedIngredient = target.textContent.trim();
    filtresSelectionnes.ingredients.push(selectedIngredient);
    afficherTag(DivTag, selectedIngredient, filtresSelectionnes.ingredients);
    genererEtAfficherRecettes();
    rechercheOptionsDansInputs();
    nombredeRecette();
  }
});

filtreFactory.selectAppareils.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedAppliance = target.textContent.trim();
    filtresSelectionnes.appliances.push(selectedAppliance);
    afficherTag(DivTag, selectedAppliance, filtresSelectionnes.appliances);
    genererEtAfficherRecettes();
    rechercheOptionsDansInputs();
    nombredeRecette();
  }
});

const DivTag = document.querySelector(".DivTag");

function afficherTag(DivParentTag, selectedFilter, filtresSelectionnes) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("DivchildTag");

  const textContent = document.createElement("span");
  textContent.textContent = selectedFilter;
  newDiv.appendChild(textContent);

  DivParentTag.appendChild(newDiv);

  /* l'élément sur lequel l'utilisateur a cliqué sur la croix  pour supprimer le filtre
   */
  newDiv.addEventListener("click", () => {
    const index = filtresSelectionnes.indexOf(selectedFilter);

    if (index !== -1) {
      filtresSelectionnes.splice(index, 1);
      DivParentTag.removeChild(newDiv);
      genererEtAfficherRecettes();
      rechercheOptionsDansInputs();
      nombredeRecette();
    }
  });

  const svgString =
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const span = document.createElement("span");
  span.innerHTML = svgString;
  newDiv.appendChild(span);
}
