// Création des instances de SearchService et CardFactory
const searchService = new SearchService();
const cardFactory = new CardFactory();
// Initialisation des filtres sélectionnés
let filtresSelectionnes = {
    appliance: [],
    ingredient: [],
    ustensils: [],
};
const inputElement = document.querySelector("input");
function genererEtAfficherRecettes() {
    const motRecherche = inputElement.value.trim().toLowerCase();
    let resultat = searchService.search(motRecherche, filtresSelectionnes);
    cardFactory.generate(resultat.recettes);
}
inputElement.addEventListener("input", genererEtAfficherRecettes);
genererEtAfficherRecettes();
//# sourceMappingURL=searchcontroller.js.map