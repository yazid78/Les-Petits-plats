class SearchService {
  constructor() {
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
    // Création de la liste de resultats
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

    if (filtresSelectionnes.ingredients.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ingredients.every((ingredientSelectionne) =>
          recette.ingredients.some(
            (ingredient) => ingredient.ingredient.toLowerCase() === ingredientSelectionne.toLowerCase()
          )
        )
      );
    }

    if (filtresSelectionnes.appliances.length > 0) {
      this.recettes = this.recettes.filter((recette) => filtresSelectionnes.appliances.includes(recette.appliance));
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      this.recettes = this.recettes.filter((recette) => {
        const ustensilsString = recette.ustensils.join(",").toLowerCase();
        return filtresSelectionnes.ustensils.every((ustensilSelectionne) =>
          ustensilsString.includes(ustensilSelectionne.toLowerCase())
        );
      });
    }
    // Préparation des filtresDispo
    let ingredients = new Set();
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
        ingredients.add(ingredient.ingredient);
      });
    });

    if (filtresSelectionnes.ingredients.length > 0) {
      filtresSelectionnes.ingredients.forEach((ingredient) => ingredients.delete(ingredient));
    }
    if (filtresSelectionnes.appliances.length > 0) {
      filtresSelectionnes.appliances.forEach((appliance) => appliances.delete(appliance));
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      filtresSelectionnes.ustensils.forEach((ustensil) => ustensils.delete(ustensil));
    }

    let retour = {
      resultats: this.recettes,
      filtresDispo: {
        ingredients: [...ingredients],
        ustensils: [...ustensils],
        appliances: [...appliances],
      },
    };

    return retour;
  }
}
