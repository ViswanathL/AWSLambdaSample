var Promise = require('bluebird');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();
AWS.config.setPromisesDependency(require('bluebird'));

exports.create = (params) => {
	var dynamoPromise = dynamoDb.put(params).promise(); 
	return dynamoPromise.then(function(data) {
	    return params.Item;
  	}).catch(function(err) {
  		return Promise.reject(err);
  	});
}

exports.get = (params) => {
	var dynamoPromise = dynamoDb.get(params).promise(); 
	return dynamoPromise.then(function(data) {
	    return data;
  	}).catch(function(err) {
  		return Promise.reject(err);
  	});
}

exports.scan = (params) => {
	var dynamoPromise = dynamoDb.scan(params).promise(); 
	return dynamoPromise.then(function(data) {
	    return data;
  	}).catch(function(err) {
  		return Promise.reject(err);
  	});
}

exports.update = (params) => {
	var dynamoPromise = dynamoDb.update(params).promise(); 
	return dynamoPromise.then(function(data) {
	    return data.Item;
  	}).catch(function(err) {
  		console.log('Err happened' + err);
  		return Promise.reject(err);
  	});
}

exports.delete = (params) => {
	var dynamoPromise = dynamoDb.delete(params).promise(); 
	return dynamoPromise.then(function() {
	    return {};
  	}).catch(function(err) {
  		console.log('Err happened' + err);
  		return Promise.reject(err);
  	});
}