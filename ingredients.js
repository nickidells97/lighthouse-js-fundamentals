const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Banana Bread Ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

console.log("\nBanana Bread Ingredients:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\nBanana Bread Ingredients:");
for (let i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}