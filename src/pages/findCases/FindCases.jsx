import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import CaseFilter from './CaseFilter';

const FindCases = () => {
    return (
        <div>
            <Helmet>
                <title>Find Cases - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Find Cases" />

            <CaseFilter/>
        </div>
    );
};

export default FindCases;