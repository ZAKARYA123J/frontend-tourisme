import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion"; 

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData)); 
        }
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex w-full justify-between items-center h-20 px-6 absolute z-10 bg-transparent text-white">
           
            <div>
                <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
                    Travel<span className="text-blue-950">Tour</span>
                </h1>
            </div>

          
            <ul className="hidden md:flex space-x-6 text-lg font-medium">
                <li><Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link></li>
                <li><Link to="/destination" className="hover:text-blue-500 transition duration-300">Destinations</Link></li>
                <li><Link to="/travel" className="hover:text-blue-500 transition duration-300">Travel</Link></li>
                <li><Link to="/view" className="hover:text-blue-500 transition duration-300">View</Link></li>
                <li><Link to="/book" className="hover:text-blue-500 transition duration-300">Book</Link></li>
            </ul>

          
            <div className="hidden md:flex items-center space-x-4">
                <BiSearch className="cursor-pointer hover:text-blue-500 transition duration-300" size={22} />

                {user ? (
                    <div className="relative">
                       
                        <div 
                            className="flex items-center space-x-3 cursor-pointer bg-white text-gray-700 px-3 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
                            onClick={toggleMenu} 
                        >
                            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                                {user.name.charAt(0)}
                            </div>
                            <span className="text-lg font-medium">{user.name}</span>
                        </div>

                        
                        <AnimatePresence>
                            {menuOpen && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute right-0 mt-3 w-56 bg-white text-gray-700 shadow-lg rounded-lg py-3 z-20 transition-transform transform origin-top"
                                >
                                    <p className="px-4 py-2 font-semibold text-gray-900">{user.name}</p>
                                    <p className="px-4 py-2 text-gray-500 border-b">{user.email}</p>
                                    <button 
                                        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition duration-300"
                                        onClick={() => {
                                            localStorage.removeItem("user");
                                            localStorage.removeItem("token");
                                            window.location.reload();
                                        }}
                                    >
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <Link to='/login'>
                        <BsPerson className="cursor-pointer hover:text-blue-500 transition duration-300" size={26} />
                    </Link>
                )}
            </div>

           
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <AiOutlineClose className="text-white" size={22} /> : <HiOutlineMenuAlt4 size={22} />}
            </div>

           
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        className="absolute top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center space-y-6"
                    >
                        <Link to="/" className="text-2xl">Home</Link>
                        <Link to="/destination" className="text-2xl">Destinations</Link>
                        <Link to="/travel" className="text-2xl">Travel</Link>
                        <Link to="/view" className="text-2xl">View</Link>
                        <Link to="/book" className="text-2xl">Book</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
