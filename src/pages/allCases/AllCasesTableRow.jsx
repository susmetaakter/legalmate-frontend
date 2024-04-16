import React, { useState } from 'react';
import CustomModal from '../../components/CustomModal';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxios';

const AllCasesTableRow = ({ index, singleCase, refetch }) => {
    const { _id, writer, writer_id, email, status, case_post, practice_area } = singleCase;
    const [axiosSecure] = useAxiosSecure();
    const [isCaseOpen, setIsCaseOpen] = useState(false);
    const [statusUpdate, setStatusUpdate] = useState(status);

    
    const handleCaseModal = e => {
        if (e == "cancel") setIsCaseOpen(false)
    }
    const statusChanges = () => {
        const statusData = {
            caseId: _id,
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
                    axiosSecure
                        .patch(`/case/status/${_id}`, statusData)
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
        <tr className="border-b border-primary/20 hover:bg-primary/10 duration-300 text-center">
            <td>{index + 1}</td>
            <td><Link to={`/client_details/${writer_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{writer}</Link></td>
            <td>{email}</td>

            <td><button onClick={() => setIsCaseOpen(true)} className="mt-5 sm:mt-0 h-fit text-center px-3 py-1 bg-green-500 hover:bg-green-500/60 duration-300 rounded text-white cursor-pointer w-max">Show Post</button></td>

            <td>{practice_area}</td>

            <td>
                <div
                    className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto ${statusUpdate === "approved" &&
                        "bg-green-300 text-green-700 font-medium shadow-lg shadow-white/20"
                        } ${statusUpdate === "pending" && "bg-orange-300 text-orange-700"} ${statusUpdate === "suspend" && "bg-red-300 text-red-700"
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
                        <option value="pending">pending</option>
                        <option value="suspend">suspend</option>
                    </select>
                </div>
            </td>
            <td><button onClick={statusChanges} className='px-3 py-1 bg-secondary hover:bg-secondary/50 duration-300 rounded text-center'>Save</button></td>
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
        </tr>
    );
};

export default AllCasesTableRow;