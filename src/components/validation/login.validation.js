import Joi from "joi-browser";

const loginSchema = {
  email: Joi.string().email().min(6).max(1024).required().label("Email"),
  password: Joi.string().min(6).max(1024).required().label("Password"),
};
export default loginSchema;
