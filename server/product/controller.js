import productService from "./service.js";

export async function getAllProducts(_, response, next) {
  try {
    const shoes = await productService.getAllShoes();
    response.json({ shoes });
  } catch (error) {
    next(error);
  }
}

export default { getAllProducts };
