const recipesContainer = document.querySelector(".ContainerCards");
function cards(tab ,tab2) {

  tab.forEach((element) => {
    //Déclaration variables
    const divCardCol = document.createElement("article");
    const divCard = document.createElement("div");
    const picture = "Photos P7 JS Les petits plats" + "/" + element.image;
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const h5_title = document.createElement("h5");
    const h6_recipes = document.createElement("h6");
    const p_recipes = document.createElement("p");
    const h6_ingredients = document.createElement("h6");
    const ul_ingredients = document.createElement("ul");

    // Attribution variables
    img.src = picture;
    img.alt = element.name;
    h5_title.textContent = element.name;
    h6_recipes.textContent = "Recette";
    p_recipes.textContent = element.description;
    h6_ingredients.textContent = "Ingrédients";
    element.ingredients.forEach((ingredient) => {
      const li_ingredients = document.createElement("li");
      li_ingredients.textContent = `${ingredient.quantity || ""} ${ingredient.unit || "" } ${ingredient.ingredient}`;
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
}

cards(recipes);
