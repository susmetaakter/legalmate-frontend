import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useCurrentClient from '../../hooks/useCurrentClient';
import CustomModal from '../../components/CustomModal';
import { BsCamera } from 'react-icons/bs';
import PageLoader from '../../components/PageLoader';
import useAxiosSecure from '../../hooks/useAxios';

const ClientProfile = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [currentClientData, clientLoading, refetch] = useCurrentClient();
    const [isBasicInfoModalOpen, setIsBasicInfoModalOpen] = useState()
    const { name, email, img, occupation, location } = currentClientData

    if (clientLoading || currentClientData === null) return <PageLoader />

    //Basic info Submit Complete
    const onBasicInfoSubmit = data => {
        const updateData = {
            email: email,
            name: data.name,
            location: data.location,
            occupation: data.occupation
        }
        axiosSecure.patch('/client/details', updateData)
            .then(res => {
                if (res.status === 200) {
                    refetch();
                    setIsBasicInfoModalOpen(false)
                    reset()
                }
            })
            .catch(error => {
                console.log(error);
            })


    }
    const handleBasicInfoModal = (e) => {
        if (e == "cancel") setIsBasicInfoModalOpen(false)
    }

   // Image Hosting

   const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
   const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

   const handlePictureUpload = event => {
       const picture = event.target.files[0]
       const formData = new FormData()
       formData.append('image', picture)
       fetch(image_hosting_url, {
           method: "POST",
           body: formData
       })
           .then(res => res.json())
           .then(imageResponse => {
               if (imageResponse.success) {
                   const image = imageResponse.data.display_url
                   const profile = {
                       url: image,
                       email: email
                   }

                   axiosSecure.patch(`/client/profilePhoto`, profile)
                       .then(res => {
                           if (res.status === 200) {
                               refetch()
                           }
                       })
                       .catch(error => {
                           console.log(error);
                       })
               }
           })
   }


    return (
        <div className='container py-20 flex flex-col items-center gap-5'>
            {/* Image */}
            <div className='relative h-fit w-fit'>
                <div className='min-w-max'>
                    {
                        img ?
                            <img
                                className="w-48 md:w-64 h-60 md:h-80 object-cover rounded mx-auto border border-primary"
                                src={img}
                                alt={name}
                            /> :
                            <img
                                className='w-48 md:w-64 h-60 md:h-80 object-cover rounded mx-auto border border-primary'
                                src="https://i.ibb.co/wNJtyRX/image-14.png" />
                    }
                </div>
                <label className='rounded-full border border-primary bg-lightDark/80 hover:bg-lightDark text-2xl p-[5px] z-20 cursor-pointer text-primary duration-300 absolute -bottom-4 left-[82%] md:left-[90%]'>

                    <input
                        name='picture'
                        type='file'
                        style={{ display: 'none' }}
                        onChange={handlePictureUpload}
                    />
                    <BsCamera />
                </label>
            </div>

            <p className='text-lg mt-5'>Name: {name ? name : "Not Found"}</p>
            <p>Email: {email ? email : "Not Found"}</p>
            <p>Occupation: {occupation ? occupation : "Not Found"}</p>
            <p>Location: {location ? location : "Not Found"}</p>

            {/* Edit details button */}
            <button
                onClick={() => setIsBasicInfoModalOpen(true)}
                className="mt-auto w-max text-center px-5 py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white cursor-pointer"
            >
                Edit Details
            </button>

            {
                isBasicInfoModalOpen &&
                <CustomModal
                    isModalOpen={isBasicInfoModalOpen}
                    setIsModalOpen={setIsBasicInfoModalOpen}
                    handleModal={handleBasicInfoModal}
                >
                    <form className='text-black' onSubmit={handleSubmit(onBasicInfoSubmit)}>
                        <h3 className="font-bold text-xl mb-2">Update Your Basic Profile Information</h3>
                        <p className='border-t border-dark mb-5'></p>

                        {/* Name */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Name:</label>
                            <input
                                {...register("name")}
                                defaultValue={name}
                                placeholder='Your full name'
                                className='w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                            />
                        </div>

                        {/* Location */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Location:</label>
                            <input
                                {...register("location")}
                                defaultValue={location}
                                placeholder='e.g. Dhaka'
                                className='w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                            />
                        </div>

                        {/* Occupation */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Occupation:</label>
                            <input
                                {...register("occupation")}
                                defaultValue={occupation}
                                placeholder='e.g. CEO, Vivasoft'
                                className='w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                            />
                        </div>

                        <input
                            className="text-center px-3 md:px-5 py-1 md:py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white mt-2 sm:mt-5 cursor-pointer"
                            type="submit"
                            value="Save Changes"
                        />
                    </form>
                </CustomModal>
            }
        </div>
    );
};

export default ClientProfile;