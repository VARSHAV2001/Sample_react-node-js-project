const bcrypt = require('bcrypt');
const joi = require('joi')
const User = require('../models/user')
const ServiceResponse = require('../utilities/service.response')

const Registration = async (data) => {
    const response = new ServiceResponse();
    const RegistrationSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    });
    const { error } = RegistrationSchema.validate(data, {
        abortEarly: false
    });

    if (error) {
        response.addError('Error', error);
        return response;
    }

    try {
        const isUserAlreadyExist = await User.findOne({
            where: {email: data.email }
        });

        if (isUserAlreadyExist){
            response.addError('Error', 'User is already exist');
            return response;
        }
        await User.create({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password
        })

        response.result = { status: 'Registration success'};
        return response;
    } catch (err) {
        response.addError('Error', error);
        return response;
    }
}

module.exports = {
    Registration
};
