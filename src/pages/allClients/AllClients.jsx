import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import AllClientsTableRow from './AllClientsTableRow';
import useClients from '../../hooks/useClients';
import PageLoader from '../../components/PageLoader';

const AllClients = () => {
    const [clientsData, loading, refetch]= useClients()
    if(loading) return <PageLoader />

    return (
        <div>
            <Helmet>
                <title>All Clients - Legalmate</title>
            </Helmet>
            <Breadcrumbs title="All Clients" />

            <div className='container py-20 '>
                <div className="w-full max-w-5xl mx-auto overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-lightDark">
                    {
                        clientsData.length > 0 ?

                        <table className="table lg:w-full w-[800px] text-white">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium text-center text-white">SL</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Image</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Name</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Email</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Status</th>
                                    <th className="px-3 py-3 font-medium text-center text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clientsData.map((client, index) => (
                                        <AllClientsTableRow
                                            index={index}
                                            key={client._id}
                                            client={client}
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

export default AllClients;