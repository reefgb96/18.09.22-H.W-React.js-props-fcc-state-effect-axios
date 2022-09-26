import Joi from "joi-browser";

const registerSchema = {
  nameInput: Joi.string().min(1).max(1024).required().label("Name"),
  emailInput: Joi.string().email().min(6).max(1024).required().label("Email"),
  passwordInput: Joi.string().min(6).max(1024).required().label("Password"),
  bizInput: Joi.boolean(),
};
export default registerSchema;
