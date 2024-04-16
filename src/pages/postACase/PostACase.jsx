import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useForm } from 'react-hook-form';
import usePracticeAreas from '../../hooks/usePracticeAreas';
import useAuth from '../../hooks/useAuth';
import useCurrentClient from '../../hooks/useCurrentClient';
import useAxiosSecure from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const PostACase = () => {
    const { currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [practiceAreasData] = usePracticeAreas();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [currentClientData, clientLoading, refetch] = useCurrentClient();

    const onCaseSubmit = data => {
        const addedCase = {
            email: currentUser?.email,
            case_post: data?.case_post,
            practice_area: data?.practice_area,
            writer: currentUser?.name,
            writer_id: currentClientData?._id,
        }

        axiosSecure.post('/case', addedCase)
        .then(res => {
            if (res.status === 200) {
                Swal.fire(
                    'Your Case is Posted!',
                    'It will be visible after admin approval!',
                    'success'
                  )
                refetch();
                reset()
            }
        })
        .catch(error => {
            console.log(error);
        })

        //TODO: save the basic info data and refetch() after sending to database
        reset()
    }

    return (
        <div>
            <Helmet>
                <title>Post a Case - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Post a Case" />

            {/* Main content */}
            <div className='container py-20 text-black'>
                <form className='max-w-4xl mx-auto ' onSubmit={handleSubmit(onCaseSubmit)}>
                    <div className='w-full'>
                        <textarea
                            {...register("case_post", { required: true })}
                            placeholder='Write the case for which you require a lawyer. Explain every details accordingly. N.B. You must choose appropriate law practice area for finding the appropriate lawyer'
                            className='w-full h-60 border border-dark/40 py-2 md:py-3 px-3 md:px-5 rounded-md focus:outline-none focus:border-primary'
                        />
                        {errors.case_post && <span className='text-red-500 text-sm md:text-base'>Writing an appropriate case post is required</span>}
                    </div>

                    <div className='sm:flex justify-between gap-5 mt-5'>
                        <div>
                            <select
                                {...register("practice_area", { required: true })}
                                defaultValue=""
                                className="w-64 border border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1"
                            >
                                <option disabled value="">Select post related law practice</option>
                                {
                                    Array.from(new Set(practiceAreasData.map(area => area.name))).map((name, index) => (
                                        <option key={index} value={name}>
                                            {name} Law
                                        </option>
                                    ))
                                }
                            </select>
                            {errors.practice_area && <p className='text-red-500 text-sm md:text-base'>You must select a law practice area</p>}
                        </div>

                        <input
                            type='submit'
                            value="Post The Case"
                            className="mt-5 sm:mt-0 w-fit h-fit text-center px-5 py-2 bg-green-500 hover:bg-green-500/60 duration-300 rounded text-white cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostACase;