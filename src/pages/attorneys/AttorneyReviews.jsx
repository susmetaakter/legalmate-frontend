import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAuth from '../../hooks/useAuth';
import moment from 'moment/moment';
import { useForm } from 'react-hook-form';
import RatingComponent from '../../components/RatingComponent';
import useAxiosSecure from '../../hooks/useAxios';

const AttorneyReviews = ({ paymentSuccess, reviews, email, name }) => {
    const { currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [isReviewClicked, setIsReviewClicked] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const { register, handleSubmit, reset } = useForm();

    const onReviewSubmit = data => {
        const date = moment(new Date()).format("MMMM D, YYYY")
        const name = currentUser.name
        const addedReview = {
            name,
            date,
            review: data.review,
            rating: userRating

        }
        const newReview = [...reviews, addedReview]
        const updateData = {
            email: email,
            newReview
        }
        axiosSecure.patch('/attorney/review', updateData)
            .then(res => {
                if (res.status === 200) {

                    setIsReviewClicked(false)
                    setUserRating(0)
                    reset()
                }
            })
            .catch(error => {
                console.log(error);
            })
        //TODO: save the basic info data and refetch() after sending to database

    }

    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: "#ffb33e",
        inactiveFillColor: "#a78f6d",
    };

    const handleRatingChange = (newRating) => {
        // Do something with the new rating (e.g., send it to your server)
        setUserRating(newRating);
    }

    return (
        <div className='p-5 rounded-lg bg-lightDark'>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    reviews.map((review, index) =>
                        <SwiperSlide key={index}>
                            <div className='duration-300 h-full bg-lightDark rounded-lg p-3 md:py-5 md:px-8 border border-slate-500 shadow-lg max-w-4xl mx-auto mb-10'>
                                <div className='flex items-center justify-between gap-5 mb-5'>
                                    <div>
                                        <p className='text-xl md:text-2xl font-semibold md:mb-2'>{review?.name}</p>
                                        <p className='text-slate-500'>{review?.date}</p>
                                    </div>
                                    {/* rating */}
                                    <Rating
                                        className="max-w-[110px]"
                                        readOnly
                                        value={review?.rating}
                                        itemStyles={myStyles}
                                    />
                                </div>

                                <p className='mb-5 italic'>"{review?.review}"</p>
                            </div>
                        </SwiperSlide>)
                }

            </Swiper>

            <form className='flex gap-5 mt-5' onSubmit={handleSubmit(onReviewSubmit)}>
                <div className='w-full text-black'>
                    {
                        isReviewClicked &&
                        <>
                            <div className='flex items-center gap-2 mb-1'>
                                <h2 className='text-white font-semibold'>Rate the Attorney:</h2>
                                <RatingComponent initialRating={userRating} onRatingChange={handleRatingChange} />
                            </div>
                            <textarea
                                {...register("review")}
                                placeholder={`Write your experience with ${name} within 150 words`}
                                className='w-full text-black bg-white h-20 border border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                            />
                        </>
                    }
                </div>


                
                <div className='flex justify-end mt-3'>
                    {
                        !isReviewClicked ?

                            <button
                                onClick={() => setIsReviewClicked(true)}
                                className={`mt-2 w-max text-center px-3 py-1 ${paymentSuccess? "bg-green-600 hover:bg-green-600/60" : "bg-secondary hover:bg-secondary/60"} duration-300 rounded text-white cursor-pointer`}
                                disabled={!paymentSuccess}
                            >
                                Write a Review
                            </button> :
                            <div className='flex justify-end gap-2 items-center'>
                                <button
                                    onClick={() => setIsReviewClicked(false)}
                                    className="mt-2 w-fit text-center px-3 py-1 bg-red-500 hover:bg-red-500/60 duration-300 rounded text-white cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <input
                                    type='submit'
                                    value="Save"
                                    className="mt-2 w-fit text-center px-3 py-1 bg-green-500 hover:bg-green-500/60 duration-300 rounded text-white cursor-pointer"
                                />
                            </div>
                    }
                </div>
            </form>
        </div>
    );
};

export default AttorneyReviews;