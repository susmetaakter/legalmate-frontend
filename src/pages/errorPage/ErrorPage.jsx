import React from 'react';
import errorPage from "../../../public/assets/ErrorPage.png"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-[600px]' src={errorPage} alt="" />
            <Link to="/" className='px-5 py-3 bg-secondary hover:bg-lightDark duration-300 rounded-lg text-white'><button>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;