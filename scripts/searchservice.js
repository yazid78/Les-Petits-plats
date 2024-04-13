class SearchService {
  constructor() {
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
<<<<<<< Updated upstream
    //Algo SearchBar
    if (motRecherche.length >= 3) {
=======
    console.log("motRecherche : ", motRecherche);
    console.log("filtresSelectionnes : ", JSON.stringify(filtresSelectionnes));

    // Création de la liste de resultats
    let recettesFiltrees = [];
    for (let i = 0; i < recipes.length; i++) {
      let recette = recipes[i];
      if (
        recette.name.trim().toLowerCase().includes(motRecherche) ||
        recette.ingredients.some((ingredient) => ingredient.ingredient.trim().toLowerCase().includes(motRecherche)) ||
        recette.description.trim().toLowerCase().includes(motRecherche)
      ) {
        // Si une correspondance est trouvée, ajouter la recette à la liste des recettes filtrées
        recettesFiltrees.push(recette);
      }
      recette = recettesFiltrees
    }

    /*    if (motRecherche.length >= 3) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    //Algo Filtre select
    if (filtresSelectionnes.ingredient.length > 0) {
      this.recettes = this.recettes.filter((recette) =>
        filtresSelectionnes.ingredient.every((ingredientSelectionne) =>
          recette.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(ingredientSelectionne.toLowerCase()))
        )
      );
    }
    if (filtresSelectionnes.appliance.length > 0) {
      this.recettes = this.recettes.filter((recette) => recette.appliance.includes(filtresSelectionnes.appliance));
=======
 */

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // TODO: ÉTAPE 1 :  corriger ça
    //TODO: Debug cela pour qu'avec Tomate cela te sorte à la fin uniquement 4 éléments
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
>>>>>>> Stashed changes
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      this.recettes = this.recettes.filter((recette) => {
        const ustensilsString = recette.ustensils.join(',').toLowerCase(); 
        return filtresSelectionnes.ustensils.every((ustensilSelectionne) => ustensilsString.includes(ustensilSelectionne.toLowerCase()));
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

<<<<<<< Updated upstream
    let retour = {
      resultats: this.recettes, 
=======
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
      resultats: recettesFiltrees,
>>>>>>> Stashed changes
      filtresDispo: {
        ingredient: [...nomsIngredients],
        ustensils: [...ustensils],
        appliance: [...appliances],
      },
    };
<<<<<<< Updated upstream
    console.log(this.recettes.length);
    /* console.log('Ustensils disponibles:', retour.filtresDispo.ustensils);  */
=======

    console.log("retour : ", JSON.stringify(retour));
    console.log(this.recettes.length);

>>>>>>> Stashed changes
    return retour;
  }
}

