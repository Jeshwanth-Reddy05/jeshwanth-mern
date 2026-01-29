const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3,name: "Headphones",price: 2000,stock: 25,category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];

export function getProductById(id) {
  // Find and return product by ID
  let result = products.find((product) => product.id === id);
  return result;
}

export function getAllProducts() {
  // Return all products
  return products;
}

export function getProductsByCategory(category) {
  // Filter products by category
  let result = products.filter((product) => product.category === category);
  return result;
}

export function searchProducts(query) {
  // Search products by name (case-insensitive)
  let result = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
  return result;
}

export function checkStock(productId, quantity) {
  // Check if product has enough stock
  let res = products.find((product) => product.id === productId);
  // Return true/false
  // console.log(res.stock >= quantity ? true : false);
  if (!res) return false;
  return res.stock >= quantity ? true : false;
}

export function reduceStock(productId, quantity) {
  // Reduce product stock after purchase
  let res = products.find((product) => product.id === productId);
  if (res) {
    res.stock -= quantity;
  }
}