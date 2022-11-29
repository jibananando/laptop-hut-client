import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-orange-100 text-base-content">
                    <li><Link to="/dashboard/myorders">My Order</Link></li>
                    <li><Link to="/dashboard/myproducts">My Products</Link></li>
                    <li><Link to="/dashboard/addAproduct">Add Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;