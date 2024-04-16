import React from 'react';
import { Link } from 'react-router-dom';

const PracticeAreasDiv = ({practiceArea}) => {
    const {_id, name, img, attorneys, contents}= practiceArea
    return (
        <div className="rounded-lg border border-primary p-5 w-80 mx-auto duration-300 h-full">
            <img
                className="w-16 md:w-20 h-16 md:h-20 object-cover bg-white text-secondary p-2 rounded-full mb-3"
                src={img}
                alt=""
              />
             <Link to={`/practiceAreasDetails/${_id}`} className="text-2xl font-semibold mt-5 mb-2 cursor-pointer text-primary hover:underline duration-300 w-fit">
                {name} Law
              </Link>
              <p>Expert Lawyers: {attorneys}</p>
              <ul className="pl-5 mt-5">
                {contents.map((content, index) => (
                  <div key={index}>
                    <li className="list-item list-disc">{content}</li>
                  </div>
                ))}
              </ul>
        </div>
    );
};

export default PracticeAreasDiv;