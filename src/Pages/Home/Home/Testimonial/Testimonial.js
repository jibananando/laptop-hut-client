import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            testimonial: "This resale platform is a game-changer. I was able to find rare collectibles at a fraction of the original price.",
            image: 'https://media.istockphoto.com/id/940470596/photo/cheerful-handsome-young-man-i-glasses-is-showing-direction-and-pointing-with-his-finger.jpg?s=612x612&w=0&k=20&c=uTaxEeQTx63ghg5YFLtNqTj98--txzOtI67J9LMX72E=',
            rating: 5,
        },
        {
            id: 2,
            name: 'Jane Smith',
            testimonial: 'This resale platform is a game-changer. I was able to find rare collectibles at a fraction of the original price.',
            image: 'https://img.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_171337-634.jpg',
            rating: 4,
        },
        {
            id: 3,
            name: 'Mike Johnson',
            testimonial: 'This resale platform is a game-changer. I was able to find rare collectibles at a fraction of the original price.',
            image: 'https://img.freepik.com/premium-photo/portrait-smiling-young-businessman_171337-33674.jpg?w=360',
            rating: 4.5,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonialsData[activeIndex];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold my-10"><span className='text-orange-600'>Customer's </span>Review</h1>
            <div className="bg-base-200 rounded-lg shadow-lg p-4">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="rounded-full w-24 h-24 object-cover mb-4 mx-auto" />
                <div className="flex justify-between">
                    <button className="text-3xl hover:bg-gray-300 px-3 py-2 rounded" onClick={handlePrev}>
                        <FcPrevious></FcPrevious>
                    </button>
                    <button className="text-3xl hover:bg-gray-300 px-3 py-2 rounded" onClick={handleNext}>
                        <FcNext></FcNext>
                    </button>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{currentTestimonial.name}</h3>
                <p className="text-gray-600 mb-4">{currentTestimonial.testimonial}</p>
                <div className="flex items-center justify-center mb-4">
                    {Array.from({ length: 5 }, (_, index) => (
                        <FaStar key={index} className={`text-yellow-400 ${index < currentTestimonial.rating ? 'fill-current' : ''}`} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
