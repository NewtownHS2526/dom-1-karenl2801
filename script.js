/*
 * ============================================
 * STUDENT INSTRUCTIONS - QuerySelector Lesson
 * ============================================
 * 
 * Your task: Fix the bugs and implement the shopping cart functionality!
 * 
 * BUGS TO FIX:
 * 1. Line 3: The variable is named "appleButton" but it's selecting "#banana" - fix this!
 * 2. Line 7: The function is named "addApple" but should handle all items - rename it!
 * 
 * TODO - Implement the following features:
 * 1. Select all three buttons (apple, banana, mango) using querySelector
 * 2. Create a function that adds items to the shopping cart when clicked
 * 3. Display the item name and price in the #shopping-cart div
 * 4. Calculate and update the total price in the #total-span element
 * 5. Store prices: Apple = $0.75, Banana = $0.30, Mango = $1.25
 * 
 * HINTS:
 * - Use querySelector or querySelectorAll to select elements
 * - Use addEventListener to handle click events
 * - Use textContent or innerHTML to update the DOM
 * - You may need to parse prices from strings or store them in variables
 * 
 * ============================================
 */

console.log("script running");

// TODO: Fix this bug - should select #apple, not #banana!
const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

let total = 0;
const prices = {
  apple: 0.75,
  banana: 0.30,
  mango: 1.25
};

// TODO: Rename this function to something more generic like "addItem"
const addItem = (itemName) => {
  const item = document.createElement("p");
  item.textContent = `${itemName} - $${prices[itemName].toFixed(2)}`;
  shoppingCart.appendChild(item);
  total += prices[itemName];
  totalSpan.textContent = total.toFixed(2);
};

// TODO: Add event listeners for all three buttons
appleButton.addEventListener("click", () => addItem("apple"));
bananaButton.addEventListener("click", () => addItem("banana"));
mangoButton.addEventListener("click", () => addItem("mango"));