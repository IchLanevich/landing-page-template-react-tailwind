import React from "react";
import { logo } from "../assets";
import { footerLinks } from "../constants";
import { iconsInstagram, iconsDribble, iconsLinkedin } from "../assets";

const Footer = () => {
  return (
    <footer id="footer" className="mx-auto py-20 max-w-7xl">
      <div className="nav max-w-7xl flex justify-between py-6 border-t-[1px] border-t-gray-300">
        <div className="span">
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex gap-6 items-center justify-center">
          {footerLinks.map((link, index) => {
            return (
              <li key={index} className="leading-6 hover:text-[#3563E9]">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <span className="social-wrapper flex gap-8 items-center ">
          <img src={iconsInstagram} alt="instagram" />
          <img src={iconsDribble} alt="dribble" />
          <img src={iconsLinkedin} alt="linkedin" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
