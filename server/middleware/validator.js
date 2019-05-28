import Joi from '@hapi/joi';

export default {
  schemaCreate: (req, res, next) => {
    const userSchema = {
      title: Joi.string().required(),
      content: Joi.string().required(),
    };
    const validate = Joi.validate(req.body, userSchema);
    if (!validate.error) {
      next();
    } else {
      return res.status(422).json({
        status: 422,
        error: validate.error,
      });
    }
  },
};
