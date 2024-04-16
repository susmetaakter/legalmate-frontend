import React, { useContext, useEffect, useState } from 'react';
import Header from '../shared/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';
import PageLoader from "../components/PageLoader"

const Main = () => {
    const { currentUser, loading } = useContext(AuthContext);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <div> 
            <Header />
            <div className='bg-[#14161B] text-white pt-10'>
                {currentUser && loading ? <PageLoader /> : <Outlet></Outlet>}
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;