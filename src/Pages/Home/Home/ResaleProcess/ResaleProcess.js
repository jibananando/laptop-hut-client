import React from 'react';

const ResaleProcess = () => {
    const steps = [
        {
            title: 'Step 1',
            description: 'Create an Account',
            icon: 'user',
        },
        {
            title: 'Step 2',
            description: 'List Your Item',
            icon: 'shopping-bag',
        },
        {
            title: 'Step 3',
            description: 'Receive Offers',
            icon: 'mail',
        },
        {
            title: 'Step 4',
            description: 'Accept an Offer',
            icon: 'check-circle',
        },
        {
            title: 'Step 5',
            description: 'Ship Your Item',
            icon: 'truck',
        },
        {
            title: 'Step 6',
            description: 'Get Paid',
            icon: 'dollar-sign',
        },
    ];

    return (
        <div className="container items-center  mx-auto">
            <h1 className="text-3xl font-bold my-10"><span className='text-orange-600'>How </span>It Works</h1>

            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                    <div
                        className="flex items-start space-x-4"
                        key={index}
                    >
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                                <i className={`fas fa-${step.icon}`}></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-700">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResaleProcess;
