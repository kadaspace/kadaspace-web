const catchAsync = require("../lib/catch-async");

const getAuthUser = catchAsync(async (req, res) => {
	if (!req.user) {
		throw new Error("User not found here");
	}

    res.json({
        user: {
            id: 123,
            name: "John Doe",
            email: "john@sample.com",
        },
    });
});

module.exports = {
    getAuthUser,
};
