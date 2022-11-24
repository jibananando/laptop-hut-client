import React from 'react';

const Subscribe = () => {
    return (
        <div className="hero pt-32 pb-16 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold"><span className='text-orange-600'>SUBSCRIBE</span> TO OUR LAPTOP HUT</h1>
                    <p className="py-6">Enter your email address to receive regular updates, as well<br /> as news on upcoming events and specific offers.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="email" placeholder="Input your email adress" className="input input-bordered file-input-error" />
                                <button className="btn bg-orange-600">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;