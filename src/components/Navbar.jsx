import React, { useState } from "react";
import { navLink } from "../constants";
import { FiX, FiMenu } from "react-icons/fi";
import { logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center py-5">
      <span className="logo-wrapper">
        <img src={logo} alt="logo" className="ml-3 md:ml-0" />
      </span>
      <ul className="list-none hidden md:flex flex-row justify-center gap-8 flex-1">
        {navLink.map((link) => {
          return (
            <li
              key={link.id}
              className="font-medium text-sm text-gray-500 cursor-pointer hover:text-[#3563E9]"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="btn-wrapper hidden md:flex gap-5">
        <button className="text-[#3563E9] leading-4 rounded-[5px] px-[22px] py-2 hover:bg-[#3563E9]/10 active:bg-[#3563E9]/20 border-[#3563E9] hover:border-[#3563E9]/80 active:border-[#3563E9]/70 border-[1px]">
          SignUp
        </button>
        <button className="text-white leading-4 rounded-[5px] px-[22px] py-2 bg-[#3563E9] hover:bg-[#3563E9]/90 active:bg-[#3563E9]/80">
          Login
        </button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center text">
        <span
          className="hamburger-menu"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? <FiX className="mx-6" /> : <FiMenu className="mx-6" />}
        </span>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col gap-10">
            {navLink.map((link) => {
              return (
                <li
                  key={link.id}
                  className="text-sm font-medium text-gray-500 cursor-pointer"
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
