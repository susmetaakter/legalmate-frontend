import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import useAwareness from '../../hooks/useAwareness';
import { FaRegClock } from 'react-icons/fa6';

const AwarenessDetails = () => {
    const singleAwareness = useLoaderData()
    const [awarenessData] = useAwareness()
    const { _id, video, thumbnail, title, practiceArea, blog, read_time } = singleAwareness
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const sidebarData = shuffleArray(awarenessData).filter(data => data?._id !== _id);
    return (
        <div>
            <Helmet>
                <title>Awareness Details - Legalmate</title>
            </Helmet>
            <Breadcrumbs title="Awareness Details" />

            <div className='container py-20'>

                <div className='xl:grid grid-cols-4 gap-10'>
                    <div className='col-span-3'>
                        <iframe className='w-[400px] md:w-[560px] lg:w-[640px] h-[225px] md:h-[315px] lg:h-[360px] duration-300' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        <p className='text-2xl md:text-4xl text-primary mb-5 mt-10'>{title}</p>
                        <p>{blog}</p>
                    </div>
                    <div className='cols-span-1 max-w-sm mt-10 xl:mt-0'>
                        {
                            sidebarData?.slice(0, 2).map(sidebar =>
                                <div
                                    key={sidebar?._id}
                                    className='rounded p-3 border border-primary/20 mb-5 shadow-lg hover:shadow-primary/40 duration-300'
                                >
                                    <img className='w-full rounded' src={sidebar?.thumbnail} alt="" />
                                    <div className='flex gap-5 justify-between mt-2'>
                                        <p className='text-blue-500'>{sidebar?.practiceArea}</p>
                                        <p className='flex justify-center gap-2 items-center text-sm'><FaRegClock /> {sidebar?.read_time} min read</p>
                                    </div>
                                    <Link to={`/awarenessDetails/${sidebar?._id}`} className='text-lg text-primary hover:underline mt-2'>{sidebar?.title}</Link>
                                    <p className='line-clamp-3 text-sm mt-2 mb-6'>{sidebar?.blog}</p>

                                    {/* Sidebar */}
                                    {/* <p className='border-t border-primary mt-2 mb-1'></p> */}

                                    <Link to={`/awarenessDetails/${sidebar?._id}`} className='py-2 rounded bg-secondary text-center cursor-pointer'>
                                        <button className='w-full mb-2'>Explore</button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwarenessDetails;