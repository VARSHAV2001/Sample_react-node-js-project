import React, { useState } from 'react';
import Axios from '../service/axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonNavBar from '../components/commonNavbar';

const Registration = () => {
    const [error, setError] = useState('');

    const registration = async (data) => {
        try {
            const result = await Axios.post('/register', {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            });
            console.log(result)
        } catch (err) {
            const error = err.response.data.errors;
            setError(error.Error);
        }
    };

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .required('The name field cannot be empty'),
        lastName: yup
            .string()
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .required('The name field cannot be empty'),
        email: yup
            .string()
            .required()
            .matches(
                /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                'Email must be valid'
            ),
        password: yup
            .string()
            .required('Password cannot be empty*')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                'Minimum eight characters, at least one letter and one number, no special characters'
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], "Password doesn't match")
            .required('Confirm password cannot be empty*')
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <div>
            <CommonNavBar/>
        <div className='main'>
        <div className="register-head">
                <h1 className="main-heading">Registration</h1>
                {error ? <span className='text-danger ms-auto pe-4'>{error}</span> : null}
            </div>
            <form onSubmit={handleSubmit(registration)}>
                <div className='register-card'>
                    <div>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='form-control'
                            {...register('firstName')}
                        />
                        {errors.firstName ? (
                            <span className='text-danger ms-auto pe-4'>{errors.firstName.message}</span>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='form-control'
                            {...register('lastName')}
                        />
                        {errors.lastName ? (
                            <span className='text-danger ms-auto pe-4'>{errors.lastName.message}</span>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='Email Id'
                            className='form-control'
                            {...register('email')}
                        />
                        {errors.email ? (
                            <span className='text-danger ms-auto pe-4'>{errors.email.message}</span>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            className='form-control'
                            {...register('password')}
                        />
                        {errors.password ? (
                            <span className='text-danger ms-auto pe-4'>{errors.password.message}</span>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='form-control'
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword ? (
                            <span className='text-danger ms-auto pe-4'>{errors.confirmPassword.message}</span>
                        ) : null}
                    </div>
                    <div className='button'>
                        <input type='submit' name='Submit'/>
                </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Registration;
