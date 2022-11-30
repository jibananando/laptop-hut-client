import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SocialSignUp from '../SocialSignUp/SocialSignUp';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, loading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                toast('login successfully')
            })

            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className='mt-4 mb-16 flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-4xl font-bold"><span className='text-orange-600'>Login</span> Now</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Your email'
                            {...register("email", {
                                required: "please input your email address"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 pt-2'>{errors.email?.message}</p>}
                        <p className='text-orange-600'></p>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Your password'
                            {...register("password", {
                                required: "Please input your password",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <p className='text-orange-600'></p>
                    </div>
                    <input className='btn bg-orange-600 w-full mt-5' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-2'>Don't have an account? <Link className='text-red-600' to="/signup">Sign up</Link></p>
                <div className="divider">OR</div>
                {
                    loading &&
                    <progress className="progress w-56"></progress>

                }
                <SocialSignUp></SocialSignUp>
            </div>
        </div>
    );
};

export default Login;