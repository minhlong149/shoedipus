import express from "express";

import productRouter from "./product/router.js";

import middleware from "./utils/middleware.js";

const app = express();

app.use(middleware.requestLogger);

app.use(express.static("dist"));

app.use("/api/v1/products", productRouter);

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

export default app;
