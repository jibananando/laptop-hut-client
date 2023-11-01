import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: 'How do I create an account?',
            answer: 'To create an account, click on the "Sign Up" button and fill in the required information.',
        },
        {
            question: 'Can I sell both new and used items?',
            answer: 'Yes, you can sell both new and used items on our platform. Just make sure to provide accurate information about the condition of the item in the listing.',
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can select your preferred payment method during the checkout process.',
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can reach our customer support team by emailing support@example.com or calling our helpline at +1234567890.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-10"><span className='text-orange-600'>Frequently </span>Asked Questions</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 py-8 gap-8'>
                <div>
                    <img className='rounded' src="https://miro.medium.com/v2/resize:fit:915/0*FdLLSjLPudGd-Pt5" alt="" />
                </div>
                <div>
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="flex items-center justify-between w-full bg-white hover:bg-gray-100 py-2 px-4 rounded-md shadow"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-semibold">{faq.question}</span>
                                {activeIndex === index ? <BsDash /> : <BsPlus />}
                            </button>
                            {activeIndex === index && (
                                <div className="bg-gray-100 p-4 rounded-md mt-2">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
