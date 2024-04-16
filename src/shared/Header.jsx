import React, { useContext, useEffect, useState } from 'react';
import logo from "/Legalmate Icon.ico"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import NavItems from '../components/NavItems';
import Profile from '../components/Profile';

const Header = () => {
    const { user, logOut, currentUser } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen]= useState(false)
    const [navState, setNavState] = useState(false);
    const navigate = useNavigate();

    const onNavScroll = () => {
        if (window.scrollY > 300) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };

    // scroll top
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
        navigate("/login")    
    }
    // console.log(isMenuOpen);
    
    return (
        <div className={`fixed w-full flex justify-between gap-5 items-center px-5 py-3 z-50 ${navState ? 'backdrop-blur-md bg-dark/60 shadow-primary/20' : 'bg-dark  backdrop-blur-md'}`}>

            {/* Logo nad name */}
           <div className='flex gap-5'>
                <div className='flex justify-center items-center gap-3'>
                    <Link to="/"><img className='w-20 md:w-fit duration-300' src={logo} alt="" />   </Link>
                    <p className='text-xl md:text-3xl font-semibold text-primary'>Legalmate</p>
                </div>
           </div>

           {/* NavItems in the center */}
            <ul className='hidden lg:flex justify-center gap-5 items-center text-white'>
                <NavItems />
            </ul>

            {/* Login button */}
            {
                user?.email?
                <div className='hidden lg:flex justify-end items-center gap-10'>
                    {currentUser.role!== "admin" && <Profile />}
                    <button className='px-5 py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white' onClick={handleLogOut}>Log out</button>
                </div> :
                <Link to="/login">
                    <button className='hidden lg:block px-5 py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white'>Login</button>
                </Link>

            }

            {/* SideNav */}
           <div className='lg:hidden flex justify-end items-center gap-4 sm:gap-7 md:gap-10 duration-300'>
                {/* Profile Picture */}
                {
                    user?.email && currentUser.role!== "admin" && <Profile />
                }

                {/* Toggle Icon */}
                <label className="swap swap-rotate bg-transparent text-white">
                    <input onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)} type="checkbox" checked={isMenuOpen}  />  

                    {/* hamburger icon */}
                    <svg className="swap-off fill-current w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

                    {/* close icon */}
                    <svg className="swap-on fill-current w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
           </div>

                {
                    isMenuOpen &&
                    // NavItems
                    <ul onClick={()=> setIsMenuOpen(false)} className="absolute lg:hidden top-24 right-2 duration-300 bg-dark z-50 p-2 menu text-white w-56 rounded-box">
                        <NavItems />

                    {/* Login button */}
                    {
                        user?.email?
                        <button className='mt-3 text-center px-5 py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white' onClick={handleLogOut}>Log out</button>:
                        <Link to="/login" className='mt-3 text-center px-5 py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white'>Login</Link>
                    }
                    </ul>
                }
        </div>
    );
};

export default Header;