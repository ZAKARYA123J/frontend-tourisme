import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import logoblue from "../assets/logoblue.png";

const NavBar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isLoginPage = location.pathname === "/login";
  const isHomePage = location.pathname === "/";

  const menuSections = [
    {
      title: t("cultural"),
      items: [
        { name: "Festivals", link: "/festivals" },
        { name: "Exhibitions", link: "/exhibitions" },
        { name: "Heritage Tours", link: "/heritages" },
      ],
      link: "/cultural",
    },
    {
      title: t("sports"),
      items: [
        { name: "Tournaments", link: "/tournaments" },
        { name: "Marathons", link: "/marathons" },
        { name: "Adventures", link: "/adventures" },
      ],
      link: "/sports",
    },
    {
      title: t("reservation"),
      items: [
        { name: "Hotels", link: "/hotels" },
        { name: "Airbnb", link: "/airbnb" },
        { name: "Car Booking", link: "/carBooking" },
      ],
      link: "/reservations",
    },
    {
      title: t("review"),
      items: [{ name: "Feedback", link: "/feedback" }],
      link: "/review",
    },
    {
      title: "About Us",
      items: [{ name: "About", link: "/about" }],
      link: "/about",
    },
    {
      title: "Contact Us",
      items: [{ name: "Contact", link: "/contact" }],
      link: "/contact",
    },
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

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  return (
    <div
      className={`flex items-center justify-between w-full h-24 px-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isLoginPage
          ? "bg-gray-200 text-slate-800"
          : isScrolled
          ? "bg-white/90 backdrop-blur-sm text-slate-800 shadow-md"
          : "bg-white text-slate-800"
      }`}
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-8 flex-shrink-0">
        <div className="flex items-center gap-4">
          <img src={logoblue} alt="web logo" className="h-[90px] w-auto" />
          <h1 className="text-2xl font-bold tracking-wide">
            Travel<span className="text-blue-950">Tour</span>
          </h1>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          {menuSections.map((section) => (
            <li key={section.title} className="group relative py-2">
              <span className="hover:text-blue-500 transition duration-300 flex items-center">
                {section.title}
                <span className="ml-1 transform transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </span>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white text-gray-700 shadow-lg rounded-lg py-2">
                {section.items.map((item, index) => (
                  <Link
                    key={`${section.title}-${index}`}
                    to={item.link}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* User Icon / Login */}
      <div className="hidden md:flex items-center space-x-4 relative">
        {user ? (
          <div>
            <div
              className="flex items-center space-x-3 cursor-pointer bg-white text-gray-700 px-3 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
              onClick={toggleMenu}
            >
              <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                {user.name.charAt(0)}
              </div>
              <span className="text-lg font-medium">{user.name}</span>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg py-2">
                <div className="px-4 py-2 text-sm">{user.email}</div>
                <button
  className="w-full px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 active:scale-95 transition-all duration-300"
  onClick={() => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.reload();
    }
  }}
>
  Logout
</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <BsPerson className="cursor-pointer hover:text-blue-500 transition duration-300" size={26} />
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div onClick={() => setNav(!nav)} className="md:hidden ml-auto">
        {nav ? <AiOutlineClose size={22} /> : <HiOutlineMenuAlt4 size={22} />}
      </div>
    </div>
  );
};

export default NavBar;
