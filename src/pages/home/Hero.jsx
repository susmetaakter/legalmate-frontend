import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='bg-white'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='relative'>
                <img className='w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center' src="https://img.freepik.com/premium-photo/consultation-businessman-male-lawyer-judge-consult-having-team-meeting_28283-285.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className='absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl duration-300 text-secondary font-semibold mb-3 lg:mb-5'>Welcome to Legalmate</h2>
                    <p className='text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300'> Where you gain access to a network of expert lawyers in various legal domains. Whether you're dealing with a personal injury, a family matter, or a business dispute, our platform connects you with top-tier legal professionals who can guide you through the maze of legal intricacies. LegalMate is your trusted partner in finding the right lawyer for your unique needs.</p>
                    <Link to="/contact"><button className='text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl'>Contact us</button></Link>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='relative'>
            <img className='w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center' src="https://img.freepik.com/premium-photo/lady-justice-law-library-concept_218381-945.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className='absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl duration-300 text-secondary font-semibold mb-3 lg:mb-5'>Welcome to Legalmate</h2>
                    <p className='text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300'> Where we believe that personalized legal support is essential for your peace of mind. Legal matters are not one-size-fits-all. That's why our platform is dedicated to matching you with an lawyer who understands your specific circumstances. We know that your legal needs are as unique as you are, and our mission is to ensure that you receive the tailored assistance you deserve.</p>
                    <Link to="/contact"><button className='text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl'>Contact us</button></Link>
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='relative'>
            <img className='w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center' src="https://img.freepik.com/premium-photo/scales-justice-gavel-wooden-table-agreement-courtroom_28283-789.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className='absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl duration-300 text-secondary font-semibold mb-3 lg:mb-5'>Welcome to Legalmate</h2>
                    <p className='text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300'> Your convenient and confidential gateway to legal solutions. We understand the importance of privacy when it comes to legal matters. With just a few clicks, you can find the right lawyer, schedule appointments, share documents, and communicate securely. LegalMate is your trusted partner, ensuring that your legal journey is as stress-free as possible.</p>
                    <Link to="/contact"><button className='text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl'>Contact us</button></Link>
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center' src="https://img.freepik.com/premium-photo/lawyer-judge-counselor-working-with-agreement-contract-courtroom_28283-730.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" alt="" />

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className='absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-secondary font-semibold mb-3 lg:mb-5'>Welcome to Legalmate</h2>
                    <p className='text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300'> Transparency and trustworthiness are at the core of our service. Legal processes can be daunting, but with LegalMate, you'll find clarity every step of the way. Our platform is designed to empower you with the information you need to make informed decisions. We believe in building trust and confidence throughout your legal journey.</p>
                    <Link to="/contact"><button className='text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl'>Contact us</button></Link>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Hero;