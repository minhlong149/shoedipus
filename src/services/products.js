import products from "../data/shoes.json";

export async function getAllProducts() {
  return products.shoes;
}
