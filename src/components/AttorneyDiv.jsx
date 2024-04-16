import React from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AttorneyDiv = ({attorney}) => {
    const {_id, name, img, about, practiceArea, location, license, experience, reviews }= attorney
    const presentEmployment= experience.filter(exp=> exp?.end_year === "Present")
    const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    const currentYear = new Date().getFullYear();
    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: "#ffb33e",
        inactiveFillColor: "#a78f6d",
    };

    return (
        <div className="relative group rounded-lg p-3 md:p-5 max-w-5xl bg-lightDark border border-primary mb-5 shadow-lg hover:shadow-white/40 duration-300 mx-auto md:flex gap-8">
            <div className='flex gap-5'>
                <div className='min-w-max'>
                    {/* Image */}
                    {
                        img ?
                        <img
                            className="w-32 md:w-48 h-40 md:h-60 object-cover rounded md:mx-auto border border-primary"
                            src={img}
                            alt=""
                        />:
                        <img
                                className='w-48 h-60 object-cover rounded md:mx-auto border border-primary'
                                src="https://i.ibb.co/wNJtyRX/image-14.png" 
                            />
                    }
                </div>

                {/* name, practice area */}
                <div className='md:hidden block'>
                    <div>
                        <Link to={`/attorney_details/${_id}`} className="hover:text-primary font-semibold text-xl md:text-2xl cursor-pointer duration-300 w-fit inline"> {name} </Link>
                        { practiceArea && <span className='block mb-1 text-sm sm:text-base duration-300'>({practiceArea} Law Specialist)</span>}
                    </div>
                    <p className='text-primary'>{presentEmployment[0]?.position} at {presentEmployment[0]?.company}</p>
                    <p className="text-sm">from {location}</p>
                </div>
            </div>

            <div>
                {/* name, practice area */}
                <div className='hidden md:block'>
                    <div>
                        <Link to={`/attorney_details/${_id}`} className="hover:text-primary font-semibold text-2xl cursor-pointer duration-300 w-fit inline"> {name} </Link>
                        { practiceArea && <span>({practiceArea} Law Specialist)</span>}
                    </div>
                    <p>{presentEmployment[0]?.position} at {presentEmployment[0]?.company}</p>
                    <p className="text-sm">from {location}</p>
                </div>
                {/* rating */}
                {
                    reviews.length!==0 ?
                    <div className="flex items-center gap-2 mt-5 md:mt-2 mb-2 md:mb-5">
                        <Rating
                        className="max-w-[110px]"
                        readOnly
                        value={reviews.length > 0 && averageRating}
                        itemStyles={myStyles}
                        />
                            <p className="font-bold text-orange-500">{averageRating.toFixed(1)}</p>
                        <span className="text-gray">({reviews.length} reviews)</span>
                    </div>:
                    <div className='flex items-center gap-2 mt-2 mb-5'>
                        <Rating
                        className="max-w-[110px]"
                        readOnly
                        value={0}
                        itemStyles={myStyles}
                        />
                        <span className="text-gray">(no reviews yet)</span>
                    </div>    
                }
                {/* Licensed for */}
                {
                    license.length!== 0 && 
                    < p className='text-orange-500'>Licensed for {currentYear - license.acquired_year} years</p>
                }
                <p className='line-clamp-3 text-sm md:text-base duration-300'>{about}</p>
            </div>

            {/* TODO: add link address */}
            <Link to={`/attorney_details/${_id}`} className="bg-primary/50 text-white group-hover:inline-block hidden p-3 rounded-md absolute top-3 right-3 md:-right-16 group-hover:right-3 duration-300 hover:bg-primary shadow-xl shadow-purple/20 hover:shadow-white/20">
              <HiOutlineExternalLink size="20px" />
            </Link>
        </div>
    );
};

export default AttorneyDiv;