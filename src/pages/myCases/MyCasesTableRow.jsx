import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import CustomModal from '../../components/CustomModal';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxios';
import { useForm } from 'react-hook-form';

const MyCasesTableRow = ({ index, singleCase, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { _id, case_post, practice_area, status } = singleCase;
    const [isCaseOpen, setIsCaseOpen] = useState(false);
    const [isCaseEditClicked, setIsCaseEditClicked] = useState(false);

    const handleCaseModal = e => {
        if (e == "cancel") setIsCaseOpen(false)
    }
    const handleCaseEditClicked = e => {
        if (e == "cancel") setIsCaseEditClicked(false)
    }

    const handleCaseDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/case/delete/${_id}`)
                    .then((res) => {
                        if (res.status == 200) {
                            refetch()
                            Swal.fire({
                                icon: "success",
                                title: "Deleted Successfully!",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                        }
                    })
                    .catch((err) => console.log(err));

            }
        });
    }

    const onCaseUpdate = data => {
        const updateCase={
            caseId:_id,
            case_post:data.case_post
        }

        axiosSecure
        .patch(`/case/update/${_id}` , updateCase)
        .then((res) => {
            if (res.status == 200) {
                refetch()
                reset()
                setIsCaseEditClicked(false)
                Swal.fire({
                    icon: "success",
                    title: "Post Updated Successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });

            }
        })
        .catch((err) => console.log(err));


      
        // reset()
    }

    return (
        <tr className="border-b border-primary/20 hover:bg-primary/10 duration-300 text-center">
            <td>{index + 1}</td>

            <td><button onClick={() => setIsCaseOpen(true)} className="mt-5 sm:mt-0 w-max h-fit text-center px-3 py-1 bg-green-500 hover:bg-green-500/60 duration-300 rounded text-white cursor-pointer">Show Post</button></td>

            <td>{practice_area}</td>
            <td>{status}</td>

            <td className='flex justify-center items-center gap-5 lg:gap-8 cursor-pointer mx-auto'>
                <AiOutlineDelete onClick={handleCaseDelete} className='hover:bg-red-100 text-red-500 rounded-full text-3xl p-1' />
                <FiEdit onClick={()=> setIsCaseEditClicked(true)} className='hover:bg-green-100 text-green-500 rounded-full text-3xl p-1' />
            </td>
            {
                isCaseOpen &&
                <CustomModal
                    isModalOpen={isCaseOpen}
                    setIsModalOpen={setIsCaseOpen}
                    handleModal={handleCaseModal}
                >
                    <h3 className="font-bold text-secondary text-xl mb-2">Case Post</h3>
                    <p className='border-t border-dark mb-3'></p>
                    <p className='text-black text-left md:text-lg'>{case_post}</p>
                </CustomModal>
            }

            {
                isCaseEditClicked &&
                <CustomModal
                    isModalOpen={isCaseEditClicked}
                    setIsModalOpen={setIsCaseEditClicked}
                    handleModal={handleCaseEditClicked}
                >
                    <h3 className="font-bold text-secondary text-xl mb-2">Case Post</h3>
                    <p className='border-t border-dark mb-3'></p>
                    <form onSubmit={handleSubmit(onCaseUpdate)}>
                        <div className='w-full'>
                            <textarea
                                type='text'
                                defaultValue={case_post}
                                {...register("case_post", { required: true })}
                                className={`w-full h-40 border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.case_post && 'border-2 border-red-500'}`}
                            />
                        </div>
                        <input
                            className="text-center px-3 md:px-5 py-1 md:py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white cursor-pointer"
                            type="submit"
                            value="Save Changes"
                        />
                    </form>
                </CustomModal>
            }
        </tr>
    );
};

export default MyCasesTableRow;