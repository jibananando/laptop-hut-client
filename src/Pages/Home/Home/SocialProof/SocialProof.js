import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialProof = () => {
    const socialMediaFollowers = {
        facebook: 50000, // Replace with your actual follower count on Facebook
        instagram: 80000, // Replace with your actual follower count on Instagram
        twitter: 100000 // Replace with your actual follower count on Twitter
    };
    const reviews = [
        {
            id: 1,
            name: 'John D.',
            review: "This platform is amazing! I've found so many great deals and the customer service is top-notch."
        },
        {
            id: 2,
            name: 'Sarah L.',
            review: "Highly recommend this platform. It's reliable, easy to use, and I've had a positive experience every time."
        }
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 mb-8 text-center">
                    Join Thousands of Satisfied Customers
                </h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                                Social Media Followers
                            </h3>
                            <div className="flex items-center mb-2">
                                <FaFacebook size={24} className="text-blue-500 mr-2" />
                                <p className="text-base leading-6 text-gray-700">
                                    Facebook: {socialMediaFollowers.facebook} followers
                                </p>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaInstagram size={24} className="text-pink-500 mr-2" />
                                <p className="text-base leading-6 text-gray-700">
                                    Instagram: {socialMediaFollowers.instagram} followers
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaTwitter size={24} className="text-blue-400 mr-2" />
                                <p className="text-base leading-6 text-gray-700">
                                    Twitter: {socialMediaFollowers.twitter} followers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                                Customer Reviews
                            </h3>
                            {reviews.map(review => (
                                <div key={review.id} className="mb-4">
                                    <p className="text-base leading-6 text-gray-700">
                                        "{review.review}" - {review.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
