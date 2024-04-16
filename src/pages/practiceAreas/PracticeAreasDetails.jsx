import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const PracticeAreasDetails = () => {
    const singlePracticeArea= useLoaderData()
    const {_id, name, img, attorneys, contents, details }= singlePracticeArea
    return (
        <div>
            <Helmet>
                <title>{name} Law - Legalmate</title>
            </Helmet>

            <Breadcrumbs title={`${name} Law`} />
            <div className='container py-20'>
                <div className='max-w-5xl mx-auto border border-primary/20 shadow-lg shadow-primary/50 rounded-lg p-5 md:p-8 lg:p-10 duration-300'>
                    {/* img and name */}
                    <div className='flex items-center gap-5 mb-5 sm:mb-8'>
                        <img
                            className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 object-cover bg-white text-secondary p-2 rounded-full duration-300"
                            src={img}
                            alt=""
                        />
                        <p className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold'>{name} Law</p>
                    </div>

                    {/* Details */}
                    <p>{details}</p>

                    <p className='mt-5 sm:mt-8 duration-300'>Laws Covered in this practice area:</p>
                    <ul className="pl-5 mt-1 sm:mt-2 duration-300">
                        {contents.map((content, index) => (
                        <div key={index}>
                            <li className="list-item list-disc">{content}</li>
                        </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PracticeAreasDetails;