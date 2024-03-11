function ingredient() {
  let ingredient = [];
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      // console.log("Ingredients:", recipes[i].ingredients[j].ingredient);
      ingredient.push(recipes[i].ingredients[j].ingredient);
    }
  }
  return ingredient;
}

console.log(ingredient(), "test");

const ingredientArray = ingredient();
console.log(ingredientArray);


const searchInput = document.querySelector("input");

searchInput.addEventListener("input", filter )




function filter(e) {
  recipesContainer.innerHTML = "";

  const resultSearch = e.target.value.trim().toLowerCase();
  
  const TabFilter = recipes.filter(el => 
    el.name.trim().toLowerCase().includes(resultSearch) ||
    el.description.trim().toLowerCase().includes(resultSearch)
  );

  const filteredIngredients = ingredientArray.filter(ingredient => 
    ingredient.trim().toLowerCase().includes(resultSearch)
  );

  cards(TabFilter, filteredIngredients);
}
