import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useUserRole from '../../Hook/useUserRole';



const AddAProudct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [role] = useUserRole(user);
    const navigate = useNavigate();

    const [category, setCategory] = useState('Dell');
    const [condition, setCondition] = useState('Excellent');

    const handleSubmitForm = (data) => {
        if (user?.email) {
            const productData = {
                name: data.name,
                img: data.img,
                category: category,
                location: data.location,
                resalePrice: data.resalePrice,
                originalPrice: data.originalPrice,

                UsedMonth: data.UsedMonth,
                postedTime: new Date().toLocaleDateString(),
                condition: condition,
                description: data.description,
                status: 'Available',
                sellerPhone: data.sellerPhone,
                sellerName: user?.displayName,
                sellerEmail: user?.email,
                isSellerVerify: role?.isSellerVerify,
            }

            console.log(productData);

            fetch('https://laptop-hut-server-tawny.vercel.app/addProduct', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(productData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data?.message) {
                        toast(data.message);
                    } else {
                        reset();
                        setCategory('Dell');
                        setCondition('Excellent');
                        navigate('/dashboard/myproducts')
                        toast('Added product successfully');
                    }
                });
        }

    };

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-4xl font-bold mt-8"><span className='text-orange-600'>Add</span> Product</h1>
            <div className='card lg:w-10/12 mx-auto shadow-lg bg-white'>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleSubmitForm)}>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Product name:</span></label>
                            <input type="text"
                                {...register("name", {
                                    required: "Product Name is required"
                                })}
                                className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Product Image URL:</span></label>
                            <input type="text"
                                {...register("img", {
                                    required: "Product Image URL is required"
                                })}
                                className="input input-bordered" />
                            {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                        </div>

                        <div className="form-control w-full grid lg:grid-cols-5 grid-cols-2 gap-4 my-4">
                            <label className="label"> <span className="label-text">Category:</span></label>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Dell</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-orange-600"
                                        checked={category === 'Dell'}
                                        onChange={() => setCategory('Dell')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Asus</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-orange-600"
                                        checked={category === 'Asus'}
                                        onChange={() => setCategory('Asus')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">HP</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-orange-600"
                                        checked={category === 'HP'}
                                        onChange={() => setCategory('HP')}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Resale Price:</span></label>
                            <input type="text"
                                {...register("resalePrice", {
                                    required: "Resale Price is required"
                                })}
                                className="input input-bordered" />
                            {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Original Price:</span></label>
                            <input type="text"
                                {...register("originalPrice", {
                                    required: "Original Price is required"
                                })}
                                className="input input-bordered" />
                            {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Month of used:</span></label>
                            <input type="text"
                                {...register("UsedMonth", {
                                    required: "Years of used is required"
                                })}
                                className="input input-bordered" />
                            {errors.UsedMonth && <p className='text-red-600'>{errors.UsedMonth?.message}</p>}
                        </div>

                        <div className="form-control w-full grid  lg:grid-cols-5 grid-cols-2 gap-4 my-4">
                            <label className="label"> <span className="label-text">Condition:</span></label>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Excellent</span>
                                    <input
                                        type="radio"
                                        name="condition"
                                        className="radio checked:bg-orange-600"
                                        checked={condition === 'Excellent'}
                                        onChange={() => setCondition('Excellent')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Good</span>
                                    <input
                                        type="radio"
                                        name="condition"
                                        className="radio checked:bg-orange-600"
                                        checked={condition === 'Good'}
                                        onChange={() => setCondition('Good')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Fair</span>
                                    <input
                                        type="radio"
                                        name="condition"
                                        className="radio checked:bg-orange-600"
                                        checked={condition === 'Fair'}
                                        onChange={() => setCondition('Fair')}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Description:</span></label>
                            <input type="text"
                                {...register("description", {
                                    required: "Description is required"
                                })}
                                className="input input-bordered" />
                            {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Phone Number:</span></label>
                            <input type="text"
                                {...register("sellerPhone", {
                                    required: "Your Phone is required"
                                })}
                                className="input input-bordered" />
                            {errors.sellerPhone && <p className='text-red-600'>{errors.sellerPhone?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Your Location:</span></label>
                            <input type="text"
                                {...register("location", {
                                    required: "Your Location is required"
                                })}
                                className="input input-bordered" />
                            {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                        </div>

                        <input className='btn w-full my-5 bg-orange-600' value="Add Product" type="submit" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddAProudct;