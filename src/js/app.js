import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let elements = document.querySelectorAll(".hot");
  if (elements) {
    for (let elements of elements) {
      let child = document.createElement("i");
      child.setAttribute("class", "fa-solid fa-fire");
      elements.appendChild(child);
    }
  }
});
