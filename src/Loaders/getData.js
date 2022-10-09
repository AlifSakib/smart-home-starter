import { getStoredCart } from "../utils/fakeDB";

export const productsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedData = getStoredCart();
  const initialCart = [];

  for (const id in storedData) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storedData[id];
      addedProduct.quantity = quantity;
    }
    initialCart.push(addedProduct);
  }

  return { products, initialCart };
};
