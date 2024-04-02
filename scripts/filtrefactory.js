class FiltreFactory {
  constructor() {
    this.selectContent = document.querySelector(".select_content");
    this.selectIngredients = document.querySelector(".selectIngredients");
    this.selectAppareils = document.querySelector(".selectAppareils");
    this.selectUstensiles = document.querySelector(".selectUstensiles");
  
  }

  generateOption(ingredients, appliances, ustensils) {
    this._clearSelect();

    this._generateSelectOptions(this.selectIngredients, ingredients);
    this._generateSelectOptions(this.selectAppareils, appliances);
    this._generateSelectOptions(this.selectUstensiles, ustensils);
    

    return {
      ingredient: ingredients,
      appliance: appliances,
      ustensils: ustensils,
    };
  }

  _clearSelect() {
    this.selectIngredients.innerHTML = "";
    this.selectAppareils.innerHTML = "";
    this.selectUstensiles.innerHTML = "";
  }



  _generateSelectOptions(selectElement, options) {
    options.forEach((optionValue) => {
      const div = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = optionValue;
      label.setAttribute("for", optionValue);
      div.appendChild(label);
      selectElement.appendChild(div);
    });
  }
}
