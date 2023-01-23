const { body } = require("express-validator");

const registerSchema = [
  body("firstName").exists().withMessage('First Name is required'),
  body("lastName").exists().withMessage('Last Name is required'),
  body("userName").exists().withMessage('User Name is required'),
  body("password").isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),
  body("email").isEmail().withMessage('Email must contain a valid email address'),
  body("timeZone").exists().withMessage('TimeZone is required'),
];

module.exports = {registerSchema};
