import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import useCases from '../../hooks/useCases';
import MyCasesTableRow from './MyCasesTableRow';
import useAuth from '../../hooks/useAuth';
import PageLoader from '../../components/PageLoader';
import useCurrentCases from '../../hooks/useCurrentCases';

const MyCases = () => {
    const { user } = useAuth();
  
    const [currentCasesData, currentCasesLoading, refetch] = useCurrentCases();

    useEffect(() => {
        refetch()
    }, [user]);
    if (currentCasesLoading || currentCasesData === null) return <PageLoader />

    return (
        <div>
            <Helmet>
                <title>My Cases - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="My Cases" />

            {/* Main Content */}
            <div className='container py-20 '>
                <div className="w-full max-w-5xl mx-auto overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-lightDark">
                    {
                        currentCasesData.length > 0 ?

                            <table className="table lg:w-full w-[800px] text-white">
                                <thead className="text-lg text-green border-b border-green/40">
                                    <tr>
                                        <th className="px-3 py-3 font-medium text-center text-white">Index</th>
                                        <th className="px-3 py-3 font-medium text-center text-white">Case Post</th>
                                        <th className="px-3 py-3 font-medium text-center text-white">Practice area</th>
                                        <th className="px-3 py-3 font-medium text-center text-white">Status</th>
                                        <th className="px-3 py-3 font-medium text-center text-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentCasesData.map((singleCase, index) => (
                                            <MyCasesTableRow
                                                index={index}
                                                key={singleCase._id}
                                                singleCase={singleCase}
                                                refetch={refetch}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table> :
                            <p className="py-4 text-lg text-center">☹ No data available!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCases;