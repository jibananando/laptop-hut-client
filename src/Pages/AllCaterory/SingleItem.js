import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const SingleItem = ({ laptop }) => {
    const { user } = useContext(AuthContext);

    const { _id, name, img, category, location, resalePrice, originalPrice, UsedMonth, postedTime, sellerName, isSellerVerify, sellerEmail, status, description, condition } = laptop;

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
                <h2 className="card-title font-bold text-orange-600">{name}</h2>
                <div className='grid grid-cols-3 text-left gap-2'>
                    <p><span className='font-semibold'>Seller Name: </span>{sellerName}</p>
                    <p><span className='font-semibold'>Seller Email: </span>{sellerEmail}</p>
                    <p><span className='font-semibold'>Seller Verify: </span>{isSellerVerify ? 'verified' : 'unverified'}</p>
                    <p><span className='font-semibold'>Brand:</span> {category}</p>
                    <p><span className='font-semibold'>Used: </span>{UsedMonth} Month</p>
                    <p><span className='font-semibold'>Location: </span>{location}</p>
                    <p><span className='font-semibold'>Posted Time: </span>{postedTime}</p>
                    <p><span className='font-semibold'>Status: </span>{status}</p>
                    <p><span className='font-semibold'>Condition: </span>{condition}</p>
                    <p><span className='font-semibold'>Original Price: </span>{originalPrice} Tk</p>
                    <p><span className='font-semibold'>Resale Price:</span> {resalePrice} Tk</p>
                </div>
                <p className='text-left my-4 '><span className='font-semibold'>Description: </span>{description}</p>
                <div className="card-actions justify-end">
                    {
                        (isSellerVerify && status !== 'Sold') && <label htmlFor={`bookNow${_id}`} className="btn btn-outline text-orange-600">Book Now</label>
                    }
                </div>
            </div>
            {/* Modal */}
            <input type="checkbox" id={`bookNow${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`bookNow${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-orange-600">{name}</h3>
                    <p><span className=' font-semibold'>Resale Price:</span> {resalePrice}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name='buyerName'
                                value={user?.displayName}
                                className="input input-bordered"
                                disabled
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name='buyerEmail'
                                value={user?.email}
                                className="input input-bordered"
                                disabled
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                name='phone'
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input
                                type="text"
                                name='meetingLocation'
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <button className="btn btn-outline my-4 text-orange-600">
                            <label htmlFor={`bookNow${_id}`} >Submit</label>
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;