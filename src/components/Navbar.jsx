// Original Code //
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import Lottie from "lottie-react";

// import "../../Styles/HomePage.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/chatbot");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center text-cyan-400"
          >
            <FaRobot className="mr-2" size={25} /> Voice Assistant
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 hover:text-xl transition-all duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-cyan-400 hover:text-xl transition-all duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-cyan-400 hover:text-xl transition-all duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-400 hover:text-xl transition-all duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute left-0 top-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center">
            <ul className="space-y-6 text-white text-xl">
              <li>
                <Link
                  to="/"
                  className="block hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="block hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
