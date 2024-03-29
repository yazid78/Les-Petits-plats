class SearchService {
  constructor() {
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
    //Algo SearchBar
    //if (motRecherche.length >=3 ){}
    motRecherche = motRecherche.trim().toLowerCase();
    this.recettes = recipes.filter(
      (recette) =>
        recette.name.trim().toLowerCase().includes(motRecherche) ||
        recette.ingredients.some((ingredient) =>
          ingredient.ingredient.trim().toLowerCase().includes(motRecherche)
        ) ||
        recette.description.trim().toLowerCase().includes(motRecherche)
    );

    // parcourir toutes les recettes et retirer ceux dont aucun filtres selectionner est present
    //Algo Filtre select
    if (filtresSelectionnes.ingredient.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ingredient.every((ingredientSeleccionne) =>
          recette.ingredients.some((ingredient) =>
            ingredient.ingredient === ingredientSeleccionne
          )
        )
      );
    }

if (filtresSelectionnes.appliance.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.appliance.includes(recette.appliance)
      );
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ustensils.every((ustensilSelecionne) =>
          recette.ustensils.includes(ustensilSelecionne)
        )
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