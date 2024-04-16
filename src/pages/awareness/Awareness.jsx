import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import useAwareness from '../../hooks/useAwareness';
import { HiOutlineExternalLink } from 'react-icons/hi';
import useBlog from '../../hooks/useBlog';

const Awareness = () => {
    const [awarenessData] = useAwareness()
    const [blogData] = useBlog()

    return (
        <div>
            <Helmet>
                <title>Awareness - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Awareness" />

            <div className='container py-20'>

                <div className='lg:grid grid-cols-5 gap-5'>
                    {/* Blogs */}
                    <div className='col-span-3 mb-10 lg:mb-0 w-fit h-fit mx-auto'>
                        <h2 className='text-3xl lg:text-4xl mb-6 lg:mb-8 text-primary w-full text-center lg:text-left'>Blog Contents</h2>
                        <div className='border border-primary/40 rounded-lg bg-lightDark'>
                            {
                                blogData.map(blog => <div
                                    key={blog?._id}
                                    className='py-2 md:py-3 lg:py-5 px-3 md:px-5 lg:px-8 border-b border-primary/20 mx-auto shadow hover:bg-primary/10 duration-300'
                                >
                                    <Link to={`/blogDetails/${blog?._id}`} className='font-semibold text-lg md:text-xl lg:text-2xl text-primary hover:underline duration-300'>{blog?.question}</Link>
                                    <p className='line-clamp-2 mt-5 mb-4'>{blog?.answer}</p>

                                    <div className='flex justify-between gap-5 text-xs sm:text-sm md:text-base'>
                                        <div className='rounded-full bg-primary/10 text-primary px-3 py-1'>
                                            <p>{blog?.practice_area}</p>
                                        </div>
                                        <div className='flex items-center gap-2 bg-dark  px-2 py-1 rounded'>
                                            <FaRegClock />
                                            <p>{blog?.read_time} min read</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    {/* Awareness videos */}
                    <div className='col-span-2 mx-auto lg:mx-0'>
                        <h2 className='text-3xl lg:text-4xl mb-6 lg:mb-8 text-primary w-full text-center lg:text-left'>Video Contents</h2>
                        {
                            awarenessData.map(awareness => <div
                                key={awareness?._id}
                                className='relative group rounded-lg p-5 border border-primary/40 w-full sm:w-[480px] lg:w-96 xl:w-[480px] shadow hover:shadow-primary duration-300 mb-5 mx-auto lg:mx-0'
                            >
                                <img className='w-full rounded' src={awareness?.thumbnail} alt="" />
                                <div className='flex gap-5 justify-between mt-2'>
                                    <p className='text-blue-500'>{awareness?.practiceArea}</p>
                                    <p className='flex justify-center gap-2 items-center text-sm'><FaRegClock /> {awareness?.read_time} min read</p>
                                </div>
                                <Link to={`/awarenessDetails/${awareness?._id}`} className='text-xl md:text-2xl text-primary hover:underline mt-2'>{awareness?.title}</Link>
                                <p className='line-clamp-3 mt-2'>{awareness?.blog}</p>

                                <Link to={`/awarenessDetails/${awareness?._id}`} className="bg-primary/50 text-white group-hover:inline-block hidden p-3 rounded-md absolute top-3 right-3 md:-right-16 group-hover:right-3 duration-300 hover:bg-primary shadow-xl shadow-purple/20 hover:shadow-white/20">
                                    <HiOutlineExternalLink size="20px" />
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awareness;