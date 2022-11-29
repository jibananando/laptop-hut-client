import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    const getData = () => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }
    useEffect(() => {
        getData();
    }, [user?.uid])

    // console.log("user data", userData);

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
                    {
                        userData?.role === "buyer" && <>
                            <li><Link to="/dashboard/myorders">My Order</Link></li>
                        </>
                    }
                    {
                        userData?.role === "seller" && <>
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            <li><Link to="/dashboard/addAproduct">Add Product</Link></li>
                        </>
                    }
                    {
                        userData?.role === "admin" && <>
                            <li><Link to="/dashboard/allseller">All seller</Link></li>
                            <li><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;