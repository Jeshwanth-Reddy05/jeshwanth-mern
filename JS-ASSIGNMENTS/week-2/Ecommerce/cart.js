import { getProductById, checkStock } from "./product.js";

let cartItems = [];

export function addToCart(productId, quantity) {
  // 1. Get product details
  let p = getProductById(productId);
  if (!p) {
    return "Product not found";
  }
  // 2. Check stock availability
  let isAvailable = checkStock(productId, quantity);
  if (!isAvailable) {
    return "OutOfStock! :(";
  }
  // 3. Check if product already in cart
  let cartItem = cartItems.find((item) => item.productId === productId);
  //    - If yes, update quantity
  //    - If no, add new item
  if (cartItem) {
    let newQuantity = cartItem.quantity + quantity;
    if (!checkStock(productId, newQuantity)) {
      return "Out of stock";
    }
    cartItem.quantity = newQuantity;
  } else {
    cartItems.push({ productId, quantity });
  }
  // 4. Return success/error message
  return "Product Added Successfully to cart :)";
}

export function removeFromCart(productId) {
  // Remove product from cart
  cartItems = cartItems.filter((item) => item.productId !== productId);
  return "Item removed from cart.";
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
  if (!checkStock(productId, newQuantity)) return "Insufficient stock.";

  let item = cartItems.find((item) => item.productId === productId);
  if (item) {
    item.quantity = newQuantity;
    return "Quantity updated.";
  }
  return "Item not in cart.";
}

export function getCartItems() {
  // Return all cart items with product details
  return cartItems.map((item) => {
    let product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
    };
  });
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
  return cartItems.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + product.price * item.quantity;
  }, 0);
}

export function clearCart() {
  // Empty the cart
  cartItems = [];
}