import React from 'react';

const BenefitsSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold my-10"><span className='text-orange-600'>Why Choose </span>Our Platform?</h1>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                                Cost Savings
                            </h3>
                            <p className="text-base leading-6 text-gray-700">
                                By buying and selling pre-owned items, you can save money compared to purchasing brand new products.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                                Eco-Friendliness
                            </h3>
                            <p className="text-base leading-6 text-gray-700">
                                Reduce waste and contribute to a more sustainable future by giving items a second life through our platform.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                                Convenience
                            </h3>
                            <p className="text-base leading-6 text-gray-700">
                                Easily buy or sell items from the comfort of your own home, without the hassle of visiting physical stores.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                                Support Sustainable Economy
                            </h3>
                            <p className="text-base leading-6 text-gray-700">
                                Encourage a circular economy and support local communities by participating in the resale of goods.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
