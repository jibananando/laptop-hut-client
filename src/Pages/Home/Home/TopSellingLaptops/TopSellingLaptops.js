import React, { useState } from 'react';

const TopSellingLaptops = () => {
    const [showMore, setShowMore] = useState(false);

    const laptops = [
        {
            id: 1,
            brand: 'HP',
            name: 'HP 250 G8 Intel Core i5 1135G7 15.6 Inch FHD',
            price: '43000 Tk',
            image: 'https://i.ibb.co/gtSbRDh/hp-14-15-block.jpg' // Replace with the actual image URL or import statement
        },
        {
            id: 2,
            brand: 'Dell',
            name: 'Dell Vostro 14 3400 Intel Core i3',
            price: '32400 Tk',
            image: 'https://i.ibb.co/kGJYwyG/photo-1575320854760-bfffc3550640.jpg' // Replace with the actual image URL or import statement
        },
        {
            id: 3,
            brand: 'Asus',
            name: 'Asus VivoBook 15 X1500EA Intel Core i3',
            price: '37800 Tk',
            image: 'https://i.ibb.co/Wv0gym3/photo-1567521463850-4939134bcd4a.jpg' // Replace with the actual image URL or import statement
        },
        {
            id: 2,
            brand: 'Dell',
            name: 'HP 15s-du3811TU Intel Core i3 1125G4 15.6 Inc',
            price: '32400 Tk',
            image: 'https://i.ibb.co/MGx60Bn/download.jpg' // Replace with the actual image URL or import statement
        }
        // Add more laptops here
    ];

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold my-10"><span className='text-orange-600'>Top </span>Selling</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {laptops.map(laptop => (
                        <div key={laptop.id} className="bg-white rounded-lg shadow-lg p-6">
                            <img
                                src={laptop.image}
                                alt={laptop.name}
                                className="mx-auto rounded mb-4"
                                style={{ maxWidth: '240px', maxHeight: '150px' }}
                            />
                            <h3 className="text-xl leading-6 font-medium text-gray-900 mb-2">
                                {laptop.brand} {laptop.name}
                            </h3>
                            <p className="text-base leading-6 text-gray-700 mb-4">{laptop.price}</p>
                            {/* Add more laptop details if needed */}
                        </div>
                    ))}
                </div>
                {!showMore && (
                    <div className="flex justify-center mt-8">
                        <button
                            className="text-blue-500 hover:text-blue-700 font-medium"
                            onClick={toggleShowMore}
                        >
                            See All
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TopSellingLaptops;
