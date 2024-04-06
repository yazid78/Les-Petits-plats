let effacerinput = document.querySelector(".svgCroix");
effacerinput.style.display = "none";

effacerinput.addEventListener("click", () => {
  inputElement.value = "";
  effacerinput.style.display = "none";
  genererEtAfficherRecettes();
});

inputElement.addEventListener("input", () => {
  effacerinput.style.display = "block";
});
const selects = document.querySelectorAll(".select");

selects.forEach((select) => {
  const select_label = select.querySelector(".select_label");
  const select_content = select.querySelector(".select_content");

  select_label.addEventListener("click", () => {
    if (select.classList.contains("active")) {
      select.classList.remove("active");
      select_content.style.display = "none";
    } else {
      select.classList.add("active");
      select_content.style.display = "block";
    }
  });

  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove("active");
      select_content.style.display = "none";
    }
  });
});
/* fonction effacer les labels cliquer */

const optionLabels = document.querySelectorAll("label");
function deleteLabelAfterClick(selectedFilter) {
  optionLabels.forEach((label) => {
    if (label.textContent.trim() === selectedFilter) {
      label.style.display = "none";
    }
  });

  genererRecettesSansOptions();
}

/* let testinputs = document.querySelectorAll(".input");
testinputs.forEach(testinput => {
  testinput.addEventListener("input", () => {
    let valeur = testinput.value.trim().toLowerCase(); 
    if (
       valeur.includes( "yazid")) {
      console.log('ca marche');
  

    }
  });
});
 */
/* 
let testinputs = document.querySelectorAll(".input");
  testinputs.forEach(testinput => {
  testinput.addEventListener("input", () => {
    let valeur = testinput.value.trim().toLowerCase();

    // Utilisation de la méthode search avec les valeurs appropriées
    let Recherche = searchService.search(valeur, filtresSelectionnes);

    // Vérification si les ustensiles disponibles incluent la valeur entrée
    if (Recherche.filtresDispo.ustensils.includes(valeur)) {
      console.log('La valeur est un ustensile disponible');
      filtreFactory.generateOption(
        Recherche.filtresDispo.ingredient,
        Recherche.filtresDispo.appliance,
        Recherche.filtresDispo.ustensils
      );
      // Vous pouvez effectuer des actions supplémentaires ici
    }
  });
}); */

let testinputs = document.querySelectorAll(".input");
testinputs.forEach((testinput) => {
  testinput.addEventListener("input", () => {
    let valeur = testinput.value.trim().toLowerCase();
    optionLabels.forEach((label) => {
      let labelText = label.textContent.trim().toLowerCase(); // Récupérer le texte du label et le nettoyer
      if(labelText.includes(valeur)) { // Vérifier si le texte du label contient la valeur
        label.style.display = 'block'; // Afficher le label
      } else {
        label.style.display = 'none'; // Cacher le label s'il ne correspond pas à la valeur
      }
    });
    console.log(valeur);
  });
});
