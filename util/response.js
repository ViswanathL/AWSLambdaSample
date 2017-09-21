exports.failureResponse = function(data) {
	const response = {
      	statusCode: 400,
      	body: JSON.stringify(data?data:{}),
    };
    return response;
}

exports.successResponse = function(data) {
	const response = {
      	statusCode: 200,
      	body: JSON.stringify(data),
    };
    return response;
}

exports.errorResponse = function(data) {
  const response = {
        statusCode: 422,
        body: JSON.stringify(data),
    };
    return response;
}