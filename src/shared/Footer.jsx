import React from 'react';
import logo from "/Legalmate Icon.ico"
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className=" bg-dark text-white">
            <div className='container py-10 md:flex justify-between gap-5 z-50'>
                <div className='mb-10 md:mb-0'>
                  <img src={logo} alt="" />
                  <p className='text-primary text-2xl -mt-3'>Legalmate</p>
                  <p>One stop 360° solution</p>
                  <div className="flex gap-3 items-center mt-5">
                    <a href="https:/www.facebook.com/" target="_blank" className="flex justify-center items-center rounded-full border border-primary w-8 h-8 text-primary hover:bg-primary hover:text-dark duration-300 cursor-pointer">
                      <FaFacebookF />
                    </a>
                    <a href="https:/www.linkedin.com/" target="_blank" className="flex justify-center items-center rounded-full border border-primary w-8 h-8 text-primary hover:bg-primary hover:text-dark duration-300 cursor-pointer">
                      <FaLinkedin />
                    </a>
                    <a href="https:/www.twitter.com/" target="_blank" className="flex justify-center items-center rounded-full border border-primary w-8 h-8 text-primary hover:bg-primary hover:text-dark duration-300 cursor-pointer">
                      <FaTwitter />
                    </a>
                  </div>
                </div> 

                <div className='flex flex-col mb-10 md:mb-0 w-fit'>
                  <header className='text-xl text-primary mb-1'>Quick Links</header> 
                  <p className='border rounded border-primary mb-2 w-16'></p>
                  <Link to="/practiceAreas" className="link link-hover">Practice areas</Link> 
                  <Link to="/attorneys" className="link link-hover">Our lawyers</Link> 
                  <Link to="/aboutUs" className="link link-hover">About us</Link> 
                  <Link to="/contact" className="link link-hover">Contact</Link>
                </div> 

                <div className='flex flex-col mb-10 md:mb-0  w-fit'>
                <header className='text-xl text-primary mb-1'>Legal Concerns</header> 
                  <span className='border rounded border-primary mb-2 w-20'></span>
                  <Link to="/termsAndConditions" className="link link-hover">Terms and Conditions</Link> 
                  <Link to="/privacyPolicy" className="link link-hover">Privacy policy</Link> 
                  <Link to="/cookiePolicy" className="link link-hover">Cookie policy</Link>
                </div> 

                <div className='mb-10 md:mb-0  w-fit'>
                <header className='text-xl text-primary mb-1'>Contact Us</header> 
                  <p className='border rounded border-primary mb-2 w-16'></p>
                  <p>43/7 Northern Tower, Banani</p>
                  <p>Dhaka-1263, Bangladesh</p>
                  <p>legalmate2023@gmail.com</p>
                  <p>+9988476</p>
                </div>
            </div> 
        </footer>
    );
};

export default Footer;