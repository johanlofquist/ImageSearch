const Joi = require("joi");

const requestSchema = Joi.object({
  userId: Joi.string().required(),
  favorites: Joi.array()
    .items({
      imageUrl: Joi.string().required(),
      title: Joi.string().required(),
    })
    .required(),
});

module.exports = { requestSchema };
