// code pour effacer avec la petite croix dans l'input
let effacerinput = document.querySelector(".svgCroix");
let effacerinputOptions = document.querySelectorAll(".croix");
let inputOptions = document.querySelectorAll(".input");
effacerinput.style.display = "none";

effacerinput.addEventListener("click", () => {
  inputElement.value = "";
  effacerinput.style.display = "none";
  genererEtAfficherRecettes();
  nombredeRecette();
});

effacerinputOptions.forEach(element => {
  element.addEventListener("click", () => {
    inputOptions.forEach(element => {
      element.value = "";
    });
    effacerinputOptions.forEach(element => {
      element.style.display = "none";
    });
    genererEtAfficherRecettes();
    rechercheOptionsDansInputs();
  });
});

inputElement.addEventListener("input", () => {
  effacerinput.style.display = "block";
});
inputOptions.forEach((input) => {
  input.addEventListener("input", () => {
    effacerinputOptions.forEach((element) => {
      element.style.display = "block";
    });
  });
});

/* fonction pour ouvrir le select */
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

/* recherche options dans input */
function rechercheOptionsDansInputs() {
  const optionLabels = document.querySelectorAll("label");
  inputOptions.forEach((testinput) => {
    testinput.addEventListener("input", () => {
      let valeur = testinput.value.trim().toLowerCase();
      optionLabels.forEach((label) => {
        let labelText = label.textContent.trim().toLowerCase();
        if (labelText.includes(valeur)) {
          label.style.display = "block";
        } else {
          label.style.display = "none";
        }
      });
    });
  });
}
function nombredeRecette(){
 const nombre_recette = document.getElementById("logo_2")
nombre_recette.innerHTML = searchService.recettes.length +  " recettes"
}

rechercheOptionsDansInputs();
nombredeRecette()
