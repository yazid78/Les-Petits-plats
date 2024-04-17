const recipesContainer = document.querySelector(".ContainerCards");
class CardFactory {

  generate(recipes) {
    recipesContainer.innerHTML = "";
    recipes.forEach((element) => {
      //Déclaration variables
      const divCardCol = document.createElement("article");
      const divCard = document.createElement("div");
      const picture = "./Photos_P7_JS_Les_petits_plats" + "/" + element.image;
      const img = document.createElement("img");
      const cardBody = document.createElement("div");
      const h5_title = document.createElement("h5");
      const h6_recipes = document.createElement("h6");
      const p_recipes = document.createElement("p");
      const h6_ingredients = document.createElement("h6");
      const div_ingredients = document.createElement("div");
      const div_left_column = document.createElement("div");
      const div_right_column = document.createElement("div");
      const span_min = document.createElement("span")

      // Attribution variables
      img.src = picture;
      img.alt = element.name;
      h5_title.textContent = element.name;
      h6_recipes.textContent = "RECETTE";
      p_recipes.textContent = element.description;
      h6_ingredients.textContent = "INGRÉDIENTS";
      span_min.textContent = element.time +"min";

      const ingredientsCount = element.ingredients.length;
      const halfIngredientsCount = Math.ceil(ingredientsCount / 2); // Nombre d'ingrédients dans la première colonne

      // Remplir les colonnes d'ingrédients
      element.ingredients.forEach((ingredient, index) => {
        const div_ingredient = document.createElement("div");
        const h6_ingredient_name = document.createElement("h6");
        const p_ingredient_value = document.createElement("p");
        h6_ingredient_name.textContent = ingredient.ingredient;
        p_ingredient_value.textContent = `${ingredient.quantity || ""} ${ingredient.unit || ""}`;
        div_ingredient.appendChild(h6_ingredient_name);
        div_ingredient.appendChild(p_ingredient_value);
        
       

        // Placer les ingrédients dans la bonne colonne
        if (index < halfIngredientsCount) {
          div_left_column.appendChild(div_ingredient);
        } else {
          div_right_column.appendChild(div_ingredient);
        }
      });

      // add class
      span_min.classList.add("span_min")
      div_ingredients.classList.add("Container_ingredient")
      divCardCol.classList.add("col.mb-4");
      divCard.classList.add("card");
      cardBody.classList.add("card-body");
      p_recipes.classList.add("card-text");
      div_left_column.classList.add("col");
      div_right_column.classList.add("col");

      //AppendChild
      recipesContainer.appendChild(divCardCol);
      divCardCol.appendChild(divCard);
      divCard.appendChild(img);
      divCard.appendChild(span_min)
      divCard.appendChild(cardBody);
      cardBody.appendChild(h5_title);
      cardBody.appendChild(h6_recipes);
      cardBody.appendChild(p_recipes);
      cardBody.appendChild(h6_ingredients);
      div_ingredients.appendChild(div_left_column);
      div_ingredients.appendChild(div_right_column);
      cardBody.appendChild(div_ingredients);
    });
  }
}
