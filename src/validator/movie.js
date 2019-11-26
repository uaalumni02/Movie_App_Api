const Joi = require('@hapi/joi');


const schema = Joi.object({
    name: Joi.string().regex(/^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/)
        .min(3)
        .max(30)
        .required(),
    rating: Joi.string()
        .min(1)
        .max(7),
    release: Joi.string().required()
         .min(4)
         .max(4),
    directors: Joi.string().regex(/^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/)
        .min(3)
        .max(30),
})

export default schema
