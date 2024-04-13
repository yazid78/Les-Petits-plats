class SearchService {
  constructor() {
    this.originalRecettes = recipes;
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
    console.error("motRecherche : ", motRecherche);
    console.log("filtresSelectionnes : ", JSON.stringify(filtresSelectionnes));

    // Création de la liste de resultats
    let filteredResult = [];

    if (motRecherche.length >= 3) {
      motRecherche = motRecherche.trim().toLowerCase();

      for (let i = 0; i < this.originalRecettes.length; i++) {
        let recette = this.originalRecettes[i];

        // Vérifier le nom de la recette
        if (
          recette.name.trim().toLowerCase().includes(motRecherche) ||
          recette.description.trim().toLowerCase().includes(motRecherche)
        ) {
          filteredResult.push(recette);
        } else {
          let found = false;
          for (let j = 0; j < recette.ingredients.length; j++) {
            const ingredient = recette.ingredients[j].ingredient;
            if (ingredient && ingredient.trim().toLowerCase().includes(motRecherche)) {
              filteredResult.push(recette);
              found = true;
              break;
            }
          }
          if (found) break;
        }
      }
      this.recettes = filteredResult;
      console.error('ici', this.recettes)
    } else {
      this.recettes = this.originalRecettes;
    }

    /* */
    if (filtresSelectionnes.ustensils && filtresSelectionnes.ustensils.length > 0) {

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
          filteredResult.push(recette);
        }
      }
      this.recettes = filteredResult;
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

    console.log("retour : ", JSON.stringify(retour));
    console.log(this.recettes.length);

    return retour;
  }
}
