import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const menuItems =
        <React.Fragment>
            {!user?.uid && <li><Link to="/login">Login</Link></li>}

        </React.Fragment>

    return (
        <div className='container mx-auto mb-3 mt-3 mr-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img className='h-8 w-8' src="https://static.vecteezy.com/system/resources/thumbnails/006/756/075/small_2x/laptop-sale-icon-style-vector.jpg" alt="" />
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="font-bold text-3xl">Laptop <span className='text-orange-600'>Hut</span></Link>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                {user?.uid && <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt='' src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-orange-600 font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link>Switch to Selling</Link ></li>
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Header;