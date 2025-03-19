import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/images/header/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#F8F8FD]">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo and Menu */}
        <div className="flex items-center gap-10">
          <Link className="flex items-center gap-2 cursor-pointer">
            <div>
              <img
                src={navLogo}
                loading="eager"
                alt="Logo"
                className="object-cover h-8"
              />
            </div>
          </Link>
          {/* Desktop Navigation Links */}
          <ul className="items-center hidden mt-1 ml-96 md:flex">
            <li className="h-full leading-8">
              <NavLink to="#courses" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Courses
              </NavLink>
            </li>
            <li className="h-full leading-8">
              <NavLink to="#teachers" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("teachers")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Teachers
              </NavLink>
            </li>
            <li className="h-full leading-8">
              <NavLink to="#offers" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("offers")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Benefits
              </NavLink>
            </li>
            <li className="h-full leading-8">
              <NavLink to="#contact" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="items-center hidden gap-5 md:flex">
          <button className="flex-shrink-0 text-primaryColor font-semibold px-4 rounded-md hover:bg-primaryColor/10 py-[10px] transition duration-300 text-center">
            Login
          </button>
          <button className="flex-shrink-0 primary-btn">Sign Up</button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 bg-[#5533ff13] text-base rounded-lg shadow-[0px_0px_5px_#5533ff04_inset] active:border-primaryColor/70 border transition duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose size={20} className="opacity-70 hover:opacity-100" />
          ) : (
            <IoMenuSharp size={20} className="opacity-70 hover:opacity-100" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-[#F8F8FD] transition duration-300 shadow-2xl md:hidden">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <NavLink
                to="#courses"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Courses
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="#teachers"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("teachers")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Teachers
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="#offers"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("offers")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Benefits
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="#contact"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </NavLink>
            </li>
            <li className="py-2">
              <button className="w-full px-4 py-2 font-semibold transition duration-300 rounded-md text-primaryColor hover:bg-primaryColor/10">
                Login
              </button>
            </li>
            <li className="py-2">
              <button className="w-full primary-btn">Sign Up</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
