import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLoaderData } from 'react-router-dom';

const ClientDetails = () => {
    const singleClient= useLoaderData()
    const {name, email, img, occupation, location}= singleClient
    return (
        <div>
            <Helmet>
                <title>Client Details - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Client Details" />
            <div className='container py-20 flex flex-col items-center gap-5'>
                <div className='min-w-max'>
                    {/* Image */}
                    {
                        img ?
                            <img
                                className="w-64 h-80 object-cover rounded mx-auto border border-primary"
                                src={img}
                                alt=""
                            /> :
                            <img
                                className='w-64 h-80 object-cover rounded mx-auto border border-primary'
                                src="https://i.ibb.co/wNJtyRX/image-14.png"
                            />
                    }
                </div>

                <p className='text-lg mt-5'>Name: {name? name: "Not Found"}</p>
                <p>Email: {email? email: "Not Found"}</p>
                <p>Occupation: {occupation? occupation : "Not Found"}</p>
                <p>Location: {location? location: "Not Found"}</p>
            </div>
        </div>
    );
};

export default ClientDetails;