import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-8 mb-16 flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-4xl font-bold"><span className='text-orange-600'>Login</span> Now</h1>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />
                        <p className='text-orange-600'></p>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        <p className='text-orange-600'></p>
                    </div>
                    <input className='btn bg-orange-600 w-full' value="Login" type="submit" />
                    <div>
                        <p className='text-orange-600'></p>
                    </div>
                </form>
                <p className='mt-2'>Don't have an account? <Link className='text-red-600' to="signup">Sign up</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>LOGIN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;