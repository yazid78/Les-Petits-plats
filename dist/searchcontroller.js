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
    if (resultat.recettes.length > 0) {
        noResultsMessage.style.display = "none";
        cardFactory.generate(resultat.recettes);
    }
    else {
        noResultsMessage.style.display = "block";
        cardFactory.generate(resultat.recettes);
    }
    const nomsIngrédients = resultat.filtres.ingredient.map((x) => x.ingredient);
    filtreFactory.generateOption(nomsIngrédients, resultat.filtres.appliance, resultat.filtres.ustensils);
}
inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();
//# sourceMappingURL=searchcontroller.js.map