import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const SingleItem = ({ laptop }) => {
    const { user } = useContext(AuthContext);

    const { _id, name, img, category, location, resalePrice, originalPrice, UsedYears, postedTime, sellerName, isSellerVerify, sellerEmail, status, description, condition } = laptop;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const formData = {
            productId: _id,
            productName: name,
            productImg: img,
            price: resalePrice,
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            phone: phone,
            meetingLocation: meetingLocation,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            pay: 'UnPaid',
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data?.message) {
                    toast(data.message);
                } else {
                    toast('booking successfully');
                }
            });
    };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img
                // src={img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJa68wCITmafhsSxRUlXRuhvTmO7FmLj2Veg&usqp=CAU"
                alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='grid grid-cols-3 text-left gap-2'>
                    <p><span className='font-semibold'>Category:</span> {category}</p>
                    <p>resale Price: {resalePrice}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Years of Used: {UsedYears}</p>
                    <p>Location: {location}</p>
                    <p>Posted Time: {postedTime}</p>
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller Verify: {isSellerVerify ? 'verified' : 'unverified'}</p>
                    <p>Seller Email: {sellerEmail}</p>
                    <p>Status: {status}</p>
                    <p>Condition: {condition}</p>
                </div>
                <p className='text-left my-4'>Description: {description}</p>
                <div className="card-actions justify-end">
                    {
                        (isSellerVerify && status !== 'Sold') && <label htmlFor={`bookNow${_id}`} className="btn btn-outline text-orange-600">Book Now</label>
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleItem;