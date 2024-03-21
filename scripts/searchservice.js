class SearchService {
  constructor() {
    this.resultat = recipes;
  }

  search(motRecherche, filtresSelectionnes) {

    motRecherche = motRecherche.trim().toLowerCase();
    this.resultat = recipes.filter((recette) => 
          recette.name.trim().toLowerCase().includes(motRecherche) ||
          recette.ingredients.some(ingredient => ingredient.ingredient.trim().toLowerCase().includes(motRecherche)) ||
          recette.description.trim().toLowerCase().includes(motRecherche)
    );

    if (filtresSelectionnes.appliance.length > 0) {
      this.resultat = this.resultat.filter(recette => recette.appliance.includes(filtresSelectionnes.appliance));
    }
    //inverser
    if (filtresSelectionnes.ingredient.length > 0) {
      this.resultat = this.resultat.filter(recette => recette.ingredients.some(ingredient => filtresSelectionnes.ingredient.includes(ingredient.ingredient)));
    }
    if (filtresSelectionnes.ustensils.length > 0) {
      this.resultat = this.resultat.filter(recette => recette.ustensils.some(ustensil => filtresSelectionnes.ustensils.includes(ustensil)));
    }
console.log(this.resultat.length);
    return this.resultat;
  }
}