import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosSecure from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const AttorneyAwardProfile = ({ id, refetch, award, index }) => {
    const [axiosSecure] = useAxiosSecure();
    // Award delete and update
    const handleAwardDelete = (index) => {
        const data = {
            id: id,
            position: index
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
        .then((result) => {
            if (result.isConfirmed) {
        axiosSecure.patch(`/attorney/deleteAwd`, data)
            .then(res => {
                if (res.status === 200) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'This award field has been deleted.',
                        'success'
                      )
                } 
            })
            .catch(error => {
                console.log(error);
            })
            }})
    }

    return (
        <div key={index} className='relative group border border-white/40 rounded shadow-lg shadow-primary/20 px-3 md:px-5 py-1 md:py-3'>

            <p className='text-primary text-xl'>{award?.name}</p>
            <p className=''>{award?.from}</p>
            <p className='text-sm italic'>{award?.year}</p>

            <button onClick={() => handleAwardDelete(index)} className="bg-primary/50 text-white hidden p-1 rounded-md absolute duration-300 hover:bg-primary shadow-lg text-sm shadow-purple/20 hover:shadow-white/20 group-hover:inline-block group-hover:bottom-1 group-hover:right-1">
                <AiOutlineDelete />
            </button>
        </div>
    );
};

export default AttorneyAwardProfile;