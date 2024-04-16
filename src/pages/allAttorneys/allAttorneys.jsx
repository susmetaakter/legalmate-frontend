import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import AllAttorneysTableRow from './AllAttorneysTableRow';
import PageLoader from "../../components/PageLoader"
import useAttorneys from '../../hooks/useAttorneys';

const AllAttorneys = () => {
    const [attorneysData, loading, refetch]= useAttorneys()
    if (loading) return <PageLoader />
    return (
        <div>
            <Helmet>
                <title>All Lawyers - Legalmate</title>
            </Helmet>
            <Breadcrumbs title="All Lawyers" />

            <div className='container py-20 '>
                <div className="w-full max-w-5xl mx-auto overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-lightDark">
                    {
                        attorneysData.length > 0 ?

                        <table className="table lg:w-full w-[800px] text-white">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium text-center text-white">SL</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Image</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Name</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Email</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Documents</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Status</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attorneysData.map((attorney, index) => (
                                        <AllAttorneysTableRow
                                            index={index}
                                            key={attorney._id}
                                            attorney={attorney}
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

export default AllAttorneys;