const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

//removes all colors from big box
function removeAllColors() {
  box.classList.remove("red", "blue", "green", "gray");
}

function addColor(color) {
  box.classList.add(color);
}

//adds and removes red to and from big box
redButton.addEventListener("click", () => {
  removeAllColors();
  addColor("red");
});

//adds and removes blue to and from big box
blueButton.addEventListener("click", () => {
  removeAllColors();
  addColor("blue");
});

//adds and removes green to and from big box
greenButton.addEventListener("click", () => {
  removeAllColors();
  addColor("green");
});

grayButton.addEventListener("click", () => {
  removeAllColors();
  addColor("gray");
});
