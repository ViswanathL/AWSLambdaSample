'use strict';

const uuid = require('uuid');
const _ = require('lodash');
const response = require('../util/response');
const repository = require('../repository/repository');

module.exports.get = (event, context, callback) => {
  if (!event.pathParameters.id) {
    return callback(null, response.failureResponse({}));
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      choice_id: event.pathParameters.choice_id
    }
  };

  repository.get(params).then(function(choice) {
    return callback(null, response.successResponse(choice));
  }).catch(function(err) {
    return callback(null, response.errorResponse(err));
  });
};