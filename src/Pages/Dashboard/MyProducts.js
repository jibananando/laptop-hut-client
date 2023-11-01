import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [tableData, setTableData] = useState([]);

    const getData = () => {
        fetch(`https://laptop-hut-server-tawny.vercel.app/myproducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTableData(data))
    }
    useEffect(() => {
        getData();
    }, [user?.uid])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://laptop-hut-server-tawny.vercel.app/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data?.message) {
                    toast(data.message);
                } else {
                    toast('Deleted successfully');
                    getData();
                }
            });
    };

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-4xl font-bold my-10"><span className='text-orange-600'>My</span>Product</h1>

            <div className='  '>
                {tableData.length > 0 ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData?.map(item => <tr >
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.resalePrice}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-error">delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                    :
                    <div className='min-h-[50vh] text-2xl flex justify-center items-center'>Did not have any product </div>
                }
            </div>
        </div >
    );
};

export default MyProducts;