const { AppResponse } = require(".");
const Logger = require("./logger");

const catchAsync = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((error) => {
        Logger.error(error);

        res.status(500).json(
            AppResponse({
                status: error.statusCode || 500,
                message:
                    error.message ||
                    "Failed to process request. Please try again later!",
                error: error.error,
            })
        );
    });
};

module.exports = catchAsync;
