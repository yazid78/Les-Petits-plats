for (let i = 0; i < recipes.length; i++) {
   // console.log(recipes[i].name);
    for (let j =0; j<recipes[i].ingredients.length;j++){
       // console.log("Quantity:", recipes[i].ingredients[j].quantity);
    }
}



const fruits = ["pomme", "banane", "raisin", "mangue"];

const filtreTexte = (arr, requete) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(requete.toLowerCase()) !== -1,
  );
};

console.log(filtreTexte(fruits, "ne")); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, "m")); // ['pomme', 'mangue'];



