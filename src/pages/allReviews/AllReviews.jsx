import React from 'react';
import useOurReviews from '../../hooks/useOurReviews';
import PageLoader from '../../components/PageLoader';
import AllPaymentsTableRow from '../allPayments/AllPaymentsTableRow';
import AllReviewsTableRow from './AllReviewsTableRow';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const AllReviews = () => {
    const [ourReviewsData, loading, refetch]= useOurReviews()
    if(loading) return <PageLoader />
    return (
        <div>
            <Helmet>
                <title>All Reviews - Legalmate</title>
            </Helmet>
            <Breadcrumbs title="All Reviews" />

            <div className='container py-20 '>
                <div className="w-full max-w-5xl mx-auto overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-lightDark">
                    {
                        ourReviewsData.length > 0 ?

                        <table className="table lg:w-full w-[800px] text-white">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium text-center text-white">SL</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Image</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Name</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Review</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Status</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ourReviewsData?.map((ReviewsData, index) => (
                                        <AllReviewsTableRow
                                            index={index}
                                            key={ourReviewsData._id}
                                            ReviewsData={ReviewsData}
                                            refetch={refetch}
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

export default AllReviews;