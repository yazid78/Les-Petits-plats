class SearchService {
  constructor() {
    this.originalRecettes = recipes;
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
    // Création de la liste de resultats
    const results = [];
    if (motRecherche.length >= 3) {
      motRecherche = motRecherche.trim().toLowerCase();

      for (let i = 0; i < recipes.length; i++) {
        const recette = recipes[i];
        const recetteName = recette.name.trim().toLowerCase();
        const recetteDescription = recette.description.trim().toLowerCase();

        if (recetteName.includes(motRecherche) || recetteDescription.includes(motRecherche)) {
          results.push(recette);
          continue;
        }

        for (let j = 0; j < recette.ingredients.length; j++) {
          const ingredient = recette.ingredients[j].ingredient.trim().toLowerCase();
          if (ingredient.includes(motRecherche)) {
            results.push(recette);
            break;
          }
        }
      }

      this.recettes = results;
    } else {
      this.recettes = recipes;
    }

    /*Algo filtres selectionnées */
    if (filtresSelectionnes.ustensils && filtresSelectionnes.ustensils.length > 0) {
      let recettesFiltrees = [];
      for (let i = 0; i < this.recettes.length; i++) {
        const recette = this.recettes[i];
        let ustensilMatch = true;
        for (let j = 0; j < filtresSelectionnes.ustensils.length; j++) {
          const ustensil = filtresSelectionnes.ustensils[j];
          if (!recette.ustensils.includes(ustensil)) {
            ustensilMatch = false;
          }
        }
        if (ustensilMatch) {
          recettesFiltrees.push(recette);
        }
      }
      this.recettes = recettesFiltrees;
    }

    if (filtresSelectionnes.appliances.length > 0) {
      let recettesFiltrees = [];
      for (let i = 0; i < this.recettes.length; i++) {
        let recette = this.recettes[i];
        if (filtresSelectionnes.appliances.includes(recette.appliance)) {
          recettesFiltrees.push(recette);
        }
      }
      this.recettes = recettesFiltrees;
    }

    if (filtresSelectionnes.ingredients.length > 0) {
      let recettesFiltrees = [];
      for (let i = 0; i < this.recettes.length; i++) {
        let recette = this.recettes[i];
        let ingredientsRecette = [];
        for (let j = 0; j < recette.ingredients.length; j++) {
          ingredientsRecette.push(recette.ingredients[j].ingredient.toLowerCase());
        }
        let ingredientsSelectionnes = [];
        for (let k = 0; k < filtresSelectionnes.ingredients.length; k++) {
          ingredientsSelectionnes.push(filtresSelectionnes.ingredients[k].toLowerCase());
        }
        let tousInclus = true;

        for (let m = 0; m < ingredientsSelectionnes.length; m++) {
          if (!ingredientsRecette.includes(ingredientsSelectionnes[m])) {
            tousInclus = false;
            break;
          }
        }

        if (tousInclus) {
          recettesFiltrees.push(recette);
        }
      }
      this.recettes = recettesFiltrees;
    }

    // Préparation des filtresDispo
    let ingredients = new Set();
    let appliances = new Set();
    let ustensils = new Set();
    for (let i = 0; i < this.recettes.length; i++) {
      appliances.add(this.recettes[i].appliance);
    }
    for (let i = 0; i < this.recettes.length; i++) {
      let recette = this.recettes[i];
      for (let j = 0; j < recette.ustensils.length; j++) {
        ustensils.add(recette.ustensils[j]);
      }
    }
    for (let i = 0; i < this.recettes.length; i++) {
      let recette = this.recettes[i];
      for (let j = 0; j < recette.ingredients.length; j++) {
        ingredients.add(recette.ingredients[j].ingredient);
      }
    }

    //delete filtre selectionnés
    if (filtresSelectionnes.ingredients.length > 0) {
      for (let i = 0; i < filtresSelectionnes.ingredients.length; i++) {
        ingredients.delete(filtresSelectionnes.ingredients[i]);
      }
    }
    if (filtresSelectionnes.appliances.length > 0) {
      for (let i = 0; i < filtresSelectionnes.appliances.length; i++) {
        appliances.delete(filtresSelectionnes.appliances[i]);
      }
    }
    if (filtresSelectionnes.ustensils.length > 0) {
      for (let i = 0; i < filtresSelectionnes.ustensils.length; i++) {
        ustensils.delete(filtresSelectionnes.ustensils[i]);
      }
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
