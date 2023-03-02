const Joi = require('joi');
const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%^&+=;)(])(?=\S+$).{5,20}$/;

const registerStudent = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required().pattern(new RegExp(pattern)).messages({
    "string.min": `Password should have a minimum length of 5 characters`,
    "string.base": `Password should contain at least an uppercase, lowercase, and a symbol character`,
    "string.pattern.base": "Password should contain at least an uppercase, lowercase, number and a symbol character",
    "string.empty": `Password cannot be empty`,
    "string.required": `Password is a required`
  }),
  department: Joi.string(),
});

const createCourse = Joi.object({
  name: Joi.string().required(),
  tutor_name: Joi.string().required(),
  description: Joi.string().required(),
  unit: Joi.number(),
});

const editCourse = Joi.object({
  name: Joi.string(),
  tutor_name: Joi.string(),
  description: Joi.string()
});

module.exports = {registerStudent, createCourse, editCourse};
