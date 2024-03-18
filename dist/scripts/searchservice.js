import recipes from "../data/recipes.js";
export class SearchService {
    constructor() {
        this.resultat = recipes;
    }
    search(motRecherche, filtresSelectionnes) {
        if (motRecherche.length < 3) {
            return;
        }
        //algo de recherche
        motRecherche = motRecherche.trim().toLowerCase();
        this.resultat = this.resultat.filter((recette) => recette.name.trim().toLowerCase().includes(motRecherche)
            || recette.ingredients.some(ingredient => ingredient.ingredient.trim().toLowerCase().includes(motRecherche))
            || recette.description.trim().toLowerCase().includes(motRecherche));
        //algo filtresSelectionnes
        return {
            recettes: this.resultat,
            filtres: {
                ustensils: ["cuillère à Soupe", "verres", "presse citron"],
                ingredient: [
                    {
                        ingredient: "Thon Rouge (ou blanc)",
                        quantity: 200,
                        unit: "grammes",
                    },
                    {
                        ingredient: "Lait de coco",
                        quantity: 400,
                        unit: "ml",
                    },
                    {
                        ingredient: "Concombre",
                        quantity: 1,
                    },
                    {
                        ingredient: "Tomate",
                        quantity: 2,
                    },
                    {
                        ingredient: "Carotte",
                        quantity: 1,
                    },
                    {
                        ingredient: "Citron Vert",
                        quantity: 5,
                    },
                    {
                        ingredient: "Lait de Coco",
                        quantity: 100,
                        unit: "ml",
                    },
                    {
                        ingredient: "Jus de citron",
                        quantity: 2,
                    },
                    {
                        ingredient: "Crème de coco",
                        quantity: 2,
                        unit: "cuillères à soupe",
                    },
                    {
                        ingredient: "Sucre",
                        quantity: 30,
                        unit: "grammes",
                    },
                    {
                        ingredient: "Glaçons",
                    },
                ],
                appliance: ["Blender", "Saladier"],
            },
        };
    }
}
//# sourceMappingURL=searchservice.js.map