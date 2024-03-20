class FiltreFactory {
    generateOption(ingredients, appliances, ustensils){
        // Sélection des éléments select dans le DOM
        const selectIngredients = document.getElementById("selectIngredients");
        const selectAppareils = document.getElementById("selectAppareils");
        const selectUstensiles = document.getElementById("selectUstensiles");

        selectIngredients.innerHTML = '';
        selectAppareils.innerHTML = '';
        selectUstensiles.innerHTML = '';
        
        // Génération des options pour les ingrédients
        ingredients.forEach(ingredient => {
            const option = document.createElement("option");
            option.value = ingredient;
            option.textContent = ingredient;
            selectIngredients.appendChild(option);
        });

        // Génération des options pour les appareils
        appliances.forEach(appliance => {
            const option = document.createElement("option");
            option.value = appliance;
            option.textContent = appliance;
            selectAppareils.appendChild(option);
        });

        // Génération des options pour les ustensiles
        ustensils.forEach(ustensil => {
            const option = document.createElement("option");
            option.value = ustensil;
            option.textContent = ustensil;
            selectUstensiles.appendChild(option);
        });

        return {
            appliance: appliances,
            ingredient: ingredients,
            ustensils: ustensils
        };
    }
}
