class FiltreFactory {
  constructor() {
    this.selectIngredients = document.getElementById("selectIngredients");
    this.selectAppareils = document.getElementById("selectAppareils");
    this.selectUstensiles = document.getElementById("selectUstensiles");
  }

  generateOption(ingredients, appliances, ustensils) {
    this._clearSelectOptions();

    this._generateSelectOptions(this.selectIngredients, ingredients);
    this._generateSelectOptions(this.selectAppareils, appliances);
    this._generateSelectOptions(this.selectUstensiles, ustensils);

    return {
      appliance: appliances,
      ingredient: ingredients,
      ustensils: ustensils,
    };
  }

  _clearSelectOptions() {
    this.selectIngredients.innerHTML = "";
    this.selectAppareils.innerHTML = "";
    this.selectUstensiles.innerHTML = "";
  }

  _generateSelectOptions(selectElement, options) {
    options.forEach((optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      selectElement.appendChild(option);
    });
  }
}
