import React from 'react';

const SellerSuccessStories = () => {
    const successStoriesData = [
        {
            id: 1,
            name: 'John Doe',
            testimonial: 'I was able to sell my products quickly and easily on this platform. The support from the team was exceptional, and I received a great price for my items.',
            image: 'john-doe.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            testimonial: 'I have been selling on this platform for over a year now, and it has been a fantastic experience. The user-friendly interface and the large customer base have helped me grow my business significantly.',
            image: 'jane-smith.jpg',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            testimonial: 'I was skeptical at first, but this platform exceeded my expectations. I sold products that had been sitting in my inventory for months, and the process was smooth from listing to payment.',
            image: 'mike-johnson.jpg',
        },
    ];

    return (
        <div className="max-w-3xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Seller Success Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {successStoriesData.map((story) => (
                    <div key={story.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={story.image} alt={story.name} className="rounded-full w-24 h-24 object-cover mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold mb-2 text-center">{story.name}</h3>
                        <p className="text-gray-600 mb-4">{story.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellerSuccessStories;
