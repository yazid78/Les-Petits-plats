class SearchService {
  constructor() {
    this.recettes = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
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
 */

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // TODO: ÉTAPE 1 :  corriger ça
    //TODO: Debug cela pour qu'avec Tomate cela te sorte à la fin uniquement 4 éléments
/*     if (filtresSelectionnes.ingredients.length > 0) {
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
    } */
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$
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

/*     if (filtresSelectionnes.ingredients.length > 0) {
      filtresSelectionnes.ingredients.forEach((ingredient) => ingredients.delete(ingredient));
    }
    if (filtresSelectionnes.appliances.length > 0) {
      filtresSelectionnes.appliances.forEach((appliance) => appliances.delete(appliance));
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      filtresSelectionnes.ustensils.forEach((ustensil) => ustensils.delete(ustensil));
    }
 */
    let retour = {
      resultats: recettesFiltrees,
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
