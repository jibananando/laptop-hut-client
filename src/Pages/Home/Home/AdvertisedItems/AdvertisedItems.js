import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {

    return (
        <div className='container mx-auto mt-16 mb-16'>
            <h1 className="text-3xl font-bold"><span className='text-orange-600'>Available</span> Products</h1>
            <AdvertisedItem></AdvertisedItem>
        </div>
    );
};

export default AdvertisedItems;