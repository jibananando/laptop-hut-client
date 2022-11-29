import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItem = ({ item }) => {

    const { ItemName, img, } = item;

    return (
        <div >
            <div className="card h-48 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ItemName}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${ItemName}`}><button className="btn btn-outline text-white">See all</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;