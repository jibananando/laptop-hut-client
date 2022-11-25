import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='mt-8 mb-16 flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-4xl font-bold"><span className='text-orange-600'>Login</span> Now</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "please input your email address"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 pt-2'>{errors.email?.message}</p>}
                        <p className='text-orange-600'></p>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Please input your password",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <p className='text-orange-600'></p>
                    </div>
                    <input className='btn bg-orange-600 w-full' value="Login" type="submit" />
                    <div>
                        <p className='text-orange-600'></p>
                    </div>
                </form>
                <p className='mt-2'>Don't have an account? <Link className='text-red-600' to="/signup">Sign up</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>LOGIN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;