import React from 'react';

const AttorneyAwards = ({awards}) => {
    return (
        <div className='p-5 rounded-lg bg-lightDark'>
             <div className='p-5 rounded-lg bg-lightDark'>
                <div className='flex flex-wrap gap-10'>
                    {
                        awards.map(award=> 
                        <div className='border border-white/40 rounded px-5 py-3'>
                            <p className='text-primary text-xl'>{award?.name}</p>
                            <p className=''>{award?.from}</p>
                            <p className='text-sm italic'>{award?.year}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AttorneyAwards;