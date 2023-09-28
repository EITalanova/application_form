const selectedOptions = document.querySelector(".selectedOptions");
const optionsList = document.querySelector(".industryList");
const checkboxes = document.querySelectorAll(".industryList input");

function toggleOptionsList() {
  optionsList.style.display =
    optionsList.style.display === "block" ? "none" : "block";
}

selectedOptions.addEventListener("click", toggleOptionsList);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedValues = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    selectedOptions.value = selectedValues.join(", ");
  });
});

document.addEventListener("click", (event) => {
  if (!selectedOptions.contains(event.target)) {
    optionsList.style.display = "none";
  }
});
