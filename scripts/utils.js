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

selects.forEach(select => {
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
            select.classList.remove('active');
            select_content.style.display = "none";
        }
    });
});
