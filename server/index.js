import mongoose from "mongoose";

import app from "./app.js";

import config from "./utils/config.js";
import logger from "./utils/logger.js";

const PORT = config.PORT;
const MONGODB_URI = config.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
    app.listen(PORT, () => {
      logger.info(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Error connecting to MongoDB", error.message);
  });
