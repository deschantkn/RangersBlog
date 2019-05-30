import Joi from '@hapi/joi';
import joi from 'joi';

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
  userCreate: (req, res, next) => {
    const newUserSchema = {
      names: joi
        .string()
        .required()
        .label('Please Provide a valid names'),
      email: joi
        .string()
        .email()
        .required()
        .label('Please provide a valid email'),
      password: joi
        .string()
        .required()
        .label('Please provide a valid password'),
    };
    const validate = Joi.validate(req.body, newUserSchema);
    if (!validate.error) {
      next();
    } else {
      return res.status(422).json({
        status: 422,
        error: validate.error,
      });
    }
  },
  //   other schemas
};
