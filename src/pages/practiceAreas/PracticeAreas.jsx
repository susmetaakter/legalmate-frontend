import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import usePracticeAreas from '../../hooks/usePracticeAreas';
import PageLoader from '../../components/PageLoader';
import PracticeAreasDiv from './PracticeAreasDiv';

const PracticeAreas = () => {
    const [practiceAreasData, loading, refetch]= usePracticeAreas()
    if(loading) return <PageLoader />
    return (
        <div>
             <Helmet>
                <title>Practice Areas - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Practice Areas" />

            <div className='container py-20'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        practiceAreasData.map(practiceArea=> <PracticeAreasDiv key={practiceArea._id} practiceArea={practiceArea}></PracticeAreasDiv>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PracticeAreas;