import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';



const Navbar = () => {
    const { user, } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    const menuItems =
        <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {
                user?.uid && <li><Link to="/dashboard">Dashboard</Link></li>
            }

            {/* {user?.uid ?
                <>
                    <li><Link to="/myorder">My orders</Link></li>
                </>
                : <li><Link to=""></Link></li>} */}
        </React.Fragment>
    return (
        <div className="navbar bg-orange-600 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-orange-600 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                </ul>
            </div>
        </div>
    );
};

export default Navbar;