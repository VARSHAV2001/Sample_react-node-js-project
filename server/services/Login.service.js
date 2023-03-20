const bcrypt = require('bcrypt');
const joi = require('joi');
const ServiceResponse = require('../utilities/service.response');
const User = require('../models/user')
const { createToken } = require('../utilities/jwtHelper');

function convertToJson(arg) {
    return JSON.parse(JSON.stringify(arg));
}

const login = async (data) => {
    const response = new ServiceResponse();
    const loginValidationSchema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().required()
    });

    const { error } = loginValidationSchema.validate(data, {
        abortEarly: false
    })

    if(error) {
        response.addError('Error', error);
        return response;
    }

    try{
        const user = convertToJson(await User.findOne({
            where: { email: data.email }
        })); 
        if (user) {
            if (data.password === user.password){
                const token = createToken({ id: user.id, email: user.email, password: user.password});
                response.result = { status: 'Login Successfully Completed', token };
                return response;
            }
            response.addError('Error', 'Invalid email or password');
            return response;
        }
        response.addError('Error', 'User not found');
        return response;

    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

module.exports = {login}
