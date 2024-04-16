import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useOurReviews from '../../hooks/useOurReviews';

const Reviews = () => {
    const [ourReviewsData] = useOurReviews();
    const [review, setReview] = useState()
    useEffect(() => {
        if (ourReviewsData && ourReviewsData.length > 0) {
            const approvedReviews = ourReviewsData.filter(data => data?.status === "approved");
            setReview(approvedReviews);
        }
    }, [ourReviewsData]);
    return (
        <section className='mx-2 pb-20'>
            <SectionTitle title="Client" redTitle="Reviews" para="Hear what our clients have to say" />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    review?.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='duration-300 h-72 bg-lightDark rounded-lg p-3 md:py-5 md:px-8 border border-slate-500 shadow-lg max-w-4xl mx-auto'>

                                <div className='flex items-center gap-5 my-5'>
                                    <img className='w-16 md:w-20 h-16 md:h-20 object-cover rounded-full mb-3' src={review.img} alt="" />
                                    <div>
                                        <p className='text-xl md:text-2xl font-semibold md:mb-2'>{review.name}</p>
                                        <p className='text-slate-500'>{review.job}</p>
                                    </div>
                                </div>

                                <p className='mb-5 italic text-base lg:text-xl'>"{review.review}"</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Reviews;