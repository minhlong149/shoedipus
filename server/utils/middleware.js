import logger from "./logger.js";

export function requestLogger(request, _, next) {
  logger.info(`${request.method} ${request.path}`);
  next();
}

export function unknownEndpoint(_, response) {
  response.status(404).send({ error: "Unknown endpoint" });
}

export function errorHandler(error, request, response, next) {
  logger.error(error.name, error.message);
  response.status(500).json({ error: "Something went wrong" });
  next(error);
}

export default { requestLogger, unknownEndpoint, errorHandler };
