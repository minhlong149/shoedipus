import Shoes from "./model.js";

export async function getAllShoes() {
  try {
    const shoes = await Shoes.find();
    return shoes;
  } catch (error) {
    throw error;
  }
}

export default { getAllShoes };
