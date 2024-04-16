import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive, BiCurrentLocation } from "react-icons/bi";

const ContactInfo = () => {
    return (
        <section className="container mt-20">
            <div className="flex justify-center items-center flex-wrap gap-5 md:gap-8 lg:gap-10">

            {/* Address */}
            <div className="w-60 h-72 rounded-lg p-5 border border-lightDark hover:border-white duration-300 bg-lightDark">
                <div className="p-5 bg-white/60 rounded-lg w-fit mx-auto mt-5">
                <BiCurrentLocation className="text-4xl text-dark" />
                </div>
                <p className="text-center text-2xl font-semibold mt-5 mb-3">
                Address
                </p>
                <p className="text-center">
                43/7 Northern Tower, Banani, Dhaka-1263, Bangladesh
                </p>
            </div>

            {/* Phone number */}
            <div className="w-60 h-72 rounded-lg p-5  border border-lightDark hover:border-white duration-300 bg-lightDark">
                <div className="p-5 bg-white/60 rounded-lg w-fit mx-auto mt-5">
                <BsTelephone className="text-4xl text-dark" />
                </div>
                <p className="text-center text-2xl font-semibold mt-5 mb-3">
                Phone number
                </p>
                <p className="text-center">
                +9988476
                </p>
            </div>

            {/* Email address */}
            <div className="w-60 h-72 rounded-lg p-5  border border-lightDark hover:border-white duration-300 bg-lightDark">
                <div className="p-5 bg-white/60 rounded-lg w-fit mx-auto mt-5">
                <AiOutlineMail className="text-4xl text-dark" />
                </div>
                <p className="text-center text-2xl font-semibold mt-5 mb-3">
                Email address
                </p>
                <p className="text-center">
                legalmate2023@gmail.com
                </p>
            </div>

            {/* Contact Timing */}
            <div className="w-60 h-72 rounded-lg p-5  border border-lightDark hover:border-white duration-300 bg-lightDark">
                <div className="p-5 bg-white/60 rounded-lg w-fit mx-auto mt-5">
                <BiTimeFive className="text-4xl text-dark" />
                </div>
                <p className="text-center text-2xl font-semibold mt-5 mb-3">
                Contact Timing
                </p>
                <p className="text-center">Monday to Friday</p>
                <p className="text-center">10:00AM to 06:00PM</p>
            </div>
            </div>
      </section>
    );
};

export default ContactInfo;