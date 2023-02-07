import * as Joi from 'joi';

export const LoginSchema = Joi.object({
    username: Joi.string().required().min(6),
    password: Joi.string().required().min(6),
});