import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AllSeller = () => {
    const { user } = useContext(AuthContext);
    const [tableData, setTableData] = useState([]);

    const getData = () => {
        fetch(`https://laptop-hut-server-tawny.vercel.app/allSellersAndBuyers?role=seller`)
            .then(res => res.json())
            .then(data => setTableData(data))
    }
    useEffect(() => {
        getData();
    }, [user?.uid])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://laptop-hut-server-tawny.vercel.app/deleteSellerAndBuyer/${id}`, {
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
                    getData();
                    toast('Deleted Seller successfully');
                }
            });
    }

    return (
        <div>
            <h1 className="text-3xl font-bold my-8"><span className='text-orange-600'>All</span> Seller</h1>
            <div className=' w-10/12 mx-auto '>
                {tableData.length > 0 ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData?.map((item, index) => <tr key={item?._id}>
                                    <td >{index + 1}</td>
                                    <td >{item?.userName}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.role}</td>
                                    <td>
                                        < button className="btn btn-error btn-sm" onClick={() => handleDelete(item?._id)}>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                    :
                    <div className='min-h-[50vh] text-2xl flex justify-center items-center'>You did not add any product</div>
                }
            </div>
        </div>
    );
};

export default AllSeller;