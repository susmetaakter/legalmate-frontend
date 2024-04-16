import React from 'react';

const Pagination = ({ attorneysPerPage, totalAttorneys, paginate, currentPage }) => {
    const pageNumbers= [];

    for(let i=1; i<= Math.ceil(totalAttorneys / attorneysPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='flex justify-center items-center gap-3 mt-5'>
                {pageNumbers.map(number=> (
                    <li onClick={() => paginate(number)} key={number} className={`border border-primary rounded-full px-3 py-1 cursor-pointer ${currentPage === number ? 'bg-primary/80 text-white' : 'text-primary'}`}>
                        <a>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;