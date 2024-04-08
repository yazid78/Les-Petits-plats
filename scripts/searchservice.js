class SearchService {
  constructor() {
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
    //Algo SearchBar
/*     let recettesFiltrees = [];
    motRecherche = motRecherche.trim().toLowerCase();

    for (let i = 0; i < this.recettes.length; i++) {
      let recette = this.recettes[i];

      // Vérifiez si le nom de la recette contient le mot de recherche
      if (
        recette.name.trim().toLowerCase().includes(motRecherche) ||
        recette.description.trim().toLowerCase().includes(motRecherche) ||
        recette.ingredients.some((ingredient) => ingredient.ingredient.trim().toLowerCase().includes(motRecherche))
      ) {
        recettesFiltrees.push(recette);
      }
    }
 */
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
    //Algo Filtre select */
    if (filtresSelectionnes.ingredient.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ingredient.every((ingredientSelectionne) =>
          recette.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(ingredientSelectionne.toLowerCase())
          )
        )
      );
    }
    if (filtresSelectionnes.appliance.length > 0) {
      this.recettes = this.recettes.filter((recette) => recette.appliance.includes(filtresSelectionnes.appliance));
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      this.recettes = this.recettes.filter((recette) => {
        const ustensilsString = recette.ustensils.join(",").toLowerCase();
        return filtresSelectionnes.ustensils.every((ustensilSelectionne) =>
          ustensilsString.includes(ustensilSelectionne.toLowerCase())
        );
      });
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
    /*   resultats: recettesFiltrees, */
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
