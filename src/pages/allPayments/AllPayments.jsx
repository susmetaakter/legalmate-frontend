import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import usePaymentHistory from '../../hooks/usePaymentHistory';
import PageLoader from '../../components/PageLoader';
import AllPaymentsTableRow from './AllPaymentsTableRow';

const AllPayments = () => {
    const [paymentData, paymentLoading, paymentRefetch]= usePaymentHistory()
    if(paymentLoading) return <PageLoader />
    return (
        <div>
            <Helmet>
                <title>All Payments - Legalmate</title>
            </Helmet>
            <Breadcrumbs title="All Payments" />

            <div className='container py-20'>
                <div className="w-full mx-auto overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-lightDark">
                    {
                        paymentData.length > 0 ?

                        <table className="table lg:w-full text-white">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium text-center text-white">SL</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Sender</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Sender Mail</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Target</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Target Mail</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Tran_ID</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Status</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentData.map((payment, index) => (
                                        <AllPaymentsTableRow
                                            index={index}
                                            key={payment._id}
                                            payment={payment}
                                            refetch={paymentRefetch}
                                        />
                                    )) 
                                }
                            </tbody>
                        </table>:
                        <p className="py-4 text-lg text-center">☹ No data available!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPayments;