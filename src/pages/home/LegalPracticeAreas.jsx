import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import usePracticeAreas from "../../hooks/usePracticeAreas";
import useAuth from "../../hooks/useAuth";

const LegalPracticeAreas = () => {
  const {currentUser}= useAuth()
  const [practiceAreasData] = usePracticeAreas();

  return (
    <section className="container">
      <SectionTitle
        title="Our"
        redTitle="Practice Areas"
        para="Find lawyers from your designated legal practice area"
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
      >
        <div className="">
        {
          practiceAreasData?.slice(0,6).map((practiceArea) => (
            <SwiperSlide key={practiceArea?._id} className="rounded-lg border border-primary p-5 duration-300">
              <img
                className="w-16 md:w-20 h-16 md:h-20 object-cover bg-white text-secondary p-2 rounded-full mb-3"
                src={practiceArea?.img}
                alt=""
              />

              {/* TODO: Make the name Link for the practice item */}
              <Link to={`/practiceAreasDetails/${practiceArea?._id}`} className="text-xl md:text-2xl font-semibold mt-5 mb-2 cursor-pointer text-primary hover:underline duration-300">
                {practiceArea?.name}
              </Link>
              <p>Expert Lawyers: {practiceArea?.attorneys}</p>
              <ul className="pl-5 mt-3 md:mt-5">
                {practiceArea?.contents.map((content, index) => (
                  <div key={index}>
                    <li className="list-item list-disc">{content}</li>
                  </div>
                ))}
              </ul>
            </SwiperSlide>
          ))
          }
        </div>
      </Swiper>

      {
        currentUser?.role!== "attorney" &&
        <Link className="flex justify-center w-fit mx-auto" to="/practiceAreas">
          <button className="text-center px-3 md:px-5 py-1 md:py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white mt-5">
            Show more
          </button>
        </Link>
      }
    </section>
  );
};

export default LegalPracticeAreas;