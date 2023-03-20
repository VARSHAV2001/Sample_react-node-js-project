import React, { useState } from 'react';
import Axios from '../service/axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginCard from '../components/loginCard';
import { useForm } from 'react-hook-form';
import CommonNavBar from '../components/commonNavbar';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = async (data) => {
        try {
            const result = await Axios.post('/login', {
                email: data.username,
                password: data.password
            });
            localStorage.setItem('token', result.data.result.token);
            const decoded = jwt_decode(result.data.result.token);

            if(decoded){
                navigate('/homepage')
            }
            
        } catch (err) {
            const error = err.response.data.errors;
            setError(error.Error);
        }
    };
    const schema = yup.object().shape({
        username: yup
            .string()
            .email('invalid username or password')
            .required('Email id is required')
            .matches(
                /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Invalid username/password'
            ),
        password: yup.string().required('Password is required')
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

            <LoginCard>
            <h1 className="main-heading">Login</h1>
            {error ? (
                        <span className='d-block text-danger text-center'>
                            {error}
                        </span>
                    ) : null}
            <form onSubmit={handleSubmit(login)}>
                <div className='login-card'>
                    <div className='login-user'>
                        <input
                            type='text'
                            placeholder='User Name'
                            {...register('username')}
                        />
                        {errors.username ? (
                            <p className='text-danger ms-auto pe-4'>
                                {errors.username.message}{' '}
                            </p>
                        ) : null}
                    </div>
                    <div className='login-pass'>
                        <input
                            type='password'
                            placeholder='Password'
                            {...register('password')}
                        />
                        {errors.password ? (
                            <p className='text-danger ms-auto pe-2'>
                                {errors.password.message}
                            </p>
                        ) : null}
                    </div>
                    <input
                        type='submit'
                        value='Login'
                        className='login-button'
                    />
                </div>
            </form>
            </LoginCard>
        </div>
        </div>
    );
};

export default Login;
