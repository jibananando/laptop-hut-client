import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.acer.com/is/image/acer/conceptd-5-laptop-banner-l:Secondary-Hero-S" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold"><span className='text-orange-600'>Get 40% Off</span> for All Laptop</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline text-orange-600">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;