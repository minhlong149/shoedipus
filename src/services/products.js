import products from "../data/shoes.json";

const BASE_URL = "./api/v1/products";

export async function getAllProducts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data.shoes;
  } catch (error) {
    console.log(
      "An error occurred while fetching the products. Using mock data instead."
    );
    return products.shoes;
  }
}
