
/* fonction effacer les labels cliquer */
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
/* recherche options dans input */
function rechercheOptionsDansInputs() {
  let testinputs = document.querySelectorAll(".input");
  testinputs.forEach((testinput) => {
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

rechercheOptionsDansInputs();