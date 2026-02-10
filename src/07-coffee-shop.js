/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const validSizes = ["small", "medium", "large"];
  const validTypes = ["regular", "latte", "cappuccino", "mocha"];

  if (!validSizes.includes(size)) {
    return -1;
  }

  if (!validTypes.includes(type)) {
    return -1;
  }

  let totalprice = 0;
  let baseprice = 0;
  let basetype = 0
  let baseSize = { "small": 3, "medium": 4, "large": 5 }
  let baseType = { "regular": 0, "latte": 1, "cappuccino": 1.50, "mocha": 2 }

  baseprice = baseSize[size]
  basetype = baseType[type]
  totalprice = baseprice + basetype

  if (extras.whippedCream === true) {
    totalprice += 0.5
  }

  if (extras.extraShot === true) {
    totalprice += 0.75
  }

  return totalprice;
}
