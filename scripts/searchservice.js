class SearchService {


  search(motRecherche, filtresSelectionnes) {
 let resultat= []
  
    //algo de recherche
    motRecherche = motRecherche.trim().toLowerCase();
   resultat = recipes.filter((recette) => recette.name.trim().toLowerCase().includes(motRecherche)
      || recette.ingredients.some(ingredient => ingredient.ingredient.trim().toLowerCase().includes(motRecherche))
      || recette.description.trim().toLowerCase().includes(motRecherche));


    //algo filtresSelectionnes

    if (filtresSelectionnes.appliance.length > 0) {
      resultat = resultat.filter(recette => filtresSelectionnes.appliance.includes(recette.appliance));
    }

    if (filtresSelectionnes.ingredient.length > 0) {
      resultat = resultat.filter(recette => recette.ingredients.some(ingredient => filtresSelectionnes.ingredient.includes(ingredient.ingredient)));
    }

    if (filtresSelectionnes.ustensils.length > 0) {
      resultat = resultat.filter(recette => recette.ustensils.some(ustensil => filtresSelectionnes.ustensils.includes(ustensil)));
    }
    return resultat
    
    }
}