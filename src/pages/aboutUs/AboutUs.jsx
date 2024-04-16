import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useCurrentClient from '../../hooks/useCurrentClient';
import useAxiosSecure from '../../hooks/useAxios';
import useOurReviews from '../../hooks/useOurReviews';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const AboutUs = () => {
    const [faqData, setFaqData] = useState([]);
    const { currentUser, user } = useAuth();
    console.log(user)
    const [ourReviewsData] = useOurReviews();
    const [axiosSecure] = useAxiosSecure();
    const [currentClientData, clientLoading, refetch] = useCurrentClient();
    console.log(ourReviewsData)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();


    useEffect(() => {
        fetch('/faqs.json')
            .then(res => res.json())
            .then(data => {
                setFaqData(data);
            })



    }, [])


    const onSubmit = data => {
        const reviewData = {
            name: currentUser?.name,
            img: currentUser?.image,
            job: currentUser?.role === "client" ? currentClientData?.occupation : "attorney",
            review: data.review
        }
        // const newReview = [...ourReviewsData, reviewData]
        console.log(reviewData);
        if(currentUser?.status!== "approved"){
            toast.error("You cannot post reviews yet", {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            })
            reset()
            return;
        }
        axiosSecure.post('/clientReview', reviewData)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Review Posted successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    reset()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
                <title>About Us - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="About Us" />

            <div className='container lg:flex justify-center gap-10 py-20'>
                <img className='mx-auto h-fit' src="https://img.freepik.com/free-photo/businessman-pointing-screen-showing-project-details-colleague_74855-7976.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />

                <div>

                    {/* About us */}
                    <h2 className='text-4xl text-primary font-semibold mb-3 mt-10 lg:mt-0 mx-auto'>Welcome to Legalmate</h2>
                    <p className='lg:text-xl'>we understand the critical importance of finding the right legal representation tailored to your unique requirements. Our platform serves as a trusted intermediary, connecting individuals and businesses with a network of highly skilled and dedicated lawyers. With a commitment to facilitating transparent and efficient communication, LegalMate empowers clients to make informed decisions about their legal matters. Whether you seek guidance in family law, business litigation, or any other legal domain, our platform simplifies the process of finding the perfect legal match. Trust LegalMate to be your ally in navigating the complexities of the legal landscape, ensuring that your journey to justice is both accessible and reliable.</p>

                    {/* FAQs */}
                    <h2 className='text-4xl text-primary font-semibold mb-5 mt-10 mx-auto'>Frequently Asked Questions</h2>
                    <div className="join join-vertical w-full text-white ">
                        {
                            faqData.map(faq =>
                                <div key={faq?._id} className="collapse collapse-arrow join-item border border-primary/60 rounded-lg mb-3">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-lg font-medium">
                                        {faq?.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{faq?.solution}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    {/* Write a review */}
                    <h2 className='text-4xl text-primary font-semibold mb-5 mt-10 mx-auto'>Let us know what you think about us</h2>
                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <div className=' mb-1 sm:mb-3'>
                            <textarea
                                {...register("review", { required: true })}

                                placeholder="share your experience with us..."
                                className='w-full text-black bg-white h-20 border border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary'
                            />
                            {errors.review && <span className='text-sm text-red-500 ml-1'>Review is required</span>}
                        </div>
                        {
                            user ? <input
                                type='submit'
                                value="Post Review"
                                className="w-fit h-fit text-center px-5 py-2 bg-secondary hover:bg-secondary/60 duration-300 rounded text-white cursor-pointer"
                            /> :
                                <Link to="/login"  className="w-fit h-fit text-center px-5 py-2 bg-secondary hover:bg-secondary/60 duration-300 rounded text-white cursor-pointer">Post Review</Link>
                        }

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;