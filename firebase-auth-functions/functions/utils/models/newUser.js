const Joi = require('@hapi/joi');

const validateNewuser = (newUser) => {
  const schema = {
    email: Joi
      .string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi
      .min(5)
      .max(255)
      .required(),
    firstName: Joi
      .min(5)
      .max(255),
    lastName: Joi
      .min(5)
      .max(255),
  };

  return Joi.validate(newUser, schema);
};

module.exports = validateNewuser;
