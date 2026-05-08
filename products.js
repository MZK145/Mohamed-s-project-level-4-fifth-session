// products.js
const products = [
  { id: 1, name: "Gaming Mouse", price: 50, discountPrice: 35 },
  { id: 2, name: "Mechanical Keyboard", price: 100, discountPrice: 75 },
  { id: 3, name: "Ultra-Wide Monitor", price: 300, discountPrice: 220 },
];

// Using a Promise to simulate fetching from a database
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      resolve(product);
    } else {
      reject("Product not found!");
    }
  });
};
