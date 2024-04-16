import React from 'react';
import { Link } from 'react-router-dom';

const PaymentHistoryTableRow = ({index, payment, refetch}) => {
    const {target_id, target_name, target_role, tran_id, amount, isPaid}= payment
    return (
        <>
        <tr className="border-b border-primary/20 hover:bg-primary/10 duration-300 text-center">
            <td>{index+1}</td>
            <td>
                {
                    target_role === "client"?
                    <div className='flex justify-center items-center gap-2'>
                            <Link to={`/client_details/${target_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{target_name}</Link>
                        </div>:
                        <div className='flex justify-center items-center gap-2'>
                            <Link to={`/attorney_details/${target_id}`} className="hover:text-primary duration-300 hover:underline cursor-pointer">{target_name}</Link>
                        </div>
                }
            </td>
            <td>{tran_id}</td>
            <td>{isPaid===true?"Paid":"Unpaid"}</td>
            <td>{amount}</td>
        </tr>
    </>
    );
};

export default PaymentHistoryTableRow;