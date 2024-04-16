import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosSecure from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const AttorneyExperienceProfile = ({ exp,id, refetch, index }) => {
    const [axiosSecure] = useAxiosSecure();
    // experience delete and update
    const handleExperienceDelete = (index)=>{
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
            axiosSecure.patch(`/attorney/deleteExp`, data)
            .then(res => {
                if (res.status === 200) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'This experience field has been deleted.',
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

            <p className='text-primary text-xl'>{exp?.company}</p>
            <p className=''>{exp?.position}</p>
            <p className='text-sm italic'>{exp?.start_year} - {exp?.end_year}</p>

            <button onClick={()=>handleExperienceDelete(index)} className="bg-primary/50 text-white hidden p-1 rounded-md absolute duration-300 hover:bg-primary shadow-lg text-sm shadow-purple/20 hover:shadow-white/20 group-hover:inline-block group-hover:bottom-1 group-hover:right-1">
                <AiOutlineDelete />
            </button>
        </div>
    );
};

export default AttorneyExperienceProfile;