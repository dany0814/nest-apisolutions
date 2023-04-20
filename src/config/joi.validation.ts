import * as Joi from 'joi';
export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.string(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(6),
  JWT_ACCESS_SECRET: Joi.string(),
  JWT_REFRESH_SECRET: Joi.string(),
  DB_HOST: Joi.string().required(),
});
