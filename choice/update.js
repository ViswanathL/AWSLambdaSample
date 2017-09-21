'use strict';

const uuid = require('uuid');
const _ = require('lodash');
const response = require('../util/response');
const repository = require('../repository/repository');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  if(!event.body) {
    return callback(null, response.failureResponse({}));
  }
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      choice_id: event.pathParameters.id,
    },
    ExpressionAttributeValues: {
      ':type': data.type,
      ':updatedBy': data.username,
      ':updatedAt': timestamp
    },
    UpdateExpression: 'SET type = :type, updatedBy = :updatedBy, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  repository.update(params).then(function(updatedData){
    return callback(null, response.successResponse(data));
  }).catch(function(err) {
    return callback(null, response.errorResponse(err));
  });
};