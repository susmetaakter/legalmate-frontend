import React from 'react';
import { Link } from 'react-router-dom';

const AllPaymentsTableRow = ({index, payment, refetch}) => {
    const {sender_id, sender_name, sender_email, sender_role, target_id, target_name, target_email, target_role, tran_id, amount, isPaid}= payment
    return (
        <>
            <tr className="border-b border-primary/20 hover:bg-primary/10 duration-300 text-center">
                <td>{index+1}</td>
                <td>
                    {
                        sender_role === "client"?
                            <div className='flex justify-center items-center gap-2'>
                                <Link to={`/client_details/${sender_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{sender_name}</Link>
                                <p>(Client)</p>
                            </div>:
                            <div className='flex justify-center items-center gap-2'>
                                <Link to={`/attorney_details/${sender_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{sender_name}</Link>
                                <p>(Lawyer)</p>
                            </div>
                    }
                </td>
                <td>{sender_email}</td>
                <td>
                    {
                        target_role === "client"?
                        <div className='flex justify-center items-center gap-2'>
                                <Link to={`/client_details/${target_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{target_name}</Link>
                                <p>(Client)</p>
                            </div>:
                            <div className='flex justify-center items-center gap-2'>
                                <Link to={`/attorney_details/${target_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{target_name}</Link>
                                <p>(Lawyer)</p>
                            </div>
                    }
                </td>
                <td>{target_email}</td>
                <td>{tran_id}</td>
                <td>{isPaid===true?"Paid":"Unpaid"}</td>
                <td>{amount}</td>
            </tr>
        </>
    );
};

export default AllPaymentsTableRow;