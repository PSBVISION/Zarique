import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl prata-regular mb-5"
          >
            <img src={assets.logo} alt="logo" className="w-8 pb-1" />
            ZariQue
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ut
            possimus? Cumque, error iste. Voluptatum asperiores incidunt velit
            aspernatur, fuga atque modi perferendis vero accusantium tempora
            possimus quis autem quibusdam.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>+91 0000000000</li>
            <li>contact@ZariQue.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-none h-[1px] bg-gray-400"/>
        <p className="text-center py-5 text-sm">Copyright © 2025 ZariQue - All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
