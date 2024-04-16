import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import AttorneyFilter from './AttorneyFilter';

const Attorneys = () => {
 
    return (
        <div>
             <Helmet>
                <title>Our Lawyers - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Our Lawyers" />

            <AttorneyFilter></AttorneyFilter>
        </div>
    );
};

export default Attorneys;