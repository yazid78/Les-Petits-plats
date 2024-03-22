class SearchService {
  constructor() {
    this.resultat = recipes;
  }

  search(motRecherche, filtresSelectionnes) {
//Algo SearchBar
//if (motRecherche.length >=3 ){}
    motRecherche = motRecherche.trim().toLowerCase();
    this.resultat = recipes.filter((recette) => 
        recette.name.trim().toLowerCase().includes(motRecherche) ||
        recette.ingredients.some(ingredient => ingredient.ingredient.trim().toLowerCase().includes(motRecherche)) ||
        recette.description.trim().toLowerCase().includes(motRecherche)
    );
    
//Algo Filtre select
if (filtresSelectionnes.ingredient.length > 0) {
  this.resultat = this.resultat.filter(recette => 
    recette.ingredients.some(ingredient => filtresSelectionnes.ingredient.includes(ingredient.ingredient))
  );
}
if (filtresSelectionnes.appliance.length > 0) {
  this.resultat = this.resultat.filter(recette => recette.appliance.includes(filtresSelectionnes.appliance));
}
if(filtresSelectionnes.ustensils.length> 0){
  this.resultat = this.resultat.filter(recette => {
    const ustensilsString = recette.ustensils.toString().toLowerCase(); 
    return filtresSelectionnes.ustensils.filter(ustensil => ustensilsString.includes(ustensil.toLowerCase())).length > 0;
  });
}
console.log(this.resultat.length);
    return this.resultat;
  }
}