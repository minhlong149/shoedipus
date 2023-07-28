import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://root:password@localhost:27017/productDb";

export default { PORT, MONGODB_URI };
