import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosSecure from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const AttorneyEducationProfile = ({ id, refetch, edu, index }) => {
    const [axiosSecure] = useAxiosSecure();
    // Education delete and update

    const handleEducationDelete = (index) => {
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
        axiosSecure.patch(`/attorney/deleteEdu`, data)
            .then(res => {
                if (res.status === 200) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'This education field has been deleted.',
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
            <div key={index} className='relative group border border-white/40 rounded shadow-lg shadow-primary/20 px-5 py-3'>

                <p className='text-primary text-xl'>{edu?.institution}</p>
                <p className=''>{edu?.subject}</p>
                <p className='text-sm italic'>{edu?.start_year} - {edu?.end_year}</p>

                <button onClick={() => handleEducationDelete(index)} className="bg-primary/50 text-white hidden p-1 rounded-md absolute duration-300 hover:bg-primary shadow-lg text-sm shadow-purple/20 hover:shadow-white/20 group-hover:inline-block group-hover:bottom-1 group-hover:right-1">
                    <AiOutlineDelete />
                </button>
            </div>
        );
    };

    export default AttorneyEducationProfile;