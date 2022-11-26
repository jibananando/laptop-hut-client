import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="card mt-16 mb-16 lg:card-center bg-base-100 ">
            <h1 className="text-4xl font-bold"><span className='text-orange-600'>Oops! </span>Sorry, Page not found</h1>
            <p className='text-xl pt-4 pb-4'>The page you are looking for does not exist. It might have become moved or <Link to="/" className='text-blue-600'>Go back to home</Link></p>
            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGzWhrWj1AoQUrHkgW1pJhVkCl8sVvM9ceA&usqp=CAU" alt="Album" /></figure>
        </div>
    );
};

export default NotFound;