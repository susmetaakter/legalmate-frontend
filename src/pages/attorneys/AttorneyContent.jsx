import React, { useState } from 'react';
import AttorneyDiv from '../../components/AttorneyDiv';
import Pagination from '../../components/Pagination';

const AttorneyContent = ({ allAttorneys, currentPage, setCurrentPage }) => {
    const attorneysPerPage = 8;

    // Pagination Logic
    const indexOfLastAttorney = currentPage * attorneysPerPage;
    const indexOfFirstAttorney = indexOfLastAttorney - attorneysPerPage;
    const currentAttorneys = allAttorneys.slice(indexOfFirstAttorney, indexOfLastAttorney);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(currentAttorneys);
    return (
        <>
            {
                currentAttorneys?.map(attorney=>  <AttorneyDiv key={attorney._id} attorney={attorney}></AttorneyDiv>)
            }

            {
                allAttorneys.length> attorneysPerPage &&
                <Pagination
                    attorneysPerPage={attorneysPerPage}
                    totalAttorneys={allAttorneys.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            }
        </>
    );
};

export default AttorneyContent;