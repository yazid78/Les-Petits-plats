class SearchService {
  constructor() {
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
    //Algo SearchBar
    if (motRecherche.length >= 3) {
      motRecherche = motRecherche.trim().toLowerCase();
      this.recettes = recipes.filter(
        (recette) =>
          recette.name.trim().toLowerCase().includes(motRecherche) ||
          recette.ingredients.some((ingredient) => ingredient.ingredient.trim().toLowerCase().includes(motRecherche)) ||
          recette.description.trim().toLowerCase().includes(motRecherche)
      );
    } else {
      this.recettes = recipes;
    }
    // parcourir toutes les recettes et retirer ceux dont aucun filtres selectionner est present
    //Algo Filtre select
    if (filtresSelectionnes.ingredient.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ingredient.every((ingredientSelectionne) =>
          recette.ingredients.some((ingredient) => ingredient.ingredient.includes(ingredientSelectionne))
        )
      );
    }
    if (filtresSelectionnes.appliance.length > 0) {
      this.recettes = this.recettes.filter((recette) => recette.appliance.includes(filtresSelectionnes.appliance));
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ustensils.every((ustensilsSelectionne) => recette.ustensils.includes(ustensilsSelectionne.toLowerCase()))
      );
    }

    let nomsIngredients = new Set();
    let appliances = new Set();
    let ustensils = new Set();
    this.recettes.forEach((recette) => {
      appliances.add(recette.appliance);
    });
    this.recettes.forEach((recette) => {
      recette.ustensils.forEach((ustensil) => {
        ustensils.add(ustensil);
      });
    });
    this.recettes.forEach((recette) => {
      recette.ingredients.forEach((ingredient) => {
        nomsIngredients.add(ingredient.ingredient);
      });
    });

    let retour = {
      resultats: this.recettes,
      filtresDispo: {
        ingredient: [...nomsIngredients],
        ustensils: [...ustensils],
        appliance: [...appliances],
      },
    };
    console.log(this.recettes.length);

    return retour;
  }
}
