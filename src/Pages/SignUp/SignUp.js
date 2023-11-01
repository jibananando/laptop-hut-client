import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SocialSignUp from '../SocialSignUp/SocialSignUp';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, loading } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();


    const [role, setRole] = useState('buyer');

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        const loginData = {
                            userName: user?.displayName,
                            email: user?.email,
                            role: role,
                            isSellerVerify: false,
                        };

                        console.log(loginData);

                        if (user?.uid) {
                            fetch(`https://laptop-hut-server-tawny.vercel.app/user/${user?.email}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(loginData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    localStorage.setItem('token', data.token)
                                    console.log(data);
                                })
                            toast.message('User Created Successfully.');
                        }
                    })
                    .catch(err => console.log(err));
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setSignUPError(error.message)
            });
    }

    return (
        <div className='flex justify-center items-center mt-4 mb-16'>
            <div className='w-96 p-7'>
                <h1 className="text-4xl font-bold"><span className='text-orange-600'>Sign Up</span> Now</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full grid grid-cols-3 gap-4 mt-4">
                        <label className="label"> <span className="label-text">Role:</span></label>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-evenly">
                                <span className="label-text">Buyer</span>
                                <input
                                    type="radio"
                                    name="role"
                                    className="radio checked:bg-orange-600"
                                    checked={role === 'buyer'}
                                    onChange={() => setRole('buyer')}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-evenly">
                                <span className="label-text">Seller</span>
                                <input
                                    type="radio"
                                    name="role"
                                    className="radio  checked:bg-orange-600"
                                    checked={role === 'seller'}
                                    onChange={() => setRole('seller')}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" placeholder='Input your name' {...register("name", {
                            required: "Input your Name"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Input your email' {...register("email", {
                            required: "please input your email address"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Input password' {...register("password", {
                            required: "Please input your password",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-orange-600 w-full mt-5' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='mt-2'>Already have an account <Link className='text-red-600' to="/login">Please Login</Link></p>
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

export default SignUp;