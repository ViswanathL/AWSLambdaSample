'use strict';

const uuid = require('uuid');
const _ = require('lodash');
const response = require('../util/response');
const repository = require('../repository/repository');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  if(!event.body) {
    return callback(null, response.failureResponse({}));
  }
  const data = JSON.parse(event.body);

  var params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      choice_id: uuid.v1(),
      choice_type: data.type,
      createdAt: timestamp,
      createdBy: 'USER'
    }
  };

  repository.create(params).then(function(dbData){
    return callback(null, response.successResponse(dbData));
  }).catch(function(err) {
    return callback(null, response.errorResponse(err));
  });
};