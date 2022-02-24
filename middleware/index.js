const errorHandler = require('./errorHandler');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');

module.exports = {
  errorHandler,
  validateEmail,
  validatePassword,
  validateToken,
};