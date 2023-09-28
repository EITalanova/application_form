const selectedOptionsContainer = document.getElementById(
  "selectedOptionsContainer"
);
const optionsList = document.querySelector(".industryList");
const checkboxes = document.querySelectorAll(
  '.industryList input[type="checkbox"]'
);
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");

selectedOptionsContainer.addEventListener("click", () => {
  if (optionsList.style.display === "block") {
    optionsList.style.display = "none";
    arrowUp.classList.add("invisible");
    arrowDown.classList.remove("invisible");
  } else {
    optionsList.style.display = "block";
    arrowUp.classList.remove("invisible");
    arrowDown.classList.add("invisible");
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedValues = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    selectedOptionsContainer.innerHTML = "";
    selectedValues.forEach((value) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selectedOption");
      optionElement.textContent = value;
      selectedOptionsContainer.appendChild(optionElement);
    });

    if (selectedValues.length === 0) {
      selectedOptionsContainer.insertAdjacentHTML(
        "beforeend",
        '<p class="placeholder" id="placeholder">Select options</p>'
      );
    }

    optionsList.style.display = "none";
    arrowUp.classList.add("invisible");
    arrowDown.classList.remove("invisible");
  });
});

document.addEventListener("click", (event) => {
  if (!selectedOptionsContainer.contains(event.target)) {
    optionsList.style.display = "none";
    arrowUp.classList.add("invisible");
    arrowDown.classList.remove("invisible");
  }
});
