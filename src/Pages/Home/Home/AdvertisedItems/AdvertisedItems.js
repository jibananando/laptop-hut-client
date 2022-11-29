import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {

    const category = [
        {
            _id: 1,
            ItemName: 'Dell',
            img: "https://i.dell.com/sites/csimages/Banner_Imagery/all/fp_topbannerimage_1105.png",
        },
        {
            _id: 2,
            ItemName: 'Asus',
            img: "https://dlcdnimgs.asus.com/websites/global/products/xExBKNBOtGWUPlvR/top_banner.jpg",
        },
        {
            _id: 3,
            ItemName: 'HP',
            img: "https://www.refurbishelectronics.com/wp-content/uploads/2019/03/laptop-banner.jpg",
        }

    ]

    return (
        <div className='container mx-auto mt-16 mb-16'>
            <h1 className="text-3xl font-bold"><span className='text-orange-600'>Available</span> Products</h1>
            <div className="grid mt-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    category.map(item => <AdvertisedItem
                        key={item.map}
                        item={item}
                    ></AdvertisedItem>)
                }
            </div>

        </div>
    );
};

export default AdvertisedItems;