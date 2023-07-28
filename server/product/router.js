import express from "express";

import productController from "./controller.js";

const productRouter = express.Router();

productRouter.get("/", productController.getAllProducts);

export default productRouter;
