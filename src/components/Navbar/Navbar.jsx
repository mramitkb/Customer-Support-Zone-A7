import React from "react";
import { FaPlus } from "react-icons/fa6";
import csLogo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="shadow-xl">
      <div className="navbar flex items-center justify-between flex-col md:flex-row w-11/12 mx-auto">
        <div className="navbar-start flex-1 w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="faq">FAQ</a>
              </li>
              <li>
                <a href="changelog">Changelog</a>
              </li>
              <li>
                <a href="blog">Blog</a>
              </li>
              <li>
                <a href="download">Download</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="font-bold text-2xl text-center md:text-start w-full flex items-center gap-2">
            <img className="w-8" src={csLogo} alt="" />
            <p>CS — Ticket System</p>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex flex-1">
          <ul className="flex items-center gap-3 font-medium space-x-0 mr-5">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="faq">FAQ</a>
            </li>
            <li>
              <a href="changelog">Changelog</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="download">Download</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn bg-[#422AD5] text-white border-none mt-5 md:mt-0">
          <FaPlus />
          New Ticket
        </a>
      </div>
    </div>
  );
};

export default Navbar;
