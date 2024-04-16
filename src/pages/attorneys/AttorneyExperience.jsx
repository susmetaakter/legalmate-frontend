import React from 'react';

const AttorneyExperience = ({experience}) => {
    return (
        <div className='p-5 rounded-lg bg-lightDark'>
        <div className='flex flex-wrap gap-10'>
          {
              experience.map(exp=> 
              <div className='border border-white/40 rounded px-5 py-3'>
                  <p className='text-primary text-xl'>{exp?.company}</p>
                  <p className=''>{exp?.position}</p>
                  <p className='text-sm italic'>{exp?.start_year} - {exp?.end_year}</p>
              </div>)
          }
        </div>
      </div>
    );
};

export default AttorneyExperience;