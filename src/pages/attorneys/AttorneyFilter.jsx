import React, { useEffect, useState } from 'react';
import useAttorneys from '../../hooks/useAttorneys';
import { BiCategory, BiSearchAlt, BiCurrentLocation } from 'react-icons/bi';
import { AiOutlineClear } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import usePracticeAreas from '../../hooks/usePracticeAreas';
import { useForm } from 'react-hook-form';
import AttorneyContent from './AttorneyContent';
import PageLoader from '../../components/PageLoader';

const AttorneyFilter = () => {
    const [attorneysData, loading] = useAttorneys();
    const [practiceAreasData] = usePracticeAreas();
    const { register, handleSubmit, reset, getValues } = useForm();
    const approvedAttorneys= attorneysData.filter(data=> data.status === "approved")
    const [filteredData, setFilteredData] = useState(approvedAttorneys);
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [practice_area, setPractice_area] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    

    const onSubmit = data => {
        setName(data.name)
        setLocation(data.location)
        setPractice_area(data.practice_area)
        setCurrentPage(1);
        reset();
    }

    useEffect(() => {
        
        const searchName = name ? name.toLowerCase() : "";
        const searchLocation = location ? location.toLowerCase() : "";
        const searchPracticeArea = practice_area ? practice_area.toLowerCase() : "";

        let filter = approvedAttorneys.filter((data) =>
            (!searchName || data.name.toLowerCase().includes(searchName)) &&
            (!searchLocation || data.location.toLowerCase().includes(searchLocation)) &&
            (!searchPracticeArea || data.practiceArea.toLowerCase().includes(searchPracticeArea))
        );

        setFilteredData(filter);
    }, [name, location, practice_area, loading]);
 
     
    if (loading) return <PageLoader />
    return (
        <div className='container py-20'>

            {/* search bar */}
            <div className="max-w-6xl mx-auto duration-300 mb-10">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white border border-primary shadow-2xl shadow-primary/20 grid grid-cols-1 md:grid-cols-7 items-center p-2 rounded-xl duration-300"
                >
                    {/* name */}
                    <div className="col-span-2 flex items-center border-b md:border-none border-primary">
                        <label htmlFor="search" className="pl-2 text-primary">
                            <BsFillPersonFill size="20px" className="animate-bounce" />
                        </label>
                        <input
                            id="name"
                            className="w-full border text-lg pl-2 py-2 border-none focus:outline-none bg-white text-dark placeholder:text-gray"
                            placeholder="Search by name"
                            {...register("name")}
                        />
                    </div>

                    {/* location */}
                    <div className="col-span-2 border-b md:border-b-0 md:border-s border-primary flex items-center">
                        <label htmlFor="location" className="pl-2 text-primary">
                            <BiCurrentLocation size="20px" className="animate-spin" />
                        </label>
                        <input
                            id="location"
                            className="w-full border text-lg pl-2 py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent"
                            placeholder="Search by location"
                            {...register("location")}
                        />
                    </div>

                    {/* practice area */}
                    <div className="col-span-2 border-b md:border-b-0 md:border-s border-primary md:border-e flex items-center">
                        <label htmlFor="categories" className="pl-2 text-primary">
                            <BiCategory size="20px" className="animate-pulse" />
                        </label>
                        <select name="practice area" id="practice_area"
                            {...register("practice_area")}
                            defaultValue=""
                            className="w-full border text-lg pl-2 py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent"
                        >
                            <option disabled value="">Select practice area</option>
                            {
                                Array.from(new Set(practiceAreasData.map(area => area.name))).map((name, index) => (
                                    <option key={index} value={name}>
                                        {name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    {/* search button */}
                    <div className="w-full md:pl-2 border-primary mt-5 md:mt-0">
                        <button
                            type="submit"
                            className="bg-dark w-full text-white px-6 py-2 text-lg rounded-full flex items-center justify-center gap-2 hover:bg-primary hover:shadow-xl hover:shadow-primary/20 duration-300"
                        >
                            {
                                name || location || practice_area ? <><AiOutlineClear className='text-[#ea2b33]' /> Clear</> : <><BiSearchAlt /> Search</>
                            }
                        </button>
                    </div>
                </form>
            </div>
            {
                filteredData.length!==0?
                <AttorneyContent allAttorneys={filteredData} currentPage={currentPage} setCurrentPage={setCurrentPage}></AttorneyContent>:
                <p className="py-4 px-6 max-w-5xl mx-auto sm:text-lg text-center bg-lightDark rounded-lg">☹ No lawyer Found!</p>
            }
        </div>
    );
};

export default AttorneyFilter;