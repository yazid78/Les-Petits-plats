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
function genererRecettesSansOptions() {
  const motRecherche = inputElement.value.trim().toLowerCase();

  let resultatRecherche = searchService.search(motRecherche, filtresSelectionnes);
  if (resultatRecherche.resultats.length > 0) {
    noResultsMessage.style.display = "none";
    cardFactory.generate(resultatRecherche.resultats);
  } else {
    noResultsMessage.style.display = "block";
    cardFactory.generate(resultatRecherche.resultats);
  }
}

inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();
genererRecettesSansOptions();
filtreFactory.selectUstensiles.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedUstensil = target.textContent.trim();
    filtresSelectionnes.ustensils.push(selectedUstensil);
    afficherTag(DivTag, selectedUstensil, filtresSelectionnes.ustensils);
  }
});

filtreFactory.selectIngredients.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedIngredient = target.textContent.trim();
    filtresSelectionnes.ingredient.push(selectedIngredient);
    afficherTag(DivTag, selectedIngredient, filtresSelectionnes.ingredient);
  }
});

filtreFactory.selectAppareils.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LABEL") {
    const selectedAppliance = target.textContent.trim();
    filtresSelectionnes.appliance.push(selectedAppliance);
    afficherTag(DivTag, selectedAppliance, filtresSelectionnes.appliance);

  }
});

const DivTag = document.querySelector(".DivTag");
function afficherTag(a, b, c) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("DivchildTag");

  // Créer une balise span pour contenir le texte
  const textContent = document.createElement("span");
  textContent.textContent = b;
  newDiv.appendChild(textContent);

  a.appendChild(newDiv);

  newDiv.addEventListener("click", () => {
    const index = c.indexOf(b);
    if (index !== -1) {
      c.splice(index, 1);
      a.removeChild(newDiv);
      genererEtAfficherRecettes();
  
    }
  });

  const svgString ='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const span = document.createElement("span");
  span.innerHTML = svgString;
  newDiv.appendChild(span);
  
  // Cacher l'option dans le menu déroulant
  const selectOptions = document.querySelectorAll(".select");
  selectOptions.forEach((select) => {
    const selectContent = select.querySelector(".select_content");
    const optionLabels = selectContent.querySelectorAll("label");
    optionLabels.forEach((label) => {
      if (label.textContent.trim() === b) {
        label.style.display = "none";
        label.value = "";
      }
    });
  });
 genererRecettesSansOptions();
  }

