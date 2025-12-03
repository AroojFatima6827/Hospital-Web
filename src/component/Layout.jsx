import React from "react";
import CallIcon from "../assets/CallIcon.svg";
import LocationIcon from "../assets/LocationIcon.svg";
import ClockIcon from "../assets/ClockIcon.svg";
import HumbargerIcon from "../assets/HumbargerIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import CrossIcon from "../assets/Vector.png";
import footerlinkdin from "../assets/footerlinkdinicon.png";
import footerInsta from "../assets/footerInstaicon.png";
import footerfacebook from "../assets/footerfbicon.png";
import sendIcon from "../assets/sendicon.svg";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
function Layout() {
  const [toggle, isToggle] = useState(false);
  const navtoggle = () => {
    isToggle(!toggle);
  };
  return (
    <>
      {/*Header*/}
      <header>
        {/*Nav-Bar*/}
        <nav>
          <div className="nav-container pt-6 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-evenly  px-4 md:px-8 lg:px-12 py-4 gap-4">
            {/* Logo */}
            <h1 className="text-[rgb(14,78,63)] hidden lg:block md:block text-4xl md:text-5xl  font-bold">
              Medd<span className="text-[rgb(2,124,133)]">ical</span>
            </h1>

            {/* Info Boxes */}
            <div className="info-boxes flex flex-wrap md:flex-nowrap gap-6 items-center justify-center md:justify-end">
              {/* Emergency */}
              <div className="call-emergency flex items-center">
                <img
                  src={CallIcon}
                  alt="Call-Icon"
                  className=" lg:w-8 lg:h-8"
                />
                <div className="flex flex-col">
                  <p>Emergency</p>
                  <p>(117) 981-862-2005</p>
                </div>
              </div>

              {/* Location */}
              <div className="location flex items-center">
                <img
                  src={LocationIcon}
                  alt="Location-Icon"
                  className="lg:w-8 lg:h-8"
                />
                <div className="flex flex-col">
                  <p>Location</p>
                  <p>0123 Some Place</p>
                </div>
              </div>

              {/* Work Hour */}
              <div className="work-hour flex  items-center">
                <img
                  src={ClockIcon}
                  alt="Clock-Icon"
                  className="lg:w-8 lg:h-8"
                />
                <div className="flex flex-col">
                  <p>Work Hour</p>
                  <p>09:00 - 20:00 Everyday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Med-Logo bg-[rgb(14,78,63)] lg:bg-transparent md:bg-transparent p-3">
            <div className="nav-header flex justify-around ">
              <div className="">
                <p className="text-[rgb(45,197,161)] text-3xl  font-bold lg:hidden md:hidden ">
                  Medd<span className="text-white">ical</span>
                </p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <img src={SearchIcon} alt="" className="lg:hidden md:hidden" />

                <img
                  src={HumbargerIcon}
                  alt=""
                  className={`${
                    toggle ? "hidden" : "block"
                  } lg:hidden md:hidden cursor-pointer`}
                  onClick={navtoggle}
                />

                <img
                  src={CrossIcon}
                  alt=""
                  className={`${
                    toggle ? "block" : "hidden"
                  } lg:hidden md:hidden cursor-pointer`}
                  onClick={navtoggle}
                />
              </div>
            </div>
          </div>
          <div className="Nav-list  flex  flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around  lg:bg-[rgb(14,78,63)] md:bg-[rgb(14,78,63)] bg-transparent lg:p-4 md:p-4 text-white ">
            <div
              className={`homeone flex flex-col justify-center items-center  bg-[rgb(50,214,175)]  lg:bg-transparent md:bg-transparent ${
                toggle ? "flex" : "hidden"
              } md:flex md:flex-row md:h-auto  gap-4 h-70 absolute left-0 w-full lg:static md:static z-50 lg:w-auto md:w-auto text-[17px]`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[rgb(50,214,175)] underline-offset-4 font-bold"
                    : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[rgb(50,214,175)] underline-offset-4 font-bold"
                    : ""
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[rgb(50,214,175)] underline-offset-4 font-bold"
                    : ""
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[rgb(50,214,175)] underline-offset-4 font-bold"
                    : ""
                }
              >
                Doctors
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[rgb(50,214,175)] underline-offset-4 font-bold"
                    : ""
                }
              >
                Services
              </NavLink>

              <Link
                to="/appointment"
                className=" md:hidden lg:hidden bg-[rgb(14,78,63)] w-50 h-12 pt-2 rounded-[35px] text-center"
              >
                Appointment
              </Link>
            </div>
            <div className="imgs flex gap-8">
              <img
                src={SearchIcon}
                alt=""
                className="hidden md:block lg:block"
              />
              <Link
                to="/appointment"
                className="hidden md:block lg:block    bg-[rgb(50,214,175)] w-50 rounded-[35px]  text-center"
              >
                Appointment
              </Link>
            </div>
          </div>

          <div className="page-content z-10">
            <main>
              <Outlet />
            </main>
          </div>
        </nav>
      </header>
      {/*Footer*/}
      <footer className="bg-[rgb(14,78,63)] text-white px-4 sm:px-6 md:px-10 py-10 md:py-14 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center justify-center text-center sm:text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[rgb(50,214,175)]">
              MEDDICAL
            </h2>
            <p className="mt-2 sm:mt-3 leading-6 text-sm sm:text-base">
              Leading the Way in Medical <br />
              Excellence, Trusted Care.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg">
              Important Links
            </h3>
            <Link
              to="/appointment"
              className="block text-sm sm:text-base cursor-pointer hover:text-[rgb(50,214,175)] transition"
            >
              Appointment
            </Link>
            <Link
              to="/doctors"
              className="block text-sm sm:text-base cursor-pointer hover:text-[rgb(50,214,175)] transition"
            >
              Doctors
            </Link>
            <Link
              to="/services"
              className="block text-sm sm:text-base cursor-pointer hover:text-[rgb(50,214,175)] transition"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-sm sm:text-base cursor-pointer hover:text-[rgb(50,214,175)] transition"
            >
              About Us
            </Link>
          </div>

          <div>
            <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg">
              Contact Us
            </h3>
            <p className="text-sm sm:text-base">Call: (0037) 222-822-665</p>
            <p className="text-sm sm:text-base">Email: fliseoo@gmail.com</p>
            <p className="text-sm sm:text-base">Address: 0123 Some place</p>
            <p className="text-sm sm:text-base">Some country</p>
          </div>

          <div className="w-full flex justify-center sm:justify-start">
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-[rgb(50,214,175)] text-black placeholder-black px-4 py-2 rounded-md w-full pr-10 outline-none text-sm sm:text-base"
              />
              <a
                href="mailto:aroojahmad2003@gmail.com"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              >
                <img src={sendIcon} alt="Send Email" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-400 my-6 sm:my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
          <p>© 2021 Hospital's name All Rights Reserved by PNTEC–LTD</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <img
              src={footerlinkdin}
              alt="LinkedIn"
              className="w-6 h-6 sm:w-6 sm:h-6 cursor-pointer"
            />
            <img
              src={footerInsta}
              alt="Instagram"
              className="w-6 h-6 sm:w-6 sm:h-6 cursor-pointer"
            />
            <img
              src={footerfacebook}
              alt="Facebook"
              className="w-6 h-6 sm:w-6 sm:h-6 cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
