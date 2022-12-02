import React from 'react';

const AddAProudct = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Add <span className='text-primary'>A Product</span></span>
            </h1>
            <div className='card lg:w-10/12 mx-auto shadow-lg bg-white'>
                <div className="card-body">
                    <form>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Product name:</span></label>
                            <input type="text"
                                // {...register("name", {
                                //     required: "Product Name is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.name && <p className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Product Image URL:</span></label>
                            <input type="text"
                                // {...register("img", {
                                //     required: "Product Image URL is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.img && <p className='text-red-600'>{errors.img?.message}</p>} */}
                        </div>

                        <div className="form-control w-full grid lg:grid-cols-5 grid-cols-2 gap-4 my-4">
                            <label className="label"> <span className="label-text">Category:</span></label>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Honda</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-blue-500"
                                    // checked={category === 'Honda'}
                                    // onChange={() => setCategory('Honda')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Suzuki</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-blue-500"
                                    // checked={category === 'Suzuki'}
                                    // onChange={() => setCategory('Suzuki')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Yamaha</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-blue-500"
                                    // checked={category === 'Yamaha'}
                                    // onChange={() => setCategory('Yamaha')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Bajaj</span>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio checked:bg-blue-500"
                                    // checked={category === 'Bajaj'}
                                    // onChange={() => setCategory('Bajaj')}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Resale Price:</span></label>
                            <input type="text"
                                // {...register("resalePrice", {
                                //     required: "Resale Price is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>} */}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Original Price:</span></label>
                            <input type="text"
                                // {...register("originalPrice", {
                                //     required: "Original Price is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>} */}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Years of used:</span></label>
                            <input type="text"
                                // {...register("UsedYears", {
                                //     required: "Years of used is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.UsedYears && <p className='text-red-600'>{errors.UsedYears?.message}</p>} */}
                        </div>

                        <div className="form-control w-full grid  lg:grid-cols-5 grid-cols-2 gap-4 my-4">
                            <label className="label"> <span className="label-text">Condition:</span></label>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Excellent</span>
                                    <input
                                        type="radio"
                                        name="condition"
                                        className="radio checked:bg-blue-500"
                                    // checked={condition === 'Excellent'}
                                    // onChange={() => setCondition('Excellent')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Good</span>
                                    <input
                                        type="radio"
                                        name="condition"
                                        className="radio checked:bg-blue-500"
                                    // checked={condition === 'Good'}
                                    // onChange={() => setCondition('Good')}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-evenly">
                                    <span className="label-text">Fair</span>
                                    <input
                                        type="radio"
                                        name="condition"
                                        className="radio checked:bg-blue-500"
                                    // checked={condition === 'Fair'}
                                    // onChange={() => setCondition('Fair')}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Description:</span></label>
                            <input type="text"
                                // {...register("description", {
                                //     required: "Description is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.description && <p className='text-red-600'>{errors.description?.message}</p>} */}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Your Phone:</span></label>
                            <input type="text"
                                // {...register("sellerPhone", {
                                //     required: "Your Phone is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.sellerPhone && <p className='text-red-600'>{errors.sellerPhone?.message}</p>} */}
                        </div>

                        <div className="form-control">
                            <label className="label"> <span className="label-text">Your Location:</span></label>
                            <input type="text"
                                // {...register("location", {
                                //     required: "Your Location is required"
                                // })}
                                className="input input-bordered" />
                            {/* {errors.location && <p className='text-red-600'>{errors.location?.message}</p>} */}
                        </div>

                        <input className='btn w-full my-5' value="Add Product" type="submit" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddAProudct;