let searchService = new SearchService();
let cardFactory = new CardFactory();

let filtresSelectionnes: IFiltre = {
  appliance: [],
  ingredient: [],
  ustensils: [],
};

let resultat: IResultatRecherche = searchService.search(
  document.querySelector("input").value,
  filtresSelectionnes
);

cardFactory.generate(resultat.recettes);