import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Myorders = () => {
    const { user } = useContext(AuthContext);
    const [tableData, setTableData] = useState([]);

    const getData = () => {
        fetch(`/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTableData(data))
    }
    useEffect(() => {
        getData();
    }, [user?.uid])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-4xl font-bold my-10"><span className='text-orange-600'>My</span> Order</h1>

            <div className='  '>
                {tableData.length > 0 ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Seller Name</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData?.map(item => <tr >
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.productImg} alt={item.productName} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.sellerName}</td>
                                    <td>{item.pay}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                    :
                    <div className='min-h-[50vh] text-2xl flex justify-center items-center'>Did not have any booking product </div>
                }
            </div>
        </div >
    );
};

export default Myorders;