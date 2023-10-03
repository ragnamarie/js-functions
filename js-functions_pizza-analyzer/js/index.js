console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2) ** 2 * Math.PI;
  const area2 = (diameter2 / 2) ** 2 * Math.PI;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGain);
}

// First, we want to calculate the difference of the two pizza areas for two given pizza diameters. For that, do the following:

// 1. Write a function `calculatePizzaGain` which expects the two diameters of the two pizzas: `diameter1` and `diameter2`. (Not the radii of the pizzas!)
// 2. Inside this function, calculate the areas of both pizzas.
//    > 💡 you can find the formula for that online. The value of pi can be accessed via `Math.PI`.
// 3. Calculate the pizza gain in percent relative to the first pizza
//    > 💡 The formula is: `(area2 - area1) / area1 * 100`.
// 4. Set the `textContent` of the output element to that value. Use `Math.round(calculatedValue)` to round the pizza gain to the next whole integer value.
// 5. Inside both event listeners, save the current values of both pizza inputs in two variables `pizzaSize1` and `pizzaSize2`
//    > 💡 You can use the queried elements and get their value like this: `pizzaInput.value`
// 6. Now call the function and pass in the two pizza sizes as the arguments.

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = math.unit((newSize / 24) * 100, "px");
  pizzaElement.style.width = newDisplaySize;
}

// ### 2 Change the Pizza Display Sizes

// Great! Now we know how much pizza we gain if we choose the second pizza. But we don't have any visual relations between these two numbers. So lets adapt the pizza displays.

// 1. Write a function `updatePizzaDisplay` which has two parameters: `pizzaElement` - the queried DOM element of the respective pizza and `newSize` which is the new size of that pizza.
// 2. Calculate the new display size of the pizza element
//    > 💡 The formula is: `newSize / 24 * 100`.
// 3. Set the width of the `pizzaElement` to this new value.
//    > 💡 You can use `pizzaElement.style.width` for that.
//    > 💡 The width needs a unit, a simple number is not enough. Don't forget to concat "px" to your calculated number.
// 4. Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.

// Task 3
// define the function updateOutputColor here
