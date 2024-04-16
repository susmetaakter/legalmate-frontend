import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxios';

const AllClientsTableRow = ({ index, client, refetch }) => {
    const { name, img, email, location, _id, occupation, status } = client;
    const [axiosSecure] = useAxiosSecure();
    const [statusUpdate, setStatusUpdate] = useState(status);
    const statusChanges = () => {
        const statusData = {
            status: statusUpdate,
            email
        };

        if (statusUpdate != "undefined") {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    // updated data send server
                    axiosSecure.patch(`/client/status`, statusData)
                        .then((res) => {
                            if (res.status == 200) {
                                refetch();
                                Swal.fire({
                                    icon: "success",
                                    title: "Updated Successfully!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        })
                        .catch((err) => console.log(err));

                }
            });
        }
    };
    return (
        <>
            <tr className="border-b border-primary/20 hover:bg-primary/10 duration-300 text-center">
                <td>{index + 1}</td>
                <td>
                    {
                        img ?
                            <img className='w-10 h-10 rounded-full object-cover object-center mx-auto' src={img} alt={name} /> :
                            <p className='w-10 h-10 bg-primary text-dark text-xl flex items-center justify-center font-bold rounded-full uppercase shadow-lg mx-auto'>{name.slice(0, 2)}</p>
                    }
                </td>
                <td><Link to={`/client_details/${_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{name}</Link></td>
                <td>{email}</td>
                <td>
                    <div
                        className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto ${statusUpdate === "approved" &&
                            "bg-green-300 text-green-700 font-medium shadow-lg shadow-white/20"
                            } ${statusUpdate === "suspend" && "bg-red-300 text-red-700"
                            }`}
                    >
                        <select
                            onChange={(e) => {
                                setStatusUpdate(e.target.value);
                            }}
                            name="status"
                            id="status"
                            defaultValue={status}
                            className="focus:outline-none bg-transparent"
                        >
                            <option value="approved">approved</option>
                            <option value="suspend">suspend</option>
                        </select>
                    </div>
                </td>
                <td><button onClick={statusChanges} className='px-3 py-1 bg-secondary hover:bg-secondary/50 duration-300 rounded text-center'>Save</button></td>
            </tr>
        </>
    );
};

export default AllClientsTableRow;