const Boom = require("@hapi/boom");

const AppResponse = ({status=200, message= "Request successfull", data = null}, headers={}) => {
    return {
        statusCode: status,
        payload: {
            statusCode: status,
            error: null,
			message,
			data
        },
        headers,
    };
};

module.exports = {
	Boom,
	AppResponse
};
