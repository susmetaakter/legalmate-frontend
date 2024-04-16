import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import CustomModal from './CustomModal';

const UserManual = () => {
    const { user, currentUser, loading } = useAuth();
    const location = useLocation()
    // console.log("location", location, "current user",currentUser, "loading", loading, user);
    //Use manual states and functions
    const [isClientManualOpen, setIsClientManualOpen] = useState(false);
    const [isAttorneyManualOpen, setIsAttorneyManualOpen] = useState(false);
    const handleClientManualModal = (e) => {
        if (e == "cancel") setIsClientManualOpen(true)
    }
    const handleAttorneyManualModal = (e) => {
        if (e == "cancel") setIsClientManualOpen(true)
    }

    useEffect(() => {
        const from = location.state?.from?.pathname;
        if (from == "/register" && currentUser?.role =="client") {
            setIsClientManualOpen(true);
        }
        else if (from == "/register" && currentUser?.role =="attorney") {
            setIsAttorneyManualOpen(true);
        }
    }, [currentUser]);

    return (
        <>
            {
                isClientManualOpen &&
                <CustomModal
                    isModalOpen={isClientManualOpen}
                    setIsModalOpen={setIsClientManualOpen}
                    handleModal={handleClientManualModal}
                    larger={true}
                >
                    {/* Modal Heading */}
                    <div className="overflow-y-hidden">
                        <div className="pt-2 pb-2 flex flex-col gap-1 border-b border-dark/20 text-green -mt-3">
                            <h3 className="text-3xl">👋 Welcome {user?.name}</h3>
                        </div>

                        {/* Modal content */}
                        <p className="my-6">We're thrilled to have you join our platform, connecting you with top-notch lawyers from across the country. Your journey towards legal solutions just got easier. Whether you have questions, need advice, or are seeking representation, our network of experienced lawyers is here to assist you. With our secure and convenient chat platform, you can confidently explore your legal options, knowing that you have expert guidance at your fingertips. Thank you for choosing us to be your trusted legal partner.</p>

                        <h3 className='font-semibold text-xl mb-1'>✅ Complete your profile!</h3>
                        <p className='mb-5'>To improve your visibility throughout our website, we recommend completing your profile. This helps lawyers understand you better</p>

                        <Link to="/myProfile"><button className='text-center px-4 py-2 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white'>Edit Profile</button></Link>
                    </div>
                </CustomModal>
            }

            {
                isAttorneyManualOpen &&
                <CustomModal
                    isModalOpen={isAttorneyManualOpen}
                    setIsModalOpen={setIsAttorneyManualOpen}
                    handleModal={handleAttorneyManualModal}
                    larger={true}
                >
                    {/* Modal Heading */}
                    <div className="overflow-y-hidden">
                        <div className="pt-2 pb-2 flex flex-col gap-1 border-b border-dark/20 text-purple -mt-3">
                            <h3 className="text-3xl">👋 Welcome to HireWave</h3>
                            <p className='text-dark text-xl italic'>{user?.name} </p>
                        </div>

                        {/* Modal content */}
                        <p className="my-6">We're excited to welcome you as a valued member of our platform, where you can connect with clients from all over the country who are seeking your expertise. As an lawyers on our platform, you have the unique opportunity to engage with clients, offering your guidance and support to those in need. You'll have access to legal posts in various practice areas, providing you with a diverse range of opportunities to showcase your skills. Thank you for choosing to be a part of our esteemed network of legal professionals.</p>

                        <h3 className='font-semibold text-xl mb-1'>✅ Complete your profile!</h3>
                        <p className='mb-5'>To improve your visibility and authenticity, you must complete your profile with necessary data. you need to provide all authentic documents for verification. If the documents are found to be illegal or your profile lack necessary information, the admin may not approve your id. It means you will not be visible to clients and cannot message them as well. So we suggest you to complete the profile quickly</p>

                        <Link to="/myProfile"><button className='text-center px-4 py-2 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white'>Edit Profile</button></Link>
                    </div>
                </CustomModal>
            }
        </>
    );
};

export default UserManual;