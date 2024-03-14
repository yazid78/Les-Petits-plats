interface IResultatRecherche {
    recettes: any[];
    filtres: {
      ustensils: string[];
      ingredient: IIngredient[];
      appliance: string[];
    };
  }
  