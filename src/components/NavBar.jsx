import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [logo,setlogo]= useState(false)
    const handleNav = () => {
        setNav(!nav);
        setlogo(!logo);
    };

    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white  ">
            <div >
                <h1 onClick={handleNav} className={logo ? 'hidden':'black' }>TravelTour</h1>
            </div>
            <ul className="hidden md:flex">
                <li><Link to="/"  className="hover:text-blue-500">Home</Link></li>
                <li> <Link to="/destination"  className="hover:text-blue-500" >Destinations</Link></li>
                <li> <Link to="/travel"  className="hover:text-blue-500">Travel</Link></li>
                <li> <Link to="/view"  className="hover:text-blue-500">View</Link></li>
                <li> <Link to="/book"  className="hover:text-blue-500">Book</Link></li>
            </ul>
            <div className="hidden md:flex">
                <BiSearch className="cursor-pointer hover:text-blue-500" size={20} />
                <BsPerson className="cursor-pointer hover:text-blue-500" size={20} />
            </div>
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>TravelTour.</h1>
                    <li className="border-b"> <Link to="/" onClick={handleNav} >home</Link></li>
                    <li className="border-b"> <Link to="/Destinations" onClick={handleNav}>destinations</Link></li>
                    <li className="border-b"> <Link to="/Travel" onClick={handleNav}>travel </Link></li>
                    <li className="border-b"> <Link to="/View" onClick={handleNav}>view</Link></li>
                    <li className="border-b"> <Link to="/Book" onClick={handleNav}>Book</Link></li>
                    <div className="flex flex-col">
                        <button className="my-6">search</button>
                        <button>account</button>
                    </div>
                    <div className="mt-6 space-y-3">
          <button className="w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300">Search</button>
          <button className="w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300">Account</button>
        </div>
                    <div className="flex justify-between my-6">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                        <FaPinterest className="icon" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;