//var router = express.Router();
const Joi = require('@hapi/joi');


exports.registerValidation = (data)=>{

    const schema = Joi.object({name : Joi.string()
    .min(4)
    .required(),
    email : Joi.string()
    .min(4)
    .required()
    .email(),
    password : Joi.string()
    .min(4)
    .required(),
    });
    return schema.validate(data);
};

exports.loginValidation = (data)=>{

    const schema = Joi.object({
    email : Joi.string()
    .min(4)
    .required()
    .email(),
    password : Joi.string()
    .min(4)
    .required(),
    });
    return schema.validate(data);
};


//module.exports = router;
//module.exports.registerValidation = registerValidation;
//module.exports.loginValidation = loginValidation;