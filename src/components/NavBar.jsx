import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logoblue from "../assets/logoblue.png"
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const isLoginPage = location.pathname === "/login";

    const menuSections = [
        {
            title: "Cultural",
            items: [  
                { name: "Festivals", link: "/festivals"  },
                { name: "Exhibitions", link: "/exhibitions" },
                { name: "Heritage Tours", link: "/heritages" }

            ],
            link: "/cultural"
        },
        {
            title: "Sports",
            items: [{name:"Tournaments", link:"/tournaments"},
                   {name:"Marathons",link:"/marathons" },
                   { name:"Adventures",link:"/adventures"}],
            link: "/sports"
        },
        {
            title: "Reservations",
            items: [{name:"Hotels", link:"/hotels"},
                 {name:"Airbnb",link:"/airbnb"},
                 {name:"carBooking", link:"/carBooking"}
                ],
            link: "/reservations"
        },
        
        {
            title: "Review",
            items: [
                { name: "Feedback", link: "/feedback" }
            ],
            link: "/review"
        }
        
    ];

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        <div className={`flex w-full justify-between items-center h-20  px-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
            isLoginPage ? "bg-gray-200 text-slate-800" : 
            isScrolled ? "bg-white/90 backdrop-blur-sm text-slate-800 shadow-md" : "bg-transparent text-white"
        }`}>
            
            <div>
                <nav  className="absolute top-4 left-4 flex items-center space-x-3 mt-[-20px]">
            <img src={logoblue} alt="web logo"className="h-[90px] w-auto ">
              
            </img> <h1 className="text-2xl font-bold tracking-wide cursor-pointer mt-[-5px]">
                    Travel<span className="text-blue-950 " >Tour</span>
                </h1>
        </nav>
               
            </div>
           
            <div className="hidden md:flex h-full">
                <ul className="flex space-x-8 text-xl font-medium items-center">
                    <li>
                        <Link to="/" className="hover:text-blue-500 transition duration-300">
                            Home
                        </Link>
                    </li>
                    {menuSections.map((section) => (
                        <li key={section.title} className="group relative py-2">
                            <span className="hover:text-blue-500 transition duration-300 flex items-center">
                                {section.title}
                                <span className="ml-1 transform transition-transform group-hover:rotate-180">▾</span>
                            </span>
                            <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white text-gray-700 shadow-lg rounded-lg py-2">
                                {section.items.map((item, index) => {
                                    const itemName = typeof item === "string" ? item : item.name;
                                    const itemLink = typeof item === "string" 
                                        ? `${section.link}/${item.toLowerCase().replace(/\s+/g, '-')}` 
                                        : item.link;
                                    return (
                                        <Link
                                            key={`${section.title}-${index}`}
                                            to={itemLink}
                                            className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                                        >
                                            {itemName}
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                       
                       
                        
                    ))}
                   
                </ul>
            </div>

            <div className="hidden md:flex items-center  space-x-4">
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
            className="absolute right-0 mt-3 w-60 bg-white shadow-lg rounded-2xl py-3 border border-gray-200 z-20"
        >
            <div className="flex items-center px-4 pb-3 border-b">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-3">
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                </div>
            </div>
            <button 
                className="flex items-center w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100 transition duration-300 rounded-b-2xl"
                onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    window.location.reload();
                }}
            >
                <svg className="w-5 h-5 mr-2 opacity-80 hover:opacity-100 transition duration-300" 
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1">
                    </path>
                </svg>
                Logout
            </button>
        </motion.div>
    )}
</AnimatePresence>

                    </div>
                ) : (
                    <Link to='/login'>
                        <BsPerson className="cursor-pointer hover:text-blue-500 transition duration-300" size={40} />
                    </Link>
                )}
            </div>

            <div onClick={() => setNav(!nav)} className="md:hidden z-50">
                {nav ? (
                    <AiOutlineClose size={22} />
                ) : (
                    <HiOutlineMenuAlt4 size={22} />
                )}
            </div>

            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed top-0 left-0 w-full h-screen bg-gray-800 z-40 overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 py-8">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                                    Home
                                </h2>
                                <ul className="space-y-3 pl-4">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-lg hover:text-blue-400 block py-2"
                                            onClick={() => setNav(false)}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                   
                                </ul>
                            </div>
                            
                            {menuSections.map((section) => (
                                <div key={section.title} className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-3 pl-4">
                                        {section.items.map((item, index) => (
                                            <li key={`${section.title}-${index}`}>
                                                <Link
                                                    to={`${section.link}/${typeof item === "string" ? item.toLowerCase().replace(' ', '-') : item.name.toLowerCase().replace(' ', '-')}`}
                                                    className="text-lg hover:text-blue-400 block py-2"
                                                    onClick={() => setNav(false)}
                                                >
                                                    {typeof item === "string" ? item : item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
