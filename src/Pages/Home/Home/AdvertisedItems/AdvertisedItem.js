import React from 'react';

const AdvertisedItem = () => {

    return (
        <div className="grid mt-16 mb-16 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/fp_topbannerimage_1105.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Dell</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">See all</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://dlcdnimgs.asus.com/websites/global/products/xExBKNBOtGWUPlvR/top_banner.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Asus</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">See all</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://www.refurbishelectronics.com/wp-content/uploads/2019/03/laptop-banner.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Hp</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">See all</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;