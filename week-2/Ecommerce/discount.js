const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
  let coupon = coupons[couponCode];

  if (!coupon) {
    return { valid: false, message: "Invalid coupon code" };
  }

  if (cartTotal < coupon.minAmount) {
    return {
      valid: false,
      message: `Minimum purchase of ₹${coupon.minAmount} required`,
    };
  }

  if (coupon.category) {
    let hasCategoryItem = cartItems.find(
      (item) => item.category === coupon.category,
    );

    if (!hasCategoryItem) {
      return {
        valid: false,
        message: `Coupon applicable only for ${coupon.category}`,
      };
    }
  }

  return { valid: true, message: "Coupon applied successfully" };
}

export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  // Return discount amount
  let coupon = coupons[couponCode];

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  }

  if (coupon.type === "flat") {
    return coupon.value;
  }
  return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
  let validate = validateCoupon(couponCode, cartTotal, cartItems);
  // 2. If valid, calculate discount
  let discountAmnt = calculateDiscount(couponCode, cartTotal);
  // 3. Return final amount and discount details
  // Return {
  //   originalTotal: ...,
  //   discount: ...,
  //   finalTotal: ...,
  //   message: '...'
  // }
  if (!validate.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validate.message,
    };
  }
  return {
    originalTotal: cartTotal,
    discount: discountAmnt,
    finalTotal: cartTotal - discountAmnt,
    message: validate.message,
  };
}