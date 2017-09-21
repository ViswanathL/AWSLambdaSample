'use strict';

const uuid = require('uuid');
const _ = require('lodash');
const response = require('../util/response');
const repository = require('../repository/repository');

module.exports.list = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE
  };

  repository.scan(params).then(function(poll) {
    return callback(null, response.successResponse(poll));
  }).catch(function(err) {
    return callback(null, response.errorResponse(err));
  });
};