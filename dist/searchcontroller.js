var searchService = new SearchService();
var cardFactory = new CardFactory();
var filtresSelectionnes = {
    appliance: [],
    ingredient: [],
    ustensils: [],
};
var resultat = searchService.search(document.querySelector("input").value, filtresSelectionnes);
cardFactory.generate(resultat.recettes);
//# sourceMappingURL=searchcontroller.js.map