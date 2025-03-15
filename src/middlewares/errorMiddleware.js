import { ErrorConstants } from "../common/constants.js";

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  res.status(err.statusCode || 500).json({
    message: err.message || ErrorConstants.INTERNAL_SERVER_ERROR,
  });
};

export default errorHandler;
