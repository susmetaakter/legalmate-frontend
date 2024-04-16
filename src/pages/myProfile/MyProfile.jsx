import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import AttorneyProfile from './AttorneyProfile';
import useAuth from '../../hooks/useAuth';
import ClientProfile from './ClientProfile';
import PageLoader from '../../components/PageLoader';

const MyProfile = () => {
    const {currentUser} = useAuth()
    return (
        <div>
            <Helmet>
                <title>My Profile - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="My Profile" />

           {
                currentUser.role=== "attorney"?
                <AttorneyProfile></AttorneyProfile>:
                currentUser.role=== "client"?
                <ClientProfile></ClientProfile>:
                <PageLoader />
           }
        </div>
    );
};

export default MyProfile;