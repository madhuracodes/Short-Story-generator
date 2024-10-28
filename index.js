function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "your cake recipe will be displayed here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let recipeFormElement = document.querySelector("#story-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
