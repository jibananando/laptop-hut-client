import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleItem from './SingleItem';

const AllCategory = () => {

    const { name } = useParams()
    const [laptops, setLaptops] = useState([]);


    useEffect(() => {

        fetch(`https://laptop-hut-server-tawny.vercel.app/products?category=${name}`)
            .then(res => res.json())
            .then(data => {
                setLaptops(data);
            })

    }, [])

    return (
        <div>
            <h1 className="text-2xl font-semibold my-8"><span className='text-orange-600'>Category</span> Name {name}</h1>
            <div className='grid grid-cols-1 gap-8 w-11/12 mx-auto'>
                {
                    laptops?.map(laptop => <SingleItem
                        key={laptop._id}
                        laptop={laptop}
                    ></SingleItem>)
                }
            </div>
        </div>
    );
};

export default AllCategory;