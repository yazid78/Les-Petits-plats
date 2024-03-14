var recipesContainer = document.querySelector(".ContainerCards");
var CardFactory = /** @class */ (function () {
    function CardFactory() {
    }
    CardFactory.prototype.generate = function (recipes) {
        recipes.forEach(function (element) {
            //Déclaration variables
            var divCardCol = document.createElement("article");
            var divCard = document.createElement("div");
            var picture = "Photos P7 JS Les petits plats" + "/" + element.image;
            var img = document.createElement("img");
            var cardBody = document.createElement("div");
            var h5_title = document.createElement("h5");
            var h6_recipes = document.createElement("h6");
            var p_recipes = document.createElement("p");
            var h6_ingredients = document.createElement("h6");
            var ul_ingredients = document.createElement("ul");
            // Attribution variables
            img.src = picture;
            img.alt = element.name;
            h5_title.textContent = element.name;
            h6_recipes.textContent = "Recette";
            p_recipes.textContent = element.description;
            h6_ingredients.textContent = "Ingrédients";
            element.ingredients.forEach(function (ingredient) {
                var li_ingredients = document.createElement("li");
                li_ingredients.textContent = "".concat(ingredient.quantity || "", " ").concat(ingredient.unit || "", " ").concat(ingredient.ingredient);
                li_ingredients.classList.add("br");
                ul_ingredients.appendChild(li_ingredients);
            });
            // add class
            divCardCol.classList.add("col.mb-4");
            divCard.classList.add("card");
            cardBody.classList.add(".card-body");
            p_recipes.classList.add("card-text");
            ul_ingredients.classList.add("card-text");
            //AppendChild
            recipesContainer.appendChild(divCardCol);
            divCardCol.appendChild(divCard);
            divCard.appendChild(img);
            divCard.appendChild(cardBody);
            cardBody.appendChild(h5_title);
            cardBody.appendChild(h6_recipes);
            cardBody.appendChild(p_recipes);
            cardBody.appendChild(h6_ingredients);
            cardBody.appendChild(ul_ingredients);
        });
    };
    return CardFactory;
}());
//# sourceMappingURL=cardsfactory.js.map