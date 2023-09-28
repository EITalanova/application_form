const selectedOptionsContainer = document.getElementById(
  "selectedOptionsContainer"
);
const selectedOptionsBox = document.getElementById("selectedOptionsBox");
const optionsList = document.querySelector(".industryList");
const checkboxes = document.querySelectorAll(
  '.industryList input[type="checkbox"]'
);
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");

selectedOptionsContainer.addEventListener("click", () => {
  if (optionsList.style.display === "block") {
    optionsList.style.display = "none";
    arrowUp.classList.toggle("invisible");
    arrowDown.classList.toggle("invisible");
  } else {
    optionsList.style.display = "block";
    arrowUp.classList.toggle("invisible");
    arrowDown.classList.toggle("invisible");
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
        '<p class="placeholder" id="placeholder">Select options</p><img class="arrowDown" src="arrowDown.svg" alt="pic" width="30" /><img class="arrowUp invisible" src="arrowUp.svg" alt="pic" width="30" />'
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
