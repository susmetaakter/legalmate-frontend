import React from 'react';

const AttorneyEducation = ({ education }) => {
    return (
        <div className='p-5 rounded-lg bg-lightDark'>
          <div className='flex flex-wrap gap-10'>
            {
                education.map(edu=> 
                <div className='border border-white/40 rounded px-5 py-3'>
                    <p className='text-primary text-xl'>{edu?.institution}</p>
                    <p className=''>{edu?.subject}</p>
                    <p className='text-sm italic'>{edu?.start_year} - {edu?.end_year}</p>
                </div>)
            }
          </div>
        </div>
    );
};

export default AttorneyEducation;