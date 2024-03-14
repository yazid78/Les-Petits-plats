var FiltreFactory = /** @class */ (function () {
    function FiltreFactory() {
    }
    FiltreFactory.prototype.generateOption = function (ingredients, appliances, ustensils) {
        var option = document.createElement("option");
        return {
            appliance: appliances,
            ingredient: ingredients,
            ustensils: ustensils
        };
    };
    return FiltreFactory;
}());
var selectIngredients = document.getElementById("selectIngredients");
console.log(recipesContainer);
//# sourceMappingURL=filtrefactory.js.map