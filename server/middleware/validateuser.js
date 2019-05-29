import joi from 'joi';

export default joi.object().keys({
  names: joi
    .string()
    .required()
    .label('Please Provide a valid names'),
  email: joi
    .string()
    .required()
    .label('Please provide a valid email'),
  password: joi
    .string()
    .required()
    .label('Please provide a valid password'),
});
