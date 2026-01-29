import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  let allCartItems = getCartItems();
  let cartTotal = getCartTotal();
  if (allCartItems.length === 0) {
    return {
      status: "failed",
      message: "Cart is empty",
    };
  }
  // 2. Apply discount if coupon provided
  let discountAmnt = applyDiscount(cartTotal, couponCode, allCartItems);
  // 3. Validate payment method (card/upi/cod)
  let isValidPaymentMethod = validatePaymentMethod(paymentMethod);
  if (!isValidPaymentMethod) {
    return {
      status: "failed",
      message: "Invalid payment method",
    };
  }
  // 4. Process payment (simulate)

  // 5. Reduce stock for all items
  allCartItems.forEach((item) => {
    reduceStock(item.id, item.quantity);
  });
  // 6. Clear cart
  clearCart();
  // 7. Generate order summary
  // Return order summary:
  // {
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }
  return {
    orderId: generateOrderId(),
    items: allCartItems,
    subtotal: discountAmnt.originalTotal,
    discount: discountAmnt.discount,
    total: discountAmnt.finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: discountAmnt.message,
  };
}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  return method === "card" || method === "upi" || method === "cod";
}

function generateOrderId() {
  // Generate random order ID
  return "ORD" + Date.now();
}