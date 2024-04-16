import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLoaderData } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { ImHammer2 } from "react-icons/im";
import moment from 'moment';
import { FaRegClock } from "react-icons/fa6";

const BlogDetails = () => {
    const singleAwareness = useLoaderData()
    const { _id, question, answer, practice_area, date_posted, asked_by, views } = singleAwareness
     
    const currentDate = new Date(moment(new Date()).format("YYYY-MM-DD"))
    const postedDate= new Date(date_posted)

    const timeDiffInMs = currentDate.getTime() - postedDate.getTime(); // Difference in milliseconds
    const timeDiffInDays= Math.floor(timeDiffInMs/(1000*60*60*24)) // Convert milliseconds to days

    const timeDiff= 
        timeDiffInDays== 0 ? "Today" :
        timeDiffInDays == 1 ? "Yesterday" :
        timeDiffInDays< 30 ? `${timeDiffInDays} days ago` :
        timeDiffInDays< 365 ? `${Math.floor(timeDiffInDays/30)} month${Math.floor(timeDiffInDays/30)!== 1 ? "s": ""} ago` :
        `${Math.floor(timeDiffInDays/365)} year${Math.floor(timeDiffInDays/365)!== 1 ? "s" : ""} ago`

    return (
        <div>
            <Helmet>
                <title>Awareness Details - Legalmate</title>
            </Helmet>
            <Breadcrumbs title="Awareness Details" />

            <div className='container py-20'>
                <div className='max-w-5xl mx-auto border border-primary/20 shadow-lg shadow-primary/50 rounded-lg p-5 md:p-8 lg:p-10 duration-300'>
                    {/* Top Section */}
                    <div className='flex justify-start sm:justify-between flex-wrap items-center gap-3 mb-5 duration-300'>
                        <div className='flex justify-center items-center gap-3 bg-lightDark px-2 md:px-3 py-1 md:py-2 rounded'><IoPerson  /> {asked_by || asked_by ==="" ? asked_by : "Unknown"}</div>
                        <div className='flex justify-center items-center gap-3 bg-lightDark px-2 md:px-3 py-1 md:py-2 rounded'><ImHammer2  /> {practice_area}</div>
                        <div className='flex justify-center items-center gap-3 bg-lightDark px-2 md:px-3 py-1 md:py-2 rounded'><FaRegClock /> {timeDiff}</div>
                        <div className='flex justify-center items-center gap-3 bg-lightDark px-2 md:px-3 py-1 md:py-2 rounded'><FaEye /> {views}</div>
                    </div>

                    {/* QnA */}
                    <p className='mb-3 text-lg lg:text-xl duration-300 text-primary'>Question: {question}</p>
                    <p>Answer: {answer}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;